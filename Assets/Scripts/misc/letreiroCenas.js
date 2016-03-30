#pragma strict
var imagemLetreiro:Texture;
var py:int;
var px:int;
function Start () {

}

function OnGUI () {
	
	try{
		var imgdimx:int = imagemLetreiro.width;
		var imgdimy:int = imagemLetreiro.height;
		if(Screen.width < 600){
			imgdimx = imagemLetreiro.width / 2;
			imgdimy = imagemLetreiro.height / 2;
		}
			
		GUI.DrawTexture(
		Rect(Screen.width/2 - imgdimx/2 + px, 10 + py,imgdimx,imgdimy)
		,imagemLetreiro);
	}
	catch(e){
		
	}
}