
function myFunction() {
   document.getElementById("signtitle").innerHTML = "Sign Up";
}

$('.message a').click(function(){
$('form').animate({height: "toggle", opacity:"toggle"}, "slow");
});


window.onload = function () {

    function validate(e) {
        var username = document.getElementById('username');
        if (username.value.trim() == '') {
            username.style.backgroundColor = '#ff4c4c';

            // Add a class that defines an animation
            username.classList.add('error');

            // remove the class after the animation completes
            setTimeout(function() {
                username.classList.remove('error');
            }, 300);

            e.preventDefault();
        } else {
            username.style.backgroundColor = null;
        }
        var password = document.getElementById('password');
        if (password.value.trim() == '') {
            password.style.backgroundColor = '#ff4c4c';

            // Add a class that defines an animation
            password.classList.add('error');

            // remove the class after the animation completes
            setTimeout(function() {
                password.classList.remove('error');
            }, 300);

            e.preventDefault();
        } else {
            password.style.backgroundColor = null;
        }
    }
    document.getElementById('login').addEventListener('submit', validate);
}
