#pragma strict
var texturaPainelPontuacao:Texture;
var estiloLabel:GUIStyle;
var estiloLabel2:GUIStyle;
var nomeJogador1:String;
var nomeJogador2:String;
function Start () {
	//estiloLabel.fontSize = 20;
	//estiloLabel.fontStyle = FontStyle.Bold;
	nomeJogador1 = MainPersonalizarPersonagem.nomeJogador1;
	nomeJogador2 = MainPersonalizarPersonagem.nomeJogador2;
}

function Update () {

}

function OnGUI () {
	if(Screen.width > 600){
	
		GUI.BeginGroup(Rect(20,Screen.height - texturaPainelPontuacao.height - 20, texturaPainelPontuacao.width, texturaPainelPontuacao.height));
			GUI.DrawTexture(Rect(0,0,texturaPainelPontuacao.width,texturaPainelPontuacao.height),texturaPainelPontuacao);
			estiloLabel.normal.textColor = Color.black;
			GUI.Label(Rect(25,20,300,100),"Pontuação",estiloLabel);
			estiloLabel.normal.textColor = Color.blue;
			GUI.Label(Rect(25,50,300,100),nomeJogador1+": "+(MainScript2.casaAtualJogador1*100),estiloLabel);
			estiloLabel.normal.textColor = Color.red;
			GUI.Label(Rect(25,80,300,100),nomeJogador2+": "+(MainScript2.casaAtualJogador2*100),estiloLabel);
		GUI.EndGroup();
		
	} else {
		//estiloLabel2.fontSize = 20;
		GUI.BeginGroup(Rect(0,Screen.height - (texturaPainelPontuacao.height / 2.5) - 10, texturaPainelPontuacao.width/ 2, texturaPainelPontuacao.height/ 2));
			
			GUI.DrawTexture(Rect(0,0,texturaPainelPontuacao.width/ 2,texturaPainelPontuacao.height/ 2),texturaPainelPontuacao);
			estiloLabel2.normal.textColor = Color.black;
			
			
			GUI.Label(Rect(25,(texturaPainelPontuacao.height / 2.2)/8,300,100),"Pontuação",estiloLabel2);
			estiloLabel2.normal.textColor = Color.blue;
			
			
			GUI.Label(Rect(25,(texturaPainelPontuacao.height / 2.2)/2.5,300,100),nomeJogador1+": "+(MainScript2.casaAtualJogador1*100),estiloLabel2);
			estiloLabel2.normal.textColor = Color.red;
			
			
			GUI.Label(Rect(25,(texturaPainelPontuacao.height / 2.2)/1.5,300,100),nomeJogador2+": "+(MainScript2.casaAtualJogador2*100),estiloLabel2);
		
		GUI.EndGroup();
		
	}
	
	//print(Screen.width + " " + Screen.height);
}