(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.hexColorPal = factory());
}(this, (function () { 'use strict';

var index = [
  ['#9DC8C8', '#58C9B9', '#519D9E', '#D1B6E1'],
  ['#E71D36', '#2EC4B6', '#EFFFE9', '#011627'],
  ['#77AAAD', '#6E7783', '#D8E6E7', '#9DC3C1'],
  ['#00dffc', '#008c9e', '#005f6b', '#343838'],
  ['#45d9fd', '#f4f4f4', '#ee2560', '#08182b'],
  ['#f0f5f9', '#c9d6de', '#52616a', '#1e2022'],
  ['#FFFB85', '#FFD464', '#FA5B75', '#5A3662'],
  ['#2A363B', '#FECEA8', '#FF847C', '#E84A5F'],
  ['#F0EEC9', '#9EE6CF', '#50C9BA', '#4BA2AC']
];

return index;

})));
