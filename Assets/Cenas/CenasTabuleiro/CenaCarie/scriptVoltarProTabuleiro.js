#pragma strict
var continuar:boolean;
var btnContinuar:Texture;
function Start () {
voltarProTabuleiro();
continuar = false;

}

function Update () {

}
function voltarProTabuleiro()
{
	yield WaitForSeconds(5);
	//Application.LoadLevel(3);
	continuar = true;
}

function OnGUI() {
	
	if(continuar == true){
	
		if(GUI.Button(Rect(Screen.width-280,Screen.height-150,btnContinuar.width, btnContinuar.height),btnContinuar)){
			if(GameStates1Jogador.turnoDoJogador == 1){	
				GameStates1Jogador.MudarEstado(500);
				if(GameStates.quantidadeJogadores == 2)
					Application.LoadLevel(4);
				else
					Application.LoadLevel(3);
			}
			else{
				GameStates1Jogador.MudarEstado(501);
				if(GameStates.quantidadeJogadores == 2)
					Application.LoadLevel(4);
				else
					Application.LoadLevel(3);
			}
		}
		
	}
}