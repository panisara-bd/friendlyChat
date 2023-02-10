/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBKZLvgHoMD-pjI-R40I8NiY5O1lSGqR1w",
  authDomain: "friendlychat-2483e.firebaseapp.com",
  projectId: "friendlychat-2483e",
  storageBucket: "friendlychat-2483e.appspot.com",
  messagingSenderId: "201395680539",
  appId: "1:201395680539:web:8bfef92a623ce4ae2b8fbe",
  measurementId: "G-JBJDBB47H4"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
