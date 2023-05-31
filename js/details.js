/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

const detailContainer = document.querySelector("#js-results");
const searchEl = document.querySelector("#js-search");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(detailContainer);

const id = params.get("id");

const url = `https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/${id}`;

console.log(id);

async function fetchPosts() {
  try {
    detailContainer.innerHTML = `<div class="loader"></div>`;

    const response = await fetch(url);
    const results = await response.json();
    console.log("results", results);

    detailContainer.innerHTML = `
       <div class="card-details">
         <div class="container">
           <h2>${results.title.rendered}</h2>
           <p>${results.content.rendered}</p>
         </div>
       </div>
     `;
  } catch (error) {
    console.log("error message", error);
    return null;
  }
}

fetchPosts();
