// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVRIR38JYvE_lnoKbTO7Z9XsDr2RRFXQE",
    authDomain: "yctrl-9fb18.firebaseapp.com",
    databaseURL: "https://yctrl-9fb18.firebaseio.com",
    projectId: "yctrl-9fb18",
    storageBucket: "yctrl-9fb18.appspot.com",
    messagingSenderId: "736023016017"
};

const app = firebase.initializeApp(config);
const appDb = app.database().ref();

const killAllRef = appDb.child("killAll");

killAllRef.on('value', (snapshot) => {
    console.log("Should kill all? " + snapshot.val());
    if (snapshot.val() === true) {
        console.log("closing all chrome youtube tabs");
        
        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('youtube')) {
                    chrome.tabs.remove(tab.id);
                }
            }
        });
    }
});