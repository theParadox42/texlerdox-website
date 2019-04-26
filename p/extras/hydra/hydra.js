var windows = [];
function generateWindow(x,y){
    windows.push(window.open("./head",'_blank', 'width=1000,height=1000,left='+x+',top='+y));

}
generateWindow(0,0);
if(!windows[0]){
    alert("Please allow popups");
    window.location.reload();
} else {
    setInterval(function(){
        for(var i = windows.length-1; i > -1; i --){
            if(!windows[i]||!windows[i].parent){
                if(windows.length<=1){
                    generateWindow(0,0);
                } else {
                    generateWindow(Math.random()*1000,Math.random()*500);
                }
                generateWindow(Math.random()*1000,Math.random()*500);
                windows.splice(i, 1);
            }
        }
    }, 20)
}
