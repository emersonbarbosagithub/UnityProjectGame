#pragma strict

function Start () {

}

function Update () {

}
function OnGUI(){

		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"Continuar")){
			GameStates1Jogador.MudarEstado(500);
			Application.LoadLevel(3);
		}
}