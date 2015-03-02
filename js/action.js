
var fn = {
    ready: function(){
        alert("=)");
        document.addEventListener("deviceready", fn.init(), false);
        
    },
    init: function(){   
        alert("2");
        $('#contact').tap(fn.activa);
        $('#bot').tap(fn.boton);
        
    },
    activa:function(){
    alert("3");
    // Vibrate for 3 seconds
    navigator.vibrate(3000);
    navigator.notification.beep(2);
 
   },

    boton:function(){
    alert("4");  
        navigator.notification.alert(
           'Peligro' ,
            fn.alertdimissed,
            'Warning',
            'Aceptar'         
            
        );
        
    
    },
    
    alertdimissed:function(){
    alert("realizada");
    }

};



$(fn.ready);



