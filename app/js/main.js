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


//Open/Close header catalog (static)

function openCatalog(){

    let catalogWrapper = $('.catalog-header');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');
    let submenuItem = $('.submenu-item:first-child');

    catalogWrapper.toggleClass('catalog-close').toggleClass('catalog-open');
    catalogButton.toggleClass('catalog-close').toggleClass('catalog-open');

    setTimeout(function() {
        background.toggleClass('background-open');
      }, 10);
    
}

$('.header-catalog').on( 'click', openCatalog );

//Close header catalog 

function closeCatalog(){

    let catalogWrapper = $('.catalog-header');
    let catalogButton = $('.header-catalog');
    let background = $('.catalog-open-background');


    catalogWrapper.removeClass('catalog-open').addClass('catalog-close');
    catalogButton.removeClass('catalog-open').addClass('catalog-close');
    background.removeClass('background-open');


}

$( '.catalog-open-background' ).click( closeCatalog );

//Open header catalog effect

$( window ).on('load', function() {
    let catalogButton = $('.header-catalog');
    let homeCatalogWrapper = $('.home-catalog-wrapper');
    $( '.home-catalog-wrapper ul' ).hover(function() {
        catalogButton.toggleClass('catalog-close').toggleClass('catalog-open');
        homeCatalogWrapper.toggleClass('home-catalog-open');
      });
});

//Open submenu border-radius

$( window ).on('load', function() {
    let catalogWrapper = $('.catalog-wrapper');
    $( '.submenu-item' ).hover(function() {
        catalogWrapper.toggleClass('sub-catalog-open');
      });
});






