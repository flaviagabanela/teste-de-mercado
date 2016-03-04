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

	var nome = txtNome;

	if (nome.length === 0) {
		alert("Nome inválido!");
		return;
	}

	var opt = document.createElement("option");
	opt.textContent = nome;

	meuSelect.appendChild(opt);
};

btnRem.onclick = function () {
	if (meuSelect.selectedIndex < 0) {
		alert("Não há item selecionado")
		return;
	}

	var optSelecionado = meuSelect.options[meuSelect.selectedIndex];

	meuSelect.removeChild(optSelecionado);
};




