#pragma strict

var camera1:Camera;
var cameraPan:Camera;
var camera2:Camera;

var btnMudarCameraStilo:GUIStyle;
var btnMudarCameraAtributos:Rect = Rect(-20,30,65,40);
var camSelecionada:int=0;
var controladorTurnos:Transform;
/*
function Start () {
	camera1.camera.enabled=true;
	camera2.camera.enabled=false;
	cameraPan.camera.enabled=false;

btnMudarCameraAtributos.x += Screen.width - 80;

}

function Update () {
	
}
function podeMudarCamera(){
	if(GameStates.estadoAtual == 1 ||
		GameStates.estadoAtual == 2 ||
		GameStates.estadoAtual == 3 ||
		GameStates.estadoAtual == 4)
		return true;
	else 
		return false;
}
function OnGUI (){
	if( podeMudarCamera() ){
		if(GUI.Button(btnMudarCameraAtributos,"",btnMudarCameraStilo)){
		
			if(camSelecionada==0){
				camSelecionada=1;
				cameraPan.camera.enabled=true;
				camera1.camera.enabled=false;
				Debug.Log("Cam2");
				
			}else if(camSelecionada==1){
				camSelecionada=0;
				camera1.camera.enabled=true;
				cameraPan.camera.enabled=false;
				
				Debug.Log("Cam1");
				
			}
		}
	}
	
}
*/