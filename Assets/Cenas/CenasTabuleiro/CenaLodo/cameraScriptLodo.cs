using UnityEngine;
using System.Collections;

public class cameraScriptLodo : MonoBehaviour {

	// Use this for initialization
	
	public Transform dente;
	void Start () {
	
		
		iTween.MoveTo(
			gameObject, iTween.Hash(
				"path", iTweenPath.GetPath("pathCam"),
				"time", 3,
				"easetype", iTween.EaseType.linear
			)
		);
		
	}
	
	// Update is called once per frame
	void Update () {
		transform.LookAt(dente.position);
	}
}
