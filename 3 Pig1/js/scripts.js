(function() {
    var $this = $(this);
    
    var pink1 = "#ff7bac"; 
    var pink2 = "#efabb7";
      
      /*THIS CLASS IS ABOUT STATIC OBJECTS AND THEIR PROPERTIES*/
      /*IT IS NOT ABOUT FUNCTIONALITY OR DYNAMIC INTERACTION*/
      
      /**************STEP 1**************/  
    /**************Create the Object**************/  
      var pig = {
        face: "circle",
        ears: "hearts",
        nose: "oval",
        eyes: "round",
        mouth: "smile",
        tongue: "out",
      }
      
     /*NOTE: these values aren't important.
     * They are arbitrary string values that trigger
     * the appearance of outlines.
     */
     
    /**************STEP 2**************/  
    
    /******BUT NOW, HE JUST LOOKS WEIRD. TRY TO CHANGE THE COLORS*****/
    /*** YOU CAN TRY PINK, OR TAN, OR GREY or pink1, or pink2  ***/
      pig.face = {
        color: 'orange',
        leftColor: 'green',
        rightColor: 'pink2'
      };
      
      pig.ears = {
        color: 'purple'
      };
       
      pig.tongue = {
        color: "green"
      }
    
      
    /************FOR COLORS *********STEP 2 CODE*********/  
      
      face.css("fill", pig.face.color)
      faceColor1.attr('stop-color', pig.face.leftColor);
      faceColor2.attr('stop-color', pig.face.rightColor);
       rightEar.css("fill", pig.ears.color)
       leftEar.css("fill", pig.ears.color)
      tongue.css("fill", pig.tongue.color);
      leftEar.css("fill", pig.earColor);
      rightEar.css("fill", pig.earColor);
    
      
      
      
      
    
    /**************STEP 3**************/  
     var farmSounds = $('#soundsBtn');
      
      /**** STEP 4 SOUNDS!! ******/
      
     farmSounds.css("display", "inline-block");
      
      pig.nose = {
        X: 20,
        Y: 230,
        tilt: 335
      }
      
      /*** (if there is time, we'll do some movement) */
    
    // pigNose.css("transform", `rotate(${pig.nose.tilt}deg) translate(${pig.nose.X}px, ${pig.nose.Y}px)`);
    // piggy.css("transform", `rotate(${pig.nose.tilt}deg) translate(${pig.nose.X}px, ${pig.nose.Y}px)`);
    
      
      
      
      
      
      
      
      
      
      
    /**VARIABLES**/
    var pigPic = $('.pigPic'),nose= $("#nose"),nostrils= $(".nostrils"), face= $('#face'),browR = $('#brow-rt'),browL = $('#brow-lt'),eyes = $('.eyes'),tongue = $(".tongue"),mouth = $('.mouth'),leftEar = $('#lt-ear'),rightEar = $('#rt-ear'), ears = $('#ears'), faceColor1 = $('stop#faceShade1'), faceColor2 = $('stop#faceShade2'), earColor = ('#ears path'), pink1 = "#ff7bac", pink2 = "#efabb7";
    
    /**VARIABLES** end*/
    
      
      
     ears.hide();eyes.hide();eyes.children().hide();mouth.hide();nostrils.hide();browR.hide();browL.hide();nose.hide();nostrils.hide();tongue.hide();face.hide();
      
      if(pig.face) {
        face.show();  
      } if (pig.ears) {  /*******EARS*******/
            ears.show();
        ears.children().show();
          }if (pig.nose) {  /*******NOSE*******/
              nose.show();
              nostrils.show();
        }if (pig.eyes) {  /******EYES*******/
            eyes.show();
            eyes.children().show();
            browL.show();
            browR.show();
        }if (pig.mouth) {  /*******MOUTH*******/
            mouth.show();
        }if (pig.tongue) {  /*******Tongue*******/
            tongue.show();
        }
    
    
    })(jQuery);
    
    