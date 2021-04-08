function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}



//Directory -A JSON File Card View

fetch("directory/citydirectory.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject);
            const businessName = jsonObject["business"];
            for (let i = 0; i < businessName.length; i++) {

                let businesscards = document.createElement ("div");
                let h2 = document.createElement ("h2");
                let p = document.createElement ("p");
                let p1 = document.createElement ("p");
                let a = document.createElement ("a");
                
               

                h2.textContent = businessName [i].name;
                p.textContent = "Contact Number:" + " " + businessName[i].contactNumber;
                p1.textContent = "Email Address:" + " " + businessName[i].emailAddress;
                a.textContent = "Website:" + " " + businessName[i].website;
                a.setAttribute("href", businessName[i].website);
               
                

                

                businesscards.appendChild (h2);
                businesscards.appendChild (p);
                businesscards.appendChild (p1);
                businesscards.appendChild (a);
                
                
                
                
                
                document.querySelector("div.businesscards").appendChild (businesscards);
            }
               
            });




  //Lazy Load

  let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};


imagesToLoad.forEach((img) => {
    loadImages(img);
  });
  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    },imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

