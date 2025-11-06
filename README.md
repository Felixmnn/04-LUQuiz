> **⚠️ This app is no longer maintained**  

# LUQuiz

LUQuiz is a React Native Expo app designed for offline quiz-based learning. It was the precursor to QReady and allows users to import pre-made learning sets and track their progress entirely offline.


## About the App

LUQuiz was created as a standalone app for offline learning. Users can import pre-made learning sets and use various filters to customize their quizzes, such as:

- Number of correct answers
- Time limits
- And more

The app stores progress locally using AsyncStorage, allowing users to track their learning performance over time. LUQuiz operates entirely offline and is independent of any external services.

---

## Technologies

- **AsyncStorage**: For local data storage.
- **File Import**: To load learning sets into the app.
- **Appwrite Backend**: To make Learn sets available to all users.  
  *Note: Due to the Appwrite 2 collection limitation, this feature no longer works as no database is now archived.*
- **Python Repository**: This app can be used in combination with my Python repository to generate questions. For example, it can convert PDF files into JSON files with the required question format using the OpenAI API.

---

## Usage

The code behind LUQuiz is available for educational purposes. However, it should not be copied directly for other projects.

