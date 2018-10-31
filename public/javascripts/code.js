
var countdown = 20;

function getRandInfo(){
    $("#getRandInfoButton").hide();
    
    //get the random info!
    $.getJSON("getRandInfo", function(data) {
        
        console.log(data);
        
        //hide the top text
        $(".hideText").hide();
        
        //change one of the top text to be more relevant
        $("#topMainText").text("Well, " + data.name + ", You've Got a Whole New World Ahead of You, Good Luck");
        
        $("#name").text(fill("Name: ", 20) + data.name);
        
        $("#username").text(fill("Online Username: ", 20) + data.username);
        
        $("#email").text(fill("Email: ", 20) + data.email);
        
        $("#website").text(fill("Website: ", 20) + data.website);
        
        var addressHTML = "<h2>" + "New Address<br>";
        
        addressHTML += data.address.streetA + "<br>" + 
            data.address.streetB + "<br>" +
            data.address.zipcode + "<br>" +
            data.address.state + "<br></h2>";
        
        
        $("#address").html(addressHTML);
        
        var companyHTML = "<h2><br>" + "You are now the CEO of this Fortune 500 Company:<br>";
        
        companyHTML += data.company.name + "<br>\"" + 
            data.company.catchPhrase + "\"<br>With a BS in: " +
            data.company.bs + "<br></h2>";
        
        
        $("#company").html(companyHTML);
        
        $("#timer").text(countdown);
        
        $("#countdownDescription").show();
        
        var audio = new Audio('../depthCharge.mp3');
        
        setInterval(function(){
            countdown--;
            $("#timer").text(countdown);
            
            if(countdown <= 0){
                //explosion noise
                countdown = 0;
                
                audio.play();
                //play the explosion sound
                
                $("body").fadeOut(1000)
                    .delay(3000, function(){
                        window.location.reload(false); 
                    });
                
                $("html").css("background-image", "url(https://media.giphy.com/media/XUFPGrX5Zis6Y/giphy.gif)");
                
            }
        }, 1000);
        
    });
    
}

function fill(str, size){
    var returnString = str;
    
    for(var i = str.length; i < size; i++){
        returnString += " ";
    }
    return returnString;
}