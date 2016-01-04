'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var aboutCtrlStub = {
  index: 'aboutCtrl.index',
  show: 'aboutCtrl.show',
  create: 'aboutCtrl.create',
  update: 'aboutCtrl.update',
  destroy: 'aboutCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var aboutIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './about.controller': aboutCtrlStub
});

describe('About API Router:', function() {

  it('should return an express router instance', function() {
    aboutIndex.should.equal(routerStub);
  });

  describe('GET /api/abouts', function() {

    it('should route to about.controller.index', function() {
      routerStub.get
        .withArgs('/', 'aboutCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/abouts/:id', function() {

    it('should route to about.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'aboutCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/abouts', function() {

    it('should route to about.controller.create', function() {
      routerStub.post
        .withArgs('/', 'aboutCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/abouts/:id', function() {

    it('should route to about.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'aboutCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/abouts/:id', function() {

    it('should route to about.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'aboutCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/abouts/:id', function() {

    it('should route to about.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'aboutCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
