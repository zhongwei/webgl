var web3d = function(){

  var renderer = null
    , scene = null
    , camera = null
    , cube = null
    , animating = false;
	
  var onLoad = function() {
    var container = document.getElementById("container");
      
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild( renderer.domElement );
	    
    // Create a new Three.js scene
    scene = new THREE.Scene();
	    
    // Put in a camera
    camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 4000 );
    camera.position.set( 0, 0, 3 );
      
    // Create a directional light to show off the object
    var light = new THREE.DirectionalLight( 0xffffff, 1.5);
    light.position.set(0, 0, 1);
    scene.add( light );
			
    // Create a shaded, texture-mapped cube and add it to the scene
    // First, create the texture map
    var mapUrl = "images/1.jpg";
    var texture = THREE.ImageUtils.loadTexture(mapUrl);
    texture.minFilter = THREE.LinearFilter;
      
    // Now, create a Phong material to show shading; pass in the map
    var material = new THREE.MeshPhongMaterial({ map: texture });
      
    // Create the cube geometry
    var geometry = new THREE.BoxGeometry(1, 1, 1);
      
    // And put the geometry and material together into a mesh
    cube = new THREE.Mesh(geometry, material);
      
    // Turn it toward the scene, or we won't see the cube shape!
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;
      
    scene.add( cube );
  };

  return { 
    onLoad: onLoad
  }
}
	
