#pragma strict
var estiloLetra:GUIStyle;
var estiloLetra2:GUIStyle;
function Start () {
	//estiloLetra.fontSize = 48;
	//estiloLetra.fontStyle = FontStyle.Bold;
}

function Update () {

}
function OnGUI (){
	var nome:String;
	if(GameStates1Jogador.turnoDoJogador == 1){
		estiloLetra.normal.textColor = Color.blue;
		estiloLetra2.normal.textColor = Color.blue;
		nome = MainPersonalizarPersonagem.nomeJogador1;
	}
	else {
		estiloLetra.normal.textColor = Color.red;
		estiloLetra2.normal.textColor = Color.red;
		if(GameStates1Jogador.quantidadeJogadores == 2)
			nome = MainPersonalizarPersonagem.nomeJogador2;
		else
			nome = "Littleboo";
		
	}
	if(Screen.width > 600)
		GUI.Label(Rect(10,10,400,100),nome,estiloLetra);
	else
		GUI.Label(Rect(10,10,400,100),nome,estiloLetra2);
	
}