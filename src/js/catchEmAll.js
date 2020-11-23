function catchEmAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var template = document.querySelector("template");
            var ul = document.querySelector(".pokeList");
            data.results.forEach(function (result) {

                var clone = template.content.cloneNode(true);
                var img = clone.querySelector(".pokeImg");
                clone.querySelector(".pokeName").innerText = result.name;


                getPokemonImage(result.url)
                    .then(function (url) {
                        // console.log(url)
                        img.dataset.src = url;
                        imageObserver.observe(img);
                    });
                ul.appendChild(clone);
            });

            var lastChild = document.querySelector(".pokeList li:last-child");

            observer.observe(lastChild);
        });
};