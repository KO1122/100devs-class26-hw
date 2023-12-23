document.querySelector("button").addEventListener("click", getCatFact);

function getCatFact() {
  fetch(`https://meowfacts.herokuapp.com/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.data[0];
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
