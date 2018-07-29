$(function(){
    var homeTimer,
        sb1Timer,
        sb1ChildTimer,
        q2Timer,
        q3Timer,
        calTimer;

    // home
    homeTimer = setTimeout(function(){
        $('.home').addClass('hidden');
        $('.question1').removeClass('hidden');
    }, 5000);

    // question1
    sb1Timer = setTimeout(function () {
        $('.question1 .sidebar').addClass('is-out');
    }, 6700);
    sb1ChildTimer = setTimeout(function () {
        $('.question1 .sidebar').removeClass('hide-child');
    }, 8000);
    $('.question1 .answer').click(function(){
        $('.question1 .sidebar').addClass('hide-child');
        setTimeout(function() {
          $('.question1 .sidebar').addClass('is-full');
        }, 700);
        setTimeout(function () {
            $('.question1').addClass('hidden');
        }, 2000);
    })
});