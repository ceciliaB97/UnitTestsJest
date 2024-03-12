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
		this.ansString = "";
		this.result = 0;
	}
	/*
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
	*/
	clearMemory() {
		this.ans = "";
	}
	
	multiply(a, b) {
		this.saveAns(a + " * " + b, "*");
		this.result = a * b;
		console.log(this.ans + " = " + (a*b));
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

const calculator = new Calculator();

calculator.multiply(1,2);


function sum(a, b) {
  return a + b;
}

module.exports = sum;