var Personagem1:Transform;
var Personagem2:Transform;

var selecionado1: Transform;
var jogador:int;

function Start () {

		selecionado1 = Instantiate(Personagem1,transform.position,transform.rotation);
		selecionado1.transform.parent = transform;
	//GameObject.Find("Jogador1").GetComponent(Jogador).nome = GuiNome.NomeJogador1;
	
}

function Update(){
	//transform.position = selecionado1.position;
}
