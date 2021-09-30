import './styles.css';
const wikiText =
  'A dog breed will consistently produce the desirable physical traits, movement and temperament that were developed over decades of selective breeding. For each breed they recognize, kennel clubs and breed registries usually maintain and publish a breed standard which is a written description of the ideal specimen of the breed.[1][3][4] Other uses of the term breed when referring to dogs include pure breeds, cross-breeds, mixed breeds and natural breedsA dog breed is a particular strain that was purposefully bred by humans to perform specific tasks, such as herding, hunting, and guarding. When distinguishing breed from type, the rule of thumb is that a breed always "breeds true".Dogs are the most variable mammal on earth, with artificial selection producing around 450 globally recognized dog breeds. These breeds possess distinct traits related to morphology, which include body size, skull shape, tail phenotype, fur type, and coat colour. Their behavioural traits include guarding, herding, and hunting, and personality traits such as hypersocial behavior, boldness, and aggression. Most breeds were derived from small numbers of founders within the last 200 years. As a result, today dogs are the most abundant carnivore species and are dispersed around the world.';

const dogBreeds = ['akita', 'husky', 'pitbull', 'finnish', 'germanshepherd'];

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
    document.querySelector('.container').appendChild(generateWikiItem(wikiText, breed));
  }
}

function generateWikiItem(breed, text) {
  // wiki item parent element
  let wikiItem = document.createElement('div');
  wikiItem.className = 'wiki-item';
  let wikiHeader = document.createElement('h1');

  // wiki-items child -> wiki header
  wikiHeader.className = 'wiki-header';
  wikiHeader.textContent = breed;
  wikiItem.appendChild(wikiHeader);

  // wiki-item's child -> wiki content
  let wikiContent = document.createElement('div');
  wikiContent.className = 'wiki-content';

  // wiki-content -> wiki-text element which contains text node
  let wikiText = document.createElement('p');
  wikiText.className = 'wiki-text';
  // Insert custom text inside p element
  let textNode = document.createTextNode(text);
  wikiText.appendChild(textNode);
  wikiContent.appendChild(wikiText);

  // wiki-content's child -> img-container
  let imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  // img-container's child -> wiki-img element
  let img = document.createElement('img');
  img.className = 'wiki-img';
  let imgSrc = fetchDogImg('');
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

  // Append everything to the wiki-item parent
  wikiItem.appendChild(wikiContent);
  return wikiItem;
}

async function fetchDogImg(breed) {
  let json;
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {});
    json = await response.json();
  } catch (error) {
    console.error(error);
  }

  return json;
}
