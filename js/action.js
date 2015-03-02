
var fn = {
    ready: function(){
        alert("=)");
        document.addEventListener("deviceready", fn.init(), false);
        
    },
    init: function(){   
        alert("2");
        $('#contact').tap(fn.activa);
        
    },
    activa:function(){
    alert("3");
    // Vibrate for 3 seconds
    navigator.vibrate(3000);
 
   }

};



$(fn.ready);



