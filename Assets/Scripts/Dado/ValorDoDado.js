static var face: int;

function Update () {
    if (rigidbody.IsSleeping()) {

        face = DadoFace();
    }else face = 0;
    //face = 47; //cheat para ir direto para a casa setada
}

function DadoFace() {
    var upDir = Vector3.up;
    var x = Vector3.Dot(transform.right, upDir);
    var y = Vector3.Dot(transform.up, upDir);
    var z = Vector3.Dot(transform.forward, upDir);
    var xAbs = Mathf.Abs(x);
    var yAbs = Mathf.Abs(y);
    var zAbs = Mathf.Abs(z);
  
    if (xAbs > yAbs) {
        if (xAbs > zAbs) {
        	//operador ternário em ação
            return x > 0 ? 1 : 6;
        } else {
            return z > 0 ? 2 : 5;
        }
    } else if (yAbs > zAbs) {
        return y > 0 ? 3 : 4;
    } else {
        return z > 0 ? 2 : 5;
    }
}