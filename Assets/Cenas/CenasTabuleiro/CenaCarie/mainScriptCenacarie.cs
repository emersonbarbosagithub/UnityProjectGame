using UnityEngine;
using System.Collections;

public class mainScriptCenacarie : MonoBehaviour {

	// Use this for initialization
	public Transform dente;
	public Transform carie;
	public Transform chao;
	public ParticleSystem particles;
	public bool moverChao;
	public Transform denteCariado;
	
	IEnumerator AnimarParticles (){
		yield return new WaitForSeconds(7.5f);
		moverChao = false;
		particles.Play();
		StartCoroutine(AparecerDenteCariado());
	}
	
	IEnumerator AparecerDenteCariado (){
		yield return new  WaitForSeconds(3.5f);
		dente.gameObject.SetActiveRecursively(false);
		carie.gameObject.SetActiveRecursively(false);
		particles.Stop();
		denteCariado.gameObject.SetActiveRecursively(true);
		
		
		
	}
	
	void Start () {
		moverChao = true;
		StartCoroutine(AnimarParticles());
		
		
	}
	
	
	// Update is called once per frame
	void Update () {
		if(moverChao){
			chao.transform.Translate(0,0,25*Time.deltaTime);
		}
		denteCariado.animation.Play("idle");
	}
}
