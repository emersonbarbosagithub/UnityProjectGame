#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		Application.Quit();
	}
}
function OnGUI () {
	var px:float = 30.0;
	var py:float = 30.0;
	var wid:float = 150;
	var hei:float= 100;
	if(GUI.Button(Rect(px,py,wid,hei),"Mostrar Dentes")){
		print("LoadCena1");
		Application.LoadLevel(6);
	}
	
	if(GUI.Button(Rect(px * 2 + wid,py,wid,hei),"Fio Dental")){
		print("LoadCena1");
		Application.LoadLevel(8);
	}
	
	if(GUI.Button(Rect(px * 3 + wid*2,py,wid,hei),"Imunidade")){
		print("LoadCena1");
		Application.LoadLevel(7);
	}
	
	if(GUI.Button(Rect(px * 4 + wid *3,py,wid,hei),"Esperto")){
		print("LoadCena1");
		Application.LoadLevel(9);
	}
	
	if(GUI.Button(Rect(px,py * 2 + hei,wid,hei),"Gengiva")){
		print("LoadCena1");
		Application.LoadLevel(10);
	}
	
	if(GUI.Button(Rect(px * 2 + wid,py * 2 + hei,wid,hei),"Carie")){
		print("LoadCena1");
		Application.LoadLevel(12);
	}
	
	if(GUI.Button(Rect(px * 3 + wid*2,py * 2 + hei,wid,hei),"Bafo de Onca")){
		print("LoadCena1");
		Application.LoadLevel(13);
	}
	
	if(GUI.Button(Rect(px * 4 + wid*3,py * 2 + hei,wid,hei),"Dentista")){
		print("LoadCena1");
		Application.LoadLevel(15);
	}
	
	if(GUI.Button(Rect(px ,py * 3 + hei*2,wid,hei),"prenda")){
		print("LoadCena1");
		Application.LoadLevel(14);
	}
	
	if(GUI.Button(Rect(px * 2 + wid ,py * 3 + hei*2,wid,hei),"CenaLodo")){
		print("LoadCena1");
		Application.LoadLevel(16);
	}
	
	if(GUI.Button(Rect(px * 3 + wid*2 ,py * 3 + hei*2,wid,hei),"CenaEscova")){
		print("LoadCena1");
		Application.LoadLevel(17);
	}
	
	if(GUI.Button(Rect(px * 4 + wid*3 ,py * 3 + hei*2,wid,hei),"Cena Greve")){
		print("LoadCena1");
		Application.LoadLevel(18);
	}
	
	if(GUI.Button(Rect(px ,py * 4 + hei*3,wid,hei),"podio")){
		print("LoadCena1");
		Application.LoadLevel(22);
	}
	
}