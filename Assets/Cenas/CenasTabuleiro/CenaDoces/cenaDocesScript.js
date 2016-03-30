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
	yield WaitForSeconds(3);
	//Application.LoadLevel(3);
	continuar = true;
}

function OnGUI() {

	if(continuar == true){
		if(GUI.Button(Rect(Screen.width-280,Screen.height-150,btnContinuar.width, btnContinuar.height),btnContinuar)){
			if(GameStates1Jogador.turnoDoJogador == 1){
				GameStates1Jogador.MudarEstado(56);
				if(GameStates.quantidadeJogadores == 2)
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
				GameStates1Jogador.MudarEstado(57);
				if(GameStates.quantidadeJogadores == 2)
					Application.LoadLevel(4);
				else
					Application.LoadLevel(3);
				
			}
		}
	}
}
