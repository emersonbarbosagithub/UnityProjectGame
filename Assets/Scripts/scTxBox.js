#pragma strict
var positBox:Rect = Rect(37.5,45,0,0);
var positBtnFechar:Rect=Rect(-9,-2.3,0,0);
var stlBox:GUIStyle;
var stlIconeCamera:GUIStyle;
var stlX:GUIStyle;
var boxAtributos:Rect;
static var boxAtivada:boolean = true;
var scrollPosition:Vector2 = Vector2.zero;

var styFonte:GUIStyle;
function Start () {
	//boxAtivada = true;
	
	boxAtributos.width = Screen.width * 0.9 ;
	boxAtributos.height = Screen.height * 0.9 ;
	boxAtributos.x = Screen.width/2 - boxAtributos.width/2;
	boxAtributos.y = Screen.height/2 - boxAtributos.height/2;
	
}

function Update () {

}
function OnGUI(){
	/*
	GUI.Box(Rect(10+positBox.x,
		10+positBox.y,
		Screen.width-100+positBox.width,
		Screen.height-100+positBox.height),"",stlBox
	);
	*/
	if(boxAtivada){
	GUI.BeginGroup(boxAtributos);
	GUI.Box(Rect(0,0,boxAtributos.width,boxAtributos.height),"",stlBox);
	
	//scrollPosition = GUI.BeginScrollView (Rect (10,20,boxAtributos.width-20,boxAtributos.height-30),
        //scrollPosition, Rect (0, 0, boxAtributos.width-50,boxAtributos.height*2));
        
    /*
        var str=
		"REGRAS\n\n"+
		
		"Leia as instruções com atenção antes de começar o jogo.\n\n"+
		
		"Objetivo:\n\n"+
		"Ser o primeiro a chegar ao centro do tabuleiro.\n\n"+
		
		"Como Jogar:\n\n"+
		"O jogador deve acessar a caixa para jogar o dado através do botão localizado no canto inferior direito. Acessando a caixa, deve clicar no dado e realizar a jogada. Terminada a jogada do primeiro jogador, o jogador que acabou de jogar deve passar o aparelho para o próximo jogador (e assim por diante, dependendo do numero de jogadores). Algumas casas do tabuleiro têm regras as quais os jogadores devem seguir. A casa IMUNIDADE te deixa escapar de alguma punição, ao fazer isso a imunidade é perdida, a imunidade também pode ser perdida se o jogador cai na casa “PERDE IMUNIDADE”."+
		
		"Quem ganha ?\n\n"+
		"O primeiro que chegar na casa CHEGADA. O jogador deve atingir o numero exato nos dados para atingir a casa “Chegada”, caso ele consiga um numero superior, o personagem andará os números que foram além da casa no sentido contrário a partir da ultima casa. Assim o jogador deve jogar novamente até ter sucesso em alcançar a ultima casa.";
        GUI.Label(Rect(10,10,boxAtributos.width-60,boxAtributos.height),str,styFonte);
    //GUI.EndScrollView();
	GUI.EndGroup();
	
	if(GUI.Button(Rect(Screen.width-100+positBtnFechar.x,Screen.height-100+positBtnFechar.y,50+positBtnFechar.width,50+positBtnFechar.height),"",stlX)){
		boxAtivada = false;
		GameStates1Jogador.MudarEstado(1);
		GameStates1Jogador.turnoDoJogador=1;
		
		Destroy(this);
		
	}
	*/
	
		if(Input.touchCount > 0 || Input.GetKeyDown(KeyCode.Space) || Input.GetMouseButtonDown(0)){
			boxAtivada = false;
			GameStates1Jogador.MudarEstado(1);
			GameStates1Jogador.turnoDoJogador=1;
			
			Destroy(this);
		}
		GUI.EndGroup();
	}
	
}