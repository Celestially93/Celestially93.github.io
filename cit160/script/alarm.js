 {
     //Input:
     var now = new Date();
     var month = now.getMonth();
     var dayOfMonth = now.getDate();
     var dayOfWeek = now.getDay();

     //Processing:

     let message;
     if (month == 0 && dayOfMonth == 1 || (month == 6 && dayOfMonth == 4)) {
         message = "Sleep in😴";
     } else if (month == 11 && dayOfMonth == 25 || (dayOfWeek == 0 || dayOfWeek == 6)) {
         message = "Sleep in😴";
     } else {
         message = "Get up🌞";
     }

     //Output:
     document.getElementById("output").innerHTML = message;

 }