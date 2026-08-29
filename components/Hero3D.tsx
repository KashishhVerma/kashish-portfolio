"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // core wireframe shapes
    const geometry = new THREE.IcosahedronGeometry(1.4, 0);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0xff4f9c, transparent: true, opacity: 0.6 });
    const shape = new THREE.LineSegments(wireframe, material);
    scene.add(shape);

    const material2 = new THREE.LineBasicMaterial({ color: 0xd46ec2, transparent: true, opacity: 0.32 });
    const shape2 = new THREE.LineSegments(wireframe, material2);
    shape2.scale.setScalar(1.28);
    scene.add(shape2);

    // small orbiting satellite shape
    const satGeo = new THREE.OctahedronGeometry(0.32, 0);
    const satWire = new THREE.WireframeGeometry(satGeo);
    const satMat = new THREE.LineBasicMaterial({ color: 0xff8fc0, transparent: true, opacity: 0.85 });
    const satellite = new THREE.LineSegments(satWire, satMat);
    scene.add(satellite);

    // sparkle particle field
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.6 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.035, transparent: true, opacity: 0.55 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let targetX = 0;
    let targetY = 0;
    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = px * 1.3;
      targetY = py * 1.3;
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    let t = 0;
    const animate = () => {
      t += 0.01;

      shape.rotation.y += 0.003;
      shape.rotation.x += 0.0015;
      shape2.rotation.y -= 0.002;
      shape2.rotation.x -= 0.001;

      shape.rotation.y += (targetX - shape.rotation.y) * 0.01;
      shape.rotation.x += (targetY - shape.rotation.x) * 0.01;

      satellite.position.x = Math.cos(t) * 2.3;
      satellite.position.z = Math.sin(t) * 2.3;
      satellite.position.y = Math.sin(t * 1.3) * 0.5;
      satellite.rotation.x += 0.02;
      satellite.rotation.y += 0.03;

      particles.rotation.y += 0.0006;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      wireframe.dispose();
      material.dispose();
      material2.dispose();
      satGeo.dispose();
      satWire.dispose();
      satMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
