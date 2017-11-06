export class Frase {
	public fraseEng: string
	public frasePtBr: string

	constructor(fraseEng: string, frasePtBr: string){
		this.fraseEng = fraseEng
		this.frasePtBr = frasePtBr
	}


/*
Podemos substituir todo o código acima por essa pequena instrução abaixo:

	constructor(public fraseEng: string, public frasePtBr: string){ }

Ele faria a mesma coisa que o código declarado entre as linhas 2 e 7 deixando o código mais enxuto, 
com mais prática o ideal é que se utilize o segundo método.
*/

}