using UnityEngine;
using System.Collections;

public class scriptCamCenaBafo : MonoBehaviour {

	// Use this for initialization
	public Transform foco;
	void Start () {
	
		
		iTween.MoveTo(
			gameObject, iTween.Hash(
				"path", iTweenPath.GetPath("pathCam"),
				"time", 6,
				"easetype", iTween.EaseType.linear
			)
		);
		
	}
	
	// Update is called once per frame
	void Update () {
		transform.LookAt(foco);
	}
}
