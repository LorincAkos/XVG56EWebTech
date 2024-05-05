$(document).ready(function() {
    $("#home_page").click(function() {
        window.location.href = `index.html`;
    });

    $("#anime_page").click(function() {

        window.location.href = `anime.html?id=${$("#anime_page").attr("value")}`;
    });

    $("#manga_page").click(function() {

        window.location.href = `manga.html?id=${$("#manga_page").attr("value")}`;
    });

    $("#faq_page").click(function() {
        window.location.href = `faq.html`;
    });

    $("#form").click(function() {
        window.location.href = `form.html`;
    });

    $(".anime-item").mouseenter(function(){
        $(this).css({
            width: '35%',
        });
    });

    $(".anime-item").mouseleave(function(){
        $(this).css({
            width: '30%',
        });
    });
    
});

function openAnimeDisplayPage(itemId) {
    window.location.href = `anime.html?id=${itemId}`;
}

function openAnimeDescriptionPage(tmp) {
    window.location.href = `anime_description.html?tmp=${tmp}`;
}

function openMangaDisplayPage(itemId) {
    window.location.href = `manga.html?id=${itemId}`;
}

function openMangaDescriptionPage(tmp) {
    window.location.href = `manga_description.html?tmp=${tmp}`;
}

function openThirdPartyPage(link) {
    window.location.href = link;
}
