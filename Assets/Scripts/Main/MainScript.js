#pragma strict
var jogador1:Transform;
var jogador2:Transform;
var stiloBtnRolarDado:GUIStyle;
var atributosBtnRolarDado:Rect;
function Start () {
	//jogador1.GetComponent(Jogador).nome = GuiNome.NomeJogador1;
}
function loadlvl () {
	Application.LoadLevel(7);
	
		Debug.Log("Carregamento Completo");
}
function Update(){
	//Debug.Log(Camera.current);
	if(Input.GetKeyDown(KeyCode.Space)){
		loadlvl();
	}
}

function OnGUI () {
	switch(GameStates.estadoAtual){
		case 1:
			if(GUI.Button(Rect(Screen.width-100+atributosBtnRolarDado.x,Screen.height-100+atributosBtnRolarDado.y,90,90),"",stiloBtnRolarDado)){
				//Dado.rolarDado();
				GameStates.turnoDoJogador=1;
				this.GetComponent(Cameras).mudarCamera(3);
				MoveDado.dadoFoiJogado=false;
				GameStates.MudarEstado(7);
			}
		break;
		case 2:
			if(GUI.Button(Rect(Screen.width-100+atributosBtnRolarDado.x,Screen.height+atributosBtnRolarDado.y-100,90,90),"",stiloBtnRolarDado)){
				//Dado.rolarDado();
				//GameStates.MudarEstado(4);
				
				GameStates.turnoDoJogador=2;
				this.GetComponent(Cameras).mudarCamera(3);
				MoveDado.dadoFoiJogado=false;
				GameStates.MudarEstado(7);
			}
		break;
		case 3:
			jogador1.GetComponent(Jogador).Mover();
			GameStates.MudarEstado(9);	
		break;
		case 4:
			jogador2.GetComponent(Jogador).Mover();
			GameStates.MudarEstado(10);
		break;
		case 5:
			
			//Application.LoadLevel(1);
			GameStates.MudarEstado(2);
		break;
		case 6:
			GameStates.MudarEstado(1);
		break;
		case 7:
			/*
				if(GameStates.turnoDoJogador == 1)
					GameStates.MudarEstado(3);
				else
					GameStates.MudarEstado(4);
			*/
		break;
	}
}
function esperar(){
	yield WaitForSeconds(5);
}