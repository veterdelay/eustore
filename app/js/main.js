//Header cart to top-header -- smartphones-

function cartToTop(){
    let cart = $('.header-cart');
    let screenSize = screen.width;
    let topPosition = $('.header-body-content');
    let bottomPosition = $('.header-bottom-interactive');

    if(screenSize < 768 || window.innerWidth < 768){
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
$( window ).on( 'resize', cartToTop );

//Catalog block home

function formCatalog(){
    let catalog = $('.first-catalog');
    let catalogCopy = catalog.clone();
    let appendParent = $('.catalog-and-question');

    catalogCopy.addClass('home-catalog-wrapper');
    catalogCopy.prependTo(appendParent);
}

$( document ).ready( formCatalog );


//Open/Close header catalog (static)

function openCatalog(){

    let catalogWrapper = $('.catalog-header');
    let catalogButton = $('.header-catalog');

    catalogWrapper.toggleClass('catalog-close').toggleClass('catalog-open');
    catalogButton.toggleClass('catalog-close').toggleClass('catalog-open');
    
}

$('.header-catalog').on( 'click', openCatalog );

//Close header catalog 

function closeCatalog(){

    let catalogWrapper = $('.catalog-header');
    let catalogButton = $('.header-catalog');
    let target = event.target;

    if(catalogWrapper.hasClass('catalog-open') && !catalogButton.is(target) && !catalogButton.children().is(target)){
        if ( !catalogWrapper.is(target) && catalogWrapper.has(target).length === 0 ) {
            catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
            catalogButton.removeClass('catalog-open').addClass('catalog-close');
        }
    }

}

$( document ).click( closeCatalog );

//Open header catalog effect

$( window ).on('load', function() {
    let catalogButton = $('.header-catalog');
    $( '.home-catalog-wrapper' ).hover(function() {
        catalogButton.toggleClass('catalog-close').toggleClass('catalog-open');
      });
});

//Desktop catalog menu

function catalog(){
    
}




