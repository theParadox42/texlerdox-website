function launch(){
    var hydra = window.open("./hydra.html", '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000,top=10000,width=10,height=10,visible=none', '');
    if(!hydra) {
        alert("Allow popups and try again!")
    } else {
        return true;
    }
}
var clearNum = 0;
document.querySelector("button").addEventListener("click", function(){
    clearNum = setInterval(function(){
        if(launch()){
            clearInterval(clearNum)
        }
    }, 1000)
})
