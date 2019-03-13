import * as firebase from 'firebase';
// import * as firebaseui from 'firebaseui'

const firebaseConfig = {
    apiKey: 'AIzaSyCuuQXccCm7ocYeczsXeRhOazykOEAdwGo',
    authDomain: 'woofer-aa923.firebaseapp.com',
    databaseURL: 'https://woofer-aa923.firebaseio.com',
    projectId: 'woofer-aa923',
    storageBucket: 'woofer-aa923.appspot.com',
    messagingSenderId: '460409658546'
};

export const calendarApiKeys = {
  CLIENT_ID: '460409658546-adagatfpfvo8sd01t71r523qkmgaj6ss.apps.googleusercontent.com',
  REACT_APP_API_KEY: 'AIzaSyCuuQXccCm7ocYeczsXeRhOazykOEAdwGo'
};

firebase.initializeApp(firebaseConfig);
export default firebase;




// const CLIENT_ID = KEYS.CLIENT_ID;
// const API_KEY = KEYS.REACT_APP_API_KEY;
