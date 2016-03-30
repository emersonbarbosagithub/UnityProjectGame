#pragma strict
var btnEstilo:GUIStyle;
function Start () {

}

function Update () {

}

function OnGUI () {

	if(GUI.Button(Rect(Screen.width/2 - 100,Screen.height - 80,200,50), "Terminar",btnEstilo)){
		Application.LoadLevel(0);
	}
}