function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var body = document.querySelector("body");
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    body.appendChild(script);
};
function doneLoading(){
    var $nav = $('#navbar');
    $nav.load("/assets/templates/navbar.html", function(){
        if(active){
            var $active = $('#' + active);
            $active.addClass("active");
            $active.children().append(' <span class="sr-only">(current)</span>');
        }
    });
    console.log("Done loading")
};
function loadBootstrap(){
    loadScript("/assets/libs/bootstrap/js/bootstrap.min.js",doneLoading);
};
function loadPopper() {
    loadScript("/assets/libs/popper.min.js", loadBootstrap);
};
loadScript("/assets/libs/jquery-3.4.0.min.js", loadPopper);
