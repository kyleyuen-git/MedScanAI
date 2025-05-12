import os
import joblib
import pandas as pd
import logging

def model_fn(model_dir):
    """Load the model and vectorizer from the tar.gz archive."""
    model_path = os.path.join(model_dir, 'model.joblib')
    bundle = joblib.load(model_path)
    model = bundle['model']
    vectorizer = bundle['vectorizer']

    return model, vectorizer

def input_fn(request_body, content_type):
    """Pre-process input data to the format the model expects."""
    if content_type == 'application/json':
        if isinstance(request_body, list):
            # If the input is a list, process each item
            input_data = [item['text'] for item in request_body]
            return pd.DataFrame(input_data, columns=['text'])
        elif isinstance(request_body, dict):
            # If it's a single input (dict format), process it
            return pd.DataFrame([request_body['text']], columns=['text'])
        else:
            raise ValueError(f"Unsupported body format: {type(request_body)}")
    else:
        raise ValueError(f"Unsupported content type: {content_type}")


def predict_fn(input_data, model_and_vectorizer):
    """Make predictions using the model."""
    model, vectorizer = model_and_vectorizer
    X = vectorizer.transform(input_data['text'])
    predictions = model.predict(X)
    return predictions

def output_fn(predictions, accept):
    """Format the output to send back to the client."""
    if accept == 'application/json':
        return {'predictions': predictions.tolist()}
    elif accept == 'text/csv':
        # You could also return predictions as CSV if needed
        return '\n'.join(map(str, predictions))
    else:
        raise ValueError(f"Unsupported accept type: {accept}")
