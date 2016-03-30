#pragma strict
var pai:GameObject;
var vetorRotacao:Vector3;
var jumpSpeed = 450.0;

function Start () {
	rigidbody.AddForce(Vector3.right  * jumpSpeed * 55);
	vetorRotacao = Vector3(Random.Range(0.0,6.0),Random.Range(0.0,6.0),Random.Range(0.0,6.0));
}

function Update () {
	if(InstanciadorDado.grounded == false/* && rigidbody.IsSleeping()==false*/){
		transform.Rotate(vetorRotacao * Time.deltaTime * 100);
	}
	//if(ValorDoDado.face != 0 && InstanciadorDado.dadoFoiJogado && rigidbody.IsSleeping()){
		//InstanciadorDado.mudar=true;
		//Destroy(this.gameObject);
		//print("Parou");
	//}
}
function OnCollisionEnter(hit : Collision) {
	InstanciadorDado.grounded = true;
	pai.GetComponent(InstanciadorDado).mudar=true;
}