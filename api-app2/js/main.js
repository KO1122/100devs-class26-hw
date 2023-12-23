document.querySelector("button").addEventListener("click", getAnimeQuote);
function getAnimeQuote() {
  fetch("https://animechan.xyz/api/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = `"${data.quote}"`;
      document.querySelector(
        "h3"
      ).innerText = `-${data.character} (${data.anime})`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
