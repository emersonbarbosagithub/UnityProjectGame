#pragma strict
var mostrarMenuPausa:boolean;
var styBox:GUIStyle;
var styBtns:GUIStyle;
var styBtnPausa:GUIStyle;
function Start () {

}

function Update () {

}

function OnGUI () {
	if(!mostrarMenuPausa){
		if(Screen.width > 600){
			if(GUI.Button(Rect(30,590,120,120),"",styBtnPausa)){
				
					Time.timeScale = 0;
					mostrarMenuPausa = true;
			}
		}else{
			if(GUI.Button(Rect(10,10,90,90),"",styBtnPausa)){
				
					Time.timeScale = 0;
					mostrarMenuPausa = true;
			}
		}
	}
	
	if(mostrarMenuPausa){
		
		if(Screen.width < 600){
			var boxDim:Rect = Rect(Screen.width/2 - (Screen.width/4),Screen.height/2 - (Screen.height/4-2),Screen.width/2,Screen.height/2);
			GUI.BeginGroup(Rect(boxDim.x,boxDim.y,boxDim.width,boxDim.height));
				GUI.Box(Rect(0,0,boxDim.width,boxDim.height),"",styBox);
				if(GUI.Button(Rect(boxDim.width/2 - (boxDim.width/2.5)/2 ,boxDim.height/8,boxDim.width/2.5,boxDim.height/5),"CONTINUAR",styBtns)){
					Time.timeScale = 1;
					mostrarMenuPausa = false;	
				}
				if(GUI.Button(Rect(boxDim.width/2 - (boxDim.width/2.5)/2 ,boxDim.height/8 + (boxDim.width/5.5),boxDim.width/2.5,boxDim.height/5.5),"MENU",styBtns)){
					Time.timeScale = 1;
					Application.LoadLevel(34);
				}
				if(GUI.Button(Rect(boxDim.width/2 - (boxDim.width/2.5)/2 ,boxDim.height/8 + (boxDim.width/5.5)*2,boxDim.width/2.5,boxDim.height/5.5),"SAIR",styBtns)){
					
					Application.Quit();
					Time.timeScale = 1;
				}
			GUI.EndGroup();
		}else{
			GUI.BeginGroup(Rect(Screen.width/2 - 200,Screen.height/2 - 100,400,250));
			GUI.Box(Rect(0,0,400,250),"",styBox);
			if(GUI.Button(Rect(125,40,150,50),"CONTINUAR",styBtns)){
				Time.timeScale = 1;
				mostrarMenuPausa = false;	
			}
			if(GUI.Button(Rect(125,100,150,50),"MENU PRINCIPAL",styBtns)){
				Time.timeScale = 1;
				Application.LoadLevel(34);
			}
			if(GUI.Button(Rect(125,160,150,50),"SAIR",styBtns)){
				
				Application.Quit();
				Time.timeScale = 1;
			}
		GUI.EndGroup();
		}
	}
	
}