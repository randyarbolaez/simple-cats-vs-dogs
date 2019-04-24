let cat = document.getElementById('cat');
let dog = document.getElementById('dog');

function getRandomPictures() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(res => {
      cat.innerHTML = `<img src=${res[0].url} alt=""/>`;
    });
  return fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(res => {
      dog.innerHTML = `<img src=${res.url} alt=""/>`;
    });
}
