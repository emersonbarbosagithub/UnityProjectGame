var texture1 : Texture;
var texture2 : Texture;
var texture3 : Texture;
var texture4 : Texture;
var material1 : UnityEngine.Material;
var material2 : UnityEngine.Material;

var speed : float = 0.1;
private var cont:int=0;
private var proximaPiscada = 0.0;
private var proximaPiscada2 = 0.0;
function Update () {

	if(Time.time > proximaPiscada){
		proximaPiscada = Time.time + Random.Range(1.0,7.0);
		AnimacaoPiscar();
		
		
	}
	if(Time.time > proximaPiscada2){
		proximaPiscada2 = Time.time + Random.Range(1.0,7.0);
		AnimacaoPiscar2();
	}
	
	 if (Input.touchCount > 0 && 
      Input.GetTouch(0).phase == TouchPhase.Moved) {
    
        // Get movement of the finger since last frame
        var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
        
       if(touchDeltaPosition.x > 0){
       	transform.Rotate(0,-1 * Time.deltaTime * speed,0);
       }
       else if(touchDeltaPosition.x < 0){
       	transform.Rotate(0,1 * Time.deltaTime * speed,0);
       }
    }
    if (Input.GetKey(KeyCode.Escape))
    {
            selectPerson.PersonagemSelecionado = 0;
            Application.LoadLevel (0);
    }
    
}

function AnimacaoPiscar(){
	material1.mainTexture = texture1;
	
	yield WaitForSeconds (3);
	
	material1.mainTexture = texture2;
	
	yield WaitForSeconds (0.2);
	
	material1.mainTexture = texture1;
	//Debug.Log(cont);
	cont++;
	
}
function AnimacaoPiscar2(){
	material2.mainTexture = texture3;
	
	yield WaitForSeconds (3);
	
	material2.mainTexture = texture4;
	
	yield WaitForSeconds (0.2);
	
	material2.mainTexture = texture3;
	//Debug.Log(cont);
	cont++;
	
}