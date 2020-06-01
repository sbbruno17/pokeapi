var app = new Vue({
    el: "#app",
    data: {
        getIdUrl: null,
        search: "",
        pokemones: [],
    },

    //BUSCO Y ARMO JSON.
    methods: {
        getPokemon: function () {
            $.get("https://pokeapi.co/api/v2/pokemon/" + app.search)
                .done(function (pokemon) {
                    var pokemon1 = {
                        name: pokemon.name,
                        imgFront: pokemon.sprites.front_default,
                        imgRear: pokemon.sprites.back_default,
                        type: pokemon.types[0].type.name,
                        weight: pokemon.weight,
                    }
                    this.pokemon3 = pokemon1
                    app.pokemones.push(pokemon1)

                })
            document.getElementById("pokeBox").classList.add(app.pokemones[0].type)
                .fail(function () {
                    if (app.pokemones.length >= 3) {
                        alert("only 3 comparations at the time")
                    }
                    alert("Please Try Again");
                })

        },
    }
})
document.getElementById("pokeSearch")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("pokeball").click();
        }
    })