#pragma strict

var cameras:Camera[];
var mainCamera:Camera;
var btnMudarCameraStilo:GUIStyle;
var btnMudarCameraAtributos:Rect = Rect(-20,30,65,40);
var camSelecionada:int=0;

function Start () {
for(var i =  0 ; i < cameras.Length;i++){
	cameras[i].camera.enabled = false;
}
cameras[0].camera.enabled=true;
btnMudarCameraAtributos.x += Screen.width - 80;

}

function mudarCamera(cameraAtiva:int) {
	var i:int;
	cameras[cameraAtiva].camera.enabled=true;
	for(i=0;i<cameras.Length;i++){
		if(i != cameraAtiva)
			cameras[i].camera.enabled=false;
	}
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
				mudarCamera(2);
				camSelecionada=1;

			}else if(camSelecionada==1){
				mudarCamera(0);
				camSelecionada=0;
			}
		}
	}
	
}