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