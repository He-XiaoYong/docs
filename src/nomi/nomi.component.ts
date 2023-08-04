import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-nomi',
  templateUrl: './nomi.component.html',
  styleUrls: ['./nomi.component.less']
})
export class NomiComponent implements OnInit {
  title = 'Nomi';
  domWidth: number = 800;
  domHeight: number = 500;

  ngOnInit(): void {
    this.init();
  }

  init() {
    // init

    const camera = new THREE.PerspectiveCamera(70, this.domWidth / this.domHeight, 0.01, 10);
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(this.domWidth, this.domHeight);
    renderer.setAnimationLoop(animation);
    const dom = document.getElementById('nomi-container')?.appendChild(renderer.domElement);

    // animation

    function animation(time: any) {

      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render(scene, camera);

    }
  }

}
