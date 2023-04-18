//Header cart to top-header -- smartphones-

function cartToTop(){
    let cart = $('.header-cart');
    let topPosition = $('.header-body-content');
    let bottomPosition = $('.header-bottom-interactive');

    if(window.innerWidth < 767.98){
        cart.addClass('small-cart');
        topPosition.append(cart);
        cart.find(bottomPosition).remove();
    }else{
        cart.removeClass('small-cart');
        bottomPosition.append(cart);
        cart.find(topPosition).remove();
    }

}

$( document ).ready( cartToTop );
$( window ).resize( cartToTop );

/////////////CATALOG NAVIGATION

//Catalog block home

function formCatalog(){
    let catalog = $('.first-catalog');
    let catalogCopy = catalog.clone();
    let appendParent = $('.catalog-and-question');

    catalogCopy.addClass('home-catalog-wrapper');
    catalogCopy.prependTo(appendParent);
}

$( document ).ready( formCatalog );



//Check menu submenuheight

function checkHeight(parent,typeheight,padding){

    let submenu = (parent).find('.catalog-menu-sub-wrapper');
    let wrapper = (parent).find('.catalog-menu-body');
    let startWrapperHeight = wrapper.outerHeight()+padding*2;
    let wrapperOutline = (parent).find('.catalog-wrapper');
    let menuHeight = 0;
    let type;
    
    if(typeheight == 'height'){
        type = 'height';
    }else{
        type = 'min-height';
    }

    $( submenu ).each(function() {
        if($(this).outerHeight() > menuHeight){
            menuHeight = $(this).outerHeight();
        }
    });

    if(menuHeight > startWrapperHeight){
        wrapperOutline.css(type,menuHeight);
    }

}

//Open/Close header catalog (static)

function catalogStatus(){

    let catalogWrapper = $('.catalog-header');
    let bodyWrapper = catalogWrapper.find('.catalog-wrapper');
    let catalogWrapperContainer = catalogWrapper.find('.catalog-wrapper');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');
    let firstChild = catalogWrapper.find('.submenu-item').first();

    checkHeight(catalogWrapper,'height',36);

    if(catalogWrapper.hasClass('catalog-open')){
            background.removeClass('background-open');
            catalogWrapperContainer.css('display','none');
            catalogButton.removeClass('catalog-open').addClass('catalog-close');
          setTimeout(function() {
            catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
            catalogWrapperContainer.css('display','block');
          }, 300);
    }else{
        catalogWrapper.removeClass('catalog-close').addClass('catalog-open');
        catalogButton.removeClass('catalog-close').addClass('catalog-open');
        if(firstChild.length > 0){
            firstChild.addClass('submenu-item-active');
            bodyWrapper.addClass('sub-catalog-open');
        }
        setTimeout(function() {
            background.addClass('background-open');
          }, 10);
    }
    
}

$('.header-catalog').on( 'click', catalogStatus );

//Close header catalog 

function closeCatalog(){

    let catalogWrapper = $('.catalog-header');
    let catalogWrapperContainer = catalogWrapper.find('.catalog-wrapper');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');

    catalogWrapperContainer.css('display','none');
    background.removeClass('background-open');
    catalogButton.removeClass('catalog-open').addClass('catalog-close');

    setTimeout(function() {
        catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
        catalogWrapperContainer.css('display','block');
      }, 300);

}

$( '.catalog-open-background' ).click( closeCatalog );

//Open header catalog effect

$( document ).ready(function() {

    let catalogButton = $('.header-catalog');
    let homeCatalogWrapper = $('.home-catalog-wrapper');
    
    $( '.home-catalog-wrapper ul' ).hover(function() {
        catalogButton.toggleClass('catalog-close').toggleClass('catalog-open');
        homeCatalogWrapper.toggleClass('home-catalog-open');
      });

});

//check home catalog size

$( document ).ready(function() {

    let catalogWrapper = $('.catalog-home-section');

    setTimeout(function() {
        checkHeight(catalogWrapper,'height',36);
      }, 50);


});

$( window ).on('resize', function() {

    let catalogWrapper = $('.catalog-home-section');

    checkHeight(catalogWrapper,'height',36);

});


//Open submenu border-radius //close first submenu section

$( document ).ready(function() {

    let catalogWrapper = $('.catalog-wrapper');

    $( '.submenu-item' ).hover(function() {
        if(!($(this).hasClass('submenu-item-active'))){
            $(this).siblings().removeClass('submenu-item-active');
            catalogWrapper.addClass('sub-catalog-open');
        }
      });

      $('.submenu-item').on('mouseleave', function() {
             catalogWrapper.removeClass('sub-catalog-open');
        });

        $('.submenu-item').on('mouseleave', function() {
            if(($(this).hasClass('submenu-item-active'))){
                $(this).removeClass('submenu-item-active');
            }
       });


      $( '.catalog-menu-item:not(.submenu-item)' ).hover(function() {
            $(this).siblings().removeClass('submenu-item-active');
      });

});


//getscrollbarWidth

function getScrollbarWidth(){

    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';


    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;

}

getScrollbarWidth();

//burger open

function burgerOpen(event){

    event.preventDefault();

    let burger = $('.burger');
    let burgerWrapper = $('.burger-wrapper');
    let background = $('.burger-open-background');
    let body = $('body');
    let header = $('.sticky-header-smartphone');


    burger.addClass('burger-open');
    body.css({'overflow':'hidden','padding-right':getScrollbarWidth()+'px'});
    header.css({'width':'calc(100% - '+getScrollbarWidth()+'px)', 'margin-left':'auto'});

    setTimeout(function() {
        burgerWrapper.addClass('burger-wrapper-open');
        background.addClass('burger-open-background-open');
      }, 10);

}

$('.header-open-burger').click( burgerOpen );

//close burger

function burgerClose(){

    let burger = $('.burger');
    let burgerWrapper = $('.burger-wrapper');
    let background = $('.burger-open-background');
    let body = $('body');
    let header = $('.sticky-header-smartphone');

    burgerWrapper.removeClass('burger-wrapper-open');
    background.removeClass('burger-open-background-open');
    body.css({'overflow':'visible','padding-right':'0px'});
    header.css({'width':'calc(100% - 0px)','margin-left':'0px'});

    setTimeout(function() {
        burger.removeClass('burger-open');
      }, 300);

}

$('.burger-open-background').click( burgerClose );


// //GetCatalogItems & append to Burger

// function getCatalogItems(){
//     catalog = $('.catalog-menu').find('.catalog-header');
//     let newCatalog = catalog.clone();
//     console.log(newCatalog);
// }

// $( document ).ready( getCatalogItems );

///////////////search and infowindows

//Open hide search

function openSearch(){
    
    let hideSearch = $('.hide-search');

    hideSearch.addClass('active');

}

$('.hide-search').click( openSearch );

//Open infowindow

function infoWindowStatus(className,buttonName){

    let infowindow = $(className);
    let wrapper = infowindow.find('.infowindow-wrapper');

    if(infowindow.hasClass('active')){
        wrapper.removeClass('infowindow-wrapper-active');
        $( buttonName ).each(function() {
            $( this ).removeClass('active');
        });
        setTimeout(function() {
            infowindow.removeClass('active');
          }, 300);
    }else{
            infowindow.addClass('active');
            wrapper.addClass('infowindow-wrapper-active');
            $( buttonName ).each(function() {
                $( this ).addClass('active');
            });
    }
      
}

function forceCloseElement(className,buttonName){

    let infowindow = $(className);
    let wrapper = infowindow.find('.infowindow-wrapper');
    
    wrapper.removeClass('infowindow-wrapper-active');
    $( buttonName ).each(function() {
        $( this ).removeClass('active');
    });
    setTimeout(function() {
        infowindow.removeClass('active');
      }, 300);
    
}

$('.open-call-tab').click( function(){
	infoWindowStatus('.call-infowindow','.open-call-tab');
});

$('.open-language-tab').click( function(){
	infoWindowStatus('.language-infowindow','.open-language-tab');
});

$('.open-cart-tab').click( function(e){
    if(!$('.cart-infowindow').is(e.target) && $('.cart-infowindow').has(e.target).length === 0){
        infoWindowStatus('.cart-infowindow','.open-cart-tab');
    }
});

$('.close-cart-infowindow').click( function(e){
    forceCloseElement('.cart-infowindow','.open-cart-tab');
});


//close elements if click != element parent 

function closeSearchElement(ev,parent,activeClass,buttonClass){

    if ( $(buttonClass).has(ev.target).length === 0 && !$(buttonClass).not(parent).is(ev.target) && !$(parent).is(ev.target) && $(parent).has(ev.target).length === 0 ) {

        $(parent).removeClass(activeClass); 
        $(buttonClass).each(function() {
            $(this).removeClass('active');
            
        });

    }

}

function closeInfoWindowElement(ev,parent,activeClass,buttonClass){

    let wrapper = $(parent).find('.infowindow-wrapper');

    if ( $(buttonClass).has(ev.target).length === 0 && !$(buttonClass).not(parent).is(ev.target) && !$(parent).is(ev.target) && $(parent).has(ev.target).length === 0 ) {

        if($(parent).hasClass('active')){
            wrapper.removeClass('infowindow-wrapper-active');
            $(buttonClass).each(function() {
                $(this).removeClass('active');
            });
            setTimeout(function() {
                $(parent).removeClass(activeClass); 
              }, 300);
        }

    }

}

function closeElementsIfScroll(){
    
    let element = $('.hide-on-scroll');

    if(element.hasClass('infowindow')){

        let wrapper = element.find('.infowindow-wrapper');

        if(element.hasClass('active')){
            wrapper.removeClass('infowindow-wrapper-active');
            element.siblings().removeClass('active');
            element.parent().removeClass('active');
            setTimeout(function() {
                element.removeClass('active');
              }, 300);
        }

    }else{

        if(element.hasClass('active')){
            element.removeClass('active');
            element.siblings().removeClass('active');
            element.parent().removeClass('active');
        }
        
    }


}

$(document).click( function(e){
	closeSearchElement(e,'.hide-search.active','active','.hide-search');
    closeInfoWindowElement(e,'.infowindow.call-infowindow.active','active','.open-call-tab');
    closeInfoWindowElement(e,'.infowindow.language-infowindow.active','active','.open-language-tab');
    closeInfoWindowElement(e,'.infowindow.cart-infowindow.active','active','.open-cart-tab');
});

$( window ).scroll(function() {
    closeElementsIfScroll();
});

$( window ).resize(function() {
    closeElementsIfScroll();
});



