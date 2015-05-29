'use strict';

var React = require('react');

function getClassName(data, filter, instans) {
  var className = 'unknown';

  if (data && data[filter] && data[filter][instans]) {
    if (parseInt(data[filter][instans], 10) === 1) {
      className = 'success';
    }

    if (parseInt(data[filter][instans], 10) === -1) {
      className = 'fail';
    }
  }

  return className;
}

var ShowStatus = React.createClass({
  render: function(){
    return (
      <td className={getClassName(this.props.data, this.props.filter, this.props.instans)}>
      </td>
    )
  }
});

module.exports = ShowStatus;