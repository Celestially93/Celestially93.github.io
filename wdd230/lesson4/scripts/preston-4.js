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
    
    let message; 
    
    if (dayOfWeek == 5) {
        message = "Saturday 9:00a.m = Preston Pancakes in the Park!";
    }
    else {
        message = "";
    }

    document.getElementById ("pancakes").innerHTML = message;
}