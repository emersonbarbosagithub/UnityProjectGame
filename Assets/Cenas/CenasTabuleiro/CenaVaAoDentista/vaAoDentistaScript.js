#pragma strict
var continuar:boolean;
function Start () {
voltarProTabuleiro();
continuar = false;
}
function Update () {

}
function voltarProTabuleiro()
{
	yield WaitForSeconds(3);
	continuar = true;
}

function OnGUI() {

	if(continuar == true){
		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"Continuar")){
			
			if(GameStates1Jogador.turnoDoJogador == 1){
				GameStates1Jogador.MudarEstado(53);
				if(GameStates1Jogador.quantidadeJogadores == 2)
					Application.LoadLevel(4);
				else
					Application.LoadLevel(3);
				/*
				var valorRandom: int = Random.Range(13,15);
				print(valorRandom);
				GameStates1Jogador.MudarEstado(valorRandom);
				*/
			}
			else{
				GameStates1Jogador.MudarEstado(54);
				if(GameStates1Jogador.quantidadeJogadores == 2)
					Application.LoadLevel(4);
				else
					Application.LoadLevel(3);
				
			}
		}
	}
}
