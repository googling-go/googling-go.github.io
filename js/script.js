window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash) {
      const trimmed = hash.slice(1); // "#" を除く
      document.getElementById("input").value = trimmed;
}})

function search() {
    let inputData = document.getElementById("input")
    let input = inputData.value
    window.open(`https://www.google.com/search?q=${input}`, "_blank")
}