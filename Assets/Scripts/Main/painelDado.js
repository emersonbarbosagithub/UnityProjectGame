#pragma strict
var imagensDado:Texture[];
var imagemPainel:Texture;
var estiloLabel:GUIStyle;
var nomeJogador1:String;
var nomeJogador2:String;
function Start () {
	nomeJogador1 = MainPersonalizarPersonagem.nomeJogador1;
	nomeJogador2 = "Littleboo";
}

function Update () {

}

function OnGUI () {

	if(Screen.width > 600){
		switch(GameStates1Jogador.estadoAtual){
			case 9:
				estiloLabel.normal.textColor = Color.blue;
				GUI.DrawTexture(Rect(Screen.width/2 - (imagemPainel.width/1.5)/2,-30,imagemPainel.width/1.5,imagemPainel.height/2 + 50),imagemPainel);
				
				GUI.Label(Rect(Screen.width/2 - (nomeJogador1.Length*12)/2 ,0,200,100),nomeJogador1,estiloLabel);
				
				GUI.DrawTexture(Rect(Screen.width/2 - (imagensDado[0].width/1.5)/2,35,imagensDado[0].width/1.5,imagensDado[0].height/1.5),
				 imagensDado[Jogador.valorDoDadoJogador1-1]);
			break;
			case 10:
				estiloLabel.normal.textColor = Color.red;
				GUI.DrawTexture(Rect(Screen.width/2 - (imagemPainel.width/1.5)/2,-30,imagemPainel.width/1.5,imagemPainel.height/2 + 50),imagemPainel);
				
				GUI.Label(Rect(Screen.width/2 - (nomeJogador2.Length * 12)/2 ,0,200,100),nomeJogador2,estiloLabel);
				
				GUI.DrawTexture(Rect(Screen.width/2 - (imagensDado[0].width/1.5)/2,35,imagensDado[0].width/1.5,imagensDado[0].height/1.5),
				 imagensDado[JogadorAI.valorDoDadoMaquina-1]);	
			break;
			
		}
	}
	else{
		switch(GameStates1Jogador.estadoAtual){
			case 9:
				estiloLabel.normal.textColor = Color.blue;
				GUI.DrawTexture(Rect(Screen.width/2 - (imagemPainel.width/3)/2,-30,imagemPainel.width/3,imagemPainel.height/4 + 50),imagemPainel);
				
				GUI.Label(Rect(Screen.width/2 - (nomeJogador1.Length*12)/2 ,0,200,100),nomeJogador1,estiloLabel);
				
				GUI.DrawTexture(Rect(Screen.width/2 - (imagensDado[0].width/3)/2,35,imagensDado[0].width/3,imagensDado[0].height/3),
				 imagensDado[Jogador.valorDoDadoJogador1-1]);
			break;
			case 10:
				estiloLabel.normal.textColor = Color.red;
				GUI.DrawTexture(Rect(Screen.width/2 - (imagemPainel.width/3)/2,-30,imagemPainel.width/3,imagemPainel.height/4 + 50),imagemPainel);
				
				GUI.Label(Rect(Screen.width/2 - (nomeJogador2.Length * 12)/2 ,0,200,100),nomeJogador2,estiloLabel);
				
				GUI.DrawTexture(Rect(Screen.width/2 - (imagensDado[0].width/3)/2,35,imagensDado[0].width/3,imagensDado[0].height/3),
				 imagensDado[JogadorAI.valorDoDadoMaquina-1]);	
			break;
			
		}
	}
		
}