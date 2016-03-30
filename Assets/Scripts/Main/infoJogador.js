#pragma strict
private var infoJog1:boolean= false;
private var infoJog2:boolean= false;
var jog1:GameObject;
var jog2:GameObject;

function Start () {

}

function OnGUI () {
	mostrarInformacoesJogador1();
	mostrarInformacoesJogador2();
}
function mostrarInformacoesJogador1(){
	infoJog1 = GUI.Toggle(Rect(20,80,100,20),infoJog1,"Jogador 1");
	GUI.BeginGroup(Rect(20,100,200,200),"");
	
	if(infoJog1){
		GUI.Box(Rect(0,0,200,200),"");
		//GUI.Label(Rect(0,0,100,20),"Casa atual : "+jog1.GetComponent(Jogador).casaAtual.ToString());
	}
	GUI.EndGroup();
}
function mostrarInformacoesJogador2(){
	infoJog2 = GUI.Toggle(Rect(220,80,100,20),infoJog2,"Jogador 2");
	GUI.BeginGroup(Rect(220,100,200,200),"");
	
	if(infoJog2){
		GUI.Box(Rect(0,0,200,200),"");
		//GUI.Label(Rect(0,0,100,20),"Casa atual : "+jog2.GetComponent(Jogador).casaAtual.ToString());
	}
	GUI.EndGroup();
}