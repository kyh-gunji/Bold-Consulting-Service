// ハンバーガーメニュー
$(function () {
    $(".header-nav").hide();
    $(".header-inner-right").click(function () {
        if ($(".header-inner-right").hasClass("header-inner-right-active")) {
            $(".header-nav").slideUp(300);
            $(".header-inner-right").removeClass("header-inner-right-active");
            $(".header-inner-right-toggle-line").removeClass("header-inner-right-toggle-line-active");
        } else {
            $(".header-nav").slideDown(300);
            $(".header-inner-right").addClass("header-inner-right-active");
            $(".header-inner-right-toggle-line").addClass("header-inner-right-toggle-line-active");
        }
    });

    $(".header-nav-lists-list-link").click(function () {
        $(".header-nav").slideUp(300);
        $(".header-inner-right").removeClass("header-inner-right-active");
        $(".header-inner-right-toggle-line").removeClass("header-inner-right-toggle-line-active");
        var target = $($(this).attr("href")).offset().top;
        $("html, body").animate({ scrollTop: target }, 1000);
    });
    return false;
});

// アコーディオン
$(function () {
    $(".faq-list-answer").hide();
    $(".faq-list").click(function () {
        if ($(this).hasClass("open")) {
            $(this).children(".faq-list-answer").stop().slideUp();
            $(this).children().children(".faq-list-icon").html("&#43;").css("transform", "translateY(-50%)").css("top", "50%");
            $(this).removeClass("open");
        } else {
            $(this).children(".faq-list-answer").stop().slideDown();
            $(this).children().children(".faq-list-icon").html("&mdash;").css("transform", "translateY(1em)").css("top", "0");
            $(this).addClass("open");
        }
    });
});

// ページトップ
$(function () {
    $(".footer-caption").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });
});

// スマートフォンで全画面表示
$(document).ready(function () {
    var hSize = $(window).height();
    $('.header-nav').height(hSize); // アドレスバーを除いたサイズを付与
    $('.header-nav-lists').height(hSize); // アドレスバーを除いたサイズを付与
});
$(window).resize(function () { // ページをリサイズした時の処理
    var hSize = $(window).height();
    $('.header-nav').height(hSize); // アドレスバーを除いたサイズを付与
    $('.header-nav-lists').height(hSize); // アドレスバーを除いたサイズを付与
});