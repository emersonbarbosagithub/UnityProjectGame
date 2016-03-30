#pragma strict

var minX:int;
var maxX:int;
var minY:int;
var maxY:int;
var velocidade:float=2;
var speed:float=20;


var speed2:int = 4;
var selectedCamera:Camera;
var MINSCALE:float = 2.0F;
var MAXSCALE:float = 5.0F;
var varianceInDistances:float = 5.0F;
var touchDelta:float = 0.0F;
var prevDist:Vector2 = new Vector2(0,0);
var curDist:Vector2 = new Vector2(0,0);
var startAngleBetweenTouches:float = 0.0F;
var vertOrHorzOrientation:int = 0;
var midPoint:Vector2 = new Vector2(0,0);

function Start () {

}

function Update () {
	if(Input.GetAxis("Horizontal") > 0){
		transform.Translate(1*Time.deltaTime,0,0);
	}
	if(Input.GetAxis("Horizontal") < 0){
		transform.Translate(-1*Time.deltaTime,0,0);
	}
	if(Input.GetAxis("Vertical") > 0){
		transform.Translate(0,1*Time.deltaTime,0);
	}
	if(Input.GetAxis("Vertical") < 0){
		transform.Translate(0,-1*Time.deltaTime,0);
	}
	if(Input.GetKey(KeyCode.LeftControl)){
		gameObject.GetComponentInChildren(Camera).fieldOfView+=1;
	}
	if(Input.GetKey(KeyCode.Space)){
		gameObject.GetComponentInChildren(Camera).fieldOfView-=1;
	}
	
	if (Input.touchCount == 1 && 
      Input.GetTouch(0).phase == TouchPhase.Moved) {
    
        // Get movement of the finger since last frame
        var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
        
       if(touchDeltaPosition.x > 0){
       	transform.Translate(-1 * Time.deltaTime * speed, 0, 0);
       }
       else if(touchDeltaPosition.x < 0){
       	transform.Translate(1 * Time.deltaTime * speed, 0, 0);
       }
       
       if(touchDeltaPosition.y > 0){
       	transform.Translate( 0, 0, -1 * Time.deltaTime * speed);
       }
       else if(touchDeltaPosition.y < 0){
       	transform.Translate(0, 0, 1 * Time.deltaTime * speed);
       }
	   
	   if(transform.position.x > 150){
			transform.position.x = 150;
	   }
	   if(transform.position.x < -150){
			transform.position.x = -150;
	   }
	   if(transform.position.z > 122){
			transform.position.z = 122;
	   }
	   if(transform.position.z < -122){
			transform.position.z = -122;
	   }
	   
    }
    
    if(Input.touchCount == 2 && Input.GetTouch(0).phase == TouchPhase.Moved && Input.GetTouch(1).phase == TouchPhase.Moved){
    	midPoint = new Vector2(
    		((Input.GetTouch(0).position.x + Input.GetTouch(1).position.x)/2), 
    		((Input.GetTouch(0).position.y - Input.GetTouch(1).position.y)/2)); 
        
        curDist = Input.GetTouch(0).position - Input.GetTouch(1).position; 
        
        prevDist = ((Input.GetTouch(0).position - Input.GetTouch(0).deltaPosition) - (Input.GetTouch(1).position - Input.GetTouch(1).deltaPosition)); 
        
        touchDelta = curDist.magnitude - prevDist.magnitude;
        
        if ((Input.GetTouch(0).position.x - Input.GetTouch(1).position.x) > (Input.GetTouch(0).position.y - Input.GetTouch(1).position.y))
        {
        	vertOrHorzOrientation = -1; 
    	}
        if ((Input.GetTouch(0).position.x - Input.GetTouch(1).position.x) < (Input.GetTouch(0).position.y - Input.GetTouch(1).position.y))
        {
        	vertOrHorzOrientation = 1;
        }
        if ((touchDelta < 0)) //
        {
        	selectedCamera.fieldOfView = Mathf.Clamp(selectedCamera.fieldOfView + (1 * speed2),15,60);
        }

        if ((touchDelta > 0))
        {
        	selectedCamera.fieldOfView = Mathf.Clamp(selectedCamera.fieldOfView - (1 * speed2),15,60);
        }
		
    }
	
}