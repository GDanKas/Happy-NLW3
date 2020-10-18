//create map
const map = L.map('mapid').setView([-5.522020, -47.454762], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

//create and add marker
map.on('click', event => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
});

//photos upload
function addPhotoField() {
    // pegar container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = '';

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo o
    span.parentNode.remove();
}

//troca do sim e não 
function toggleSelect(event) {
    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(button => {
        button.classList.remove('active');
    })
    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active');
    console.log(button);
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}

function validate(event) {
    if (document.querySelector('[name=lat]').value == "" || document.querySelector('[name=lng]').value == "") {
        //validar se lat e lng estão preenchidos
        event.preventDefault();
        alert('Por favor, selecione a localização do orfanato no mapa!');
    }
} 