import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  name = 'adri';
  pantallaCalculadora = '0';
  pantallaCalculadoraOperacion = '0';
  pantallaCalculadoraResultado = '';

  operacionFinalizada = false;
  op1 = 0;
  op2 = 0;
  operador = '';

  algo() {
    console.log('jeje');
    return 'sOY La funcion';
  }

  resetBtn() {
    this.pantallaCalculadora = '0';
    this.pantallaCalculadoraOperacion = '0';
    this.pantallaCalculadoraResultado = '';
    this.operacionFinalizada = false;
    this.op1 = 0;
    this.op2 = 0;
    this.operador = '';
  }

  botonesNumeros(numero: number) {
    if (this.operacionFinalizada) {
      this.resetBtn();
    }
    if (this.pantallaCalculadora == '0') {
      this.pantallaCalculadora = '' + numero;
      if (this.pantallaCalculadoraOperacion != '0') {
        this.pantallaCalculadoraOperacion += numero;
      } else {
        this.pantallaCalculadoraOperacion = '' + numero;
      }
    } else {
      this.pantallaCalculadoraOperacion += numero;
      this.pantallaCalculadora += numero;
    }
  }

  operadores(operador: string) {
    if (this.operador == "") {
      switch (operador) {
        case '+':
          this.operador = '+';
          this.pantallaCalculadoraOperacion += '+';
          break;
        case '-':
          this.operador = '-';
          this.pantallaCalculadoraOperacion += '-';
          break;
        case '*':
          this.operador = '*';
          this.pantallaCalculadoraOperacion += 'x';
          break;
        case '/':
          this.operador = '/';
          this.pantallaCalculadoraOperacion += '/';
          break;
      }

      this.op1 = parseFloat(this.pantallaCalculadora);
      this.pantallaCalculadora = '0';
    }
  }

  resultado() {
    this.op2 = parseFloat(this.pantallaCalculadora);
    switch (this.operador) {
      case '+':
        this.pantallaCalculadoraResultado =
          '' + Math.round((this.op1 + this.op2) * 100) / 100;
        break;
      case '-':
        this.pantallaCalculadoraResultado =
          '' + Math.round((this.op1 - this.op2) * 100) / 100;
        break;
      case '*':
        this.pantallaCalculadoraResultado =
          '' + Math.round(this.op1 * this.op2 * 100) / 100;
        break;
      case '/':
        if (this.op2 == 0) {
          this.pantallaCalculadora = 'Error';
        } else {
          this.pantallaCalculadoraResultado =
            '' + Math.round((this.op1 / this.op2) * 100) / 100;
        }
        break;
    }
    this.operacionFinalizada = true;
  }
  coma() {
    let contador = 0;
    for (let index = 0; index < this.pantallaCalculadora.length; index++) {
      const element = this.pantallaCalculadora[index];
      if (element === '.') {
        contador++;
      }
    }
    if (contador == 0) {
      this.pantallaCalculadoraOperacion += '.';
      this.pantallaCalculadora += '.';
    }
  }
}
