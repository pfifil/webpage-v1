async function calculateSum() {
    // 1. Get the numbers from the input boxes
    const a = document.getElementById('numA').value;
    const b = document.getElementById('numB').value;

    // The URL of your deployed Google Cloud Function
    const functionUrl = "https://us-central1-webpage-v1.cloudfunctions.net/calculator-function"; 

    // 2. Prepare the data to send (as a JSON object)
    const dataToSend = {
        a: parseFloat(a),
        b: parseFloat(b)
    };

    // 3. Send the data to your Google Cloud Function
    const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    });

    // 4. Get the result back and display it
    const resultData = await response.json();
    document.getElementById('result').value = resultData.sum;
}

