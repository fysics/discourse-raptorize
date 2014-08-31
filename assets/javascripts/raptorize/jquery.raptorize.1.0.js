(function($) {

    $.fn.raptorize = function() {

	
        return this.each(function() {

            var _this = $(this);
            
            var audio = new Audio()
            audio.src = 'public/sounds/';
            audio.src += Modernizr.audio.ogg ? 'raptor-sound.ogg' :
                        Modernizr.audio.mp3 ? 'raptor-sound.mp3' :
                                              '';
			
            //Raptor Vars
            var raptorImageMarkup = '<img id="Raptor" style="display: none" src="public/images/raptor.png" />'
            var raptorAudioMarkup = '<audio id="RaptorShriek" preload="auto"><source src="' + audio.src + '" /></audio>';	
            var locked = false;
			
            //Append Raptor and Style
            $('body').append(raptorImageMarkup);
            $('body').append(raptorAudioMarkup);
            var raptor = $('#Raptor').css({
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
                    document.getElementById('RaptorShriek').play();
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

