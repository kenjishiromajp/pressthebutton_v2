/**
 * This script defines all interactions related to the header.
 */

var $body = $('body');
var $mainNav = $('#main-nav');
var $menuTrigger = $('#menu-trigger');
var $menuOverlay = $('#menu-overlay');

$menuTrigger.on('click', function (event) {
  $body.toggleClass('menu-open');
});

$menuOverlay.on('click', function (event) {
  $body.removeClass('menu-open');
});

$mainNav.on('click', 'a', function (event) {
  $body.removeClass('menu-open');
});
