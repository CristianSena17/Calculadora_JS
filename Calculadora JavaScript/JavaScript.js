var memoria=0, calc=false, n1=0, n2=0, operacao, visorTeste, MaisMenos, Neg, Raiz, Teste, umX, Porc, ponto=false, y=0, x=0, loga=0;

function MC(){
	memoria=0;
}

function MR() {
	document.getElementById("visor").value=memoria;
}

function MS() {
	memoria=parseFloat(document.getElementById("visor").value);
}

function MMais() {
	memoria=memoria+parseFloat(document.getElementById("visor").value);
}

function MMenos() {
	memoria=memoria-parseFloat(document.getElementById("visor").value);
}

function C(){
	document.getElementById("visor").value='0';
	Raiz=0;
	ponto=false;
}

function N(nume){
	visorTeste=document.getElementById("visor").value;
	if(visorTeste=='0' && nume=='0'){

	}else{
		if(visorTeste=='0'){
			document.getElementById("visor").value='';
		}
		if (calc) {
			calc=false;
			document.getElementById("visor").value='';
			document.getElementById("visor").value+=nume;
		}else{
			document.getElementById("visor").value+=nume;
		}
	}
}

function Mais() {
	ponto=false;
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	operacao='mais';
}

function Menos() {
	ponto=false;
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	operacao='menos';
}

function Multiplicacao() {
	ponto=false;
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	operacao='multiplicacao';
}

function Divisao() {
	ponto=false;
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	operacao='divisao';
}

function Igual() {
	ponto=false;

	n2=parseFloat(document.getElementById("visor").value);
	if (operacao=='mais') {
		document.getElementById("visor").value=n1+n2;
		n1=n1+n2;
	}
	if (operacao=='menos') {
		document.getElementById("visor").value=n1-n2;
		n1=n1-n2;
	}
	if (operacao=='multiplicacao') {
		document.getElementById("visor").value=n1*n2;
		n1=n1*n2;
	}
	if (operacao=='divisao') {
		document.getElementById("visor").value=n1/n2;
		n1=n1/n2;
	}
	if (operacao=='xelevadoy') {
		if(n2=='0'){
			document.getElementById("visor").value=1;
		}else{
		document.getElementById("visor").value=Math.pow(n1, n2);
		}
	}
	if (operacao=='yraixx') {
		document.getElementById("visor").value=Math.pow(n1, 1/n2);
	}
	if (operacao=='modulo') {
		document.getElementById("visor").value=n1%n2;
	}
	calc=true;
	n2=0;
}

function MaisMenos() {
	if(document.getElementById("visor").value != '0'){
	   	if(document.getElementById("visor").value.substring(0, 1) == '-'){
			document.getElementById("visor").value = document.getElementById("visor").value.substring(1, document.getElementById("visor").value.length);
	  	}else{
	 		document.getElementById("visor").value = '-' + document.getElementById("visor").value;
	  	}
	}
}

function CE() {
	ponto=false;
	Raiz=0;
	document.getElementById("visor").value='0';
}

function Raiz(){
	ponto=false;
	Raiz=parseFloat(document.getElementById("visor").value);
	Raiz=Math.sqrt(Raiz);
    document.getElementById("visor").value=Raiz;
    Raiz=0;
    calc=true;
}

function UmBarraX() {
	Teste=parseFloat(document.getElementById("visor").value);
	if(Teste==0){
		alert("Impossivel dividir por zero");
		Teste='';
	}else{
		umX=1/parseFloat(document.getElementById("visor").value);
		document.getElementById("visor").value=umX;
	}
	ponto=false;
	calc=true;
}

function Porc() {
	porc=parseFloat(document.getElementById("visor").value);
    n1=n1*(porc/100);
    document.getElementById("visor").value=n1;
    ponto=false;
}

function Virgula() {
	if(ponto){}
	else{
        document.getElementById("visor").value+='.';
	
    ponto = true;

	}
}

function Pi() {
	document.getElementById("visor").value=Math.PI;
	ponto=false;
	calc=true;
}

function DezX() {
	y=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.pow(10, y);
	y=0;
	ponto=false;
	calc=true;
}

function XElevado3() {
	y=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.pow(y, 3);
	y=0;
	ponto=false;
	calc=true;
}

function XElevado2() {
	y=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.pow(y, 2);
	y=0;
	ponto=false;
	calc=true;
}

function NFatorial(){
	y=parseFloat(document.getElementById("visor").value);
	if(y=='0'){
		document.getElementById("visor").value=1;
	}else{

    var int = 1;

    do {
        var product = int *= y;
        y--;
    } while (y > 0);
    document.getElementById("visor").value=product;
    y=0;
    product=0;
	}
	ponto=false;
	calc=true;
}

function XElevadoY() {
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	x=0;
	operacao='xelevadoy';
	ponto=false;
}

function TresRaizX() {
	ponto=false;
	Raiz=parseFloat(document.getElementById("visor").value);
	Raiz=Math.cbrt(Raiz);
    document.getElementById("visor").value=Raiz;
    Raiz=0;
    ponto=false;
    calc=true;
}

function YRaizX() {
	ponto=false;
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	operacao='yraixx';
	ponto=false;
}

function log() {
	loga=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.log10(loga);
	loga=0;
	ponto=false;
	calc=true;
}

function Mod() {
	ponto=false;
	n1=parseFloat(document.getElementById("visor").value);
	calc=true;
	operacao='modulo';
	ponto=false;
}

function tan() {
	y=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.tan(y);
	y=0;
	ponto=false;
	calc=true;
}

function cos() {
	y=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.cos(y);
	y=0;
	ponto=false;
	calc=true;
}

function sin() {
	y=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.sin(y);
	y=0;
	ponto=false;
	calc=true;
}

function ln() {
	loga=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.log(loga);
	loga=0;
	ponto=false;
	calc=true;
}

function Exp() {
	x=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.exp(x);
	x=0;
	ponto=false;
	calc=true;
}

function tanh() {
	x=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.tanh(x);
	x=0;
	ponto=false;
	calc=true;
}

function cosh() {
	x=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.cosh(x);
	x=0;
	ponto=false;
	calc=true;
}

function sinh() {
	x=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.sinh(x);
	x=0;
	ponto=false;
	calc=true;
}

function Int() {
	x=parseFloat(document.getElementById("visor").value);
	document.getElementById("visor").value=Math.round(x);
	x=0;
	ponto=false;
}

function Apagar() {
    x = document.getElementById("visor").value;
    if(x=='0' || x=='' || x.length==1){
    	document.getElementById("visor").value=0;
    }else{
    document.getElementById("visor").value = x.substr(0, x.length - 1);
	}
    x=0;
}