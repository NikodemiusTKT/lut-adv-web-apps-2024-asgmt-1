import './styles.css';
const placeholderText =
  'A dog breed will consistently produce the desirable physical traits, movement and temperament that were developed over decades of selective breeding. For each breed they recognize, kennel clubs and breed registries usually maintain and publish a breed standard which is a written description of the ideal specimen of the breed.[1][3][4] Other uses of the term breed when referring to dogs include pure breeds, cross-breeds, mixed breeds and natural breedsA dog breed is a particular strain that was purposefully bred by humans to perform specific tasks, such as herding, hunting, and guarding. When distinguishing breed from type, the rule of thumb is that a breed always "breeds true".Dogs are the most variable mammal on earth, with artificial selection producing around 450 globally recognized dog breeds. These breeds possess distinct traits related to morphology, which include body size, skull shape, tail phenotype, fur type, and coat colour. Their behavioural traits include guarding, herding, and hunting, and personality traits such as hypersocial behavior, boldness, and aggression. Most breeds were derived from small numbers of founders within the last 200 years. As a result, today dogs are the most abundant carnivore species and are dispersed around the world.';

const dogBreeds = ['shiba_inu', 'husky', 'pitbull', 'pug', 'doberman'];

if (document.readyState !== 'loading') {
  initializeCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    initializeCode();
  });
}

function initializeCode() {
  let container = document.createElement('div');
  container.className = 'container';
  document.getElementById('app').appendChild(container);
  for (let index = 0; index < dogBreeds.length; index++) {
    const breed = dogBreeds[index];
    container.appendChild(generateWikiItem(breed));
  }
}

function generateWikiItem(breed) {
  // wiki item parent element
  let wikiItem = document.createElement('div');
  wikiItem.className = 'wiki-item';
  let wikiHeader = document.createElement('h1');

  // wiki-items child -> wiki header
  wikiHeader.className = 'wiki-header';
  wikiItem.appendChild(wikiHeader);

  // wiki-item's child -> wiki content
  let wikiContent = document.createElement('div');
  wikiContent.className = 'wiki-content';

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
      console.error('Error:', error);
    });
  imgContainer.appendChild(img);

  // Append img-container to wiki-content
  wikiContent.appendChild(imgContainer);
  // wiki-content -> wiki-text element which contains text node
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
  wikiContent.appendChild(wikiText);

  // Append everything to the wiki-item parent
  wikiItem.appendChild(wikiContent);
  return wikiItem;
}

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
