(function($) {

    $.fn.formStyle = function(settings) {
        settings = $.extend({
            idleClass: 'idleField',
            focusClass: 'focusField'            
        }, settings);
        
         this.each(function() {
            
            // Add idleClass initially to the fields
            $(this).addClass(settings.idleClass);
            
            // On focus, add active class and remove idle class
            $(this).focus(function() {   
                $(this).removeClass(settings.idleClass).addClass(settings.focusClass);
            });
            
            // On blur, remove active class and add idle class
            $(this).blur(function() {   
                $(this).removeClass(settings.focusClass).addClass(settings.idleClass);   
            });
           
         });        
         return this;    
    };
})(jQuery);
