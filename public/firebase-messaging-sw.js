// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
// import { getMessaging } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
apiKey: "AIzaSyCWcsOVMgqVwu50J2JbHJi4faAsf3iuQjc",
authDomain: "integrow-528d6.firebaseapp.com",
projectId: "integrow-528d6",
storageBucket: "integrow-528d6.appspot.com",
messagingSenderId: "72700817599",
appId: "1:72700817599:web:44082711c6861df319d60a",
measurementId: "G-31PHWJV163"
};


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = getMessaging(firebaseApp);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

    



//  * Here is is the code snippet to initialize Firebase Messaging in the Service
//  * Worker when your app is not hosted on Firebase Hosting.
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp(firebaseConfig);
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const title = payload.title || 'Notification'
  const notificationTitle = title;
  const notificationOptions = {
    body: payload.body||'',
    icon: '/firebase-logo.png',
    URL
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});