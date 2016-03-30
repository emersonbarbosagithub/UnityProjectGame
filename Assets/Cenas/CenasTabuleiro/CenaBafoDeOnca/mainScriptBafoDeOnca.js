#pragma strict
var dente:Transform;
var onca:Transform;
var continuar:boolean;
var particleBafo:Transform;
var btnContinuar:Texture;
function Start () {
voltarProTabuleiro();
continuar = false;
	rodarAnimacoes();
}

function Update () {
	
}
function voltarProTabuleiro()
{
	yield WaitForSeconds(3);
	//Application.LoadLevel(3);
	continuar = true;
}
function rodarAnimacoes(){
	dente.animation.CrossFade("idle");
	yield WaitForSeconds(1);
	onca.animation.Play("bafo");
	yield WaitForSeconds(0.5);
	particleBafo.particleSystem.Play();
	
	yield WaitForSeconds(3);
	particleBafo.particleSystem.Stop();
	dente.animation.Play("fedor");
	
	
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
				/*
				var valorRandom: int = Random.Range(13,15);
				print(valorRandom);
				GameStates1Jogador.MudarEstado(valorRandom);
				*/
			}
			else {
				GameStates1Jogador.MudarEstado(501);
				if(GameStates.quantidadeJogadores == 2)
					Application.LoadLevel(4);
				else
					Application.LoadLevel(3);
			}
		}
	}
}