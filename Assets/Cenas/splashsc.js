#pragma strict

var textura:GUITexture;

function Start () {
	
	

    textura.pixelInset.x = - ((Screen.width/1.2) /2);
    textura.pixelInset.y = - (((Screen.height/1.2)/2.5)/2);
    textura.pixelInset.width = Screen.width/1.2;
    textura.pixelInset.height = (Screen.height/1.2)/2.5;
    
    iTween.CameraFadeAdd(iTween.CameraTexture(Color.black),200);

    iTween.CameraFadeFrom(1,0);

    iTween.CameraFadeTo(0,2);
    
    yield WaitForSeconds(5);
    iTween.CameraFadeAdd(iTween.CameraTexture(Color.black),200);

    iTween.CameraFadeFrom(0,0);

    iTween.CameraFadeTo(1,2);
    
    yield WaitForSeconds(1.2);
    Application.LoadLevel(34);
    
	
    
    
    
    
}

function Update () {
	if(Input.touchCount > 0){
		Application.LoadLevel(34);
	}
}

function OnGUI () {
	//GUI.DrawTexture();
}