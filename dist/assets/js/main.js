"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var counCalcPlus = document.querySelectorAll('.cart__prod-count__plus');
  var counCalcMinus = document.querySelectorAll('.cart__prod-count__minus');
  counCalcMinus.forEach(function (item) {
    item.addEventListener('click', function () {
      var countMinus = this.nextSibling.innerHTML;

      if (+countMinus >= 1) {
        this.nextSibling.innerHTML--;
      }
    });
  });
  counCalcPlus.forEach(function (item) {
    item.addEventListener('click', function () {
      this.previousSibling.innerHTML++;
    });
  });
  var swiper = new Swiper(".related__prods", {
    slidesPerView: 'auto',
    spaceBetween: 18,
    freeMode: true
  });
});