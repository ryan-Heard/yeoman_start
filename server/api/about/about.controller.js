/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/abouts              ->  index
 * POST    /api/abouts              ->  create
 * GET     /api/abouts/:id          ->  show
 * PUT     /api/abouts/:id          ->  update
 * DELETE  /api/abouts/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var About = require('./about.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Abouts
export function index(req, res) {
  About.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single About from the DB
export function show(req, res) {
  About.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new About in the DB
export function create(req, res) {
  About.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing About in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  About.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a About from the DB
export function destroy(req, res) {
  About.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
