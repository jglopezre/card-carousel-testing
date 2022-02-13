$(document).ready(() => {

    const cardGenerator = (boxCount) => {
        for (let i = 0; i < boxCount; i++) {
            $(`<div class="card"><h1>${i + 1}</h1></div>`).appendTo('#carousel-01')
        }
            
        let cardArr = Array.from($('.card'));
        
        cardArr.forEach((d) => {
            d.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    }
    
    $('#action-button-01').click( (element) => {
        element.preventDefault();

        const $checkDots = $('#dots-check');
        const $checkNav = $('#nav-check');
        const $checkDrag = $('#drag-check');
        const $checkAutoplay = $('#auto-play-check');
        const $checkRewind = $('#rewind-check');
        const $checkLoop = $('#loop-check');
        const $checkCenter = $('#center-check');
        const $inputField = $('#input-field-01');

        $checkDots.attr('disabled', 'true');
        $checkNav.attr('disabled', 'true');
        $checkDrag.attr('disabled', 'true');
        $checkAutoplay.attr('disabled', 'true');
        $checkRewind.attr('disabled', 'true');
        $checkLoop.attr('disabled', 'true');
        $checkCenter.attr('disabled', 'true');
        $inputField.attr('disabled', 'true');
        


        cardGenerator( parseInt($inputField.prop('value')) );
        
        $('#action-button-01').attr('disabled', 'true'); //Disables action button

        let carousel01 = $('#carousel-01').owlCarousel({
            margin: 15,
            center: $checkCenter.prop('checked'),
            loop: $checkLoop.prop('checked'),
            nav: $checkNav.prop('checked'),
            navText: ['PREV', 'NEXT'],
            dots: $checkDots.prop('checked'),
            autoplay: $checkAutoplay.prop('checked'),
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            rewind: $checkRewind.prop('checked'),
            mouseDrag: $checkDrag.prop('checked'),
            responsiveClass: true,
            responsiveBaseElement: ".wrapper",
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                400: {
                    items: 2,
                },
                700: {
                    items: 3,
                }
            }         
        }); 

    } );


    
});