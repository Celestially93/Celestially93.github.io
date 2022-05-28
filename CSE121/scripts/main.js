const output = (disneyCharacters) => {
    temples.forEach((disneyCharacter) => {
      let article = document.createElement("article");
  
      let characterName = document.createElement("h3");
      characterName.textContent = disneyCharacter.characterName;
  
      let characteristics = document.createElement("h5");
      characteristics.textContent = disneyCharacter.location;
  
      let img = document.createElement("img");
      img.setAttribute("src", images);
      img.setAttribute("alt", disneyCharacter.characterName);
  
      article.appendChild(characterName);
      article.appendChild(characteristics);
      article.appendChild(img);
  
      document.querySelector("#disneyCharacters").appendChild(article);
    });
  };
  //Fetch

  const getCharacters = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/2eb71107-5380-4fd2-ab01-46d2e8f2ba1e"
    );
    characterList = await response.json();
    output(characterList);
  };
  getCharacters();
  
  // Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
  const reset = () => {
    document.querySelector("#disneyCharacters").innerHTML = "";
  };