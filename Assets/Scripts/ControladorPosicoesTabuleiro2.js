

var numeroDado:int;
var casa: GameObject[];
var speed:float;
var contVirada:int;
var controladorTurnos:Transform;
var turno:int=1;
function Start() {
	/*casas = new GameObject[6];
	
	
	for(i = 0;i < 6;i++){
		//numeroCasa = "casa";
		casa = GameObject.Find("Casa2");
		casas[i] = casa;*/
	contVirada = 0;
	
}
function Update(){
	if (Input.GetKey(KeyCode.Escape))
    {
            Application.LoadLevel (0);
    }
		
	turno = controladorTurnos.GetComponent(ControlarTurnos).turno;
		numeroDado = GameObject.Find("dado").GetComponent(sc1).somaValorDoDado2;
		//Debug.Log(GameObject.Find("dado").GetComponent(sc1).somaValorDoDado);
			
	
	if(selectPerson.PersonagemSelecionado == 1 && GameObject.Find("Personagem1(Clone)").transform.position.z >= casa[numeroDado].transform.position.z
	&& GameObject.Find("Personagem1(Clone)").transform.position.x >= casa[numeroDado].transform.position.x && turno==2){
		if(GameObject.Find("Personagem1(Clone)").transform.position.z >= casa[numeroDado].transform.position.z){
		//Debug.Log("Ai dentro");
			if(GameObject.Find("Personagem1(Clone)").transform.position.z <= casa[5].transform.position.z + 0.4 && contVirada == 0){
				GameObject.Find("Personagem1(Clone)").transform.Rotate(0,90,0);
				contVirada++;
				}
			if(GameObject.Find("Personagem1(Clone)").transform.position.x <= casa[8].transform.position.x - 0.4 && contVirada == 1){
				GameObject.Find("Personagem1(Clone)").transform.Rotate(0,90,0);
				contVirada++;
				Application.LoadLevel (0);
				}
			}
			if(GameObject.Find("Personagem1(Clone)").transform.position.z >= casa[9].transform.position.z - 0.4 && contVirada == 2){
				GameObject.Find("Personagem1(Clone)").transform.Rotate(0,90,0);
				contVirada++;
				}
			if(GameObject.Find("Personagem1(Clone)").transform.position.x >= casa[11].transform.position.x + 0.4 && contVirada == 3){
				GameObject.Find("Personagem1(Clone)").transform.Rotate(0,-90,0);
				contVirada++;
				}
			if(GameObject.Find("Personagem1(Clone)").transform.position.z >= casa[15].transform.position.z - 0.4 && contVirada == 4){
				GameObject.Find("Personagem1(Clone)").transform.Rotate(0,-90,0);
				contVirada++;
				}
			if(numeroDado > 0){
				GameObject.Find("Personagem1(Clone)").transform.Translate(0,0,1 * speed * Time.deltaTime);
			}
		
		}else{
			controladorTurnos.GetComponent(ControlarTurnos).turno=1;
		}
		
		
	
	if(selectPerson.PersonagemSelecionado == 0){
		
	if(selectPerson.PersonagemSelecionado == 0 && GameObject.Find("Personagem2(Clone)").transform.position.z >= casa[numeroDado].transform.position.z
	&& GameObject.Find("Personagem2(Clone)").transform.position.x >= casa[numeroDado].transform.position.x && turno==2){
		if(GameObject.Find("Personagem2(Clone)").transform.position.z >= casa[numeroDado].transform.position.z){
		//Debug.Log("Ai dentro");
			if(GameObject.Find("Personagem2(Clone)").transform.position.z <= casa[5].transform.position.z + 0.4 && contVirada == 0){
				GameObject.Find("Personagem2(Clone)").transform.Rotate(0,90,0);
				contVirada++;
				}
		
			if(GameObject.Find("Personagem2(Clone)").transform.position.x <= casa[8].transform.position.x - 0.4 && contVirada == 1){
				GameObject.Find("Personagem2(Clone)").transform.Rotate(0,90,0);
				Application.LoadLevel (0);
				contVirada++;
				}
			
			if(GameObject.Find("Personagem2(Clone)").transform.position.z >= casa[9].transform.position.z - 0.4 && contVirada == 2){
				GameObject.Find("Personagem2(Clone)").transform.Rotate(0,90,0);
				contVirada++;
				}
			if(GameObject.Find("Personagem2(Clone)").transform.position.x >= casa[11].transform.position.x + 0.4 && contVirada == 3){
				GameObject.Find("Personagem2(Clone)").transform.Rotate(0,-90,0);
				contVirada++;
				}
			if(GameObject.Find("Personagem2(Clone)").transform.position.z >= casa[15].transform.position.z - 0.4 && contVirada == 4){
				GameObject.Find("Personagem2(Clone)").transform.Rotate(0,-90,0);
				contVirada++;
				}
		
		}
		if(numeroDado > 0){
			GameObject.Find("Personagem2(Clone)").transform.Translate(0,0,1 * speed * Time.deltaTime);
			}
		
		}
		else{
			//controladorTurnos.GetComponent(ControlarTurnos).turno=1;
			
		}
	
	}
}



