//top으로 올라가는 버튼
$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});

//메인비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false
    });

    //슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on')
    });

    //슬라이드 arrow
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });



});


//메인 product slide

$(function () {
    $('.main_product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
    });
});

//패밀리링크

$(function () {
    $('#flnk').on('change', function () {
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
})


//패밀리링크

$(function () {
    $('#flnk').on('change', function () {
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
});

//탭 메뉴구현

$(function () {
    $('.main_promotion .left .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);
        $('.main_promotion .left .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on')
    })
})