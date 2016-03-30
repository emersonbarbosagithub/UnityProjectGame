#pragma strict

var groupAttr:Rect;
var estilo:GUIStyle;
function Start () {
	/*
	groupAttr.x = Screen.width/20;
	groupAttr.y = Screen.height/4;
	groupAttr.width = Screen.width/2.5;
	groupAttr.height = Screen.height/1.5;
	*/
	
	
	
}

function Update () {

}

function OnGUI () {

	if(GameStates1Jogador.turnoDoJogador == 1 ||
	 (GameStates1Jogador.quantidadeJogadores == 2 
	 && GameStates1Jogador.turnoDoJogador == 2 )){
		 
		 if(Screen.width > 600){
			groupAttr.x = Screen.width - 300;
			groupAttr.y = 100;
			groupAttr.width = 250;
			groupAttr.height = 350;
			
			GUI.BeginGroup(groupAttr);
			GUI.Box(Rect(0,0,groupAttr.width,groupAttr.height),"");
			
			if(GUI.Button(Rect(45,50,160,50),"IMITE UMA GALINHA",estilo)){
				Application.LoadLevel(23);
			}
			if(GUI.Button(Rect(45,110,160,50),"IMITE UM CACHORRO",estilo)){
				Application.LoadLevel(24);
			}
			if(GUI.Button(Rect(45,170,160,50),"IMITE UM MACACO",estilo)){
				Application.LoadLevel(25);
			}
			if(GUI.Button(Rect(45,230,160,50),"CANTE UMA MÚSICA",estilo)){
				Application.LoadLevel(26);
			}
			GUI.EndGroup();
		}
		else{
			groupAttr.x = Screen.width - 150;
			groupAttr.y = 80;
			groupAttr.width = 140;
			groupAttr.height = 145;
			
			GUI.BeginGroup(groupAttr);
			GUI.Box(Rect(0,0,groupAttr.width,groupAttr.height),"");
			
			if(GUI.Button(Rect(5,5,130,30),"IMITE UMA GALINHA",estilo)){
				Application.LoadLevel(23);
			}
			if(GUI.Button(Rect(5,40,130,30),"IMITE UM CACHORRO",estilo)){
				Application.LoadLevel(24);
			}
			if(GUI.Button(Rect(5,75,130,30),"IMITE UM MACACO",estilo)){
				Application.LoadLevel(25);
			}
			if(GUI.Button(Rect(5,110,130,30),"CANTE UMA MÚSICA",estilo)){
				Application.LoadLevel(26);
			}
			GUI.EndGroup();
		}
		
	}else{
		escolherPrendaAI();		
	}
}

function escolherPrendaAI(){
	yield WaitForSeconds(4);
	var prendaRandom:int = Random.Range(23,27);
	Application.LoadLevel(prendaRandom);
}