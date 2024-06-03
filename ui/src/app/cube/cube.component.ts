import { Component, ViewChild, AfterViewInit, OnInit, ElementRef, Input } from '@angular/core';
import { After } from 'v8';
import * as THREE from "three";
import { PassThrough } from 'stream';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements OnInit, AfterViewInit{
  
  constructor() { }

  @ViewChild('canvas') private canvasRef!: ElementRef

  @Input() public rotationSpeedX: number = 0.05;

  @Input() public rotationSpeedY: number = 0.01;

  @Input() public size: number = 200;

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader: THREE.TextureLoader = new THREE.TextureLoader();

  private geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);

  private material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene: THREE.Scene = new THREE.Scene();
  

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.createScene();
      this.startRenderingLoop();
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.add(this.cube);

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView, 
      aspectRatio, 
      this.nearClippingPlane, 
      this.farClippingPlane);
    this.camera.position.z = this.cameraZ;  
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  private startRenderingLoop(): void {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio)
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    
    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }


}
