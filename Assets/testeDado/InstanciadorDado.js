#pragma strict
var speed = 3.0;
var main:GameObject;
private var vetorRotacao:Vector3;
static var grounded = false;
static var dadoFoiJogado:boolean = false;
var dadoObj:Transform;
var positInicial:Vector3;
var mudar:boolean=false;


function Start() {
	
}

function Update () {
}

function OnGUI(){
	if(GameStates.estadoAtual==7){
		if(dadoFoiJogado==false){
			if(GUI.Button(Rect(Screen.width-140,Screen.height-80,100,80),"Jogar dado")){
				//dadoFoiJogado=true;
				rolar();
			}
		}
	}
	GUI.Box(Rect(10,10,90,40),"valor do dado");
	
	if(mudar){
		GUI.Label(Rect(50,30,100,20),""+ValorDoDado.face);
		
		if(ValorDoDado.face != 0 && GameStates.estadoAtual == 7 && dadoFoiJogado){
			if(GameStates.turnoDoJogador == 1){
				main.GetComponent(Cameras).mudarCamera(0);
				GameStates.MudarEstado(3);
				
			}
			else{
				main.GetComponent(Cameras).mudarCamera(1);
				GameStates.MudarEstado(4);
			}
		}
		mudar=false;
	}
}

function rolar(){
		var dado = Instantiate(dadoObj,transform.position,transform.rotation);
		dado.GetComponent(ScDado).pai = this.gameObject;
		grounded=false;
		
		//yield WaitForSeconds(.2);
		dadoFoiJogado=true;
}