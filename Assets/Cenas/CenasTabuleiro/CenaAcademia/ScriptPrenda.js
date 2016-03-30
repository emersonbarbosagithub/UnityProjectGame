#pragma strict
var estiloGUI:GUIStyle;
var estiloGUI2:GUIStyle;
var continuar:boolean;
function Start () {
continuar = false;
voltarProTabuleiro();


}

function Update () {

}
function voltarProTabuleiro()
{
	yield WaitForSeconds(3);
	continuar = true;
}
function OnGUI () {
	var attrLabel:Rect=Rect(Screen.width/4,Screen.height*0.1,Screen.width/2,Screen.height/2);
	var attrLabel2:Rect=Rect(Screen.width/4+1,Screen.height*0.1+1,Screen.width/2,Screen.height/2);
	//GUI.Label(attrLabel2,"VOCÊ ESTÁ FORTE, ESCOLHA \nUMA PRENDA PARA O PRÓXIMO \nJOGADOR PAGAR.",estiloGUI2);
	
	//GUI.Label(attrLabel,"VOCÊ ESTÁ FORTE, ESCOLHA \nUMA PRENDA PARA O PRÓXIMO \nJOGADOR PAGAR.",estiloGUI);
	/*
	GUI.Button();
	GUI.Button();
	GUI.Button();
	GUI.Button();
	*/
	/*
	if(continuar == true){
		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"Continuar")){
			GameStates1Jogador.MudarEstado(500);
			Application.LoadLevel(3);
		}
	}
	*/
	
}