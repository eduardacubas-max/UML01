class Funcionario {
    #id;
    #nome;

    constructor(id, nome) {
        this.#id = id;
        this.#nome = nome;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    exibir() {
        console.log(`ID: ${this.#id} | Nome: ${this.#nome}`);
    }
}

class Veterinario extends Funcionario {
    #crmv;

    constructor(id, nome, crmv) {
        super(id, nome);
        this.#crmv = crmv;
    }

    get crmv() {
        return this.#crmv;
    }

    set crmv(crmv) {
        this.#crmv = crmv;
    }

    exibir() {
        console.log(`ID: ${this.id} | Nome: ${this.nome} | CRMV: ${this.#crmv}`);
    }
}

class Animal {
    #nome;
    #especie;
    #idVeterinarioResponsavel;

    constructor(nome, especie, idVeterinarioResponsavel) {
        this.#nome = nome;
        this.#especie = especie;
        this.#idVeterinarioResponsavel = idVeterinarioResponsavel;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get especie() {
        return this.#especie;
    }

    set especie(especie) {
        this.#especie = especie;
    }

    get idVeterinarioResponsavel() {
        return this.#idVeterinarioResponsavel;
    }

    set idVeterinarioResponsavel(id) {
        this.#idVeterinarioResponsavel = id;
    }

    exibir() {
        console.log(
            `Nome: ${this.#nome} | Espécie: ${this.#especie} | ID Veterinário Responsável: ${this.#idVeterinarioResponsavel}`
        );
    }
}

const veterinario = new Veterinario(1, "Carlos", "12345-SP");

const animal = new Animal("Rex", "Cachorro", veterinario.id);

veterinario.exibir();
animal.exibir();