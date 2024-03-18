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
		this.ans = 0;
		this.result = 0;
	}
	
	clearMemory() {
		this.ans = 0;
		this.result = 0;
	}
	
	//estas operaciones son entre el result anterior y el nuevo valor
	mult(c) {
		this.saveAns(this.ans + " * " + c, "*");
		this.result = this.result * c;
		console.log(this.ans + " = " + this.result);
	}
	
	div(c) {
		this.saveAns(this.result + " / " + c, "/");
		this.result = this.result / c;
		console.log(this.ans + " = " + this.result);
	}
	
	sub(c) {
		this.saveAns(this.result + " - " + c, "-");
		this.result = this.result - c;
		console.log(this.ans + " = " + this.result);
	}
	
	sm(c) {
		this.saveAns(this.result + " + " + c, "+");
		this.result = this.result + c;
		console.log(this.ans + " = " + this.result);
	}

	//estas operaciones son entre los dos valores sólamente
	multiply(a, b) {
		this.result = a * b;
		this.saveAns(a + " * " + b, "*");
		console.log(a + " * " + b + " = " + this.result);
	}
	
	divide(a, b) {
		this.result = a / b;
		this.saveAns(a + " / " + b, "/");
		console.log(a + " / " + b + " = " + this.result);
	}
	
	substract(a, b) {
		this.result = a - b;
		this.saveAns(a + " - " + b, "-");
		console.log(this.ans +  " = " + this.result);
	}
	
	sum(a, b) {
		this.result = a + b;
		this.saveAns(a + " + " + b, "+");
		console.log(this.ans +  " = " + this.result);
	}
	
	saveAns(operationValue, operation) {
		let operands = operationValue.split(/[+\-*\/]/g);
		//console.log(operands);
		if(operands.length > 2) {
			this.ans = operationValue;
		} else {
			this.ans = operationValue;
		}
		
	}
}

//creación del objeto calculator
const calculator = new Calculator();
calculator.clearMemory();
calculator.mult(2);
//operaciones entre 2 valores
console.log("multiplicar, dividir, restar y sumar con dos valores");
calculator.multiply(2,2);
calculator.divide(8,4);
calculator.substract(10,3);
calculator.sum(1,2);
//operaciones entre result y un nuevo valor
console.log("multiplicar, dividir, restar y sumar con un valor solo");
calculator.mult(2);
calculator.div(2);
calculator.clearMemory();
calculator.sub(1);
calculator.sm(3);


function sum(a, b) {
  return a + b;
}

module.exports = sum;
