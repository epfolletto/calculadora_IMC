// seleciona o formulário form através do id
const form = document.querySelector('#formulario');

// adicionamos um 'escutador' para o evento submit do botão
form.addEventListener('submit', function(e) {
    e.preventDefault(); // previne o default do botão
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // avalia se o valor do peso é número
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    // avalia se o valor da altura é número
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    // chama a função para calcular o imc
    const imc = getImc(peso, altura);

    // chama a função para obter o nível do imc
    const nivelImc = getNivelImc(imc);

    // cria a mensagem para enviar
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    
    // mandou setar o resultado
    setResultado(msg, true);
});

// função para avaliar qual o nível do imc
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9) return nivel[5]; 
    if(imc >= 34.9) return nivel[4]; 
    if(imc >= 39.9) return nivel[3]; 
    if(imc >= 24.9) return nivel[2]; 
    if(imc >= 18.5) return nivel[1]; 
    if(imc < 18.5) return nivel[0];
}

// função para calcular o valor do imc
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função para criar o parágrafo
function criaP() {
    const p = document.createElement('p'); // criando um parágrafo
    return p;
}

// função que mostra o resultado para o usuário
function setResultado(msg, isValid) {
    // seleciona a div resultado
    const resultado = document.querySelector('#resultado');

    // zerando o html resultado
    resultado.innerHTML = '';

    // cria um parágrafo
    const p = criaP();
    
    // aplica uma classe no parágrafo (para aplicar o css correto)
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-resultado-bad');
    }

    // seta o inner do html com a mensagem recebida
    p.innerHTML = msg;

    // adiciona o parágrafo na div resultado
    resultado.appendChild(p);
}