function validar() {
	var txtUsuario, txtSenha, txtResultado, btnVerificar;

	txtUsuario = document.getElementById("txtUsuario").value
	txtSenha = document.getElementById("txtSenha").value
	txtResultado = document.getElementById("txtResultado")

	if (txtUsuario != "" && txtSenha != "")
		window.location = "/Views/Lista.html";
	else
		//txtResultado.value = "Senha inválida";
		alert("Senha inválida");

};

function add() {
	var txtCod, txtCat, txtNome, txtQtd, txtValor, txtNeg, btnAdd, meuSelect, btnRem;

	txtCod = document.getElementById("txtCod").value;
	txtCat = document.getElementById("txtCat").value;
	txtNome = document.getElementById("txtTitulo").value;
	txtQtd = document.getElementById("txtQta").value;
	txtValor = document.getElementById("txtPreco").value;
	txtNeg = document.getElementById("txtNeg").value;
	meuSelect = document.getElementById("meuSelect");

	var cod = txtCod;
	var cat = txtCat;
	var nome = txtNome;
	var qtd = txtQtd;
	var valor = txtValor;
	var tipo = txtNeg;

	if (cod.length === 0) {
		alert("Código inválido!");
		return;
	}

	if (cat.length === 0) {
		alert("Categoria inválido!");
		return;
	}

	if (nome.length === 0) {
		alert("Nome inválido!");
		return;
	}

	if (qtd.length === 0) {
		alert("Quantidade inválido!");
		return;
	}

	if (valor.length === 0) {
		alert("Valor inválido!");
		return;
	}

	if (tipo.length === 0) {
		alert("Negócio inválido!");
		return;
	}

	var opt = document.createElement("option");
	opt.textContent = cod + "-" + nome + "-" + valor + "-" + tipo;

	meuSelect.appendChild(opt);
	
};

function remover() {
	if (meuSelect.selectedIndex < 0) {
		alert("Não há item selecionado")
		return;
	}

	var optSelecionado = meuSelect.options[meuSelect.selectedIndex];

	meuSelect.removeChild(optSelecionado);
};




