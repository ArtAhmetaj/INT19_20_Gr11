function  koha()
{


var currentTime = new Date().getHours();

if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.style.backgroundImage = "url('Homepage/cloth_alike.png')"; 

       
     
    }
}  
else {
    if (document.body) {

        document.body.style.backgroundImage = "url('/home/art/Documents/github/INT19_20_Gr11/FolderiFinal/email-pattern.png')";
        
        

        
    }
}

}

koha();
setInterval(koha, 1000 * 60);

