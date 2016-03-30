#pragma strict
var attrBtn1Jogador:Rect;
var attrBtn2Jogadores:Rect;
var attrGUIGroup:Rect;
var stlyBtn1Jogador:GUIStyle;
var stlyBtn2Jogadores:GUIStyle;

function Start () {
	attrGUIGroup.width = Screen.width*0.44;
	attrGUIGroup.height = Screen.height*0.8;
	attrGUIGroup.x = Screen.width/2 - attrGUIGroup.width/2;
	attrGUIGroup.y = Screen.height/2 - attrGUIGroup.height/2;
	
	attrBtn1Jogador.width = Screen.width*0.4;
	attrBtn1Jogador.height = Screen.height*0.4;
	
	
}

function Update () {

}
function OnGUI () {
	GUI.BeginGroup(attrGUIGroup);
	if(GUI.Button(Rect(0,0,attrGUIGroup.width,attrGUIGroup.height/2.3),"",stlyBtn1Jogador)){
		GameStates.quantidadeJogadores = 1;
		GameStates1Jogador.quantidadeJogadores = 1;
		Application.LoadLevel(CenasMap.cenamap[2]);
	}
	if(GUI.Button(Rect(0,attrGUIGroup.height/2,attrGUIGroup.width,attrGUIGroup.height/2.3),"",stlyBtn2Jogadores)){
		GameStates.quantidadeJogadores = 2;
		GameStates1Jogador.quantidadeJogadores = 2;
		Application.LoadLevel(CenasMap.cenamap[2]);
	}
	GUI.EndGroup();

}