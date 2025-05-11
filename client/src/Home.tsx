import { useNavigate } from 'react-router-dom';
import './Home.css';
import BlurredColor from './BlurredColor';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  const startDiagnosis = () => navigate('/diagnose');
  const openChatbot = () => navigate('/chatbot');

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="home-container">
        <BlurredColor />

        <div className="left-content">
          <h1 className="title">MediScan AI</h1>
          <h2 className="subtitle">Your Smart Clinical Companion</h2>
          <p className="d">
            Enter your symptoms or upload a medical report to receive a smart, structured diagnosis. 
            MediScan provides detailed health insights including predicted conditions, recommended tests, treatments, and prescriptions.
          </p>
          <div className="buttons">
            <button onClick={startDiagnosis} className="get-started">Start Diagnosis</button>
            <button onClick={openChatbot} className="get-started">Open Chatbot</button>
          </div>
        </div>

        <div className="right-images">
          <img src="/medical_background.jpg" alt="Healthcare Background" className="img-back" />
          <img src="/doctor_ai.jpg" alt="AI Doctor" className="img-front" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
