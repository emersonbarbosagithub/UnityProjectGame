
var speed : float = 0.1;
function Update () {
    if (Input.touchCount > 0 && 
      Input.GetTouch(0).phase == TouchPhase.Moved) {
    
        // Get movement of the finger since last frame
        var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
        
       if(touchDeltaPosition.x > 0){
       	transform.Rotate(0,1 * Time.deltaTime * speed,0);
       }
       else if(touchDeltaPosition.x < 0){
       	transform.Rotate(0,-1 * Time.deltaTime * speed,0);
       }
    }
    if (Input.GetKey(KeyCode.Escape))
    {
            Application.LoadLevel (0);
    }
}