/**
 * Created by grizzly on 07/12/2016.
 */
//ES5

var Parralax = (function(){
    var parralax={
        elements:[],
        pollyfilRequestAnimationFrame : function(){
            window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60)};
        },
        init:function (elements) {

            this.pollyfilRequestAnimationFrame();
            elements.forEach(function(element){
                this.elements.push(element);
            },this);
            this.animationParralax(this.elements);

        },
        parallaxDecalageVertical:function(){
            return Parralax.elements.map(function (el) {
               return document.querySelector(el.target).style.top = -window.pageYOffset * el.movePer + 'px';
            });
        },
        animationParralax:function(){
            window.addEventListener('scroll', function(){
                window.requestAnimationFrame(Parralax.parallaxDecalageVertical);
            }, false)
        }
    };

    return{
        init : function(el){
                parralax.init(el);
                return this;
            },
        elements: parralax.elements,
        parallaxDecalageVertical: parralax.parallaxDecalageVertical
    }
}());

window.onload = function() {
    Parralax.init([
        {'target': '.parralax-1', 'movePer': .2, 'parent':'.body-parralax'},
        {'target': '.parralax-2', 'movePer': .5, 'parent':'.body-parralax'},
        ]);
};