#pragma strict
var continuar:boolean;
var PersonagemDente:Transform;
var CaixaFioDental:Transform;
var btnContinuar:Texture;
var particlesBrilho:ParticleSystem;
var sujeira:Transform;
var letreiro:GameObject;

function Start () {
voltarProTabuleiro();
continuar = false;
//Jogador.imunidadeAtivada = true;
brilharDente();
	
}
function brilharDente(){
	yield WaitForSeconds(2);
	sujeira.gameObject.SetActiveRecursively(false);
	particlesBrilho.Play();
}

function Update () {
PersonagemDente.animation.Play("fioDental");
//CaixaFioDental.animation.Play("Action.001");
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
				GameStates1Jogador.MudarEstado(19);
			} else {
				GameStates1Jogador.MudarEstado(34);
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
