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
    console.log("Done loading")
    $(document).ready(function() {
        $(window).on("load", function() {
            //insert all your ajax callback code here.
            //Which will run only after page is fully loaded in background.
            var $nav = $('#navbar');
            $nav.load("/assets/templates/navbar.html", function(){
                try {
                    if(active){
                        var $active = $('#' + active);
                        $active.addClass("active");
                        $active.children().append(' <span class="sr-only">(current)</span>');
                    }
                } catch(e){
                    console.log("active was not set")
                }
            });
        });
    });
};
function loadBootstrap(){
    loadScript("/assets/libs/bootstrap/js/bootstrap.min.js",doneLoading);
};
function loadPopper() {
    loadScript("/assets/libs/popper.min.js", loadBootstrap);
};
loadScript("/assets/libs/jquery-3.4.0.min.js", loadPopper);
