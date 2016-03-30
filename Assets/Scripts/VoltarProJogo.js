#pragma strict

function Start () {

}


function loadlvl () {
	GameStates1Jogador.MudarEstado(500);
	//Application.LoadLevel(3);
	var async : AsyncOperation = Application.LoadLevelAsync (3);
    yield async;
	
		Debug.Log("Loading complete T_T");
}
function Update(){
	//Debug.Log(Camera.current);
	if(Input.GetKeyDown(KeyCode.Space)){
		loadlvl();
	}
	print("aindaaqui");
}
function OnGUI(){
	if(GUI.Button(Rect(Screen.width/2 - (Screen.width*0.3)/2,Screen.height/2 - (Screen.width*0.2)/2,Screen.width*0.3,Screen.width*0.2), "Voltar")){
		loadlvl();
	}
}