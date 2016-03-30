#pragma strict
var estiloBox:GUIStyle;
var estiloTitulo:GUIStyle;
var estiloTitulo2:GUIStyle;
var estiloLabel:GUIStyle;
var estiloLabel2:GUIStyle;
var boxDimensions:Rect;
var btn1:GUIStyle;
var btn2:GUIStyle;
var estilobtn:GUIStyle;

var estiloLabelUsado:GUIStyle;

function Start () {
	boxDimensions = Rect(0,0,Screen.width/1.5,Screen.height/1.5);
}

function OnGUI () {
	
	if(Screen.width > 600){
		GUI.BeginGroup(Rect(Screen.width/2 - boxDimensions.width/2 ,
			Screen.height/2 - boxDimensions.height/2,
			boxDimensions.width,boxDimensions.height));
			GUI.Box(boxDimensions,"",estiloBox);
			
			/*
			GUI.Label(Rect(0,30,boxDimensions.width,100),"OPÇÕES",estiloTitulo);
			GUI.Label(Rect(80,boxDimensions.height/3,100,40 ),"SOM",estiloLabel);
			GUI.Label(Rect(80,boxDimensions.height/2,100,40 ),"VOZ",estiloLabel);
			*/
			GUI.Label(Rect(0,boxDimensions.height/30,boxDimensions.width,100),"OPÇÕES",estiloTitulo);
			GUI.Label(Rect(boxDimensions.width/10, boxDimensions.height/3,100,40 ),"SOM",estiloLabel);
			GUI.Label(Rect(boxDimensions.width/10, boxDimensions.height/1.8,100,40 ),"VOZ",estiloLabel);
			
			
			Opcoes.som = GUI.Toggle(Rect(boxDimensions.width - boxDimensions.width/4,boxDimensions.height/3,50,50),Opcoes.som,"",btn1);
			Opcoes.voz = GUI.Toggle(Rect(boxDimensions.width - boxDimensions.width/4,boxDimensions.height/1.8,50,50),Opcoes.voz,"",btn1);
			
			if(GUI.Button(Rect(boxDimensions.width /2 - (boxDimensions.width/4)/2,boxDimensions.height - (boxDimensions.height/10)*2.5,boxDimensions.width/4,boxDimensions.height/10),"VOLTAR",estilobtn)){
				Application.LoadLevel(34);
				
			}
		GUI.EndGroup();
	}else{
		GUI.BeginGroup(Rect(Screen.width/2 - boxDimensions.width/2 ,
			Screen.height/2 - boxDimensions.height/2,
			boxDimensions.width,boxDimensions.height));
			GUI.Box(boxDimensions,"",estiloBox);
			
			/*
			GUI.Label(Rect(0,30,boxDimensions.width,100),"OPÇÕES",estiloTitulo);
			GUI.Label(Rect(80,boxDimensions.height/3,100,40 ),"SOM",estiloLabel);
			GUI.Label(Rect(80,boxDimensions.height/2,100,40 ),"VOZ",estiloLabel);
			*/
			GUI.Label(Rect(0,boxDimensions.height/30,boxDimensions.width,100),"OPÇÕES",estiloTitulo2);
			GUI.Label(Rect(boxDimensions.width/10, boxDimensions.height/3,100,40 ),"SOM",estiloLabel2);
			GUI.Label(Rect(boxDimensions.width/10, boxDimensions.height/1.8,100,40 ),"VOZ",estiloLabel2);
			
			
			Opcoes.som = GUI.Toggle(Rect(boxDimensions.width - boxDimensions.width/4,boxDimensions.height/3.2,38,38),Opcoes.som,"",btn1);
			Opcoes.voz = GUI.Toggle(Rect(boxDimensions.width - boxDimensions.width/4,boxDimensions.height/2,38,38),Opcoes.voz,"",btn1);
			
			if(GUI.Button(Rect(boxDimensions.width /2 - (boxDimensions.width/4)/2,boxDimensions.height - (boxDimensions.height/10)*2.5,boxDimensions.width/4,boxDimensions.height/10),"VOLTAR",estilobtn)){
				Application.LoadLevel(34);
				
			}
		GUI.EndGroup();
	}
}