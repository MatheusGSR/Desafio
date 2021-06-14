const input = document.querySelector('input');
const botao = document.querySelector('button');

let nomeDoPersonagem;

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);   
}

pegarPersonagem = () =>  {
    
    numeroAleatorio = []

    for(i = 0; i< 4; i++){

        numeroAleatorio.push(gerarValorAleatorio());
  
}
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {

        for(i = 0; i < 4; i++){

            document.getElementById(`img${i+1}`).src = data[i].image;
            
            document.getElementById(`id${i+1}`).innerHTML = data[i].name;
            
            document.getElementById(`rac${i+1}`).innerHTML = data[i].species;
            
            document.getElementById(`gd${i+1}`).innerHTML = data[i].gender;
        }
    });
}