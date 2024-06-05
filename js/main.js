import * as THREE from './three.js';

// crear una escena 
const scene = new THREE.Scene();

// crear una camara / perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// crea un renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

// crea el elemento tml para visualizar la escena 3d 
document.body.appendChild( renderer.domElement );

// dibuja un cuboide
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//crea un material para la geometria
const material = new THREE.MeshBasicMaterial( { color: 0x549BA0 } );

// dibuja la geometria con el material
const cube = new THREE.Mesh( geometry, material );

// agrega el cubo a la escena
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01

	renderer.render( scene, camera );

}