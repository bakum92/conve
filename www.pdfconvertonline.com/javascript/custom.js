
$().ready(function() {
    new_portofolio();
    jquery_dropdown();
    content_tab();   
});

function new_portofolio() {
    $('.portofolio-new-wrap').masonry({
        itemSelector: '.portofolio-box',
        columnWidth: 309,
        isAnimated: true,
        gutterWidth:6,
        isFitWidth: true
    });
    $(this).delay(200).queue(function(){ 
        $('.portofolio-new-wrap').masonry( 'reload' );
        $(this).dequeue(); 
    });
    $(this).delay(2000).queue(function(){ 
        $('.portofolio-new-wrap').masonry( 'reload' );
        $(this).dequeue(); 
    });
}

function jquery_dropdown(){

    $("ul.js-jquery-dropdown li.sub_menu").hover(function(){
        
        var dropMenu = $('ul:first',this);
         
        
        dropMenu.fadeIn(100);
        
        
        var dropMenuOffset = dropMenu.offset(); 
        if ((dropMenuOffset.left + dropMenu.width()) > $(window).width() - 10) {
            // the menu is out of screen, reposition it
            dropMenu.addClass("dropdown-menu-moved");
        } 
        
        
        //add the hover class only after the main manu appeard, to prevent the shadow from showing up
        $(this).delay(50).queue(function(){ 
            $(this).addClass("hover"); 
            $(this).dequeue(); 
        });
    }, function(){
        $('ul:first',this).removeClass("dropdown-menu-moved"); //reposition the menu to it's default location'
        
        $(this).removeClass("hover"); //remove hover class
        $('ul:first',this).hide(); //hide the menu
        
    
        //double check that we don't have the hover class
        $(this).delay(100).queue(function(){ 
            $(this).removeClass("hover");
            $(this).dequeue(); 
        });
    });
    
    $("ul.js-jquery-dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
};

function content_tab() {
    $(".tab-panel:not(:first-child)").hide();
    $(".tab-panel:first-child").addClass('tab-visible');
    
    //$(".tab-panel").hide();
    
    
    $('.content-tab a').click(function(event){
        event.preventDefault();

        $('.content-tab li').removeClass('tab-selected');
        $(this).parent().addClass('tab-selected');
        
        $(".tab-visible .video-content").attr("src",$('.video-content').attr('src')); //stop all youtube videos from the old visible tab
        
        //hide all tabs
        $(".tab-panel").hide();
        $(".tab-panel").removeClass('tab-visible'); //remove tab-visible
        
        //except the one clicked
        $('.' + $(this).parent().attr('id')).show();
        $('.' + $(this).parent().attr('id')).addClass('tab-visible'); //add the tab-visible
        
        //resize the nice scroll
        $(".content-scroll").getNiceScroll().resize();
        
        
    
    });
}


