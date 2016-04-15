#Usuando Banco de Dados

use flisol;

#Primeira Inserção

db.curso.insert({
	nome: 'Higor Diego',
	idade: 28,
	email: 'higordiego@rapadurahacker.com.br'
});

db.curso.insert({
	nome: 'Rapadura',
	idade: 0,
	senha: '123',
	email: 'contato@rapadurahacker.com.br'
})

db.curso.insert({
	nome: 'Robo',
	senha: '123',
	idade: 0,
	email: 'robo@rapadurahacker.com.br'
})

#Entendendo as buscas.

db.curso.find({},{});

exemplo:
	db.curso.find({nome:'Rapadura'})
	
	db.curso.find({},{_id: 1});

	db.curso.find({nome:'Rapadura'},{_id:1});

Tanto faz..
	db.curso.find({nome: /rapadura/i},{_id:1});

	
Contandos quantas coleções tem?
	db.curso.find().count()
	

Então como faço saber quantos usuários possuem 0 em idade ??

	db.curso.find({idade: 0}).count();

Como faço para pegar o primeiro usuario ??
	db.curso.findOne();
	db.curso.find().limit(1);

Como faço para ordenar meus usuarios ??
	db.curso.find().sort({idade:1}) crescente
	db.curso.find().sort({idade:-1}) decrescente

#E os operadores ?

$gt - maior a X valor.
$gte - maior o igual a X valor.
$lt - menor a X valor.
$lte - menor o igual a X valor.

#Maior que o valor.
	db.curso.find({idade: {$gt: 1}});
#Maior ou igual valor.
	db.curso.find({idade: {$gte: 1}});
#Menor que o valor.
	db.curso.find({idade: {$lt: 1}});
#Menor ou igual ao valor.
	db.curso.find({idade: {$lte: 1}});

#Lógicos

$or - Ou
	db.curso.find({$or:[{idade: 1},{idade:0}]})
$and - And
	db.curso.find({$and: [{idade: 28},{idade:0}]})

Elementos
$exists
	db.curso.find({apelido: {$exists: true}});

$type
1 - Double
2 - String
3 - Objeto
4 - Arreglo
5 - Data binaria
6 - Indefinido 
7 - Id de objeto
8 - Booleano
9 - Fecha
10 - Nulo
11 - Expresión regular
13 - Javascript
14 - Símbolo
15 - Javascript con alcance definido
16 - Entero de 32bit
17 - Estampilla de tiempo
18 - Entero de 64bit
127 - Llave máxima
255 - Llave mínima

db.curso.find({idade: {$type: 1}});
	
# Entendendo as alterações
	
	db.curso.update({},{});

Como faço para alterar meu nome?

 db.curso.update({nome:'Rapadura'},{$set: {nome: 'Rapadura v1'}});

Como faço para alterar a collection, adicionando um novo campo?

db.curso.update({nome:'Rapadura'},{$set: {nome: 'Rapadura v1',preco: 12}});


#Entendendo o Remove
	db.curso.remove();

#Importar e exportar banco.

mongoexport -h 127.0.0.1 -d rapadura -c  curso --out teste.json

mongoimport -h 127.0.0.1 -d testando -c curso --file teste.json

mongodump -h 127.0.0.1 -d rapadura --out dump

### Importação de um banco para o outro.
#Mysql
mysql -u root -p 

use scap;

select * from cep into outfile '/tmp/cep.csv';


#MongoDB

mongoimport -d rapadura -c cep --type csv --file /tmp/cep.csv --headerline


#Relacionamento

db.usuario.insert({
	nome:'Higor Diego',
	idade: 20
})

db.usuario.insert({
	nome:'Rafael',
	idade: 19
})

var usuarios = db.usuario.find({},{_id:1}).toArray();
db.curso.insert({
	nome: 'MongoDB',
	valor: 0,
	usuario,
	
});


##Buscando informações ("Inner join")
var usuario = []
var getUsuario = function(id){
	usuario.push(db.usuario.findOne(id))
}
var curso = db.curso.findOne();

curso.usuario.forEach(getUsuario)

usuario

## Inserir de outra forma 

var usuarios = db.usuario.find().toArray();
db.curso.insert({
	nome: 'MongoDB',
	valor: 0,
	usuario,
});





