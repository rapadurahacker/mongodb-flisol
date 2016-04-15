Com base no modelo abaixo responda.
rapadura ={
	usuario: {
		nome:		
		email:
		idade:
		telefone:
	},
	empresa: {
		cnpj:
		razao:
		endereco:
		telefone:
		funcionario: (ref user)
	}
}


1-  Inserir 4 usuarios.
use rapadura;
for (var i = 0; i < 4; i++) {
	db.usuario.insert({
		usuario: 'rapadura'+i,
		email:   'contato'+i+'@rapadurahacker.com.br',
		idade: i,
		telefone: '(88)88237'+i
	})
}

2 - Inserir 2 empresa diferentes.
var recebe = db.usuario.find({}).toArray();
for (var i = 0; i < 2; i++) {
	db.empresa.insert({
		cnpj: '321321312312',
		razao: 'Empresa'+i,
		endereco: 'Rua santa rosa 30'+i,
		telefone: '35511121'+i,
		funcionario: recebe[i],
	})
}
3 - Vincular usuario a empresa.
	Respondido na questão anterior

4 - Busque um usuário a sua escolha.
	db.usuario.findOne();

5 - Busque empresa que o funcionario possua a idade inferior a 12 anos.
	db.empresa.find({'funcionario.idade':{$lt: 12}})


6 - Busque um usuário a sua escolha por campo e-mail.
	db.usuario.find({email: 'contato1@rapadurahacker.com.br'});

3 - Alterar a idade de um usuario para 45.
	db.usuario.update({email:'contato1@rapadurahacker.com.br'},{$set: {idade: 45}});

3 - Alterar endereço de uma empresa a sua escolha colocando "Rua Padre Cicero 390".
	db.empresa.update({cnpj: '321321312312'},{$set: {endereco: 'Rua Padre Cicero 390'}});

4 - Inserir um novo campo celular em uma das empresa e insira um numero.
	db.empresa.update({cnpj: '321321312312'},{$set: {celular:'(88)8829-7190'}})

5 - Deletando um usuario.
	db.usuario.remove({idade: 0});

6 - Deletar a coleção usuario.
	db.usuario.drop();

7 - Deletar a coleção empresa.
	db.empresa.drop();





