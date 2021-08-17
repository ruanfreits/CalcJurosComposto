
for(var j;j<3;j++){
	console.log("=>"+j+"º numero");
}

var x = 123;
x = document.getElementById("something").value;


function count(){
	console.log(x);
}

	var valor = 0;
	var tempo = 0;
	var taxjuros = 0; 
	var juros =  0;
	var valorfinal = 0;
	var parcela =0;


	function calcular(){	
		if (valor == "Valor"){
			alert("Você não inseriu nenhum valor .")
			}if(tempo == 0){
				alert("Você não inseriu nenhum tempo .")
			}
		else{
	valor =	document.getElementById("entradav").value;
	tempo = document.getElementById("entradat").value;
	taxjuros = document.getElementById("entradaj").value;

//parsentINt é um metódo de transformar string em uma variável inteiro. 





taxjuros = parseFloat(taxjuros.replace(",","."))/100;
console.log(taxjuros);
 juros = (1 + parseFloat(taxjuros))**tempo;

console.log(parseFloat(juros));
valorfinal =  parseInt(valor) * parseFloat(juros); 
console.log(valorfinal);
juros = valorfinal - parseInt(valor);

parcela_Div(this.valorfinal,this.tempo)

show();
}
	}

	function arrumatempo(tempo){
		return this.tempo = tempo/12;
	}

function parcela_Div(valorfinal,tempo){
 return this.parcela = valorfinal / tempo
}

	function show(){
		document.getElementById("ss").innerHTML= valorfinal;
		document.getElementById("juros").innerHTML= juros;
		document.getElementById("V-parcela").innerHTML= parcela;   
	}




//Aqui fui Gênio.
/* usei o vetor para guardar as (id's) dos componetes HTML,
 depois colei o código que puxa um componete pela id, dentro da repetição for.
 depois dentro dos parenteses desse código onde vai o id do componente,
 coloquei o vetor com valor da posição do id. 
*/
	   function sh_tabel(){
		var tat = ["p1","p2"];

		for(var i= 0; i< 2; i++){
			document.getElementById(tat[i]).innerHTML = i;	
		tat[i]++;
		}
		   alert(preco);
		console.log('variavel teste', preco);

		//for(var i= 0; i< 2; i++){
		//tat[i] = "mensagem";
		//console.log('Aqui =>', tat[i]);
		//tat[i]++;	
	//}
	
	}


	 function exposed(){

		window.alert("Mês =>"+ calendario[1]);
		alert("GO OUT!!");
		console.log("valor final:", valorfinal);


		for(var i= 0;i<3;i++){
			console.log("|Mês =>"+ calendario[i]+ "|Valor do juros"+ preco +".|");
			preco = preco + ((preco*10)/100);
			calendario[i]++;
			}
			return calendario=[];
		}
	
	
	
		
	

	