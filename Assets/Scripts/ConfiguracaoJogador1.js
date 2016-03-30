#pragma strict
var materialPersonagem:Material;
var texturaPersonagemMasculino:Texture[];
var texturaPersonagemFeminino:Texture[];
var genero:int;
var texturaAtual:int;
var acessorios:Transform[];
static var acessorioAtual:int=0;
function Start () {
	genero = 1;
	materialPersonagem.mainTexture = texturaPersonagemMasculino[texturaAtual];
	escondeTodosAcessorios();
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
	
}
function mudarGenero () {
	if(genero == 1){
		genero = 2;
		escondeTodosAcessorios();
		materialPersonagem.mainTexture = texturaPersonagemFeminino[texturaAtual];
	}
	else{
		genero = 1;
		materialPersonagem.mainTexture = texturaPersonagemMasculino[texturaAtual];
	}
}

function escondeTodosAcessorios(){
	acessorioAtual=0;
	for(ac in acessorios)
			ac.renderer.enabled = false;

}

function mudarAcessorio () {
	
	
	if(genero==1){
		acessorioAtual++;
	
		if(acessorioAtual == acessorios.Length){
			acessorioAtual=0;
			Debug.Log(""+acessorios.Length);
		}
		
		for(ac in acessorios)
			ac.renderer.enabled = false;
			
		if(acessorioAtual > 0)
			acessorios[acessorioAtual].renderer.enabled = true;
			
		
		
	}

}