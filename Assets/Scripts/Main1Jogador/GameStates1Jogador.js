#pragma strict

static var gStates =
[

	"instrucoes",  	  //0
	"jogador1",    	  //1
	"AI",             //2
	"moveJogador1",   //3
	"moveAI",		  //4
	"cenaJogador1",	  //5
	"cenaJogador2",   //6
	"rolarDado",   	  //7
	"fimDoJogo",      //8
	"jogador1Andando",//9
	"AIAndando", 	  //10
	"voltandoProJogo" //11
	,"mostrarDentes"  //12
	,"voltarUmaCasas",//13
	"avancarUmaCasas" //14
	,"Ganhaando Imunidade" //15
	,"usando fio dental" //16
	,"cena depois de usar o fio dental" //17
	,"cena esperto" //18
	,"avancando 3 casas" // 19
	,"gengiva ferida" //20
	,"dente de lodo, placa" //21
	,"carie tacou o dente" //22
	,"escovou os dentes"   // 23
	,"proximo jogador paga prenda"  //24
	,""
	


];
static var estadoAtual:int;
static var jogadorAtual:int;
static var ultimoAJogar:int;
static var turnoDoJogador:int=1;
static var quantidadeJogadores:int;
var estile:GUIStyle;
static var cameraAtiva:int = 0;
function Start () {
	/*
	*
	*/
	estile.normal.textColor = Color.black;
	/*
	*/
	//estadoAtual=0;
}
static function MudarEstado(novoEstado:int){
	estadoAtual = novoEstado;
}
function OnGUI(){
	MostrarEstadoAtual();
	//GUI.Label(Rect(10,100,100,100),turnoDoJogador.ToString(),estile);
}
function MostrarEstadoAtual(){
	try{
		//GUI.Label(Rect(10,Screen.height-20,100,50),GameStates1Jogador.gStates[GameStates1Jogador.estadoAtual]);
	}
	catch(e){
		
	}
}

