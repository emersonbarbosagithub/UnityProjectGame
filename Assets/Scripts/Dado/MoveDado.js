#pragma strict
var speed = 3.0;
var main:GameObject;
var jumpSpeed = 450.0;
private var vetorRotacao:Vector3;
private var grounded = true;
static var dadoFoiJogado:boolean = false;
var positInicial:Vector3;

var styBtnDado:GUIStyle;


function Start() {
	positInicial = transform.position;
	
}
function Update () {
	if(grounded == false/* && rigidbody.IsSleeping()==false*/){
		transform.Rotate(vetorRotacao * Time.deltaTime * 100);
	}
	
}

function OnMouseDown (){
	rolar();
}

function OnCollisionEnter(hit : Collision) {
	grounded = true;
}

function OnGUI(){
	if(GameStates1Jogador.estadoAtual==7){
		if(dadoFoiJogado==false){
			if(GUI.Button(Rect(Screen.width/2 - (Screen.width*0.1)/2,
							   Screen.height/2 ,
							   Screen.width*0.1,
							   Screen.height*0.2),"",styBtnDado)){
				//dadoFoiJogado=true;
				rolar();
			}
		}
	}

	//GUI.Box(Rect(10,10,90,40),"valor do dado");
	
	if(ValorDoDado.face != 0 && dadoFoiJogado && rigidbody.IsSleeping()){
		//GUI.Label(Rect(50,30,100,20),""+ValorDoDado.face);
		
		if(ValorDoDado.face != 0 && GameStates1Jogador.estadoAtual == 7 && dadoFoiJogado){
			if(GameStates1Jogador.turnoDoJogador == 1){
				main.GetComponent(Cameras).mudarCamera(0);
				GameStates1Jogador.MudarEstado(3);
				reiniciarDado();
				
			}
			else{
				main.GetComponent(Cameras).mudarCamera(1);
				GameStates1Jogador.MudarEstado(4);
				reiniciarDado();
			}
		}
	}
}

function rolar(){
	if(rigidbody.IsSleeping()){
		//grounded=false;
		rigidbody.AddForce(Vector3.up  * jumpSpeed * 55);
		grounded=false;
		vetorRotacao = Vector3(Random.Range(0.0,6.0),Random.Range(0.0,6.0),Random.Range(0.0,6.0));
		yield WaitForSeconds(.2);
		dadoFoiJogado=true;
	}
}
function reiniciarDado(){
	transform.position = positInicial;
}