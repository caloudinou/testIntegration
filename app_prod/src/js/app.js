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
/*
window.onload = function() {
    Parralax.init([
        {'target': '.parralax-1', 'movePer': .2, 'parent':'.body-parralax'},
        {'target': '.parralax-2', 'movePer': .5, 'parent':'.body-parralax'},
        ]);
};*/
/**
 * Created by grizzly on 07/12/2016.
 */
//ES6

const ParralaxES6 = (() => {
        /**
         * value accessible uniquement dans ce scope
         */
        let _elements = [];

        /**
         * Class Nommé
         */
        return class ParralaxEffect{
            /**
             * constructor
             * @params data = Array[{target: DOM, movePer: movePer}]
             */
            constructor(data = []) {
                this.checkParamFormat(data)
                    .then(function(data){
                        //pollyfil
                        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60)};
                        _elements= data.elements;
                    },function(e){
                        console.error(`==:: ERROR on Parralax Class ParralaxEffect ::==
                                        Oups... une erreur est survenue 
                                        Erreur dans le format attendu
                                        `,e);
                        _elements = [];

                    }).catch(function(e){
                        console.error(`==::  ERROR on Parralax Class ParralaxEffect ::==
                                        Oups... une erreur est survenue 
                                        lors de l'execution de la methode du retour de la promise
                                        `,e);
                        _elements = [];
                    });
                return this;
            }
            /**
             * Controle des types attendues pour les données
             * @params data
             * @return promise
             */
            checkParamFormat(data){
                return new Promise((resolve, reject) =>{
                    switch(false){
                        case data instanceof Array :
                            reject( new Error('data not Array. data is '+(typeof data),'== data ==',data ));
                        case data[0] instanceof Object ? data[0] instanceof Object : data[0] === null  :
                            reject( new Error('data[0] not Object. data[0] is '+(typeof data[0]),'== data[0] ==',data[0]));
                        case data[0].target && data[0].movePer &&  typeof data[0].movePer === 'number':
                            reject( new Error('matrice data[0] no good. matrice => [{target: target, movePer:movePer}]== data[0] ==',data[0]));
                        default:
                            resolve({elements:data});
                    }

                });
            }

            /**
             * animation lors de l'écoute du scroll
             */
            animationParralax(){
                window.addEventListener('scroll', function(){
                    window.requestAnimationFrame(()=>{
                        return _elements.map(function (el) {
                            return document.querySelector(el.target).style.top = -window.pageYOffset * el.movePer + 'px';
                        });
                    });
                }, false);
            }
    };
})();


window.onload = function() {
   var ParA = new ParralaxES6([
       {'target': '.parralax-1', 'movePer': .2, 'parent':'.body-parralax'},
       {'target': '.parralax-2', 'movePer': .5, 'parent':'.body-parralax'},
    ]).animationParralax();
};
/**
 * Created by grizzly on 08/12/2016.
 */
var components = function(paramA, paramB, paramC ) {
    window.addEventListener('scroll', function () {
        if (window.scrollY - paramC > 1 && ( $(paramB).height()+paramC > (window.scrollY + $(paramA).height() ) )) {
            $(paramA).css({'position':'relative','top':  (window.scrollY - paramC) + 'px'});
        }
    });
};

var cpt = new components('.pub1', '.target1', 600);