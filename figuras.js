"use strict";
class figurasGeometricas {
    constructor() {
        this.figura = "";
        this.figuraSelec = "";
        this.lado = 0;
        this.base = 0;
        this.altura = 0;
        this.resultado = 0;
    }
    obtenerDatos() {
        let lado = document.getElementById("Lado").value;
        this.lado = parseFloat(lado);
        let base = document.getElementById("Base").value;
        this.base = parseFloat(base);
        let altura = document.getElementById("Altura").value;
        this.altura = parseFloat(altura);
        let figura = document.getElementById("fig").value;
        this.figura = figura;
    }
    seleccionarFigura() {
        this.obtenerDatos();
        if (this.figura == "cuadrado") {
            this.resultado = this.lado * this.lado;
            this.figuraSelec = "Cuadrado";
        }
        else if (this.figura == "rectangulo") {
            this.resultado = this.base * this.altura;
            this.figuraSelec = "Rectangulo";
        }
        else if (this.figura == "triangulo") {
            this.resultado = (this.base * this.altura) / 2;
            this.figuraSelec = "Triangulo";
        }
        document.getElementById("Area").value = this.resultado.toString();
        document.getElementById("figSel").value = this.figuraSelec;
    }
    limpiarCampos() {
        document.getElementById("Lado").value = "";
        document.getElementById("Base").value = "";
        document.getElementById("Altura").value = "";
        document.getElementById("Area").value = "";
        document.getElementById("figSel").value = "";
    }
}
let fig = new figurasGeometricas();
function calcular() {
    fig.obtenerDatos();
    fig.seleccionarFigura();
}
function limpiar() {
    fig.limpiarCampos();
}
