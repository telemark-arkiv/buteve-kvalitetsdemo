'use strict';

var React = require('react');

function getScore(selector, data) {
  var kode = parseInt(data['kode'][selector], 10) * 10;
  var wcag = parseInt(data['wcag'][selector], 10) * 40;
  var mobileSpeed = parseInt(data['mobileSpeed'][selector], 10);
  var mobileUX = parseInt(data['mobileUX'][selector], 20);
  var desktopSpeed = parseInt(data['desktopSpeed'][selector], 20);

  return kode + wcag + mobileSpeed + mobileUX + desktopSpeed;
}

var ShowScore = React.createClass({
  render: function(){
    return (
      <td>
        {getScore(this.props.selector, this.props.data)} %
      </td>
    )
  }
});

module.exports = ShowScore;