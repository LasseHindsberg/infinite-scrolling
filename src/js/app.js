var offset = 0;
var count = 1050;

function catchEmAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    var template = document.querySelector("template");
    var ul = document.querySelector(".pokeList");
    data.results.forEach(function(result) {
        // console.log(result.name);
        var clone = template.content.cloneNode(true);
        
        clone.querySelector(".listItem").innerText = result.name;
        ul.appendChild(clone);
    });

    var lastChild = document.querySelector(".pokeList li:last-child");

    observer.observe(lastChild);
}); 
};

var observer = new IntersectionObserver(function(entries){
    if (entries[0].intersectionRatio <= 0) return;
    observer.unobserve(entries[0].target);
    if (offset > count) return;
    // count = count
    offset = offset + 10;
    catchEmAll(offset)
}, {
    threshold: 1
});

catchEmAll(offset);