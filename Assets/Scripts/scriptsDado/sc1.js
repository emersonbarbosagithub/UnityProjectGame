#pragma strict
var speed = 3.0;

var jumpSpeed = 450.0;
private var vetorRotacao:Vector3;

private var grounded = true;
private var jaFoiJogado:boolean = false;
var controladorTurnos:Transform;
var cameras:Transform;
var positInicial:Vector3;
var realValorDoDado:int;
var somaValorDoDado: int;
var somaValorDoDado2: int;
var indicadorDeQuantasCasasVaiAndar:boolean=false;
var turno: int;
var foiSomado: boolean;



function Start() {
	positInicial = transform.position;
	
}
function Update () {
	//Debug.Log(grounded);
	turno = controladorTurnos.GetComponent(ControlarTurnos).turno;
	if(grounded == false/* && rigidbody.IsSleeping()==false*/){
		transform.Rotate(vetorRotacao * Time.deltaTime * 100);
		//Debug.Log("Rodando");
	}
	//voltar pra a camera principal
	if(grounded == true && rigidbody.IsSleeping() && rigidbody.velocity.magnitude==0 && jaFoiJogado==true && controladorTurnos.GetComponent(ControlarTurnos).cameraDado == true ){
		voltarPraCameraPrincipal();
	}
}

function OnMouseDown (){
	rolar();

}
function OnCollisionEnter(hit : Collision) {
	grounded = true;
	//Debug.Log("Grounded");
}
function OnGUI(){
	if(jaFoiJogado==false && controladorTurnos.GetComponent(ControlarTurnos).cameraDado == true){
		if(GUI.Button(Rect(Screen.width-120,Screen.height-80,100,50),"Lançar dado")){
			jaFoiJogado=true;
			rolar();
		}
		indicadorDeQuantasCasasVaiAndar=false;
	}
	if(indicadorDeQuantasCasasVaiAndar){
		GUI.Box(Rect(10,10,90,40),"valor do dado");
		if(transform.GetComponent(DadoValor).face != 0){
			GUI.Label(Rect(50,30,100,20),""+transform.GetComponent(DadoValor).face);
			realValorDoDado = transform.GetComponent(DadoValor).face;
			if(!foiSomado){
			if(turno == 1){
			somaValorDoDado += realValorDoDado;
			}
			if(turno == 2){
			somaValorDoDado2 += realValorDoDado;
			}
			foiSomado = true;
			}
		}
	}else{
	realValorDoDado = 0;
	}
}

function rolar(){
	if(rigidbody.IsSleeping()){
		grounded=false;
		rigidbody.AddForce(Vector3.up  * jumpSpeed * 55);
		vetorRotacao = Vector3(Random.Range(0.0,6.0),Random.Range(0.0,6.0),Random.Range(0.0,6.0));
		foiSomado = false;
	}
	
}

function voltarPraCameraPrincipal(){
	yield WaitForSeconds(2);
	
	
	controladorTurnos.GetComponent(ControlarTurnos).cameraDado = false;
	jaFoiJogado=false;
	controladorTurnos.GetComponent(ControlarTurnos).botaoDado = false;
	
	cameras.GetComponent(MudarCamera).camera1.enabled = true;
	transform.position = positInicial;
	indicadorDeQuantasCasasVaiAndar=true;
	
	
}