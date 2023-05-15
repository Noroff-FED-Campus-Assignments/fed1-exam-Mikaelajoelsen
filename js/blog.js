const detailContainer = document.querySelector("#js-results");

const url =
  "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30";

async function fetchresults() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    makeCards(results);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchresults();

function makeCards(postsArray) {
  const blogContainer = document.querySelector("#blog-container");
  console.log(postsArray);
  postsArray.forEach((post) => {
    blogContainer.innerHTML += `
      <a href="details.html?id=${post.id}" class="container">
        <h2>${post.title.rendered}</h2>
        <p class="Title">${post.excerpt.rendered}</p>
      </a>
    `;
  });
}
