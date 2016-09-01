'use strict';
var Rx = require('rx');

function createEventSubject() {
  var subject = new Rx.Subject();
  subject.onEvent = function onEvent(value) {
    if (arguments.length <= 1) {
      return subject.onNext(value);
    }
    return subject.onNext(Array.prototype.slice.call(arguments));
  };
  return subject;
}

module.exports = createEventSubject;
