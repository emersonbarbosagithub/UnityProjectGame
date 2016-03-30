#pragma strict

var decid1:GUIText;
var decid2:GUIText;
var continuar:boolean;

function Start () {
	voltarProTabuleiro();
	continuar = false;
}

function Update () {
	
}
function voltarProTabuleiro()
{
	yield WaitForSeconds(10);
	continuar = true;
	var valorRandom: int = Random.Range(13,15);
	print(valorRandom);
	GameStates1Jogador.MudarEstado(valorRandom);
	
	if(valorRandom == 13){
		decid1.gameObject.active = true;
		
	}else{
		decid2.gameObject.active = true;
	}
		

}

function OnGUI() {

	if(continuar == true){
		if(GUI.Button(Rect(Screen.width-100,Screen.height-100,90,90),"Continuar")){
			Application.LoadLevel(3);
			/*
			var valorRandom: int = Random.Range(13,15);
			print(valorRandom);
			GameStates1Jogador.MudarEstado(valorRandom);
			*/
		}
	}
}
