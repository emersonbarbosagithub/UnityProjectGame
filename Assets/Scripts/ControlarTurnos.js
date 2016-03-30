var turno:int = 1;
public var cameraDado:boolean;
var botaoDado: boolean;
static var controleJogada:int = 1;
var isJogandoODado:boolean;

function Start(){
	cameraDado = false;
	
}
function Update () {
	if(turno == 1 && botaoDado == true){
		jogada();
		if(cameraDado == false && controleJogada == 2){
			//turno = 2;
		}
	}
	if(turno == 2 && botaoDado == true){
		jogada();
		if(cameraDado == false && controleJogada == 2){
			//turno = 1;
		}
	}
	
}

function jogada(){
	cameraDado = true;	
}
function OnGUI() {
	if(botaoDado==false){
		if(GUI.Button(Rect(Screen.width-120,Screen.height-80,100,50),"Dado")){
			botaoDado = true;
		}
	}
}
