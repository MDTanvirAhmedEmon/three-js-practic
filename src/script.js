import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
console.log('controls', OrbitControls);
/**
 * Objects
 */

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// mesh.position.x = 3
// mesh.rotation.y = 2

// mesh.scale.x = 1
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
console.log(mesh.position.length())
console.log(mesh.position.length());
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

scene.add(camera)
console.log(mesh.position.distanceTo(camera.position))
console.log(mesh.position.distanceTo(camera.position));
console.log(mesh.position.normalize())
const axis = new THREE.AxesHelper(3)
scene.add(axis)

/**
 * Renderer
*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

let time = new Date()

const clock = new THREE.Clock()

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)

})

// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true;

const tick = () => {
    // const currentTime = new Date();
    // const deltaTime = currentTime - time;
    // time = currentTime
    // // console.log((deltaTime /20));
    // const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime);
    // console.log(Math.sin(elapsedTime));
    // console.log('run');
    // console.log('x', cursor.x);
    // console.log('x sin', Math.sin(cursor.x));
    // console.log('x cos', Math.cos(cursor.x));
    // console.log('y', cursor.y);
    camera.position.x = Math.sin(cursor.x * 6) * 3
    // // camera.position.y = cursor.y 
    camera.position.z = Math.cos(cursor.x * 6) * 3
    camera.position.y = cursor.y * 5
    camera.lookAt(mesh.position)
    // mesh.rotation.x = Math.sin(elapsedTime)
    // controls.update();
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
}

tick();
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)