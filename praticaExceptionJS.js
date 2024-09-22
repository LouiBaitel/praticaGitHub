// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Hello! Me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} gerencia o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} programa em ${this.linguagem}.`;
    }
}

// Função para exibir erro
function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
}

// Função para criar funcionário
function criarFuncionario() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        if (!nome || !idade || !cargo) {
            throw new Error('Preencha os campos obrigatórios, por favor.');
        }

        let funcionario;
        if (cargo === 'Gerente') {
            if (!departamento) {
                throw new Error('Por favor, preencha o campo departamento para Gerente.');
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === 'Desenvolvedor') {
            if (!linguagem) {
                throw new Error('Por favor, preencha o campo linguagem para Desenvolvedor.');
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        }

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            <p>${cargo === 'Gerente' ? funcionario.gerenciar() : funcionario.programar()}</p>
        `;
    } catch (error) {
        exibirErro(error.message);
    }
}
