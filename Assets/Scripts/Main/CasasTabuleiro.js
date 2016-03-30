#pragma strict
var casas:Transform[];
var casasJogador2:Transform[];
function Start () {

}

function Update () {
	
}

/*
** cria um path da posição atual do personagem até a posição que ele irá andar
** parametros (posicaoAtual : int, posicaoDestino : int)
** retono path : Transform[]
*/

function criarPath(posicaoAtual:int , posicaoDestino:int, jogador:int){
	var i:int;
	var j:int=0;
	var casasDoTabuleiro:Transform[];
	if(jogador==1){
		casasDoTabuleiro = this.casas;
	}if(jogador==2){
		casasDoTabuleiro = this.casasJogador2;
	}
	var path2:Transform[] = new Transform[Mathf.Abs((posicaoDestino+1)-posicaoAtual)];
	for(i=posicaoAtual;i<=posicaoDestino;i++){
		path2[j] = casasDoTabuleiro[i];
		j++;
	}
	return path2;
}

function criarPathVoltando(posicaoAtual:int , posicaoDestino:int, jogador:int){
	var i:int;
	var j:int=0;
	var casasDoTabuleiro:Transform[];
	if(jogador==1){
		casasDoTabuleiro = this.casas;
	}if(jogador==2){
		casasDoTabuleiro = this.casasJogador2;
	}
	print(Mathf.Abs((posicaoDestino)-posicaoAtual));
	
	var path2:Transform[] = new Transform[Mathf.Abs((posicaoDestino)-posicaoAtual)];
	
	for(i=posicaoAtual-1;i>=posicaoDestino;i--){
	
		path2[j] = casasDoTabuleiro[i];
		print(j);
		j++;
		
	}
	return path2;
}
