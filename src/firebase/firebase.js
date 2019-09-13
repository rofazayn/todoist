import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDKIng5CwzJLVgYFMnhJnrdzwwikk-EIZw',
  authDomain: 'todoist-8183f.firebaseapp.com',
  databaseURL: 'https://todoist-8183f.firebaseio.com',
  projectId: 'todoist-8183f',
  storageBucket: '',
  messagingSenderId: '1043608319665',
  appId: '1:1043608319665:web:52b217cdd6be45eccf9490'
})

export { firebaseConfig as firebase }
