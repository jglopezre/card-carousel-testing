$(document).ready(() => {

    let boxCount = 30

    for (let i = 0; i < (boxCount + 1); i++) {
        $(`<div class="card"><h1>${i + 1}</h1></div>`).appendTo('#carousel-01')
    }
        
    let cardArr = Array.from($('.card'));
    
    cardArr.forEach((d) => {
        d.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
    
    $('#carousel-01').owlCarousel({
        loop: false,
        margin: 15,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsiveBaseElement: ".wrapper",
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            700: {
                items: 3,
            }
        }         
    }); 
    
    
});