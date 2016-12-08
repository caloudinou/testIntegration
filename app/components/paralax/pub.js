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