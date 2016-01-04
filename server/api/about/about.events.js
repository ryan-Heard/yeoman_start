/**
 * About model events
 */

'use strict';

import {EventEmitter} from 'events';
var About = require('./about.model');
var AboutEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AboutEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  About.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AboutEvents.emit(event + ':' + doc._id, doc);
    AboutEvents.emit(event, doc);
  }
}

export default AboutEvents;
