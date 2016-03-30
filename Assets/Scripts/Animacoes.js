#pragma strict
var person:int;
static var podeAndar:boolean;
function Start () {

}

function Update () {
	if(person == 1){
		if(GameStates.estadoAtual == 3 || GameStates.estadoAtual == 5){
			if(podeAndar)
				animation.Play("correndo");
		}else{
			//animation.Stop("correndo");
			animation.Play("idle");
		}
	}
	if(person == 2){
		if(GameStates.estadoAtual == 4 || GameStates.estadoAtual == 6){
			if(podeAndar)
				animation.Play("correndo");
		}else{
			animation.Play("idle");
		}
	}
}
