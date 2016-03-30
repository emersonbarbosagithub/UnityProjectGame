#pragma strict

function Start () {
	PosicoesJogador.positJogador1 = Vector3(150.2606,5.824133,125.1461);
	//PosicoesJogador.rotJogador1 = jogador1.rotation;
	PosicoesJogador.positJogador2 = Vector3(134.5553,5.824133,125.1461);
	//PosicoesJogador.rotJogador2 = jogador2.rotation;
	MainScript1Jogador.casaAtualJogador1 = 0;
	MainScript1Jogador.casaAtualJogador2 = 0;
	
	MainScript2.casaAtualJogador1 = 0;
	MainScript2.casaAtualJogador2 = 0;
	
	GameStates1Jogador.estadoAtual = 0;
	
	Jogador.imunidadeAtivada = false;
	Jogador1.imunidadeAtivada = false;
	Jogador2.imunidadeAtivada = false;
	JogadorAI.imunidadeAtivada = false;
	
	Jogador.aguardarRodada = false;
	Jogador1.aguardarRodada = false;
	Jogador2.aguardarRodada = false;
	JogadorAI.aguardarRodada = false;
	
	MainPersonalizarPersonagem.nomeJogador1 = "Jogador 1";
	MainPersonalizarPersonagem.nomeJogador2 = "Jogador 2";
	
	
}

function Update () {

}