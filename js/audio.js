3$(document).ready(function() {
    var audioElm = $('#Erik-Tacam/Best.mp3').get(0);
    audioElm.play();
    
    var height = $(document).height() - $(window).height();
    
    $(window).scroll(function() {
        audioElm.volume = 1 - $(window).scrollTop() / height;
        console.log(audioElm.volume);
    });
});