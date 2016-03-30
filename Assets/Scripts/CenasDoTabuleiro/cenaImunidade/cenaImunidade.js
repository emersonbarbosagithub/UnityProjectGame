#pragma strict
var continuar:boolean;
var aura:ParticleSystem;
function Start () {
	voltarProTabuleiro();
	continuar = false;
	if(GameStates.quantidadeJogadores == 1){
		if(GameStates1Jogador.turnoDoJogador == 1)
			Jogador.imunidadeAtivada = true;
		else
			JogadorAI.imunidadeAtivada = true;
	}
	else{
		if(GameStates1Jogador.turnoDoJogador == 1)
			Jogador1.imunidadeAtivada = true;
		else
			Jogador2.imunidadeAtivada = true;
	}
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
		aura.particleSystem.Play();
		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"Continuar")){
			//GameStates1Jogador.MudarEstado(500);
			
			if(GameStates1Jogador.turnoDoJogador == 1){
				GameStates1Jogador.MudarEstado(500);
			}
			else{
				GameStates1Jogador.MudarEstado(501);
			}
			

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
	}
}
