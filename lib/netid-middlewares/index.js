/**
 * Module dependencies.
 */

var log = require('debug')('democracyos:netid-middlewares');
var netid = require('lib/netid');

exports.verified_citizen = function (req, res, next) {
  if (!req.user) return res.send(500);
  netid.isVerified(req.user, function(err, verified) {
    if (err) {
      log('netid responded with an error: %s', err.message || err);
      return res.send(500);
    }
    if (!verified) {
      log('netid responded identity %s is not verified', req.user.id);
      return res.send(403);
    }
    next();
  });
};