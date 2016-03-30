#pragma strict

var btnEsquerdo:Rect=Rect(0,0,100,100);
var btnDireito:Rect=Rect(0,0,100,100);
var EstiloBtnEsquerdo:GUIStyle;
var EstiloBtnDireito:GUIStyle;
var EstiloBtnOK:GUIStyle;
var EstiloBtnVoltar:GUIStyle;

var per1:Transform;
var per2:Transform;

static var PersonagemSelecionado = 0;

var selecionado:Transform;

private var indice:int=0;
function Start(){
//btnEsquerdo.x += Screen.width/2;
btnEsquerdo.y += Screen.height/2-btnEsquerdo.height/2;
btnEsquerdo.x += 10;

btnDireito.x += Screen.width-(btnDireito.width)-10;
btnDireito.y += Screen.height/2-btnDireito.height/2;
selecionado = Instantiate(per1,transform.position,transform.rotation);

}
function Update(){
	selecionado.rotation = transform.rotation;
}
function OnGUI () {
	if(PersonagemSelecionado == 1){
		if(GUI.Button(btnEsquerdo,"",EstiloBtnEsquerdo)){
			if(indice > 0){
				indice-=1;
				Destroy(GameObject.Find("pers2(Clone)"));
				selecionado = Instantiate(per1,transform.position,transform.rotation);
				GameObject.Find("pers2(Clone)").transform.Translate(2.925665,4.81736,-12.54);
				PersonagemSelecionado = 0;
			}	
		}
	}
	if(PersonagemSelecionado == 0){
		if(GUI.Button(btnDireito,"",EstiloBtnDireito)){
			if(indice == 0){
				indice+=1;
				Destroy(GameObject.Find("pers1(Clone)"));
				selecionado = Instantiate(per2,transform.position,transform.rotation);
				PersonagemSelecionado = 1;
			}
		}
	}
	if(GUI.Button(Rect(50,Screen.height-100,80,80),"",EstiloBtnVoltar)){
		
		Application.LoadLevel (0);
		PersonagemSelecionado = 0;
	}
	if(GUI.Button(Rect(Screen.width-150,Screen.height-100,80,80),"",EstiloBtnOK)){
		Application.LoadLevel (4);
		Debug.Log(PersonagemSelecionado);
		
		
	}

}