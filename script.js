console.log('script is linked');

// object arrays

let pokemon = [
    {
        id: 123,
        name: 'squirtle',
        info: 'is a baller and a turtle',
        photo:'./squirtle.jpg',
        type:'water'
    },
    {
        id: 453,
        name: 'nidoqueen',
        info: 'is the quenn of the grass type pokemon',
        photo:'./nidoqueen.jpg',
        type:'grass'
    },
    {
        id: 567,
        name: 'bulbasaur',
        info: 'is a grass time pokemon',
        photo:'./bulbasaur.jpg',
        type:'grass'
    },
    {
        id: 957,
        name: 'butterfree',
        info: 'float like a butterlfy, sting like a bee. unlike beedrill, butterfree is chill',
        photo:'./butterfree.jpg',
        type:'psychic'
    },
    {
        id: 245,
        name: 'alakazam',
        info: 'alakazam like to eat lots of cereal, that why they always carry two sppons',
        photo:'./alakazam.jpg',
        type:'psychic'
    },
    {
        id: 963,
        name: 'rhydon',
        info: 'rhydon evolves from rhyhorn and sirvived the meteoroid',
        photo:'./rhydon.jpg',
        type:'psychic'
    }
];


// https://getbootstrap.com/docs/4.0/components/card/



function results(){
    let i = 0;
    for(i = 0; i < pokemon.length; i++){
        console.log(pokemon[i].id);

         // append() - is a jquery function
        // append allows us to insert content to the end of an already existing element.
        // we need to put our code inside the ()

        $("#pokemonInfo").append(
            // start of backtics
           `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${pokemon[i].photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${pokemon[i].name}</h5>
                <p class="card-text">${pokemon[i].info}</p>

                
                <button id="${pokemon[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                more information
                </button>


            </div>
            </div>
           
           `
           // end of backtics
        );

       

    }
};
results();

$(".moreInformation").click(function(){
    // console.log("clicked");
    let i = 0;
    for(i = 0; i < pokemon.length; i++){
        if(parseInt(this.id) === pokemon[i].id){
            console.log(pokemon[i].name);
        }
    }
});




// function moreInformation(){
//     let i = 0;
//     for(i = 0; i < pokemon.length; i++){
//         if(this.id === pokemon[i].id){
//             console.log(pokemon[i].name);
//         }
//     }
// };
