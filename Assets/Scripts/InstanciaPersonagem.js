var Personagem1:Transform;

var selecionado1: Transform;
var jogador:int;

function Start () {
	//if(GUISelectPerson.personagemSelecionado == 1){
		selecionado1 = Instantiate(Personagem1,transform.position,transform.rotation);
		selecionado1.transform.parent = transform;
		
		switch(jogador){
			case 1:
				try{
				selecionado1.gameObject.GetComponent(ConfiguracaoPesonagem).genero = 
				MainPersonalizarPersonagem.generoJogador1;
				
				selecionado1.GetComponent(ConfiguracaoPesonagem).escondeTodosAcessorios();
				selecionado1.GetComponent(ConfiguracaoPesonagem).acessorios[MainPersonalizarPersonagem.acessorioJogador1].renderer.enabled = true;
				//Debug.Log(""+MainPersonalizarPersonagem.acessorioJogador1);
				//Debug.Log("Rodou");
				
				
				selecionado1.GetComponent(ConfiguracaoPesonagem).materialPersonagem.mainTexture = 
				selecionado1.GetComponent(ConfiguracaoPesonagem).texturaPersonagemMasculino[MainPersonalizarPersonagem.texturaJogador1];
				}
				catch(e){
					
				}
			break;
			case 2:
				try{
				selecionado1.GetComponent(ConfiguracaoPesonagem).genero = MainPersonalizarPersonagem.generoJogador2;
				
				selecionado1.GetComponent(ConfiguracaoPesonagem).escondeTodosAcessorios();
				selecionado1.GetComponent(ConfiguracaoPesonagem).acessorios[MainPersonalizarPersonagem.acessorioJogador2].renderer.enabled = true;
				
				
			
				selecionado1.GetComponent(ConfiguracaoPesonagem).materialPersonagem.mainTexture = 
				selecionado1.GetComponent(ConfiguracaoPesonagem).texturaPersonagemMasculino[MainPersonalizarPersonagem.texturaJogador2];
				}
				catch(e){
					
				}
			break;
		}
		
		
	//}
	//if(GUISelectPerson.personagemSelecionado == 2){
		//selecionado1 = Instantiate(Personagem2,transform.position,transform.rotation);
		//selecionado1.transform.parent = transform;
	//}
	
	//GameObject.Find("Jogador1").GetComponent(Jogador).nome = GuiNome.NomeJogador1;
	
}

function Update(){
	switch(jogador){
		case 1:
			if(MainPersonalizarPersonagem.acessorioJogador1 != 0){
				selecionado1.GetComponent(ConfiguracaoPesonagem).acessorios[MainPersonalizarPersonagem.acessorioJogador1].renderer.enabled = true;
				//transform.position = selecionado1.position;
			}
		break;
	}
}