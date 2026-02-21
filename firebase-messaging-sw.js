importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "API_KEY_LU",
  authDomain: "reminder-app-ca8c2.firebaseapp.com",
  projectId: "reminder-app-ca8c2",
  storageBucket: "reminder-app-ca8c2.firebasestorage.app",
  messagingSenderId: "907207437014",
  appId: "1:907207437014:web:2302885250c69f7837b777"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});