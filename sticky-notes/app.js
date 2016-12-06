/*$(document).ready(function() {
    var count = 1;
    var $container = $(".container");
    $(".box-creator-button").click(function() {
        var $stickyNote = $("<div></div>").addClass("box");
        var $stickyColor = $(".box-color-input").val();
        var $stickyMessage = $(".box-color-note").val();
        $stickyNote.css({backgroundColor: $stickyColor});
        $stickyNote.html(count++ + ". " + $stickyMessage);
        $container.append($stickyNote);
        $(".box-color-input").val("");
        $(".box-color-note").val("");
    });
});*/

function queueCreator(waitList){
    var positionInQueue = 1;

    for (var i=0; i<waitList.length; i++) {
        function getPosition(position) {
            waitList[i].id = function() {
                return position;
            };
        }
        getPosition(positionInQueue);
        positionInQueue++
    }

    return waitList;
}

var people = [{name:'George'},{name:'Chris'}];

var queueList = queueCreator(people);

console.log(queueList[0].id());