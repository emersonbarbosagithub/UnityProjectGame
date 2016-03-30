#pragma strict

var decid1:GUIText;
var decid2:GUIText;
var Jogador1:Transform;
var Jogador2:Transform;
var continuar:boolean;
var estiloLetras:GUIStyle;
var fonte1:Font;
var fonte2:Font;
var mostrarOpcoes:boolean;
var mostrarOpcoes2:boolean;
var decid1b:boolean;
var decid2b:boolean;
var estiloLetras2:GUIStyle;

function Start () {
	voltarProTabuleiro();
	continuar = false;
	//if(Screen.width < 600){
	//	estiloLetras.font = fonte2;
	//}
	
}

function Update () {
	
}
function voltarProTabuleiro()
{
	yield WaitForSeconds(9);
	
	if(GameStates1Jogador.turnoDoJogador == 2){
		mostrarOpcoes = true;
	}
	else{
		if(GameStates1Jogador.quantidadeJogadores == 1)
		{
			var valorRandom: int = Random.Range(13,15);
			print(valorRandom);
			GameStates1Jogador.MudarEstado(valorRandom);
			
			if(valorRandom == 13){
				Jogador2.animation.Play("desaprovar");
				yield WaitForSeconds(2);
				//decid1.gameObject.active = true;
				decid1b = true;
				continuar = true;
				
			}else{
				Jogador2.animation.Play("aprovar");
				yield WaitForSeconds(2);
				//decid2.gameObject.active = true;
				decid2b = true;
				continuar = true;
				
			}
		}else
			mostrarOpcoes2 = true;
	}


}

function OnGUI() {
	
	if(mostrarOpcoes){
		if(GUI.Button(Rect(Screen.width - (Screen.width/6)*1.25,Screen.height/2,Screen.width/6,Screen.width/6),"Avanca")){
			Jogador2.animation.Play("aprovar");
			GameStates1Jogador.MudarEstado(36);
			//decid2.gameObject.active = true;
			decid2b = true;
			mostrarOpcoes = false;
			
			continuar = true;
		}
		
		if(GUI.Button(Rect((Screen.width/6)/4,Screen.height/2,Screen.width/6,Screen.width/6),"Volta")){
			Jogador2.animation.Play("desaprovar");
			GameStates1Jogador.MudarEstado(35);
			//decid1.gameObject.active = true;
			decid1b = true;
			mostrarOpcoes = false;
			continuar = true;
		}
	}
	
	if(mostrarOpcoes2){
		if(GUI.Button(Rect(Screen.width - (Screen.width/6)*1.25,Screen.height/2,Screen.width/6,Screen.width/6),"Avanca")){
			Jogador2.animation.Play("aprovar");
			GameStates1Jogador.MudarEstado(14);
			//decid2.gameObject.active = true;
			decid2b = true;
			mostrarOpcoes2 = false;
			
			continuar = true;
		}
		
		if(GUI.Button(Rect((Screen.width/6)/4,Screen.height/2,Screen.width/6,Screen.width/6),"Volta")){
			Jogador2.animation.Play("desaprovar");
			GameStates1Jogador.MudarEstado(13);
			//decid1.gameObject.active = true;
			decid1b = true;
			mostrarOpcoes2 = false;
			continuar = true;
		}
	}
	
	if(continuar == true){
		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"Continuar")){
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
	if(decid1b){
		if(Screen.width > 600)
			GUI.Label(Rect(0,Screen.height/2,Screen.width,Screen.height/6),"VOLTE UMA CASA",estiloLetras);
		else
			GUI.Label(Rect(0,Screen.height/2,Screen.width,Screen.height/6),"VOLTE UMA CASA",estiloLetras);
			
	}
	if(decid2b){
		if(Screen.width > 600)
			GUI.Label(Rect(0, Screen.height/2, Screen.width,Screen.height/6),"AVANCE UMA CASA",estiloLetras);
		else
			GUI.Label(Rect(0, Screen.height/2, Screen.width,Screen.height/6),"AVANCE UMA CASA",estiloLetras);
	}
	
	//estiloLetras.fontSize = 12+(Screen.width/(Screen.width-12));
	//GUI.Label(Rect(Screen.width/2,Screen.height/2,200,100),"Olá", estiloLetras);
	//Debug.Log(Screen.width);
}
