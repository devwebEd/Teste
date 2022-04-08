// Owl Carousel
$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
       items:1,
       loop:true,
       nav:true,
    //    dots:true,
       autoplay:true,
       autoplaySpeed:1000,
       smartSpeed:1500,
       autoplayHoverPause:true
   });
});
//
//Function modal
function openModal(img){
    var modalW = document.getElementById("window--modal");
    var modalClose = document.getElementById("x--close");
    var midalI = document.getElementById("image--modal");

    modalW.style.display="block";
    midalI.src=img;
    modalClose.onclick=function(){
        modalW.style.display="none";
    }
}
//
//

if (document.body.clientWidth < 1220) {
        
    let e = document.getElementById('cupon--info--container');
    e.classList.add('owl-carousel','owl-theme');
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
}


//Active the slider mobile on cupon--info
document.body.onresize = function() {
    if (document.body.clientWidth < 1220) {
        
        let e = document.getElementById('cupon--info--container');
        e.classList.add('owl-carousel','owl-theme');
        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplaySpeed:1000,
            smartSpeed:1500,
            autoplayHoverPause:true
        });

    } if (document.body.clientWidth > 1220) {        
        let e = document.getElementById('cupon--info--container');
        e.classList.remove('owl-carousel','owl-theme');
     
    }
}


//
//Putting the products on the table
//auxiliares
const s = (el)=>document.querySelector(el);
const sa = (el)=>document.querySelectorAll(el);

productsJson.map((item, index)=>{
    let productItem = s('.card--container').cloneNode(true);

    //Fill the information of the products.
    productItem.querySelector('.product--image').src = item.image;
    productItem.querySelector('.product--flag').src = item.flag;
    productItem.querySelector('.product--name h2').innerHTML = item.name;
    productItem.querySelector('.discount .discount--price').innerHTML = `${item.descout_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    productItem.querySelector('.discount .desctount--porcentage').innerHTML = `${item.porcentage_descount}%OFF`;
    productItem.querySelector('.partner--prices .parter--price').innerHTML = `${item.partner_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    productItem.querySelector('.not--partner--price p').innerHTML = `NÃO SÓCIO ${item.not_partner_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;



    s('.cards--flex').append(productItem);
});

