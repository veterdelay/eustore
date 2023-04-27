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

///////////////////////////////////////////////CATALOG NAVIGATION

///-----------------------------

////////////////////////////////////////////////////////////////

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

    wrapperOutline.css(type,'auto');

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

    let headerParent = $('.header');
    let catalogWrapper = $('.catalog-header');
    let bodyWrapper = catalogWrapper.find('.catalog-wrapper');
    let catalogWrapperContainer = catalogWrapper.find('.catalog-wrapper');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');
    let backgroundBurger = $('.burger-open-background');
    let firstChild = catalogWrapper.find('.submenu-item').first();

    if(catalogWrapper.hasClass('catalog-open')){

            background.removeClass('background-open');
            catalogWrapperContainer.removeClass('catalog-open').addClass('catalog-close');
            catalogButton.removeClass('catalog-open').addClass('catalog-close');

            if(window.innerWidth < 1199.98){
                backgroundBurger.css('display','block');
                burgerClose(event);
            }

          setTimeout(function() {
            headerParent.removeClass('header-catalog-open').addClass('header-catalog-close');
            catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
            catalogWrapperContainer.removeClass('catalog-open').addClass('catalog-close');
          }, 300);


    }else{

        if(window.innerWidth < 1199.98){
            backgroundBurger.css('display','none');
            burgerOpen(event);
        }

        headerParent.removeClass('header-catalog-close').addClass('header-catalog-open');
        catalogWrapper.removeClass('catalog-close').addClass('catalog-open');
        catalogButton.removeClass('catalog-close').addClass('catalog-open');

        if(firstChild.length > 0 && window.innerWidth > 1199.98){
            firstChild.addClass('submenu-item-active');
            bodyWrapper.addClass('sub-catalog-open');
        }

        setTimeout(function() {
            background.addClass('background-open');
            catalogWrapperContainer.removeClass('catalog-close').addClass('catalog-open');
            checkHeight(catalogWrapper,'height',36);
          }, 10);

    }
    
}

$('.header-catalog').on( 'click', catalogStatus );


//Close header catalog 

function closeCatalog(){

    let headerParent = $('.header');
    let catalogWrapper = $('.catalog-header');
    let catalogWrapperContainer = catalogWrapper.find('.catalog-wrapper');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');
    let backgroundBurger = $('.burger-open-background');


    if(window.innerWidth < 1199.98){
        backgroundBurger.css('display','block');
        burgerClose(event);
    }

    catalogWrapperContainer.removeClass('catalog-open').addClass('catalog-close');
    background.removeClass('background-open');
    catalogButton.removeClass('catalog-open').addClass('catalog-close');
    
    setTimeout(function() {
        catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
        headerParent.removeClass('header-catalog-open').addClass('header-catalog-close');
      }, 300);

}

$( '.catalog-open-background' ).click( closeCatalog );


//change catalog status on burger

function burgerCatalogStatus(){

    let headerParent = $('.header');
    let catalogWrapper = $('.catalog-header');
    let catalogWrapperContainer = catalogWrapper.find('.catalog-wrapper');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');
    let backgroundBurger = $('.burger-open-background');

    if(catalogWrapper.hasClass('catalog-open')){


        if(window.innerWidth < 1199.98){
            backgroundBurger.css('display','block');
        }
        headerParent.removeClass('header-catalog-open').addClass('header-catalog-close');

        catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
        catalogButton.removeClass('catalog-open').addClass('catalog-close');
        background.removeClass('background-open');
        catalogWrapperContainer.removeClass('catalog-open').addClass('catalog-close');

    }else{

        if(window.innerWidth < 1199.98){
            backgroundBurger.css('display','none');
        }
        headerParent.removeClass('header-catalog-close').addClass('header-catalog-open');
        background.addClass('background-open');
        catalogWrapperContainer.removeClass('catalog-close').addClass('catalog-open');
        catalogWrapper.removeClass('catalog-close').addClass('catalog-open');
        catalogButton.removeClass('catalog-close').addClass('catalog-open');
        
    }

}

$( '.burger-open-catalog' ).click( burgerCatalogStatus );
$( '.burger-close-catalog' ).click( burgerCatalogStatus );

//hideburgerOrResize


$( window ).resize(function() {

    let headerWrapper = $('.header');
    let burger = $('.burger');
    let burgerWrapper = $('.burger-wrapper');
    let background = $('.burger-open-background');
    let body = $('body');
    let header = $('.sticky-header-smartphone');

    if(headerWrapper.hasClass('header-catalog-open')){
        if(window.innerWidth > 1199.98){
            burgerWrapper.removeClass('burger-wrapper-open');
            background.removeClass('burger-open-background-open');
            body.removeClass('body-hidden').css('padding-right','0px');
            header.css({'width':'calc(100% - 0px)','margin-left':'0px'});
            burger.removeClass('burger-open');
        }else{
            burger.addClass('burger-open');
            burgerWrapper.addClass('burger-wrapper-open');
            background.addClass('burger-open-background-open');
            body.addClass('body-hidden').css('padding-right',getScrollbarWidth()+'px');
            header.css({'width':'calc(100% - '+getScrollbarWidth()+'px)', 'margin-left':'auto'});
        }
    }

    if(burger.hasClass('burger-open')){
        if(window.innerWidth > 1199.98){
            burgerWrapper.removeClass('burger-wrapper-open');
            background.removeClass('burger-open-background-open');
            body.removeClass('body-hidden').css('padding-right','0px');
            header.css({'width':'calc(100% - 0px)','margin-left':'0px'});
            burger.removeClass('burger-open');
        }
    }

});


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

$( window ).resize(function() {

    let catalogWrapper = $('.catalog-home-section');
    let catalogHeaderWrapper = $('.catalog-header');

    checkHeight(catalogWrapper,'height',36);
    checkHeight(catalogHeaderWrapper,'height',36);

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

/////////////////BURGER

function burgerOpen(event){

    event.preventDefault();

    let burger = $('.burger');
    let burgerWrapper = $('.burger-wrapper');
    let background = $('.burger-open-background');
    let body = $('body');
    let header = $('.sticky-header-smartphone');


    burger.addClass('burger-open');
    body.addClass('body-hidden').css('padding-right',getScrollbarWidth()+'px');
    header.css({'width':'calc(100% - '+getScrollbarWidth()+'px)', 'margin-left':'auto'});

    setTimeout(function() {
        burgerWrapper.addClass('burger-wrapper-open');
        background.addClass('burger-open-background-open');
      }, 10);

}

$('.header-open-burger').click( burgerOpen );

function burgerClose(){

    let burger = $('.burger');
    let burgerWrapper = $('.burger-wrapper');
    let background = $('.burger-open-background');
    let body = $('body');
    let header = $('.sticky-header-smartphone');

    burgerWrapper.removeClass('burger-wrapper-open');
    background.removeClass('burger-open-background-open');
    body.removeClass('body-hidden').css('padding-right','0px');
    header.css({'width':'calc(100% - 0px)','margin-left':'0px'});

    setTimeout(function() {
        burger.removeClass('burger-open');
      }, 300);

}

$('.burger-open-background').click( burgerClose );

///////////////////////////////////////////////

///-----------------------------

////////////////////////////////////////////////////////////////CATALOG NAVIGATION


///////////////search and infowindows

//Open hide search

function openSearch(){
    
    let hideSearch = $('.hide-search');

    hideSearch.addClass('active');

}

$('.hide-search').click( openSearch );

///////////////////////////////////////////////INFOWINDOWS

///-----------------------------

////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////

///-----------------------------

////////////////////////////////////////////////////////////////INFOWINDOWS

///////////////////////////////////////////////MODALS

///-----------------------------

////////////////////////////////////////////////////////////////

function modalOpen(modalId){

    let modal = $(modalId);
    let modalBackground = modal.find('.modal-body-background');
    let modalWrapper = modal.find('.modal-wrapper');
    let body = $('body');
    let header = $('.sticky-header-smartphone');

    modal.addClass('active');

    body.addClass('body-hidden').css('padding-right',getScrollbarWidth()+'px');

    if(window.innerWidth < 767.98){
        header.css({'width':'calc(100% - '+getScrollbarWidth()+'px)', 'margin-left':'auto'});
    }

    setTimeout(function() {
        modalBackground.addClass('active');
        modalWrapper.addClass('active');
    }, 10);
}

$('.open-cart-modal').click( function(){
	modalOpen('#cartmodal');
});

$('.open-cart-tablet-modal').click( function(){
    if(window.innerWidth < 991.98){
        modalOpen('#cartmodal');
    }
});

$('.open-cabinet-modal').click( function(){
	modalOpen('#cabinetmodal');
});

$('.open-call-modal').click( function(){
	modalOpen('#callmodal');
});

//close modals

function closeModal(modalId){

    let modal = $('#'+modalId);
    let modalWrapper = modal.find('.modal-wrapper');
    let modalBackground = modal.find('.modal-body-background');
    let body = $('body');
    let header = $('.sticky-header-smartphone');

    modalBackground.removeClass('active');
    modalWrapper.removeClass('active');

    

    setTimeout(function() {
        modal.removeClass('active');
        body.removeClass('body-hidden').css('padding-right','0px');
        if(window.innerWidth < 767.98){
            header.css({'width':'calc(100% - 0px)','margin-left':'0px'});
        }
    }, 300);

}

$('.modal-content').click( function(e){
    if($('.modal-wrapper').parent($(this)).has(e.target).length === 0){
        closeModal($(this).parent('.modal').attr('id')); 
    }
});

$('.modal-close').click( function(){
    closeModal($(this).closest('.modal').attr('id'));
});

///////////////////////////////////////////////

///-----------------------------

////////////////////////////////////////////////////////////////MODALS

function checkHeaderStickySize(){

    let modals = $('.modal');
    let header = $('.sticky-header-smartphone');

    $( modals ).each(function() {
        if($(this).hasClass('active')){
            if(window.innerWidth < 767.98){
                header.css({'width':'calc(100% - '+getScrollbarWidth()+'px)', 'margin-left':'auto'});
            }else{
                header.css({'width':'calc(100% - 0px)','margin-left':'0px'});
            }
        }
      });
}

$( window ).resize( checkHeaderStickySize );

///////////////////////////////////////////////FORM-CONTROL

///-----------------------------

////////////////////////////////////////////////////////////////

//one-click-order-form-control


$(document).ready(function(){
    $('.one-click-order-number').inputmask({
        mask: "+38 (999) 999-99-99",
        showMaskOnHover: false,
        oncomplete: function(){ 
            $('.one-click-order-button').removeAttr('disabled');
        }
    }); 
});

$('.one-click-order-number').on('input change focusout', function() {
    let inputVal = $(this).val().replace(/[^0-9]/g, "");

    if (inputVal.length < 12){
        $('.one-click-order-button').attr("disabled", "true");
    }else{
        $('.one-click-order-button').removeAttr('disabled');
    }

});


//quantity-form-control

$('.product-quantity-plus').click( function(){
    $(this).prev().val(+$(this).prev().val() + 1);
});

$('.product-quantity-minus').click( function(){
    if ($(this).next().val() > 1) {
        $(this).next().val(+$(this).next().val() - 1);
    }
});

$('.product-quantity-value').focusout(function(){
    if($(this).val() == '' || $(this).val() < 1){
        $(this).val(1);
    }
});

$( "#login" ).validate({
    errorElement: "span",
    errorClass: "invalid-input",
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
        email: {
          required: "Поле обов`язкове для заповнення",
          email: "Ваша електронна адреса має бути у форматі name@domain.com"
        },
        password: {
            required: "Поле обов`язкове для заповнення"
          }
      }
});

$( "#call" ).validate({
    errorElement: "span",
    errorClass: "invalid-input",
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      }
    },
    messages: {
        name: {
          required: "Поле обов`язкове для заповнення"
        },
        phone: {
            required: "Поле обов`язкове для заповнення"
        }
      }
});



//hide password

$('.hide-password').click( function(){

    let input = $(this).next();
    let type;

    if(input.attr('type') == "text"){
        type = "password";
    }else{
        type = "text";
    }

    input.prop('type', type);

});

$(document).ready(function(){
    $('.call-modal-phone').inputmask({
        mask: "+38 (999) 999-99-99",
        showMaskOnHover: false,
        oncomplete: function(){ 
            $('.call-submit-button').removeAttr('disabled');
        }
    }); 
});

$('.call-modal-phone').on('input change focusout', function() {
    let inputVal = $(this).val().replace(/[^0-9]/g, "");

    if (inputVal.length < 12){
        $('.call-submit-button').attr("disabled", "true");
    }else{
        $('.call-submit-button').removeAttr('disabled');
    }

});

///////////////////////////////////////////////

///-----------------------------

////////////////////////////////////////////////////////////////FORM-CONTROL




