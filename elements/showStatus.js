'use strict';

var React = require('react');

function getClassName(val) {
  var className = 'unknown';
  if (parseInt(val, 10) === 1) {
    className = 'success';
  }

  if (parseInt(val, 10) === 0) {
    className = 'fail';
  }

  return className;
}

var ShowStatus = React.createClass({
  render: function(){
    return (
      <td className={getClassName(this.props.result)}>
      </td>
    )
  }
});

module.exports = ShowStatus;