AFRAME.registerComponent('test01', {
  schema: {
  coolvalue: {type: 'int', default: 1}
  },
  init: function () {},
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

var boxEl = document.querySelector('a-box');
boxEl.setAttribute('width', 5);
boxEl.setAttribute('color', '#FFF');
boxEl.addEventListener('click', function () {
  // If we are using the cursor component.
  boxEl.setAttribute('color', '#FFF');
});
boxEl.emit('some-event');
boxEl.removeAttribute('color');
boxEl.querySelectorAll('a-sphere');

var sphereEl = document.createElement('a-sphere');
sphereEl.setAttribute('radius', 1);
document.querySelector('a-scene').appendChild(sphereEl);
sphereEl.addEventListener('loaded', function () {
  console.log('sphere attached');
});
