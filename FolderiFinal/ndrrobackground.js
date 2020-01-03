function updateBackground() {

    var hr = (new Date()).getHours();
    var body = document.body;
    var bstyle = body.style;



    if (hr < 20) {
        bstyle.backgroundImage = "url('Homepage/cloth_alike.png')";
            
    }
    else {
        bstyle.backgroundImage = "url('/home/art/Documents/github/INT19_20_Gr11/FolderiFinal/HomePage/foto1.png')";
      

    }
}

updateBackground();

/*   setInterval(updateBackground, 1000 * 60);
 */