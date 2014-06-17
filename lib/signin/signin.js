/**
 * Module dependencies.
 */

var page = require('page');
var View = require('./view');
var empty = require('empty');
var request = require('request');
var classes = require('classes');
var title = require('title');
var t = require('t');
var o = require('query');

page('/signin', function(ctx, next) {
  // Build signin view with options
  var form = new View({});

  // Display section content
  classes(document.body).add("signin-page");

  // Update page's title
  title(t('Login'));

  // Render signin-page into content section
  empty(o('#content')).appendChild(form.render());
});
