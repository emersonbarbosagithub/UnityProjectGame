#pragma strict

static var gStates =
[
	"instrucoes",  //0
	"jogador1",    //1
	"jogador2",    //2
	"moveJogador1",//3
	"moveJogador2",//4
	"cenaJogador1",//5
	"cenaJogador2",//6
	"rolarDado",   //7
	"fimDoJogo",    //8
	"jogador1Andando", //9
	"jogador2Andando", //10
	"moveBot", //11
	"botAndando", //12
	"voltarJogo"
];
static var estadoAtual:int;
static var jogadorAtual:int;
static var ultimoAJogar:int;
static var turnoDoJogador:int;
static var quantidadeJogadores:int = 1;
function Start () {
	estadoAtual=0;
}
static function MudarEstado(novoEstado:int){
	estadoAtual = novoEstado;
}
function OnGUI(){
	MostrarEstadoAtual();
}
function MostrarEstadoAtual(){
	GUI.Label(Rect(10,Screen.height-20,100,50),GameStates.gStates[GameStates.estadoAtual]);
}