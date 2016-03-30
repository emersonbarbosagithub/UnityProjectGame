#pragma strict
var jog1:GameObject;
var jog2:GameObject;

function OnGUI(){
	//MostrarEstadoAtual();
	
	switch(GameStates.estadoAtual){
		case 1:
			//if(GUI.Button(Rect(Screen.width-100,Screen.height-100,100,50),"RolarDado")){
				//Dado.rolarDado();
				//GameStates.MudarEstado(3);
			//}
		break;
		case 2:
			//if(GUI.Button(Rect(Screen.width-100,Screen.height-100,100,50),"RolarDado")){
				//Dado.rolarDado();
				//GameStates.MudarEstado(4);
			//}
		break;
		case 3:
			//jog1.GetComponent(Jogador).Mover();
			//GameStates.MudarEstado(2);
		break;
		case 4:
			//yield WaitForSeconds (Dado.valorAtual);
			//jog2.GetComponent(Jogador).Mover();
			//GameStates.MudarEstado(1);
		break;
	}
}

