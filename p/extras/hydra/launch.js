function launch(){
    var hydra = window.open("./hydra.html", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000,top=10000,width=1,height=1,visible=none', '');
}
function checkAccess(){
    var hasAccess = window.open("/")
    if(hasAccess){
        hasAccess.close();
        document.querySelector("button").addEventListener("click", launch);
    } else {
        document.querySelector("button").addEventListener("click", function(){
            alert("Please allow popups and try again!");
            checkAccess();
        })
    }
};
checkAccess();
