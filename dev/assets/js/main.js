const counCalcPlus = document.querySelectorAll('.cart__prod-count__plus');
const counCalcMinus = document.querySelectorAll('.cart__prod-count__minus');

counCalcMinus.forEach(function(item) {
    item.addEventListener('click', function() {
        let countMinus = this.nextSibling.innerHTML;
        if(+countMinus >= 1) {
            this.nextSibling.innerHTML--;
        }
    })
})
counCalcPlus.forEach(function(item) {
    item.addEventListener('click', function() {
        this.previousSibling.innerHTML++;
    })
})

var swiper = new Swiper(".related__prods", {
    slidesPerView: 'auto',
    spaceBetween: 18,
    freeMode: true,
});
