import './styles.css';

// Just placeholder text for testing  HTML elements
const placeholderText =
  'A dog breed will consistently produce the desirable physical traits, movement and temperament that were developed over decades of selective breeding. For each breed they recognize, kennel clubs and breed registries usually maintain and publish a breed standard which is a written description of the ideal specimen of the breed.[1][3][4] Other uses of the term breed when referring to dogs include pure breeds, cross-breeds, mixed breeds and natural breedsA dog breed is a particular strain that was purposefully bred by humans to perform specific tasks, such as herding, hunting, and guarding. When distinguishing breed from type, the rule of thumb is that a breed always "breeds true".Dogs are the most variable mammal on earth, with artificial selection producing around 450 globally recognized dog breeds. These breeds possess distinct traits related to morphology, which include body size, skull shape, tail phenotype, fur type, and coat colour. Their behavioural traits include guarding, herding, and hunting, and personality traits such as hypersocial behavior, boldness, and aggression. Most breeds were derived from small numbers of founders within the last 200 years. As a result, today dogs are the most abundant carnivore species and are dispersed around the world.';

// Dog breeds we want to generate the HTML Elements for
const dogBreeds = ['shiba_inu', 'husky', 'pitbull', 'pug', 'doberman'];

// Only initiliaze the HTML elements when the page has been loaded
if (document.readyState !== 'loading') {
  initializeCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    initializeCode();
  });
}

// Initiliazation code for populating the HTML containers with the generated HTML elements based on the breeds in the dogBreeds array list
function initializeCode() {
  let container = document.createElement('div');
  container.className = 'container';
  document.getElementById('app').appendChild(container);
  for (let index = 0; index < dogBreeds.length; index++) {
    const breed = dogBreeds[index];
    container.appendChild(generateWikiItem(breed));
  }
}

/**
* generateWikiItem
* * Generate wiki html element with the given dog breed
* ! important dog breed name must exist in the Dog API and in the Wiki API *
* @param breed The string dog breed you want to fetch image and description for 
*/
function generateWikiItem(breed) {
  // wiki item parent element
  let wikiItem = document.createElement('div');
  wikiItem.classname = 'wiki-item';

  // wiki-item's child -> wiki content
  let wikiContent = document.createElement('div');
  wikiContent.className = 'wiki-content';

  let imgContainer = generateDogBreedImgElement(breed);

  let [wikiText,wikiHeader] = generateDogBreedWikiContent(breed);

  wikiItem.appendChild(wikiHeader);
  // Append generated dog breed img-container to wiki-content
  wikiContent.appendChild(imgContainer);
  // wiki-content -> wiki-text element which contains text node
  wikiContent.appendChild(wikiText);

  // Append everything to the wiki-item parent
  wikiItem.appendChild(wikiContent);
  return wikiItem;
}
function generateDogBreedWikiContent(breed) {
  // wiki-items child -> wiki header
  let wikiHeader = document.createElement('h1');
  wikiHeader.className = 'wiki-header';
  let wikiText = document.createElement('p');
  wikiText.className = 'wiki-text';
  // Insert custom text inside p element
  fetchBreedSummaryFromWiki(breed)
    .then((wiki) => {
      // get summary from wikipedia
      let textNode = document.createTextNode(wiki.extract);
      wikiText.appendChild(textNode);
      // get header title from wikipedia also
      wikiHeader.textContent = wiki.title;
    })
    .catch((error) => {
      console.error('wiki fetch error:', error);
    });
    return [wikiText,wikiHeader]
}
function generateDogBreedImgElement(breed) {
  // wiki-content's child -> img-container
  let imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  // img-container's child -> wiki-img element
  let img = document.createElement('img');
  img.className = 'wiki-img';
  fetchDogImg(breed)
    .then((data) => {
      img.src = data.message;
    })
    .catch((error) => {
      console.error('Dog Img API error:', error);
    });
  imgContainer.appendChild(img);
  return imgContainer;

}

// Fetch dog image from the DogAPI
async function fetchDogImg(breed) {
  // Had to add inu to shiba breed so correct wikipedia article could be found
  // remove _inu from shiba so it can be used in DogAPI
  breed = breed.split('_', 1);
  let json;
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {});
    json = await response.json();
  } catch (error) {
    console.error(error);
  }

  return json;
}

// Fetch dog breed description from WikiAPI
async function fetchBreedSummaryFromWiki(breed) {
  let json;
  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${breed}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    json = await response.json();
  } catch {
    console.error(error);
  }
  return json;
}
