from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load trained model
model = pickle.load(open('model/model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():

    data = request.json

    features = np.array([[
        data['CGPA'],
        data['Projects'],
        data['Certifications'],
        data['Communication']
    ]])

    prediction = model.predict(features)

    return jsonify({
        "prediction": prediction[0]
    })

if __name__ == '__main__':
    app.run(debug=True)