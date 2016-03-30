#pragma strict
var posiX:int=0;
var posiY:int=0;
var larguraDosBotoes:int=200;
var alturaDosBotoes:int=100;
var distanciaEntreBotoes:int=10;
var btnJogar : GUIStyle;
var btnOpcoes : GUIStyle;
var btnCreditos : GUIStyle;
var btnSair : GUIStyle;
var titulo:Texture;

var link:GUIStyle;
function Update(){
	if(Input.GetKey(KeyCode.Escape)){
		Application.Quit();
	}
}

function OnGUI () {
	if(Screen.width > 600){
		larguraDosBotoes = Screen.width / 5;
		alturaDosBotoes = Screen.height / 8;
	}
	else{
		larguraDosBotoes = Screen.width / 4;
		alturaDosBotoes = Screen.height / 6.5;
	}
	GUI.DrawTexture(Rect(Screen.width/2 - (Screen.width*0.8)/2, /*Screen.height/8*/Screen.height/8, Screen.width*0.8,Screen.height*0.2),titulo);
	
	if(GUI.Button(Rect(Screen.width/2-larguraDosBotoes/2+posiX,Screen.height/2+posiY -10,larguraDosBotoes,alturaDosBotoes),"",btnJogar)){
		
		Application.LoadLevel(CenasMap.cenamap[1]);
	}
	if(GUI.Button(Rect(Screen.width/2-larguraDosBotoes/2+posiX,
		Screen.height/2+posiY+alturaDosBotoes+distanciaEntreBotoes - 10,larguraDosBotoes,alturaDosBotoes),"",btnOpcoes)){
		Application.LoadLevel(33);
	}
	
	if(GUI.Button(Rect(Screen.width/2-larguraDosBotoes/2+posiX,
		Screen.height/2+posiY+(alturaDosBotoes*2)+(distanciaEntreBotoes*2 -10),larguraDosBotoes,alturaDosBotoes),"",btnSair)){
		Application.Quit();
	}
	
	//GUI.Box(Rect(Screen.width- 150, Screen.height-30,150,20),"");
	if( GUI.Button(Rect(Screen.width- 200, Screen.height-30,190,20),"www.hegaboo.com.br",link)){
		Application.OpenURL("http://www.hegaboo.com.br");
	}
	//print(Screen.width+" / "+Screen.height);
	/*
	if(GUI.Button(Rect(Screen.width/2-larguraDosBotoes/2+posiX,
		Screen.height/2+posiY+(alturaDosBotoes*2)+(distanciaEntreBotoes*2),larguraDosBotoes,alturaDosBotoes),"",btnCreditos)){
		Application.LoadLevel(11);
	}
	*/
	
}