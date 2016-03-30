#pragma strict

function OnGUI(){
	if(GameStates.estadoAtual == 0){
		if(GUI.Button(Rect(10,10,100,50),"OK")){
			GameStates.MudarEstado(1);
		}
	}
}