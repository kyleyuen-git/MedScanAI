import './InfoSection.css';
import { motion } from 'framer-motion';

const infoCards = [
  {
    title: 'Symptom Checker',
    desc: 'Input your symptoms and get an AI-generated clinical summary with likely conditions and personalized care recommendations.',
    img: 'https://as2.ftcdn.net/v2/jpg/10/23/87/95/1000_F_1023879568_kUa95LhxpMwUwezUL72tonaymq7VafX0.jpg',
  },
  {
    title: 'Upload Medical Records',
    desc: 'Upload PDFs of lab work or doctor notes to receive an in-depth analysis and structured diagnosis using secure AI processing.',
    img: 'data:image/jpeg;base64,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',
  },
  {
    title: 'AI Clinical Assistant',
    desc: 'Chat with our AI assistant to ask questions about your symptoms, understand conditions, or receive recovery guidance.',
    img: 'https://dims.healthgrades.com/dims3/MMH/266af0a/2147483647/strip/true/crop/5300x3451+0+41/resize/768x500!/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2F59%2F27%2F0fa8680441e6afe2124c00250142%2Fimage-gettyimages-149317838-male-patient-at-doctors-appointment.jpg',
  },
  {
    title: 'Recommended Tests',
    desc: 'Based on your input, MediScan recommends lab work, imaging, or specialist referrals aligned with standard clinical pathways.',
    img: 'https://media.istockphoto.com/id/627290560/photo/professional-doctor-preparing-patient-for-procedure.jpg?s=612x612&w=0&k=20&c=WioCmIzIWsMfnJfpC8l2xu1IYb4Rfzy7vLC-B8oNO0M=',
  },
  {
    title: 'Personalized Treatment Plans',
    desc: 'Receive possible treatment options, procedures, and medication suggestions tailored to your symptoms and history.',
    img: 'https://st4.depositphotos.com/12981370/23928/i/450/depositphotos_239284710-stock-photo-patient-listening-intently-male-doctor.jpg',
  },
  {
    title: 'Secure and Confidential',
    desc: 'All data is encrypted and stored securely, ensuring HIPAA-compliant processing and complete privacy for your health records.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_LztHVRq_skcBujjzUNMKREPSKVHM9gq4YfgA7jXxCZXQLuLbSm_TI&usqp=CAE&s',
  },
];

const InfoSection = () => {
  return (
    <section className="info-section">
      <h2 className="info-title">What Makes MediScan Unique?</h2>
      <div className="info-card-grid">
        {infoCards.map((card, idx) => (
          <motion.div
            className="info-card"
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.08,
              zIndex: 2,
              transition: { duration: 0 },
            }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={card.img} alt={card.title} className="info-img" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
