#pragma strict
var continuar:boolean;
var personagem:Transform;

var placaToda:Transform;
var placa:Transform;
var texturaPlaca1:Texture2D;
var texturaPlaca2:Texture2D;

var Luz:Transform;
var texturaLuz1:Texture2D;
var texturaLuz2:Texture2D;

var jaEscolheu:boolean;
var verificadorMostrarPlacas:boolean;

var estiloLetra:GUIStyle;
var fonte1:Font;
var fonte2:Font;
var mostrarOpcoes:boolean;
var mostrarOpcoes2:boolean;
function Start () {
if(Screen.width < 600){
	estiloLetra.font = fonte2;
}
jaEscolheu = false;
verificadorMostrarPlacas = false;
placaToda.gameObject.SetActiveRecursively(false);

//voltarProTabuleiro();

continuar = false;
//Luz.renderer.material.mainTexture = texturaLuz1;

//placa.renderer.material.mainTexture = texturaLux1;

personagem.animation.Play("idle");
animarEsperto1();

if(GameStates1Jogador.turnoDoJogador == 1){
	mostrarOpcoes = true;
}
if(GameStates1Jogador.quantidadeJogadores == 2)
	mostrarOpcoes = true;
}

function Update () {

}

function voltarProTabuleiro()
{
	yield WaitForSeconds(1);
	//Application.LoadLevel(3);
	
	continuar = true;
	
}

function mudarTExturaLuz(){
	yield WaitForSeconds(1);
	Luz.renderer.material.mainTexture = texturaLuz2;
}

function animarEsperto1(){
	yield WaitForSeconds(2);
	//mudarTExturaLuz();
	personagem.animation.Play("Esperto");
	yield WaitForSeconds(4);
	verificadorMostrarPlacas = true;
	
	if(GameStates1Jogador.quantidadeJogadores == 1)
		if(GameStates1Jogador.turnoDoJogador == 2){
			acaoAI();
		}
}

function acaoAI(){
	
	var valorRandom: int = Random.Range(1,3);
	print(valorRandom+"");
	if ( valorRandom == 1 ) {
	
		voltarProTabuleiro();
		placaToda.gameObject.SetActiveRecursively(true);
		personagem.animation.Play("mostrarPlaca");
		verificadorMostrarPlacas = false;
		placa.renderer.materials[1].mainTexture = texturaPlaca1;
		GameStates1Jogador.MudarEstado(501);
	}
	else if ( valorRandom ==2 ) {
	
		voltarProTabuleiro();
		placaToda.gameObject.SetActiveRecursively(true);
		personagem.animation.Play("mostrarPlaca");
		verificadorMostrarPlacas = false;
		placa.renderer.materials[1].mainTexture = texturaPlaca2;
		Jogador.aguardarRodada = true;
		GameStates1Jogador.MudarEstado(501);
	}
}

function OnGUI() {

	if(continuar == true){
		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"CONTINUAR")){
			
			//GameStates1Jogador.MudarEstado(500);
			
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
	}
	
	
	if(mostrarOpcoes){
	
		if(verificadorMostrarPlacas){
			
			
			var btnContinuar:Rect = Rect(Screen.width/4,Screen.height/1.5,Screen.width/5,Screen.height/7);
			var btnAguardar:Rect = Rect(Screen.width/1.75,Screen.height/1.5,Screen.width/5,Screen.height/7);
			
			if(GameStates1Jogador.turnoDoJogador == 1){
				if(GUI.Button(btnContinuar,"CONTINUA")){
					voltarProTabuleiro();
					placaToda.gameObject.SetActiveRecursively(true);
					personagem.animation.Play("mostrarPlaca");
					verificadorMostrarPlacas = false;
					placa.renderer.materials[1].mainTexture = texturaPlaca1;
					
					GameStates1Jogador.MudarEstado(500);
				}
				if(GUI.Button(btnAguardar,"AGUARDA")){
					voltarProTabuleiro();
					placaToda.gameObject.SetActiveRecursively(true);
					personagem.animation.Play("mostrarPlaca");
					verificadorMostrarPlacas = false;
					placa.renderer.materials[1].mainTexture = texturaPlaca2;
					JogadorAI.aguardarRodada = true;
					Jogador2.aguardarRodada = true;
					GameStates1Jogador.MudarEstado(500);
				}
			}
			else{
				if(GameStates1Jogador.quantidadeJogadores == 2){
					
					if(GUI.Button(btnContinuar,"CONTINUA")){
						voltarProTabuleiro();
						placaToda.gameObject.SetActiveRecursively(true);
						personagem.animation.Play("mostrarPlaca");
						verificadorMostrarPlacas = false;
						placa.renderer.materials[1].mainTexture = texturaPlaca1;
						
						GameStates1Jogador.MudarEstado(501);
					}
					if(GUI.Button(btnAguardar,"AGUARDA")){
						voltarProTabuleiro();
						placaToda.gameObject.SetActiveRecursively(true);
						personagem.animation.Play("mostrarPlaca");
						verificadorMostrarPlacas = false;
						placa.renderer.materials[1].mainTexture = texturaPlaca2;
						Jogador1.aguardarRodada = true;
						
						GameStates1Jogador.MudarEstado(501);
					}
				}
			}
		}
	}
	
	//GUI.Label(Rect(Screen.width/6,Screen.height/1.5,Screen.width/1.5,Screen.height/3),"VOCÊ É ESPERTO DECIDA SE \n O PRÓXIMO JOGADOR CONTINUA\n OU AGUARDA UMA RODADA",estiloLetra);
	
}
