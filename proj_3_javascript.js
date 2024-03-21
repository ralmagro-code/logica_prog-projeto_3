/* Para atender as condições do projeto, desenvolvemos uma classe generica chamada Heroi e que tem um construtor que aceita três parâmetros de propriedades: nome, idade e tipo, nomeadas dessas formas. Além disso, foi elabotrado o método chamado atacar que verifica o tipo do herói e imprime uma mensagem apropriada. É possível criar um novo objeto da classe Heroi usando a palavra-chave new e então chamar o método atacar desse objeto.
*/

// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou e ${ataque}`);
    }
  }
  
  // Criando um objeto da classe Heroi
  let heroi = new Heroi('Gandalf', 1000, 'mago');
  
  // Usando o método atacar
  heroi.atacar();  // Saída esperada: O mago atacou usando usou magia
  