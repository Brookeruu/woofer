import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCuuQXccCm7ocYeczsXeRhOazykOEAdwGo',
    authDomain: 'woofer-aa923.firebaseapp.com',
    databaseURL: 'https://woofer-aa923.firebaseio.com',
    projectId: 'woofer-aa923',
    storageBucket: 'woofer-aa923.appspot.com',
    messagingSenderId: '460409658546'
};

firebase.initializeApp(firebaseConfig);
export default firebase;
