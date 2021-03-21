//JSON

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns']; 
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {

        let card = document.createElement('section');
        let info = document.createElement('div');
        let imgbox = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = towns[i].name; 
        h3.textContent = towns[i].motto;
        p.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p1.textContent = 'Population: ' + towns[i].currentPopulation;
        p2.textContent = 'Annual Rain Fall: ' + parseInt(towns[i].averageRainfall) + '"';
        img.setAttribute('src', 'images/' + towns[i].photo);
        img.setAttribute('alt', ('Image of the town of ' + towns[i].name));
        info.setAttribute('class', 'info');
        imgbox.setAttribute('class','imgbox');
        
        card.appendChild(info);
        card.appendChild(imgbox);
        info.appendChild(h2);
        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(p1);
        info.appendChild(p2);
        imgbox.appendChild(img);
        
        document.querySelector('div.cards').appendChild(card);}
  }});
