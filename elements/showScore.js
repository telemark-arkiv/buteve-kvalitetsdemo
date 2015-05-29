'use strict';

var React = require('react');

function getScore(data, instans) {
  var kode = 0;
  var wcag = 0;
  var mobileSpeed = 0;
  var mobileUX = 0;
  var desktopSpeed = 0;

  if(data && data['kode'] && data['kode'][instans]) {
    if (parseInt(data['kode'][instans], 10) === 1) {
      kode = 10;
    }
  }

  if(data && data['wcag'] && data['wcag'][instans]) {
    if (parseInt(data['wcag'][instans], 10) === 1) {
      wcag = 40;
    }
  }

  if(data && data['mobileSpeed'] && data['mobileSpeed'][instans]) {
    if (parseInt(data['mobileSpeed'][instans], 10) === 1) {
      mobileSpeed = 10;
    }
  }

  if(data && data['mobileUX'] && data['mobileUX'][instans]) {
    if (parseInt(data['mobileUX'][instans], 10) === 1) {
      mobileUX = 20;
    }
  }

  if(data && data['desktopSpeed'] && data['desktopSpeed'][instans]) {
    if (parseInt(data['desktopSpeed'][instans], 10) === 1) {
      desktopSpeed = 20;
    }
  }

  return kode + wcag + mobileSpeed + mobileUX + desktopSpeed;
}

var ShowScore = React.createClass({
  render: function(){
    return (
      <td className="score">
        {getScore(this.props.data, this.props.instans)} %
      </td>
    )
  }
});

module.exports = ShowScore;