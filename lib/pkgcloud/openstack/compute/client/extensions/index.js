/*
 * index.js: OpenStack compute extension index
 *
 * (C) 2013 Rackspace
 *      Ken Perkins
 * MIT LICENSE
 *
 */

var utile = require('utile');

var extensions = {
  getExtensions: function(callback) {
    return this._request({
      path: 'extensions'
    }, function (err, body, res) {
      return err
        ? callback(err)
        : callback(null, body.extensions, res);
    });
  }
};

utile.mixin(extensions, require('./floating-ips'));
utile.mixin(extensions, require('./keys'));
utile.mixin(extensions, require('./networks'));
utile.mixin(extensions, require('./volume-attachments'));

module.exports = extensions;
