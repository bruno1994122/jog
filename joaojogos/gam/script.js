const storyText = document.getElementById('story-text');
const textOutput = document.getElementById('text-output');
const choices = document.getElementById('choices');

const gameState = {
    currentStep: 'start',
};

const steps = {
    start: {
        text: "Bem-vindo a Stick Fazendas! Você está em sua fazenda. O que você quer fazer?",
        story: "Você está começando sua jornada na fazenda que herdou de seus avós. O lugar precisa de cuidados e há muitas tarefas a fazer.",
        choices: [
            { text: "Ir para o campo", next: 'field' },
            { text: "Verificar a casa", next: 'house' },
        ]
    },
    field: {
        text: "Você está no campo. O que você quer fazer?",
        story: "O campo está vasto e aberto. Você vê a terra seca e alguns equipamentos de jardinagem ao fundo.",
        choices: [
            { text: "Plantar sementes", next: 'plant' },
            { text: "Voltar para a fazenda", next: 'start' },
        ]
    },
    house: {
        text: "Você está em casa. O que você quer fazer?",
        story: "A casa está um pouco bagunçada, mas é aconchegante. Há uma lareira no canto e uma cozinha bem equipada.",
        choices: [
            { text: "Descansar", next: 'rest' },
            { text: "Voltar para o campo", next: 'field' },
        ]
    },
    plant: {
        text: "Você plantou as sementes. Agora você espera que cresçam.",
        story: "Você cuida da terra e planta as sementes com cuidado. Espera ansiosamente para ver os resultados do seu trabalho.",
        choices: [
            { text: "Voltar para o campo", next: 'field' },
            { text: "Voltar para a fazenda", next: 'start' },
        ]
    },
    rest: {
        text: "Você descansou e está pronto para mais aventuras!",
        story: "Depois de um bom descanso, você se sente renovado e pronto para enfrentar mais tarefas na fazenda.",
        choices: [
            { text: "Voltar para a casa", next: 'house' },
            { text: "Ir para o campo", next: 'field' },
        ]
    }
};

function displayStep(step) {
    textOutput.textContent = steps[step].text;
    storyText.textContent = steps[step].story;
    choices.innerHTML = '';
    steps[step].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.className = 'choice-button';
        button.onclick = () => {
            gameState.currentStep = choice.next;
            displayStep(gameState.currentStep);
        };
        choices.appendChild(button);
    });
}

// Inicia o jogo
displayStep(gameState.currentStep);
