#pragma strict

var cameras:Camera[];
var mainCamera:Camera;
var btnMudarCameraStilo:GUIStyle;
var btnMudarCameraAtributos:Rect = Rect(0,0,90,90);
var camSelecionada:int=0;


function Start () {

Screen.sleepTimeout = SleepTimeout.NeverSleep;

for(var i =  0 ; i < cameras.Length;i++){
	cameras[i].camera.enabled = false;
}
cameras[0].camera.enabled=true;
//btnMudarCameraAtributos.x = Screen.width - 100;
//btnMudarCameraAtributos.y = 10;


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
	if(GameStates1Jogador.estadoAtual == 1 ||
		GameStates1Jogador.estadoAtual == 2 ||
		GameStates1Jogador.estadoAtual == 3 ||
		GameStates1Jogador.estadoAtual == 4)
		return true;
	else 
		return false;
}
function OnGUI (){
	if(Jogador.aguardarRodada){
		
	}
	else{
		if( podeMudarCamera() ){
			
			if(Screen.width > 600){
				if(GUI.Button(Rect(Screen.width - 120 - 10, 10 , 120, 120),"",btnMudarCameraStilo)){
							  
					if(camSelecionada==0){
						mudarCamera(2);
						camSelecionada=1;
		
					}else if(camSelecionada==1){
						mudarCamera(0);
						camSelecionada=0;
					}
				}
			}else{
				if(GUI.Button(Rect(Screen.width - 90 - 10, 10 , 90, 90),"",btnMudarCameraStilo)){
							  
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
	}
	
}