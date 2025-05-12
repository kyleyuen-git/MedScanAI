# train.py
import pandas as pd
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer

if __name__ == "__main__":
    input_path = os.path.join('/opt/ml/input/data/training', 'cleaned_encounter_data.csv')
    df = pd.read_csv(input_path, low_memory=False)

    df = df.dropna(subset=['REASONDESCRIPTION', "CONDITIONS"])
    df[["REASONDESCRIPTION", "ENCOUNTER_REASON"]] = df[["REASONDESCRIPTION", "ENCOUNTER_REASON"]].fillna("")
    df["symptoms"] = df["REASONDESCRIPTION"] + " " + df["ENCOUNTER_REASON"]

    X = df["symptoms"]
    y = df["CONDITIONS"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    vectorizer = TfidfVectorizer(ngram_range=(1, 2), max_features=1000)
    X_train_tfidf = vectorizer.fit_transform(X_train)

    model = LogisticRegression(max_iter=200)
    model.fit(X_train_tfidf, y_train)

    joblib.dump({'model': model, 'vectorizer': vectorizer}, os.path.join('/opt/ml/model', 'model.joblib'))
