#pragma strict
var casas:Transform[];
var casasJogador2:Transform[];
function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.Escape))
		Application.LoadLevel(0);
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
	var path2:Transform[] = new Transform[(posicaoDestino+1)-posicaoAtual];
	for(i=posicaoAtual;i<=posicaoDestino;i++){
		path2[j] = casasDoTabuleiro[i];
		j++;
	}
	return path2;
}