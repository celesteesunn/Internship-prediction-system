import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    CGPA: "",
    Projects: "",
    Certifications: "",
    Communication: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    setResult(data.prediction);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Internship Prediction System</h1>

      <input
        type="number"
        name="CGPA"
        placeholder="CGPA"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="Projects"
        placeholder="Projects"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="Certifications"
        placeholder="Certifications"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="Communication"
        placeholder="Communication"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Predict
      </button>

      <h2>{result}</h2>

    </div>
  );
}

export default App;