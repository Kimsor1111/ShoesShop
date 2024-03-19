$(document).ready(function(){
    $('.fa-magnifying-glass').click(function(){
        document.querySelector('.search').value = '';
    })
    $('.fa-cart-shopping').click(function(){
        $('.cart-container').css({'transform' : 'translateX(0)'})
    })
    $('.cart-container .close p').click(function(){
        $('.cart-container').css({'transform' : 'translateX(500px)'})
    })
    $('.fa-user').click(function(){
        $('.login').css({'transform' : 'translateY(0)'})
    })
    $('.close-login').click(function(){
        $('.login').css({'transform' : 'translateY(-100%)'})
    })
    
})