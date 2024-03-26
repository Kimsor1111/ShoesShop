$(document).ready(function(){
    $('.fa-magnifying-glass').click(function(){
        document.querySelector('.search').value = '';
    })
    $('.cart').click(function(){
        $('.cart-container').css({'transform' : 'translateX(0)'})
    })
    $('.cart-container .close p').click(function(){
        $('.cart-container').css({'transform' : 'translateX(40vw)'})
    })
    $('.fa-user').click(function(){
        $('.login').css({'transform' : 'translateY(0)'})
    })
    $('.close-login').click(function(){
        $('.login').css({'transform' : 'translateY(-100%)'})
    })
    $('.password').mousedown(function(){
        $('.fa-eye-slash').css({'display' : 'block'})
    })
    $('.fa-eye-slash').click(function(){
        $(this).css({'display' : 'none'})
        $('.fa-eye').css({'display' : 'block'})
        $('.password').attr('type' , 'text')
    })
    $('.fa-eye').click(function(){
        $(this).css({'display' : 'none'})
        $('.fa-eye-slash').css({'display' : 'block'})
        $('.password').attr('type' , 'password')
    })
    $('.heart').click(function(){
        $('.fav-container').css({'transform' : 'translateX(0)'})
    })
    $('.fav-container .close p').click(function(){
        $('.fav-container').css({'transform' : 'translateX(40vw)'})
    })
    $('.menu .header-icon .icon .fa-bars').click(function(){
        $('.menu nav').toggle();
    })
})