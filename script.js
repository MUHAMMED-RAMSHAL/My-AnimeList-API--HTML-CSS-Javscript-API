async function fetchData() {
  const apiUrl = "https://api.jikan.moe/v4/random/anime";
  const animeList = document.getElementById("animeList");

  try {
    for (let i = 0; i < 50; i++) {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const anime = data.data;

      const allRow = document.createElement("tr");

      //  data into the row in cover image, title, type, and score
      allRow.innerHTML = `
                    <td><img src="${anime.images.jpg.image_url}" alt="${
        anime.title
      }"></td>
                    <td>${anime.title}</td>
                    <td>${anime.type}</td>
                    <td>${anime.score ? anime.score : "null"}</td>
                    
                `;

      if (anime.score > 7.5) {
        allRow.classList.add("highlight-orange");
      } else if (anime.score >= 5&& anime.score <=7.5) {
        allRow.classList.add("highlight-blue");
      } else if (anime.score < 1&&"null" ) {
        allRow.classList.add("dark");
      } 
     
      animeList.appendChild(allRow);
    }
  } catch (error) {
    console.error("Error fetching the anime data:", error);
  }
}

// Fetch anime data  page loads
fetchData();
