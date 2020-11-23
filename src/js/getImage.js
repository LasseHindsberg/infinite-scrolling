function getPokemonImage(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data.sprites.front_default)
}