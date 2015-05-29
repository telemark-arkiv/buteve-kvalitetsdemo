'use strict';

var React = require('reactfire');
var ShowStatus = require('../../elements/showStatus');
var ShowScore = require('../../elements/showScore');

var App = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {data:''};
  },
  componentWillMount: function() {
    this.bindAsObject(new Firebase('https://pythonia.firebaseio.com/butevedemo'), 'data');
  },
  render: function(){
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Faktor</th>
            <th>Telemark</th>
            <th>Buskerud</th>
            <th>Vestfold</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Kodekvalitet</td>
            <ShowStatus result="1"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
          </tr>
          <tr>
            <td>Universell utforming</td>
            <ShowStatus result="1"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
          </tr>
          <tr>
            <td>Hastighet desktop</td>
            <ShowStatus result="1"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
          </tr>
          <tr>
            <td>Hastighet mobil</td>
            <ShowStatus result="1"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
            <ShowStatus result="0"></ShowStatus>
          </tr>
          <tr>
            <td>Brukeropplevelse mobil</td>
            <ShowStatus result="1"></ShowStatus>
            <ShowStatus result="1"></ShowStatus>
            <ShowStatus result="1"></ShowStatus>
          </tr>
          <tr>
            <td>Totalkvalitet</td>
            <td>80%</td>
            <td>30%</td>
            <td>40%</td>
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