#pragma strict

function Start () {
	rodarSom();
	
	if(Opcoes.voz == false){
		audio.enabled = false;
		//audio.volume=0;
	}
}

function Update () {

}

function rodarSom(){
	yield WaitForSeconds(1);
	audio.Play();
}