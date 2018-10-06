import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  googleAuthProvider,
  database as default
};
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// database.ref("expenses").push({
//   description: "Gum",
//   note: "",
//   amount: 195,
//   createdAt: 0,
// });

// database.ref("notes/-LMvPnY8nZVyPcckMKCc").remove();
// database.ref("notes").push({
//   title: "Course topics",
//   body: "React native, Angular, python",
// });

// database.ref("notes").set(notes);

// database.ref("notes")
// database.ref().on("value", snapshot => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });
// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log("Error with data fetching", e);
// });

// setTimeout(() => {
//   database.ref("age").set(34);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(36);
// }, 10500);

// database.ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database.ref().set({
//   name: "Toni Vicent",
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: "Software developer",
//     company: "Sngular",
//   },
//   isSingle: false,
//   location: {
//     city: "Gijón",
//     country: "Spain"
//   }

// }).then(() => {
//   console.log("Data is saved!");
// }).catch((e) => {
//   console.log("this failed", e);
// });


// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Google",
//   "location/city": "San Francisco",
// });

// database.ref("isSingle").remove()
//   .then(() => {
//     console.log("isSingleRemoved");
//   }).catch((e) => {
//     console.log("not removed isSingle");
//   });