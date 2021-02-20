//Current Date at footer
{
    var current = new Date();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("currentDate").innerHTML = day[current.getDay()] + "," + current.getDate() + " " + month[current.getMonth()] + "" + current.getFullYear();
}


//Toggle menu for small screen
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//Pancake message that appears only on Friday's


{
    var now = new Date();
    var dayOfWeek = now.getDay();
    
    
    if (dayOfWeek == 5) {
        document.getElementById("pancakes").style.display = "block";
    }
    else {
        document.getElementById("pancakes").style.display = "none";
    }

   
}


