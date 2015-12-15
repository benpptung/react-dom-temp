'use strict';

var React = require('react');

if (React) {
  module.exports = React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
}
else {
  var g;

  if (typeof window !== "undefined") {
    g = window;
  } else if (typeof global !== "undefined") {
    g = global;
  } else if (typeof self !== "undefined") {
    g = self;
  } else {
    g = this;
  }

  if (g.React) {
    module.exports = g.React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  }

}