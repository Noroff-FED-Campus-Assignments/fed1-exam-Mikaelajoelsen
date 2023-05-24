// const detailContainer = document.querySelector("#js-results");

// const url =
//   "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30";

// async function fetchresults() {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();

//     console.log(results);

//     makeCards(results);
//   } catch (error) {
//     console.log(error);
//     detailContainer.innerHTML = message("error", error);
//   }
// }

// fetchresults();

// function makeCards(postsArray) {
//   const blogContainer = document.querySelector("#blog-container");
//   console.log(postsArray);
//   postsArray.forEach((post) => {
//     blogContainer.innerHTML += `
//       <a href="details.html?id=${post.id}" class="container">
//         <h2>${post.title.rendered}</h2>
//         <p class="Title">${post.excerpt.rendered}</p>
//       </a>
//     `;
//   });
// }

const url =
  "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30";
async function fetchResults() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    makeCards(results);
  } catch (error) {
    console.log(error);
  }
}
fetchResults();
function getImgUrl(someObject) {
  if (someObject && someObject) {
    const regex = /<img[^>]+src="([^">]+)"/g;
    const matches = regex.exec(someObject.rendered);
    if (matches && matches.length >= 2) {
      return matches[1];
    } else {
      return null;
    }
  }
}
function makeCards(postsArray) {
  const blogContainer = document.querySelector("#blog-container");
  postsArray.forEach((post) => {
    const imageUrl = getImgUrl(post.content);
    blogContainer.innerHTML += ` <a href="details.html?id=${post.id}" class="container" style="height: auto;"> <h2>${post.title.rendered}</h2> 
    <img src="${imageUrl}" alt="blog image" style="height: 324px; width: 400px;"> </a> `;
  });
}
