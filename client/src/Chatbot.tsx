import { useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  useEffect(() => {
    // Load the AWS Lex Web UI loader script
    const script = document.createElement('script');
    script.src = 'https://dbemjtx2y7uld.cloudfront.net/lex-web-ui-loader.min.js';
    script.onload = () => {
      const loaderOpts = {
        baseUrl: 'https://dbemjtx2y7uld.cloudfront.net/',
        shouldLoadMinDeps: true
      };
      // @ts-ignore (Lex loader is loaded dynamically)
      const loader = new ChatBotUiLoader.IframeLoader(loaderOpts);

      const chatbotUiConfig = {
        // You can customize sessionAttributes here if needed
      };

      // @ts-ignore
      loader.load(chatbotUiConfig).catch((err: any) => console.error(err));
    };
    script.onerror = (e) => console.error('Lex script load error', e);

    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="chatbot">
      <h1 className="chatbot-title">Chatbot</h1>
      {/* Lex will inject the iframe automatically */}
    </div>
  );
};

export default Chatbot;
