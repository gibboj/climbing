import React, { Component } from 'react';
import $ from 'webpack-zepto';
import Counter from './modules/Counter';
import History from './modules/History';
import Tab from './modules/Tab';
import TodayOptions from './modules/TodayOptions';
var google = require('googleapis');
require('./../static/scss/base.scss');

export default class App extends Component {

  static googleSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }


  constructor(props) {
    super(props);

    this.state = {
      loggedin: false,
      counts: [],
      sum: 0,
      goal: 0,
      topGrade: 6,
      topClimb: 0,
      uid: 1,
      today: '',
      previous: [],
      showOptions: false,
      activeTab: 'today',
      auth: null,
      isLoggedIn : false
    };

    this.handleMoreOptionsClick = this.handleMoreOptionsClick.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateGoal = this.updateGoal.bind(this);
    this.updateTopGrade = this.updateTopGrade.bind(this);
    this.saveGrades = this.saveGrades.bind(this);
    this.saveSettings= this.saveSettings.bind(this);
    this.googleSignOut = this.googleSignOut.bind(this);
  }

  /*************************************************************
   *               Google Login Information                    *
   *************************************************************/
  googleSignOut() {
    this.state.auth.signOut();
  }

  initGoogleSignin () {
    let self = this;
    let auth2 = google.auth2.init({
      client_id: '370807824900-9ss6o43n25ff31026msg0rqmv57c7fjo.apps.googleusercontent.com',
      scope: 'profile'
    });
    this.setState({auth: auth2});
    // Listen for sign-in state changes.
    auth2.isSignedIn.listen(function (val) {
      self.signinChanged(val);
    });
  }

  signinChanged (val) {
      this.setState({isLoggedIn: val});

      if (val && this.state.auth !== null) {
        let googleUser = this.state.auth.currentUser.get();

        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        this.setState({uid: profile.getId()});
        this.loadData();
      } else {
        this.clearData();
      }
  }

  /*************************************************************
   *                       Data Loading                        *
   *************************************************************/
  componentDidMount() {
    const self = this;

    google.load('auth2', function () {
      self.initGoogleSignin();
    });
  }

  clearData() {
    this.setState({
      loggedin: false,
      counts: [],
      sum: 0,
      goal: 10,
      topGrade: 5,
      topClimb: 0,
      uid: -1,
      today: '',
      previous: [],
      showOptions: false,
      activeTab: 'today',
      auth: null,
      isLoggedIn : false
    });
  }

  loadData () {
    var self = this;
    const url = `/api/climbs/${this.state.uid}`;

    $.ajax({
      url,
      contentType: 'application/json',
      type: 'GET',
      success: (res) => {
        const state = {};
        if (res[0] && res[0].length > 0) {
          state.counts = res[0].split(',');
          for (let i = state.counts.length; i < self.state.topGrade + 1; i += 1) {
            state.counts.push(0);
          }
        } else {
          state.counts = [];
          for (let i = 0; i < self.state.topGrade + 1; i += 1) {
            state.counts.push(0);
          }
        }

        if (res[1]) {
          state.previous = res[1];
        }

        if (res[2]) {
          state.goal = res[2];
        }

        if (res[3]) {
          state.topGrade = res[3];
        }

        if (res[4]) {
          state.topClimb = res[4];
        }

        self.setState(state);
      }
    });
  }

  /*************************************************************
   *                       Save Function                       *
   *************************************************************/

  saveGrades() {
    const self = this;
    let url = `/api/climbs/${this.state.uid}`;
    if (this.state.today) {
      url += `/date/${this.state.today}`;
    }
    $.ajax({
      url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({ grades: this.state.counts }),
      success: (res) => {
        const previous = self.state.previous;
        let today = self.state.today;
        if (!today) {
          today = new Date();
          today = [('0' + today.getDate()).slice(-2),  // Get day and pad it with zeroes
            ('0' + (today.getMonth() + 1)).slice(-2),      // Get month and pad it with zeroes
            today.getFullYear()].join('');
        }

        if (res.result === 'success') {
          let updated = false;
          for (let i = 0; i < previous.length; i += 1) {
            if (previous[i].day === today) {
              previous[i].climbs = self.state.counts;
              previous[i].goals = self.state.goal;
              updated = true;
            }
          }

          if (!updated) {
            previous.push({ day: today, climbs: self.state.counts,goals: self.state.goal });
          }
        } else {
          self.showError('could not save grades!');
        }
      }
    });
  }

  saveSettings() {
    let url = `/api/settings/${this.state.uid}`;
    $.ajax({
      url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({ topGrade: this.state.topGrade, goal: this.state.goal }),
      success: (res) => {
        console.log(res.result);
      }
    });
  }


  /*************************************************************
   *                       Update State Function               *
   *************************************************************/

  updateDate(event) {
    this.setState({ today: event.target.value });
  }

  updateCount(grade, amt) {
    const counts = this.state.counts;
    counts[grade] = Math.max(parseInt(counts[grade], 10) + amt, 0);
    this.setState({ counts: counts });
  }

  updateGoal(event) {
    this.setState({ goal: parseInt(event.target.value,10) });
  }

  updateTopGrade(event) {
    this.setState({ topGrade: event.target.value });
  }

  updateTabClick(name) {
    this.setState({ activeTab: name });
  }

  handleMoreOptionsClick() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  showError(msg) {
    this.setState({ error: msg });
  }


  render() {
    const self = this;

    const tabs = this.props.tabs.map((tabName) => {
      return <Tab key={`${tabName}_tab`} onClick={self.updateTabClick.bind(self, tabName)} name={tabName} isactive={self.state.activeTab === tabName} />;
    });

    return (
      // Add your component markup and other subcomponent references here.
      <div className="main-container">
        <div className="signout" >
          {!this.state.isLoggedIn ? '' : (<a onClick={this.googleSignOut}>Sign Out</a>)}
        </div>
        { this.state.isLoggedIn ?
          (<div className="tabs is-boxed is-centered">
          <ul>
            {tabs}
          </ul>
        </div>):'' }

        <div className={this.state.isLoggedIn ? 'hidden signin':'signin'} >
          <h1 className="title is-1">Boulder Tracking</h1>
          <h2 className="subtitle is-3">Log your climbs.</h2>
          <div className={'g-signin2'} data-onsuccess={this.googleSignIn}></div>
        </div>
        { this.state.isLoggedIn ?
          (<div>
          <Counter isActive={this.state.activeTab === 'today'} saveGrades={this.saveGrades} counts={this.state.counts} goal={this.state.goal} showOptions={this.state.showOptions} updateCount={this.updateCount}/>
          <History isActive={this.state.activeTab === 'history'} previous={this.state.previous} />

          <div className={this.state.activeTab === 'settings' ? 'is-active tab-pane' : 'tab-pane '}>
            <div className="level">
              <div className="level-left"><h1 className="title is-1 ">Settings</h1></div>
              <div className="level-right"><a className="button is-primary level-right" onClick={this.saveSettings}>Save</a></div>
            </div>
            <div className="columns">
              <form className="column">
                <label className="label" htmlFor="goal">Points Goal</label>
                <input className="input" id="goal" value={this.state.goal} onChange={this.updateGoal} />
                <label className="label" htmlFor="topGrade">Top Grade</label>
                <p className="control">
                  <span className="select is-medium">
                    <select value={self.state.topGrade} onChange={this.updateTopGrade}>
                      {
                        this.props.topGrades.map(function (item, index) {
                          return <option key={item+"_selectGrade" } value={item} >V{item}</option>;
                        })
                      }
                    </select>
                  </span>
                </p>
              </form>
              <div className="column"/>
            </div>
          </div>
        </div>)
            : ''}
      </div>
    );
  }
}

App.defaultProps = {
  tabs: ['today', 'history', 'settings'],
  topGrades: [3,4,5,6,7,8,9,10,11,12]
};
