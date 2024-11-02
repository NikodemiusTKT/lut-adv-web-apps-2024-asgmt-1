// Dog breeds we want to generate the HTML Elements for
const DOG_BREEDS = ["shiba_inu", "husky", "pitbull", "pug", "doberman"];

document.addEventListener("DOMContentLoaded", initializeApp);

/**
 * Initializes the application by populating the HTML container with
 * generated wiki items for each dog breed.
 *
 * @returns {Promise<void>} - A promise that resolves when all wiki items have
 * been generated and appended to the container.
 */
async function initializeApp() {
  const container = createContainer();
  document.getElementById("app").appendChild(container);
  const wikiItems = await Promise.all(DOG_BREEDS.map(generateWikiItem));
  wikiItems.forEach((item) => container.appendChild(item));
}

function createContainer() {
  const container = document.createElement("div");
  container.className = "container";
  return container;
}

/**
 * Generates a wiki item element for a given dog breed.
 *
 * @param {string} breed - The dog breed to generate the wiki item for.
 * @returns {Promise<HTMLDivElement>} - A promise that resolves to the
 * generated `div` element containing the wiki item.
 */
async function generateWikiItem(breed) {
  // wiki item parent element
  const wikiItem = document.createElement("div");
  wikiItem.className = "wiki-item";

  // wiki-item's child -> wiki content
  const wikiContent = document.createElement("div");
  wikiContent.className = "wiki-content";

  const imgContainer = await generateDogBreedImgElement(breed);

  const [wikiText, wikiHeader] = await generateDogBreedWikiContent(breed);

  wikiItem.appendChild(wikiHeader);
  // Append generated dog breed img-container to wiki-content
  wikiContent.appendChild(imgContainer);
  // wiki-content -> wiki-text element which contains text node
  wikiContent.appendChild(wikiText);
  // Append everything to the wiki-item parent
  wikiItem.appendChild(wikiContent);

  return wikiItem;
}

/**
 * Generates the wiki content for a given dog breed.
 *
 * @param {string} breed - The dog breed to fetch the wiki content for.
 * @returns {Promise<[HTMLParagraphElement, HTMLHeadingElement]>} - A promise
 * that resolves to an array containing the wiki text and header elements.
 */
async function generateDogBreedWikiContent(breed) {
  // wiki-items child -> wiki header
  let wikiHeader = document.createElement("h1");
  wikiHeader.className = "wiki-header";
  let wikiText = document.createElement("p");
  wikiText.className = "wiki-text";
  // Insert custom text inside p element
  try {
    // get summary from wikipedia
    const wiki = await fetchBreedSummaryFromWiki(breed);
    wikiText.textContent = wiki.extract;
    // get header title from wikipedia also
    wikiHeader.textContent = wiki.title;
  } catch (error) {
    console.error("wiki fetch error:", error);
  }
  return [wikiText, wikiHeader];
}

/**
 * Generates an image element for a given dog breed.
 *
 * @param {string} breed - The dog breed to fetch the image for.
 * @returns {Promise<HTMLDivElement>} - A promise that resolves to the
 * generated `div` element containing the image.
 */
async function generateDogBreedImgElement(breed) {
  // wiki-content's child -> img-container
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  // img-container's child -> wiki-img element
  const img = document.createElement("img");
  img.className = "wiki-img";
  try {
    const data = await fetchDogImg(breed);
    img.src = data.message;
  } catch (error) {
    console.error("Error fetching dog image", error);
    img.alt = "Image not available";
  }
  imgContainer.appendChild(img);
  return imgContainer;
}

/**
 * Fetches a random image of the specified dog breed from the Dog API.
 *
 * @param {string} breed - The dog breed to fetch the image for.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response
 * containing the image URL.
 * @throws Will throw an error if the fetch operation fails.
 */
async function fetchDogImg(breed) {
  // Had to add inu to shiba breed so correct wikipedia article could be found
  // remove _inu from shiba so it can be used in DogAPI
  breed = breed.split("_", 1);
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`,
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching dog image from API", error);
    throw error;
  }
}

/**
 * Fetches the summary of a specified dog breed from the Wikipedia API.
 *
 * @param {string} breed - The dog breed to fetch the summary for.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response
 * containing the breed's summary.
 * @throws Will throw an error if the fetch operation fails.
 */
async function fetchBreedSummaryFromWiki(breed) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${breed}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      },
    );
    return await response.json();
  } catch {
    console.error("Error fetching breed summary from Wiki API:", error);
    throw error;
  }
}
