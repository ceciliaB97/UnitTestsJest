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
		this.result = 0;
	}
	
	clearMemory() {
		this.ans = "";
	}
	
	//estas operaciones son entre el result anterior y el nuevo valor
	mult(c) {
		this.saveAns(this.ans + " * " + c, "*");
		this.result = this.result * c;
		console.log(this.ans + " = " + this.result);
	}
	
	div(c) {
		this.saveAns("Ans / " + c, "/");
		this.result = this.result / c;
		console.log(this.ans + " = " + this.result);
	}
	
	sub(c) {
		this.saveAns("Ans - " + c, "-");
		this.result = this.result - c;
		console.log(this.ans + " = " + this.result);
	}
	
	sm(c) {
		this.saveAns("Ans + " + c, "+");
		this.result = this.result + c;
		console.log(this.ans + " = " + this.result);
	}
	//estas operaciones son entre los dos valores sólamente
	multiply(a, b) {
		this.saveAns(a + " * " + b, "*");
		this.result = a * b;
		console.log(this.ans + " = " + this.result);
	}
	
	divide(a, b) {
		this.saveAns(a + " / " + b, "/");
		this.result = a / b;
		console.log(this.ans + " = " + this.result);
	}
	
	substract(a, b) {
		this.saveAns(a + " - " + b, "-");
		this.result = a - b;
		console.log(this.ans + " = " + this.result);
	}
	
	sum(a, b) {
		this.saveAns(a + " + " + b, "+");
		this.result = a + b;
		console.log(this.ans + " = " + this.result);
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

//creación del objeto calculator
const calculator = new Calculator();
//operaciones entre 2 valores
calculator.multiply(1,2);
calculator.divide(2,1);
calculator.substract(2,1);
calculator.sum(1,2);
//operaciones entre result y un nuevo valor
calculator.mult(2);
calculator.div(2);
//calculator.substract(2,1);
//calculator.sum(1,2);

function sum(a, b) {
  return a + b;
}

module.exports = sum;
