import { KNeighborsClassifier } from 'machinelearn/kneighbors'; // Import the kNN classifier
import { DataFrame } from 'pandas-js'; // Import DataFrame for data manipulation

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Parse request body
    const { gender, age, country, duration, spending } = req.body;

    // Initialize kNN classifier with pre-trained model or train a new one here
    const knn = new KNeighborsClassifier({ nNeighbors: 5 });
    // Train the classifier with your data

    // Create a DataFrame with the new record data
    const newRecord = new DataFrame([[gender, age, country, duration, spending]], {
      columns: ['Gender', 'Age', 'Country', 'Duration', 'Spending money']
    });

    // Perform prediction
    const prediction = knn.predict(newRecord);

    // Return prediction as response
    res.status(200).json({ prediction });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
