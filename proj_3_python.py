#  Para atender as condições do projeto, desenvolvemos uma classe generica chamada Heroi e que tem um construtor que aceita três parâmetros de propriedades: nome, idade e tipo, nomeadas dessas formas. 
# Além disso, foi elabotrado o método chamado atacar que verifica o tipo do herói e imprime uma mensagem apropriada. 
# É possível criar um novo objeto da classe Heroi usando a palavra-chave new e então chamar o método atacar desse objeto.

# Definindo a classe Heroi
class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == 'mago':
            ataque = 'usou magia'
        elif self.tipo == 'guerreiro':
            ataque = 'usou espada'
        elif self.tipo == 'monge':
            ataque = 'usou artes marciais'
        elif self.tipo == 'ninja':
            ataque = 'usou shuriken'
        else:
            ataque = 'usou ataque desconhecido'
        
        print(f"O {self.tipo} atacou usando {ataque}")

# Criando um objeto da classe Heroi
heroi = Heroi('Gandalf', 1000, 'mago')

# Usando o método atacar
heroi.atacar()  # Saída esperada: O mago atacou usando usou magia
