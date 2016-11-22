// Write an IIFE function that takes a timer argument.
// The function will automatically execute and count up every second until the specified argument.
// Use the setTimeout function to count up.
// Hint: a second is the timer passed * 1000 (milliseconds).

(function (timer){
    for (var i=1; i<=timer; i++) {
        function runCountDown(j){
            setTimeout(
                function (){
                    console.log( j );
                }, j*1000 );
        };
        runCountDown(i);
    }
})(8);