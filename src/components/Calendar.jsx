import React from 'react';
import * as firebase from 'firebase';
import calendarApiKeys from '../firebaseConfig';

const gapi = window.gapi;
const CLIENT_ID = calendarApiKeys.CLIENT_ID;
const API_KEY = calendarApiKeys.REACT_APP_API_KEY;
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const authorizeButton = document.getElementById('authorize_button');
const signoutButton = document.getElementById('signout_button');


export default class Calendar extends React.Component{
  constructor(props){
    super(props);
      this.handleAuthClick = this.handleAuthClick.bind(this);
      this.handleClientLoad = this.handleClientLoad.bind(this);   this.updateSigninStatus = this.updateSigninStatus.bind(this);
      this.appendPre = this.appendPre.bind(this);
      this.initClient = this.initClient.bind(this);
      this.authorizeButton = document.getElementById('authorize_button');
      this.signoutButton = document.getElementById('signout_button');
    }

  componentDidMount(){
    this.handleClientLoad();
  }

  componentDidUpdate(){
   console.log('update');
  }

  handleClientLoad() {
    gapi.load('client:auth2', this.initClient)
  }

  initClient() {
     console.log('init');
     console.log(this);
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
      // Listen for sign-in state changes.
      console.log(gapi.auth2.getAuthInstance().isSignedIn.listen);


    gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
    }, function(error) {
      this.appendPre(JSON.stringify(error, null, 2));
    })
  }

  // Called when the signed in status changes, to update the UI appropriately. After a sign-in, the API is called.
  updateSigninStatus(isSignedIn) {
    console.log('else');
    if (isSignedIn) {
      console.log('signed in');
      this.listUpcomingEvents();
    } else {

    }
  }
  // Sign in the user upon button click.
   handleAuthClick(event){
     gapi.auth2.getAuthInstance().signIn();
     console.log(gapi.client.calendar.events.list);
   }

   // Sign out the user upon button click.
   handleSignoutClick(event) {
           console.log(document.getElementById('authorize_button'))
     console.log('hit here');
     // console.log(gapi.auth2.getAuthInstance());
     gapi.auth2.getAuthInstance().signOut();
   }
   // Append a pre element to the body containing the given message
  // as its text node. Used to display the results of the API call.
  //
  // @param {string} message Text to be placed in pre element.

 appendPre(message) {
   const pre = document.getElementById('content');
   const textContent = document.createTextNode(message + '\n');
   pre.appendChild(textContent);
 }
 // Print the summary and start datetime/date of the next ten events in
     // the authorized user's calendar. If no events are found an
     // appropriate message is printed.

    listUpcomingEvents() {
      gapi.client.calendar.events.list({
        'calendarId': 'b59omemkl2rgad8jihs926j98s@group.calendar.google.com',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then((response) => {
        console.log(this);
        const events = response.result.items;
        this.appendPre('Upcoming events:');

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            const event = events[i];
            const when = event.start.dateTime;
            if (!when) {
              when = event.start.date;
            }
            this.appendPre(event.summary + ' (' + when + ')')
          }
        } else {
          this.appendPre('No upcoming events found.');
        }
      });
    }

    temp(){
      if (this.readyState === 'complete') this.handleClientLoad()
    }




  render() {
    return (
      <div>
        <style> {`
          .hover-toggle {
            letterSpacing: 2px;
          }
          .hover-toggle:hover {
            text-decoration: underline;
            color: #000000;
            letterSpacing: 2px
          }
        `}</style>
        <p className={"hover-toggle"} >CALENDAR
        </p>
        <div>

          <button onClick={ this.handleAuthClick } id="authorize_button" style={{display: 'block'}}>Show Woofer Calendar</button>
          <button onClick={ this.handleSignoutClick } id="signout_button" style={{display: 'block'}}>Sign Out of Calendar</button>

          <pre id="content" style={{whiteSpace: 'preWrap'}}></pre>

          <script type="text/javascript">
          </script>

          <script>
            document.onreadystatechange = temp()
            console.log('hello');
          </script>
        </div>

      </div>

    )
  }
}
