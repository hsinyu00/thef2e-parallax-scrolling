(function(){
    var homeTimer,
        sb1Timer,
        sb1ChildTimer,
        q2Timer,
        q3Timer,
        calTimer;

    // home
    homeTimer = setTimeout(function(){
        $('.home').hide();
        $('.question1').show();
    }, 5000);

    // question1
    sb1Timer = setTimeout(function () {
        $('.question1 .sidebar').addClass('is-out');
    }, 6700);
    sb1ChildTimer = setTimeout(function () {
        $('.question1 .sidebar').removeClass('hide-child');
    }, 8000);
    $('.q1 .answer').click(function() {
        $('.question1').hide();
      });
})();