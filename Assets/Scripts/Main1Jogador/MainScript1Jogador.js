#pragma strict
var jogador1:Transform;
var jogador2:Transform;
var stiloBtnRolarDado:GUIStyle;
var atributosBtnRolarDado:Rect;
static var casaAtualJogador1:int;
static var casaAtualJogador2:int;

function Start () {
	//jogador1.GetComponent(Jogador).nome = GuiNome.NomeJogador1;
	switch(GameStates1Jogador.estadoAtual){
		case 1:
			//GetComponent(Cameras).mudarCamera(0);
		break;
		case 2:
		break;
	}
}

function loadlvl () {
	Application.LoadLevel(5);
	Debug.Log("Loading complete :3");
}

function Update(){
	//Debug.Log(Camera.current);
	if(Input.GetKeyDown(KeyCode.Space)){
		//loadlvl();
	}
	
	if(Input.GetKeyDown(KeyCode.Alpha1)){
		
		jogador1.GetComponent(Jogador).Mover();
			GameStates1Jogador.MudarEstado(9);
	}
}

function SalvaPositJogadores(){
	PosicoesJogador.positJogador1 = jogador1.position;
	PosicoesJogador.rotJogador1 = jogador1.rotation;
	PosicoesJogador.positJogador2 = jogador2.position;
	PosicoesJogador.rotJogador2 = jogador2.rotation;
	
}

function AguardarRodadaJ1(){
	//yield WaitForSeconds(2);
	GameStates1Jogador.turnoDoJogador=1;
	GameStates1Jogador.MudarEstado(2);
	Jogador.aguardarRodada = false;
	this.GetComponent(Cameras).mudarCamera(1);
}

function AguardarRodadaJ2(){
	//yield WaitForSeconds(2);
	GameStates1Jogador.turnoDoJogador=2;
	GameStates1Jogador.MudarEstado(1);
	JogadorAI.aguardarRodada = false;
	this.GetComponent(Cameras).mudarCamera(0);
}

function OnGUI () {
	switch(GameStates1Jogador.estadoAtual){
		case 1:
			
			if(Jogador.aguardarRodada)
				AguardarRodadaJ1();
			else{
				if(Screen.width > 600){
					if(GUI.Button(Rect(Screen.width-130+atributosBtnRolarDado.x,Screen.height-130+atributosBtnRolarDado.y,120,120),"",stiloBtnRolarDado)){
						//Dado.rolarDado();
						GameStates1Jogador.turnoDoJogador=1;
						this.GetComponent(Cameras).mudarCamera(3);
						MoveDado.dadoFoiJogado=false;
						GameStates1Jogador.MudarEstado(7);
					}
				}else{
					if(GUI.Button(Rect(Screen.width-100+atributosBtnRolarDado.x,Screen.height-100+atributosBtnRolarDado.y,90,90),"",stiloBtnRolarDado)){
						//Dado.rolarDado();
						GameStates1Jogador.turnoDoJogador=1;
						this.GetComponent(Cameras).mudarCamera(3);
						MoveDado.dadoFoiJogado=false;
						GameStates1Jogador.MudarEstado(7);
					}
				}
			}
			
		break;
		case 2:
			
			if(JogadorAI.aguardarRodada){
				AguardarRodadaJ2();
			} else {
			//if(GUI.Button(Rect(Screen.width-100+atributosBtnRolarDado.x,Screen.height+atributosBtnRolarDado.y-100,90,90),"",stiloBtnRolarDado)){
				//Dado.rolarDado();
				//GameStates1Jogador.MudarEstado(4);
				GetComponent(Cameras).mudarCamera(1);
				GameStates1Jogador.turnoDoJogador=2;
				//this.GetComponent(Cameras).mudarCamera(3);
				// 10/05/2013 MoveDado.dadoFoiJogado=false;
				//GameStates1Jogador.MudarEstado(7);
				GameStates1Jogador.MudarEstado(4);
			//}
			}
		break;
		case 3:
			jogador1.GetComponent(Jogador).Mover();
			GameStates1Jogador.MudarEstado(9);	
		break;
		case 4:
			jogador2.GetComponent(JogadorAI).Mover();
			GameStates1Jogador.MudarEstado(10);
			
			
		break;
		case 5:
			
			//Application.LoadLevel(5);
			GameStates1Jogador.MudarEstado(2);
			//SalvaPositJogadores();
		break;
		case 6:
			GetComponent(Cameras).mudarCamera(0);
			GameStates1Jogador.MudarEstado(1);
			
		break;
		case 7:
			/*
				if(GameStates1Jogador.turnoDoJogador == 1)
					GameStates1Jogador.MudarEstado(3);
				else
					GameStates1Jogador.MudarEstado(4);
			*/
		break;
		
		case 9:
			GetComponent(Cameras).mudarCamera(0);
		break;
		
		case 10:
			GetComponent(Cameras).mudarCamera(1);
		break;
			
		case 12: //:::::::::::CEna mostrar os dentes
			Application.LoadLevel(6);
			SalvaPositJogadores();
		break;
		case 13: //::::::::::::: Voltando uma casa
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar(-1);
		break;
		case 14: //::::::::::::::avancando uma casa
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar(1);
		break;
		case 15: //::::::::::::::::::Cena Ganhando Imunidade
			Application.LoadLevel(7);
			SalvaPositJogadores();
		break;
		case 16: //::::::::::::::::Cena fio dental
			Application.LoadLevel(8);
			SalvaPositJogadores();
		break;
		case 17:
			posicionarJogadores();
			//jogador1.GetComponent(Jogador).voltarOuAvacar(
			GameStates1Jogador.MudarEstado(2);
		break;
		case 18: // jogadorEsperto
			Application.LoadLevel(9);
			SalvaPositJogadores();
		break;
		case 19: // avança 3 casas
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(3);
		break;
		case 20: // gengiva ferida
			SalvaPositJogadores();
			Application.LoadLevel(10);
		break;
		case 21: //dente de lodo 
			SalvaPositJogadores();
			Application.LoadLevel(16);
			//GameStates1Jogador.MudarEstado(22);
			
		break;
		case 22: //volta 4 casas
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(-4);
		break;
		case 23:  //Carie Ataca 
			SalvaPositJogadores();
			Application.LoadLevel(12);
		break;
		case 24: //cena escova
			SalvaPositJogadores();
			Application.LoadLevel(17);
		break;
			
		case 25: // Bafo de Onca
			SalvaPositJogadores();
			Application.LoadLevel(13);
		break;
		case 26: //avancar 4 casas
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(4);
		break;
		case 27://cena fio dental 2
			Application.LoadLevel(19);
			SalvaPositJogadores();
		break;
		case 28:
			//volta 5 casas
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(-5);
		break;
		
		case 29://cena dentede lodo 2
			SalvaPositJogadores();
			Application.LoadLevel(20);
		break;
		
		case 30: //acanca duas casas
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(2);
		break;
		
		case 31: //cena greve
			SalvaPositJogadores();
			Application.LoadLevel(18);
		break;
		case 32:
			SalvaPositJogadores();
			Application.LoadLevel(21);
		break;
		
		case 33: //mostrar dentes máquina
			
		break;
		case 34: //fio Dental Maquina Avancar 3 casas
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(3);
		break;
		
		case 35: //::::::::::::: Voltando uma casa
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar(-1);
		break;
		case 36: //::::::::::::::avancando uma casa
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar(1);
		break;
			//voltando 4 casas cena lodo
		case 37:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(-4);
		break;
		
		case 38:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(2);
		break;
		
		case 39: //voltando 5 casas cena lodo 2
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(-5);
		break;
		
		case 40:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(4);
		break;
		
		case 41:
			SalvaPositJogadores();
			Application.LoadLevel(14);
		break;	
		case 42:
			
			jogador2.GetComponent(JogadorAI).voltarOuAvancar(-1);
		break;
		case 43:
			SalvaPositJogadores();
			Application.LoadLevel(14);
		break;
		
		case 44:
			jogador1.GetComponent(Jogador).voltarOuAvancar(-1);
		break;
		
		case 45:
			Application.LoadLevel(22);
		break;
		case 46:
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(-3);
		break;
		case 47:
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(3);
		break;
		
		case 48:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(3);
		break;
		case 49:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(-3);
		break;
		
		case 50: //cena escova2
			SalvaPositJogadores();
			Application.LoadLevel(27);
		break;
		
		case 51: //cena mostrar dentes 3 casas
			SalvaPositJogadores();
			Application.LoadLevel(28);
		break;
		
		case 52:
			SalvaPositJogadores();
			Application.LoadLevel(29);
		break;
		
		case 53:
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar(-1);
		break;
		case 54:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar(-1);
		break;
		case 55:
			SalvaPositJogadores();
			Application.LoadLevel(30);
		break;
		case 56:
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(-2);
		break;
		case 57:
			posicionarJogadores();
			jogador2.GetComponent(JogadorAI).voltarOuAvancar2(-2);
		break;
		
		case 58:
			SalvaPositJogadores();
			Application.LoadLevel(31);
		break;
		//cenamostrar dentes 2 casas;
		case 59:
			SalvaPositJogadores();
			Application.LoadLevel(32);
		break;
		
		case 60:
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(2);
		break;
		case 61:
			posicionarJogadores();
			jogador1.GetComponent(Jogador).voltarOuAvancar2(-2);
		break;
		
		
		
		
		
		case 500:
			GameStates1Jogador.MudarEstado(2);
			posicionarJogadores();
			
		break;
		case 501:
			GameStates1Jogador.MudarEstado(1);
			posicionarJogadores();
			
		break;
	}
	
	//GUI.Label(Rect(10,Screen.height-70,150,50),"Casa Jogador1: "+casaAtualJogador1+"");
	//GUI.Label(Rect(10,Screen.height-50,150,50),"Casa Jogador2: "+casaAtualJogador2+"");

}

function esperar(){
	yield WaitForSeconds(5);
}

function posicionarJogadores(){
	jogador1.position = PosicoesJogador.positJogador1;
	jogador2.position = PosicoesJogador.positJogador2;
	jogador1.rotation = PosicoesJogador.rotJogador1;
	jogador2.rotation = PosicoesJogador.rotJogador2;
}

	