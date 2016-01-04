'use strict';

var app = require('../..');
import request from 'supertest';

var newAbout;

describe('About API:', function() {

  describe('GET /api/abouts', function() {
    var abouts;

    beforeEach(function(done) {
      request(app)
        .get('/api/abouts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          abouts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      abouts.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/abouts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/abouts')
        .send({
          name: 'New About',
          info: 'This is the brand new about!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAbout = res.body;
          done();
        });
    });

    it('should respond with the newly created about', function() {
      newAbout.name.should.equal('New About');
      newAbout.info.should.equal('This is the brand new about!!!');
    });

  });

  describe('GET /api/abouts/:id', function() {
    var about;

    beforeEach(function(done) {
      request(app)
        .get('/api/abouts/' + newAbout._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          about = res.body;
          done();
        });
    });

    afterEach(function() {
      about = {};
    });

    it('should respond with the requested about', function() {
      about.name.should.equal('New About');
      about.info.should.equal('This is the brand new about!!!');
    });

  });

  describe('PUT /api/abouts/:id', function() {
    var updatedAbout;

    beforeEach(function(done) {
      request(app)
        .put('/api/abouts/' + newAbout._id)
        .send({
          name: 'Updated About',
          info: 'This is the updated about!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAbout = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAbout = {};
    });

    it('should respond with the updated about', function() {
      updatedAbout.name.should.equal('Updated About');
      updatedAbout.info.should.equal('This is the updated about!!!');
    });

  });

  describe('DELETE /api/abouts/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/abouts/' + newAbout._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when about does not exist', function(done) {
      request(app)
        .delete('/api/abouts/' + newAbout._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
