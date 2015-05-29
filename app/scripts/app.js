'use strict';

var React = require('react');
var Firebase = require('firebase');
var ShowStatus = require('../../elements/showStatus');
var ShowScore = require('../../elements/showScore');

var App = React.createClass({
  getInitialState: function() {
    return {data:{}};
  },
  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://pythonia.firebaseio.com/butevedemo");
    this.firebaseRef.on("value", function(dataSnapshot) {
      var data = dataSnapshot.val();
      this.setState({
        data: data
      });
    }.bind(this));


  },
  render: function(){
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th className="explain">Faktor</th>
            <th className="explain">Telemark</th>
            <th className="explain">Buskerud</th>
            <th className="explain">Vestfold</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="explain">Kodekvalitet</td>
            <ShowStatus data={this.state.data} filter="kode" instans="tfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="kode" instans="bfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="kode" instans="vfk"></ShowStatus>
          </tr>
          <tr>
            <td className="explain">Universell utforming</td>
            <ShowStatus data={this.state.data} filter="wcag" instans="tfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="wcag" instans="bfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="wcag" instans="vfk"></ShowStatus>
          </tr>
          <tr>
            <td className="explain">Hastighet desktop</td>
            <ShowStatus data={this.state.data} filter="desktopSpeed" instans="tfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="desktopSpeed" instans="bfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="desktopSpeed" instans="vfk"></ShowStatus>
          </tr>
          <tr>
            <td className="explain">Hastighet mobil</td>
            <ShowStatus data={this.state.data} filter="mobileSpeed" instans="tfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="mobileSpeed" instans="bfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="mobileSpeed" instans="vfk"></ShowStatus>
          </tr>
          <tr>
            <td className="explain">Brukeropplevelse mobil</td>
            <ShowStatus data={this.state.data} filter="mobileUX" instans="tfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="mobileUX" instans="bfk"></ShowStatus>
            <ShowStatus data={this.state.data} filter="mobileUX" instans="vfk"></ShowStatus>
          </tr>
          <tr>
            <td className="explain">Totalkvalitet</td>
            <ShowScore data={this.state.data} instans="tfk"></ShowScore>
            <ShowScore data={this.state.data} instans="bfk"></ShowScore>
            <ShowScore data={this.state.data} instans="vfk"></ShowScore>
          </tr>
          </tbody>
        </table>
  </div>
  );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);