var test = require('tape')
var Store = require('../')
var tmp = require('tempy')
var rimraf = require('rimraf')

var common = {
  setup: function (t, cb) {
    var dir = tmp.directory()
    var store = Store(dir)
    cb(null, store)
  },
  teardown: function (t, store, blob, cb) {
    rimraf(store.path, function (err) {
      if (err) console.log('test teardown error:', err)
      cb()
    })
  }
}

var abstractBlobTests = require('abstract-blob-store/tests')
abstractBlobTests(test, common)

module.exports = common
