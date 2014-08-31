/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

//TODO: Update to latest JQuery
//TODO: Strip out button and timer options

(function($) {

    $.fn.raptorize = function() {

	
        return this.each(function() {

            var _this = $(this);
            
            var audio = new Audio()
            audio.src = Modernizr.audio.ogg ? 'raptor-sound.ogg' :
                        Modernizr.audio.mp3 ? 'raptor-sound.mp3' :
                                              '';
			
            //Raptor Vars
            var raptorImageMarkup = '<img id="elRaptor" style="display: none" src="raptor.png" />'
            var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="' + audio.src + '" /></audio>';	
            var locked = false;
			
            //Append Raptor and Style
            $('body').append(raptorImageMarkup);
            $('body').append(raptorAudioMarkup);
            var raptor = $('#elRaptor').css({
                "position":"fixed",
                "bottom": "-700px",
                "right" : "0",
                "display" : "block"
            })
			
            // Animating Code
            function init() {
                locked = true;
		
                //Sound Hilarity
                function playSound() {
                    document.getElementById('elRaptorShriek').play();
                }
                playSound();
								
                // Movement Hilarity
                raptor.animate({"bottom" : "+=600"}, 150 );
                raptor.animate({"right" : "+=2000"}, 600 );
                // Reset animation
                raptor.animate({"bottom" : "-=600"}, 1 );
                raptor.animate({"right" : "-=2000"}, 1 );  
                locked = false;                
            }
            
            var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";            
            
            $(document).keydown( function(event) {
                kkeys.push(event.keyCode );
                if(kkeys.toString().indexOf(konami) >= 0 ) {
                    init();
                    kkeys = [];
                }
            }); 
        });
    }
    
})(jQuery);

