let original_link = document.getElementById("original-link");
let generate = document.getElementById("generate");
let shorten_link = document.getElementById("shorten-link");
let copy = document.getElementById("copy");

generate.addEventListener("click", () => {
    let url = original_link.value;
    fetch('https://api.shrtco.de/v2/shorten?=${url}')
        .then((reps) => reps.json())
        .then((value) => {
            shorten_link.value = value.result.shorten_link;
        })
        .catch((error) => {
            shorten_link.value = "Something went wrong";
        });
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(shorten_link.value);
    copy.innerHTML ="copied!!";

    setTimeout(() => {
        copy.innerHTML ="copy";
    }, 1000);
});
