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
$( window ).on( "resize", cartToTop );

