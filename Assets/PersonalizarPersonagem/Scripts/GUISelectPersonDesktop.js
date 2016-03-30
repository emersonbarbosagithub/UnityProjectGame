#pragma strict

var bgGroupAttr:Rect;
var boxAttr:Rect;
//var nomePerson = "nome";
var styGenero:GUIStyle;
var styRosto:GUIStyle;
var styAcess:GUIStyle;
var styEditarNome:GUIStyle;
var styConfirmar:GUIStyle;
var styVoltar:GUIStyle;

var styLabelNome:GUIStyle;

var styFonte:GUIStyle;
var styFonte2:GUIStyle;

var personagem1:Transform;
var personagem2:Transform;
var materialPersonagem1:Material;

var posicaoVertical:int;
static var personagemSelecionado:int = 1;
static var vezDeEscolha:int = 1;

//private var keyboard:TouchScreenKeyboard;
//private var keyboard2:TouchScreenKeyboard;

var nomePerson:String = "Jogador 1";
var nomePerson2:String = "Jogador 2";

var resolu:int;

if(Screen.width < 600){
	resolu = 20;
	
}

function Start () {

	personagemSelecionado = 1;
	vezDeEscolha = 1;
	
	bgGroupAttr.x = Screen.width * 0.025;
	bgGroupAttr.y = Screen.height * 0.05;
	bgGroupAttr.width = Screen.width * 0.95;
	bgGroupAttr.height = Screen.height * 0.9;
	
	boxAttr.x = 0;
	boxAttr.y = 0;
	boxAttr.width = bgGroupAttr.width;
	boxAttr.height = bgGroupAttr.height;
	posicaoVertical = bgGroupAttr.height / 20;
	
	materialPersonagem1.color = Color(0.35,0.35,0.35);
	
	
	
}

function Update () {

}
function OnGUI () {
	
	
	GUI.BeginGroup(bgGroupAttr);
		//GUI.Box(boxAttr,"");
		
		
		GUI.Label(Rect(10,-10,100,50),"NOME:",styLabelNome);
		
		if(vezDeEscolha == 1){
			//nomePerson = MainPersonalizarPersonagem.nomeJogador1;
			//GUI.Label(Rect(bgGroupAttr.width*0.1+2,posicaoVertical,bgGroupAttr.width*0.3,bgGroupAttr.width*0.1),nomePerson,styFonte);
			styFonte.normal.textColor = Color.blue;
			
			GUI.SetNextControlName("np1");
			
			nomePerson = GUI.TextField(Rect(/*bgGroupAttr.width*0.1+2 +resolu*/ 0 ,posicaoVertical,bgGroupAttr.width*0.3+resolu,bgGroupAttr.width*0.1+resolu),nomePerson,10,styFonte);
			MainPersonalizarPersonagem.nomeJogador1 = nomePerson;
			
			/*
			if(GUI.Button(
				Rect(0,
					posicaoVertical,
					bgGroupAttr.width*0.1+resolu,
					bgGroupAttr.width*0.1+resolu)
								,"",styEditarNome))
			{
					//keyboard = TouchScreenKeyboard.Open(MainPersonalizarPersonagem.nomeJogador1, TouchScreenKeyboardType.Default);
					GUI.FocusControl("np1");
					print("focou");
			}
			*/
			/*
			if (keyboard){
				if(keyboard.text.Length <=10 )
	        		MainPersonalizarPersonagem.nomeJogador1 = keyboard.text;
	        	else
	        		keyboard.active = false;
	    	}
	    	*/
		}else{
			/*
			if(GUI.Button(
				Rect(0,
					posicaoVertical,
					bgGroupAttr.width*0.1+resolu,
					bgGroupAttr.width*0.1+resolu)
								,"",styEditarNome))
			{	
					//keyboard2 = TouchScreenKeyboard.Open(MainPersonalizarPersonagem.nomeJogador2, TouchScreenKeyboardType.Default);
			}
			*/
			/*
			if (keyboard2){
				if(keyboard2.text.Length <=10 )
	        		MainPersonalizarPersonagem.nomeJogador2 = keyboard2.text;
	        	else
	        		keyboard.active = false;
	    	}
	    	*/
			//nomePerson2 = MainPersonalizarPersonagem.nomeJogador2;
			//GUI.Label(Rect(bgGroupAttr.width*0.1+2,posicaoVertical,bgGroupAttr.width*0.3,bgGroupAttr.width*0.1),nomePerson,styFonte);
			styFonte.normal.textColor = Color.red;
			
			//if(Screen.width > 600){
				nomePerson2 = GUI.TextField(Rect(/* bgGroupAttr.width*0.1+2 */ 0,posicaoVertical,bgGroupAttr.width*0.3,bgGroupAttr.width*0.1),nomePerson2,10,styFonte);
				MainPersonalizarPersonagem.nomeJogador2 = nomePerson2;
			//}else{
			//	nomePerson2 = GUI.TextField(Rect(bgGroupAttr.width*0.1+2,posicaoVertical,bgGroupAttr.width*0.3,bgGroupAttr.width*0.1),nomePerson2,styFonte2);
			//	MainPersonalizarPersonagem.nomeJogador2 = nomePerson2;
			//}
		}
			
		/*
		if(GUI.Button(Rect(bgGroupAttr.width/1.15,
							posicaoVertical,
							bgGroupAttr.width*0.1, 
							bgGroupAttr.width*0.1),
							"",styGenero))
		{
			mudarGenero();
		}
		*/
		/*
		if(GUI.Button(Rect(bgGroupAttr.width/1.15,
							posicaoVertical + bgGroupAttr.width*0.12,
							 bgGroupAttr.width*0.1,
							 bgGroupAttr.width*0.1),
							 "",styRosto))
		{
			mudarRosto();
		}
		
		if(GUI.Button(Rect(bgGroupAttr.width/1.15,
							posicaoVertical + (bgGroupAttr.width*0.12)*2,
							 bgGroupAttr.width*0.1,
							 bgGroupAttr.width*0.1),
							 "",styAcess))
		{
			mudarAcessorio();
		}
		*/
		if(GUI.Button(Rect(bgGroupAttr.width/1.15 - resolu/2,
							posicaoVertical + (bgGroupAttr.width*0.12)*3,
							 bgGroupAttr.width*0.1+resolu,
							 bgGroupAttr.width*0.1+resolu),
							 "",styConfirmar)){
			
			if(vezDeEscolha == 1){
				//
				//
				//
				scTxBox.boxAtivada = true;
				//
				//
				//
				
				if(GameStates.quantidadeJogadores > 1){
					vezDeEscolha = 2;
					//Application.LoadLevel(CenasMap.cenamap[4]);
				}
				else
					Application.LoadLevel(CenasMap.cenamap[3]);
				
				materialPersonagem1.color = Color(0.8,0.8,0.8);
			}
			else{
				scTxBox.boxAtivada = true;
				//
				//
				//
				
				if(GameStates.quantidadeJogadores > 1 ){
					Application.LoadLevel(CenasMap.cenamap[4]);
				}
				else
					Application.LoadLevel(CenasMap.cenamap[3]);
				
				materialPersonagem1.color = Color(0.8,0.8,0.8);
			}
			
		}
		if(GUI.Button(Rect(0,
							posicaoVertical + (bgGroupAttr.width*0.12)*3,
							 bgGroupAttr.width*0.1+resolu,
							 bgGroupAttr.width*0.1+resolu),
							 "",styVoltar)){
			Application.LoadLevel(CenasMap.cenamap[0]);
		}
		
		//GUI.Label(Rect(bgGroupAttr.width/2 - 100,bgGroupAttr.height/4,100,40),nomePerson);
		
		//GUI.Label(Rect(Screen.width/3,Screen.height/90,500,50),"Jogador 1 Selecione seu personagem");
		
	GUI.EndGroup();
	
	
}
function mudarGenero(){
	if(personagemSelecionado == 1){
		personagem1.GetComponent(ConfiguracaoPesonagem).mudarGenero();
	}
	if(personagemSelecionado == 2){
		
	}
}
function mudarRosto(){
	if(personagemSelecionado == 1){
		personagem1.GetComponent(ConfiguracaoPesonagem).mudarTextura();
	}
	if(personagemSelecionado == 2){
		
	}
}
function mudarAcessorio(){
	if(personagemSelecionado == 1){
		personagem1.GetComponent(ConfiguracaoPesonagem).mudarAcessorio();
	}
}