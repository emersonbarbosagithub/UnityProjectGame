#pragma strict
class JogadorAI extends MonoBehaviour{
	var main:GameObject;
	//static var casaAtual:int = 0;
	var moveu:boolean;
	var nome:String;
	var corDoLabel:Color;
	var numeroDeJogador:int;
	var particleEntrarCena1:Transform;
	var particleEntrarCena2:Transform;
	var particleAura:Transform;
	var particlePerdeAura:Transform;
	private var objetoLabel:TextMesh;
	static var imunidadeAtivada:boolean = false;
	static var aguardarRodada:boolean = false;
	
	static var valorDoDadoMaquina:int = 0;
	static var valorDoDadoAnteriorMaquina:int = 0;
	//
	//var materialPersonagem:Material;
	
	//
	var estile:GUIStyle;
	
	function OnGUI(){
		//GUI.Label(Rect(Screen.width-30,Screen.height/2,100,100),valorDoDadoMaquina.ToString(),estile);
		//GUI.Label(Rect(Screen.width-30,Screen.height/2+20,100,100),valorDoDadoAnteriorMaquina.ToString(),estile);
	}
	function Awake(){
		
	}
	function Start () {
	/*
	*
	*/
	estile.normal.textColor = Color.black;
	/*
	*/
	
		//imunidadeAtivada = true;
		objetoLabel = gameObject.GetComponentInChildren(TextMesh);
				objetoLabel.text = "CPU";
		
		
		objetoLabel.renderer.material.color = corDoLabel;
	}
	
	function Update () {
		try{
		objetoLabel.transform.LookAt(objetoLabel.transform.position - (Camera.current.transform.position - objetoLabel.transform.position));
		}
		catch(e){
		
		}
		
		if(imunidadeAtivada){
			particleAura.particleSystem.Play();
		}
		else{
			particleAura.particleSystem.Stop();
		}
	}
	function Mover() {
	
	
		if (aguardarRodada){
			mudarEstadoAnim();
			aguardarRodada = false;
			GameStates1Jogador.MudarEstado(6);
			return ;
			
		}
			
			valorDoDadoAnteriorMaquina = valorDoDadoMaquina;
			Animacoes.podeAndar = true;
			var valorDoDadoAI:int = Random.Range(1,7);
			
			if(valorDoDadoAI > 3){
				valorDoDadoAI = Random.Range(1,7);
			}
			
			valorDoDadoMaquina = valorDoDadoAI;
			
			// valordodado
			//var valorDoDadoAI:int = 19;
			//Debug.Log(valorDoDadoAI+"");
			
			if(valorDoDadoAI == 1){
				var ponto:Transform;
				
				if(GameStates1Jogador.turnoDoJogador == 2){
					ponto = main.GetComponent(CasasTabuleiro).casasJogador2[MainScript1Jogador.casaAtualJogador2  +1];
				}
				iTween.MoveTo(
					gameObject, iTween.Hash(
						"position", ponto,
						"speed", 30,
						"easetype", "linear",
						"oncomplete", "mudarEstadoAnim",
						"orienttopath",true,
						"onupdate","Animar"
					)
				);
				
			}else{
				iTween.MoveTo(
					gameObject, iTween.Hash(
						"path",	main.GetComponent(CasasTabuleiro).criarPath(
														MainScript1Jogador.casaAtualJogador2 + 1,
														MainScript1Jogador.casaAtualJogador2 + valorDoDadoAI,
														GameStates1Jogador.turnoDoJogador),
						"speed", 60,
						"easetype", "linear",
						"oncomplete", "mudarEstadoAnim",
						"orienttopath",true,
						"onupdate","Animar"
					)
				);
			}
		
		
		
		
		MainScript1Jogador.casaAtualJogador2 += valorDoDadoAI;
	}
	
	function voltarOuAvancar(valor){
		main.GetComponent(Cameras).mudarCamera(1);
		var ponto:Transform;
		if(valor == 1){
			MainScript1Jogador.casaAtualJogador2+=1;
			ponto = main.GetComponent(CasasTabuleiro).casasJogador2[MainScript1Jogador.casaAtualJogador2];
			
		}
		else if(valor == -1){
			MainScript1Jogador.casaAtualJogador2-=1;
			ponto = main.GetComponent(CasasTabuleiro).casasJogador2[MainScript1Jogador.casaAtualJogador2];
			
		}
		iTween.MoveTo(
			gameObject, iTween.Hash(
				"position", ponto,
				"speed", 30,
				"easetype", "linear",
				"oncomplete","mudarEst",
				"orienttopath",true,
				"onupdate","Animar"
			)
		);
		GameStates1Jogador.MudarEstado(510);
	
	}
	function voltarOuAvancar2(valor:int){
		main.GetComponent(Cameras).mudarCamera(1);
		
		if(valor > 0){
			iTween.MoveTo(
				gameObject, iTween.Hash(
					"path", main.GetComponent(CasasTabuleiro).criarPath(
															MainScript1Jogador.casaAtualJogador2+1,
															MainScript1Jogador.casaAtualJogador2+valor, 
															2),
					"speed", 30,
					"easetype", "linear",
					"oncomplete","mudarEst",
					"orienttopath",true,
					"onupdate","Animar"
				)
			);
		}
		else if(valor < 0){
			iTween.MoveTo(
				gameObject, iTween.Hash(
					"path", main.GetComponent(CasasTabuleiro).criarPathVoltando(
															MainScript1Jogador.casaAtualJogador2,
															MainScript1Jogador.casaAtualJogador2+valor, 
															2),
					"speed", 30,
					"easetype", "linear",
					"oncomplete","mudarEst",
					"orienttopath",true,
					"onupdate","Animar"
				)
			);
		}
		MainScript1Jogador.casaAtualJogador2 += valor;
		GameStates1Jogador.MudarEstado(510);
	}
	
	function ativaParticles(){
		particleEntrarCena1.particleSystem.Play();
		particleEntrarCena2.particleSystem.Play();
	}
	
	function perdeImunidade(){
		imunidadeAtivada = false;
		//particleAura.particleSystem.gameObject.active = false;
		particlePerdeAura.particleSystem.Play();
		yield WaitForSeconds(5); // pra simular a cena de animação
		GameStates1Jogador.MudarEstado(6);
	}
	
	function mudarEstadoAnim(){
	
		gameObject.GetComponent(InstanciaPersonagem).selecionado1.animation.Play("idle");
		Animacoes.podeAndar = false;
		
		/*
			yield WaitForSeconds(2);
			main.GetComponent(Cameras).mudarCamera(0);
			GameStates1Jogador.MudarEstado(6);
		*/
		
		
		if(GameStates1Jogador.turnoDoJogador == 2){
			//se o jogador cai na casa 3 mostrar os dentes
			if(MainScript1Jogador.casaAtualJogador2 == 2)
			{
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(12);
			}
			//mostrar dentes 2 casas
			else if(MainScript1Jogador.casaAtualJogador2 == 27){
				
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(59);
			
			}
			
			//se o jogador cai na casa 5 fio dental
			else if(MainScript1Jogador.casaAtualJogador2 == 4 ){
				
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(16);
			}
			//outra cena do fio dental
			else if(MainScript1Jogador.casaAtualJogador2 == 21 ||
				MainScript1Jogador.casaAtualJogador2 == 38){
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(27);
			}
			//se o jogador cair na casa 6 Imunidade
			else if(MainScript1Jogador.casaAtualJogador2 == 5 ||
					MainScript1Jogador.casaAtualJogador2 == 12 ||
					MainScript1Jogador.casaAtualJogador2 == 39
					)
			{
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(15);
			}			
			// se o jogador cair na casa 7 jogador Esperto
			else if(MainScript1Jogador.casaAtualJogador2 == 6){
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(18);
			}
			//se o jogador esta com a gengiva machucada
			else if(MainScript1Jogador.casaAtualJogador2 == 9){
				if(imunidadeAtivada){
					/*
					imunidadeAtivada = false;
					//particleAura.particleSystem.gameObject.active = false;
					particlePerdeAura.particleSystem.Play();
					yield WaitForSeconds(5); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(6);
					
					*/
					perdeImunidade();
				}else{
					ativaParticles();
					yield WaitForSeconds(3);
					GameStates1Jogador.MudarEstado(20);
				}
			}
			//perde imunidade (COMEU DOCES)
			else if(MainScript1Jogador.casaAtualJogador2 == 10 ||
					MainScript1Jogador.casaAtualJogador2 == 24 ||
					MainScript1Jogador.casaAtualJogador2 == 35 ||
					MainScript1Jogador.casaAtualJogador2 == 45)
			{
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					yield WaitForSeconds(3); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(6);
				}
			}
			// Dente de lodo, placa bacteriana gruda nele
			else if(MainScript1Jogador.casaAtualJogador2 == 11){
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					ativaParticles();
					yield WaitForSeconds(3);
					 // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(21);
				}
				
			}
			// Dente de lodo, placa bacteriana gruda nele
			else if(MainScript1Jogador.casaAtualJogador2 == 23){
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					ativaParticles();
					yield WaitForSeconds(3);
					 // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(29);
				}
				
			}
			// cenaCarie
			
			else if(MainScript1Jogador.casaAtualJogador2 == 14 || 
				MainScript1Jogador.casaAtualJogador2 == 32){
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					ativaParticles();
					yield WaitForSeconds(3); // pra simular a cena de animação
					aguardarRodada = true;
					GameStates1Jogador.MudarEstado(23);
				}
				
			}
			else if(MainScript1Jogador.casaAtualJogador2 == 19){
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					ativaParticles();
					yield WaitForSeconds(3); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(52);
				}
				
			}
			// escovou os dentes
			else if(MainScript1Jogador.casaAtualJogador2 == 15  ||
				MainScript1Jogador.casaAtualJogador2 == 46){
				
					ativaParticles();
					yield WaitForSeconds(3); 
					GameStates1Jogador.MudarEstado(24);
				
				
			}
			
			//escovou os dentes avanca 1 casa
			else if(MainScript1Jogador.casaAtualJogador2 == 28){
					ativaParticles();
					yield WaitForSeconds(3);
					GameStates1Jogador.MudarEstado(50);
			}
			//cena bafo de onca
			else if(MainScript1Jogador.casaAtualJogador2 == 20 || 
				MainScript1Jogador.casaAtualJogador2 == 36){
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					aguardarRodada = true;
					ativaParticles();
					yield WaitForSeconds(3);
					GameStates1Jogador.MudarEstado(25);
				}
			}
			//cena greve
			else if(MainScript1Jogador.casaAtualJogador2 == 30 ||
				MainScript1Jogador.casaAtualJogador2 == 44){
				if(imunidadeAtivada){
					perdeImunidade();
				}else{
					aguardarRodada = true;
					ativaParticles();
					yield WaitForSeconds(3); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(31);
				}
			}
			// gengiva sangrando 2
			else if(MainScript1Jogador.casaAtualJogador2 == 47){
				if(imunidadeAtivada){
					imunidadeAtivada = false;
					//particleAura.particleSystem.gameObject.active = false;
					particlePerdeAura.particleSystem.Play();
					yield WaitForSeconds(5); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(6);
				}else{
					ativaParticles();
					yield WaitForSeconds(3);
					GameStates1Jogador.MudarEstado(32);
				}
			}
			
			//cena prenda
			else if(MainScript1Jogador.casaAtualJogador2 == 16 ||
					MainScript1Jogador.casaAtualJogador2 == 26 ||
					MainScript1Jogador.casaAtualJogador2 == 41){
					ativaParticles();
					yield WaitForSeconds(2); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(43);
				
				
			}
			
			//mostrar os dentes 3 casas
			else if(MainScript1Jogador.casaAtualJogador2 == 40)
			{
				ativaParticles();
				yield WaitForSeconds(3);
				GameStates1Jogador.MudarEstado(51);
			}
			
			else if(MainScript1Jogador.casaAtualJogador2 == 49 ||
				MainScript1Jogador.casaAtualJogador2 == 50 ||
				MainScript1Jogador.casaAtualJogador2 == 51 ||
				MainScript1Jogador.casaAtualJogador2 == 52 ||
				MainScript1Jogador.casaAtualJogador2 == 53 ||
				MainScript1Jogador.casaAtualJogador2 == 54 )
			{
				ativaParticles();
				yield WaitForSeconds(2);
				GameStates1Jogador.MudarEstado(45);
			
			}
			
			else if(MainScript1Jogador.casaAtualJogador2 == 33){
				if(imunidadeAtivada){
					/*
					imunidadeAtivada = false;
					//particleAura.particleSystem.gameObject.active = false;
					particlePerdeAura.particleSystem.Play();
					yield WaitForSeconds(5); // pra simular a cena de animação
					GameStates1Jogador.MudarEstado(6);
					*/
					perdeImunidade();
				}else{
					ativaParticles();
					yield WaitForSeconds(3);
					GameStates1Jogador.MudarEstado(55);
				}
			}
			
			else if(MainScript1Jogador.casaAtualJogador2 == 13){
					ativaParticles();
					yield WaitForSeconds(3);
					
					//Application.LoadLevel(31);
					GameStates1Jogador.MudarEstado(58);
			}
						
			//::::::::::::FIM da Checagem das casas
			else{
				yield WaitForSeconds(2); // pra simular a cena de animação
				GameStates1Jogador.MudarEstado(6);
			//main.GetComponent(Cameras).mudarCamera(0);
			}
		}else {
			/*
			yield WaitForSeconds(2);
			
			GameStates1Jogador.MudarEstado(6);
			main.GetComponent(Cameras).mudarCamera(0);
			*/
		}
		
		
	}
	
	function mudarEst(){
	
		gameObject.GetComponent(InstanciaPersonagem).selecionado1.animation.Play("idle");
		Animacoes.podeAndar = false;
		yield WaitForSeconds(2);
		//main.GetComponent(Cameras).mudarCamera(0);
		GameStates1Jogador.MudarEstado(6);
		
	}
	
	function Animar(){
		gameObject.GetComponent(InstanciaPersonagem).selecionado1.animation.Play("correndo");
	}
	function carregarCenaAnimacao () {
		
	}
	
	
	
	function exibirNome(){
		
	}
}