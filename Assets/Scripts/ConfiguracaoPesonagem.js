#pragma strict
var materialPersonagem:Material;
var texturaPersonagemMasculino:Texture[];
var texturaPersonagemFeminino:Texture[];
var genero:int;
var texturaAtual:int;
var acessorios:Transform[];
var acessoriosFemininos:Transform[];
var acessorioAtual:int=0;
function Start () {
	genero = 1;
	materialPersonagem.mainTexture = texturaPersonagemMasculino[texturaAtual];
	escondeTodosAcessorios();
	
}
function InicializaComponentes(){
	
}

function Update () {

}

function mudarTextura () {
	texturaAtual++;
	if(genero == 1){
		if(texturaAtual == texturaPersonagemMasculino.Length){
			texturaAtual = 0;
		}
		materialPersonagem.mainTexture = texturaPersonagemMasculino[texturaAtual];
	}else{
		if(texturaAtual == texturaPersonagemFeminino.Length){
			texturaAtual = 0;
		}
		materialPersonagem.mainTexture = texturaPersonagemFeminino[texturaAtual];
	}
	
	switch(MainPersonalizarPersonagem.estadoAtual){
		case 0:
			MainPersonalizarPersonagem.texturaJogador1=texturaAtual;
		break;
		case 1:
			MainPersonalizarPersonagem.texturaJogador2=texturaAtual;
		break;
	}
	
}
function mudarGenero () {
	if(genero == 1){
		genero = 2;
		escondeTodosAcessorios();
		materialPersonagem.mainTexture = texturaPersonagemFeminino[texturaAtual];
	}
	else{
		genero = 1;
		escondeTodosAcessorios();
		materialPersonagem.mainTexture = texturaPersonagemMasculino[texturaAtual];
		
	}
	switch(MainPersonalizarPersonagem.estadoAtual){
		case 0:
			MainPersonalizarPersonagem.generoJogador1=genero;
		break;
		case 1:
			MainPersonalizarPersonagem.generoJogador2=genero;
		break;
	}
}

function escondeTodosAcessorios(){
	acessorioAtual=0;
	for(ac in acessorios)
			ac.renderer.enabled = false;
	for(ac in acessoriosFemininos)
		ac.renderer.enabled = false;


}

function mudarAcessorio () {
	if(genero==1){
		acessorioAtual++;
	
		if(acessorioAtual == acessorios.Length){
			acessorioAtual=0;
		}
		
		for(ac in acessorios)
			ac.renderer.enabled = false;
			
		if(acessorioAtual > 0)
			acessorios[acessorioAtual].renderer.enabled = true;
			
		
		
	}
	if(genero == 2){
		acessorioAtual++;
		
		if(acessorioAtual == acessoriosFemininos.Length){
			acessorioAtual=0;
		}
		
		for(ac in acessoriosFemininos)
			ac.renderer.enabled = false;
			
		if(acessorioAtual > 0)
			acessoriosFemininos[acessorioAtual].renderer.enabled = true;
	}
	switch(MainPersonalizarPersonagem.estadoAtual){
		case 0:
			MainPersonalizarPersonagem.acessorioJogador1=acessorioAtual;
		break;
		case 1:
			MainPersonalizarPersonagem.acessorioJogador2=acessorioAtual;
		break;
	}

}