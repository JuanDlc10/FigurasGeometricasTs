class figurasGeometricas{
    public figura : string = "";
    public figuraSelec : string = "";
    public lado : number = 0;
    public base : number = 0;
    public altura : number =0;
    public resultado : number = 0;
    public obtenerDatos(){
        let lado : any = (<HTMLInputElement>document.getElementById("Lado")).value;
        this.lado = parseFloat(lado);
        let base : any = (<HTMLInputElement>document.getElementById("Base")).value;
        this.base = parseFloat(base);
        let altura : any = (<HTMLInputElement>document.getElementById("Altura")).value;
        this.altura = parseFloat(altura);
        let figura : any = (<HTMLInputElement>document.getElementById("fig")).value;
        this.figura = figura;
    }
    public seleccionarFigura(){
        this.obtenerDatos()
        if (this.figura == "cuadrado") {
            this.resultado = this.lado * this.lado;
            this.figuraSelec = "Cuadrado"
        } else if(this.figura == "rectangulo") {
            this.resultado = this.base * this.altura;
            this.figuraSelec = "Rectangulo"
        }else if(this.figura == "triangulo"){
            this.resultado = (this.base * this.altura) / 2;
            this.figuraSelec = "Triangulo"
    }
    (<HTMLInputElement>document.getElementById("Area")).value = this.resultado.toString();
    (<HTMLInputElement>document.getElementById("figSel")).value = this.figuraSelec;
}
    public limpiarCampos(){
        (<HTMLInputElement>document.getElementById("Lado")).value = "";
        (<HTMLInputElement>document.getElementById("Base")).value = "";
        (<HTMLInputElement>document.getElementById("Altura")).value = "";
        (<HTMLInputElement>document.getElementById("Area")).value = "";
        (<HTMLInputElement>document.getElementById("figSel")).value = "";
    }
}
let fig = new figurasGeometricas()
function calcular(){
    fig.obtenerDatos();
    fig.seleccionarFigura();
}
function limpiar(){
    fig.limpiarCampos()
}