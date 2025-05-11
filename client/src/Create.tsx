import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [encounterReason, setEncounterReason] = useState('Fever and cough');
  const [reasonDescription, setReasonDescription] = useState('Patient has high fever, cough with yellow mucus, chest pain on deep breaths, and fatigue.');
  const [bmi, setBmi] = useState<number>(26.4);
  const [bodyTemp, setBodyTemp] = useState<number>(102.5);
  const [heartRate, setHeartRate] = useState<number>(110);
  const [systolicBP, setSystolicBP] = useState<number>(130);
  const [diastolicBP, setDiastolicBP] = useState<number>(85);
  const [glucose, setGlucose] = useState<number>(95);
  const [hemoglobin, setHemoglobin] = useState<number>(14.1);
  const [cholesterol, setCholesterol] = useState<number>(180);
  const [notes, setNotes] = useState('Oxygen saturation at 92%, no known allergies, symptoms began 4 days ago. Patient works in a crowded environment.');
  const [report, setReport] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const medicalData = `You are a clinical AI assistant. Given a patient case, generate a structured medical response in 30–40 words using the format: Condition: Symptoms: Allergies: Recommended Tests/Treatments: Prescriptions/Procedures: Recovery Timeline: Do not include or invent lab values or vitals. Recommend specific medications (e.g., azithromycin, amoxicillin) and common diagnostic steps (e.g., blood culture, chest X-ray). Here is the patient case: Encounter Reason: ${encounterReason}, Reason Description: ${reasonDescription}, Body Mass Index (BMI): ${bmi}, Body Temperature (°F): ${bodyTemp}, Heart Rate (bpm): ${heartRate}, Systolic Blood Pressure: ${systolicBP}, Diastolic Blood Pressure: ${diastolicBP}, Glucose (mg/dL): ${glucose}, Hemoglobin (g/dL): ${hemoglobin}, Total Cholesterol (mg/dL): ${cholesterol}, Additional Notes: ${notes}`.trim();

    try {
      const res = await fetch("https://wxdo2yrs4qfjef7wnnytibjunu0eiams.lambda-url.us-west-2.on.aws/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: medicalData })
      });

      const data = await res.text();
      console.log(data);

      const sections = [
        "Condition",
        "Symptoms",
        "Allergies",
        "Recommended Tests/Treatments",
        "Prescriptions/Procedures",
        "Recovery Timeline"
      ];

      const parsedReport = sections
        .map(section => {
          const regex = new RegExp(`${section}:\\s*(.*?)\\s*(?=${sections.filter(s => s !== section).map(s => `${s}:`).join('|')}|$)`, 's');
          const match = data.match(regex);
          return match ? `${section}: ${match[1].trim()}` : null;
        })
        .filter(Boolean)
        .join('\n\n');

      setReport(parsedReport);
    } catch (err) {
      console.error('Error generating report:', err);
      setReport('Failed to generate report.');
    }
  };

  return (
    <div className="create-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">Patient Medical Intake</h1>

          <div className="form-row">
            <div>
              <label>
                Encounter Reason <span style={{ color: 'red' }}>*</span>
              </label>
              <input type="text" required value={encounterReason} onChange={(e) => setEncounterReason(e.target.value)} />
            </div>
            <div>
              <label>
                Reason Description <span style={{ color: 'red' }}>*</span>
              </label>
              <input type="text" required value={reasonDescription} onChange={(e) => setReasonDescription(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>
                Body Mass Index (BMI) <span style={{ color: 'red' }}>*</span>
              </label>
              <input type="number" required step="0.1" value={bmi ?? ''} onChange={(e) => setBmi(parseFloat(e.target.value))} />
            </div>
            <div>
              <label>
                Body Temperature (°F) <span style={{ color: 'red' }}>*</span>
              </label>
              <input type="number" required step="0.1" value={bodyTemp ?? ''} onChange={(e) => setBodyTemp(parseFloat(e.target.value))} />
            </div>
            <div>
              <label>
                Heart Rate (bpm) <span style={{ color: 'red' }}>*</span>
              </label>
              <input type="number" required value={heartRate ?? ''} onChange={(e) => setHeartRate(parseInt(e.target.value))} />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Systolic Blood Pressure</label>
              <input type="number" value={systolicBP ?? ''} onChange={(e) => setSystolicBP(parseInt(e.target.value))} />
            </div>
            <div>
              <label>Diastolic Blood Pressure</label>
              <input type="number" value={diastolicBP ?? ''} onChange={(e) => setDiastolicBP(parseInt(e.target.value))} />
            </div>
            <div>
              <label>Glucose (mg/dL)</label>
              <input type="number" step="0.1" value={glucose ?? ''} onChange={(e) => setGlucose(parseFloat(e.target.value))} />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Hemoglobin (g/dL)</label>
              <input type="number" step="0.1" value={hemoglobin ?? ''} onChange={(e) => setHemoglobin(parseFloat(e.target.value))} />
            </div>
            <div>
              <label>Total Cholesterol (mg/dL)</label>
              <input type="number" step="0.1" value={cholesterol ?? ''} onChange={(e) => setCholesterol(parseFloat(e.target.value))} />
            </div>
          </div>

          <div className="form-row">
            <label>Additional Notes</label>
            <textarea className="large-input" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {report && (
        <div className="medical-report">
          <h2>Generated Medical Report</h2>
          <div className="report-text">
            {report.split('\n\n').map((section, index) => (
              <p key={index}>
                <strong>{section.split(':')[0]}:</strong>{' '}
                {section.split(':').slice(1).join(':')}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
