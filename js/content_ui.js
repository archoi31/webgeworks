'use strict'
$(function(){
    // swiper thumnail
    if($('.swiper-thum').length > 0){ swiperThumController();}

	// Tab
    if ($('.ui-tab').length > 0) { tabMenu();}

    // Layer popup
    if ($('.ui-open-pop').length > 0) { layerPop();}

    // Cont-wrap
    if ($('.cont-wrap').length > 0) { contWrapHeight();}

});


// swiperThumController
function swiperThumController(){
	const swiperThum = new Swiper(".swiper-thum", {
        spaceBetween: 16,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
    });
    
    const swiperMain = new Swiper('.swiper-main', {
        // Optional parameters
        loop: true,
        thumbs: {
            swiper: swiperThum,
        },
    });
}




// Tab
function tabMenu () {
    var tab = $('.ui-tab'),
        anchor = tab.find('li').children('a');

    anchor.on('click', function (event) {
        var tabID = $(this).attr("href");
		event.preventDefault();

        tabClick (this);
        if ($(this).parents().siblings('.ui-tab-container').length > 0) {
            $(tabID).addClass("active").siblings().removeClass("active");
        }
    });
}

function tabClick (el) {
    $(el).parent('li').addClass('current').siblings('li').removeClass('current');
}


// LayerPop
function layerPop (id) {
    var btnAnchor = $('.ui-open-pop'),
        close = $('.ui-close-pop')
    
    btnAnchor.on('click', function () {
        btnTarget = $(this);
        var popupID;

        if(btnTarget.is('button, div')) popupID = btnTarget.attr('data-layer');
        else if(btnTarget.is('a')) popupID = btnTarget.attr("href")
        
        popLayer = $(popupID);

        if(!btnTarget.parents('.layer-pop').length) layerOpen (popLayer);
        else if(btnTarget.parents('.layer-pop').length) innerlayerOpen (popLayer);
    })

    var popupElem = $(id);
    if ($(id).hasClass('onload')) layerOpen (popupElem);

    close.on('click', function () {
        btnTarget = $(this);
        if(!popupElem.hasClass('onload')) layerClose($(this), btnTarget);
        else layerClose($(this));
    })
}

function layerOpen (id) {
    var scrollValue = $('body').scrollTop();
    
    $('body').css({'overflow':'hidden'}).scrollTop(scrollValue);
    $(id).show().attr('tabIndex','0').focus;
}

function innerlayerOpen (id) {
    var scrollValue = $('body').scrollTop();

    $('body').addClass('layer-dim').scrollTop(scrollValue);
    $(id).show().addClass('layer-index').attr('tabIndex','0').focus;

    layerHeight ()
}

function layerClose (el, btnTarget) {
    var layerWrap = $(el).parents('.layer-wrap');

    if(!$(el).parents('.layer-index').length) $('body').removeAttr('style');
    else if($(el).parents('.layer-index').length) $('body').removeClass('layer-dim');
   
    $('.layer-pop').removeAttr('style');
    layerWrap.hide();

    if(!layerWrap.hasClass('onload')) btnTarget.focus();
}

//Contwrap 높이
function contWrapHeight(){
    var headerHeight = $('header').outerHeight(); 
    var prdImageHieght = $('.area-prd-image').outerHeight(); 
    var tabHeight =  $('.custom-tab').outerHeight(); 
    var submitWrapHeight =  $('.submit-wrap').outerHeight(); 
    var windowHeight = window.innerHeight;

    var contWrapHeight = windowHeight - (headerHeight + prdImageHieght + tabHeight + submitWrapHeight) - 32;
    
    console.log('prdImageHieght',prdImageHieght)
    console.log('tabHeight',tabHeight)
    console.log('submitWrapHeight',submitWrapHeight)
    console.log('windowHeight',windowHeight)
    console.log('contWrapHeight',contWrapHeight)

    $('.cont-wrap').css("height",contWrapHeight );
}