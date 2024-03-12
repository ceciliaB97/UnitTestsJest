/*
TODO:
 -La calculadora tiene que poder hacer las operaciones suma, resta, multiplicación y división
 -Debe tener la posibilidad de mostrar el resultado
 -Debe tener la posibilidad de recordar el último resultado
 -Y si no se limpia el último resultado seguirá haciendo esa operación (se puede cambiar esto)
*
*/
class Calculator { 
	calculator() {
		this.ans = "";
	}
	
	//string of last answer
	this.ansString = "";
	//numeric value of last answer
	this.ans = "";
	//numeric
	this.result = 0;
	
	const sumString = "+";
	const subString = "-";
	const multString = "*";
	const divString = "/";
	
	clearMemory() {
		this.ans = "";
	}
	
	multiply(a, b) {
		this.ans = a * b;
		this.result = ans;
		this. ansString = saveAns(`${a} * ${b}`, "*");
		console.log(this.ans);
	}
	
	saveAns(operationValue, operation) {
		let operands = operationValue.split(operation);
		if(operands.length > 2) {
			this.ans = "Ans";
		} else {
			this.ans = operationValue;
		}
		
	}
}


function sum(a, b) {
  return a + b;
}

module.exports = sum;