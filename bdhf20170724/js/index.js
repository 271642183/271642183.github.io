$('.focus-news .tit a').click(function(){
	$('.focus-news .tit a').removeClass('active')
	$('.focus-news .tit a').eq($(this).index()).addClass('active')
	var tabShowClass = $('.focus-news .tit a').eq($(this).index()).attr('data-num')+'-main';
	$('.focus-news-left-right .tabs-main').removeClass('show')
	$('.focus-news-left-right .tabs-main.'+tabShowClass).addClass('show')
})

var foortTopSwiper = new Swiper('.swiper-container01', {
    pagination: '.swiper-pagination01',
    paginationClickable: true,
    spaceBetween: 0,
    effect: 'fade'
});
var foortTopSwiper = new Swiper('.swiper-container02', {
    pagination: '.swiper-pagination02',
    paginationClickable: true,
    spaceBetween: 0,
    effect: 'fade'
});
var foortTopSwiper = new Swiper('.swiper-container03', {
    pagination: '.swiper-pagination03',
    paginationClickable: true,
    spaceBetween: 0,
    effect: 'fade'
});


var swiper = new Swiper('.swiper-container-notice', {
    // pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true
});

var foortTopSwiper = new Swiper('.footer-top-swiper', {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 0,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});






// 视频
$('.video-main').on('click','a.video',function(){
	var datapaSrc=$(this).attr('data-pasrc');
	var dataemSrc=$(this).attr('data-emsrc');
	$('.datapaSrc').val(datapaSrc);
	$('.dataemSrc').attr('src',dataemSrc);
	$('.alertVideoWrap').toggle()
})
$('.alertVideoWrap .closeVideo').on('click',function(){
	$('.alertVideoWrap').toggle();
})


// window.onscroll= function(){
// 	var clientH = document.documentElement.clientHeight||document.body.clientHeight;
//     //变量t是滚动条滚动时，距离顶部的距离
//     var t = document.documentElement.scrollTop||document.body.scrollTop + clientH;
//     //当滚动到距离顶部200px时，返回顶部的锚点显示
//     if( t-$('.focus-news').position().top>0){
//     	$('.focus-news').addClass('slideInUp')
//     }
//     if( t-$('.mounth-news').position().top>0){
//     	$('.mounth-news').addClass('slideInUp')
//     }

//     if( t-$('.character-special-main').position().top>0){
//     	setTimeout(function(){$('.character-special-main').addClass('slideInUp')},200)
//     }

//     if( t-$('.notice').position().top>0){
//     	setTimeout(function(){$('.notice').addClass('slideInUp')},600)
//     }
//     if( t-$('.footer-top-swiper-wrap').position().top>0){
//     	setTimeout(function(){$('.footer-top-swiper-wrap').addClass('slideInUp')},600)
//     }
// }