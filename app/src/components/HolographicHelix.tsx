import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WORDS = [
  'MARKET', 'CULTURE', 'TRADE', 'SILICON',
  'EUROPE', 'ASIA', 'TECH', 'GROWTH',
  'SI-WAFER', 'FAB', 'ST', 'DEAL',
  'GLOBAL', 'SALES', 'WIN', 'FUTURE'
];

export default function HolographicHelix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Helix group
    const helixGroup = new THREE.Group();
    scene.add(helixGroup);

    const count = 128;
    const strands = 2;
    const colorPalette = [
      new THREE.Color('#2b0a45'),
      new THREE.Color('#b76cfd'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#4facfe'),
      new THREE.Color('#00f2fe'),
    ];

    // Create instanced mesh for helix
    const boxGeo = new THREE.BoxGeometry(0.6, 0.12, 0.04);
    const boxMat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const instancedMesh = new THREE.InstancedMesh(boxGeo, boxMat, count);
    helixGroup.add(instancedMesh);

    const dummy = new THREE.Object3D();

    // Floating words group
    const wordsGroup = new THREE.Group();
    scene.add(wordsGroup);

    WORDS.forEach((word, i) => {
      const angle = (i / WORDS.length) * Math.PI * 2;
      const radius = 5;
      const wordGeo = new THREE.BoxGeometry(word.length * 0.1, 0.18, 0.02);
      const wordMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xb76cfd : 0x4facfe,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const wordMesh = new THREE.Mesh(wordGeo, wordMat);
      wordMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(i * 0.7) * 2,
        Math.sin(angle) * radius
      );
      wordMesh.lookAt(0, wordMesh.position.y, 0);
      wordsGroup.add(wordMesh);
    });

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    scene.add(new THREE.PointLight(0xb76cfd, 1, 20));

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;

      // Update helix instances
      for (let i = 0; i < count; i++) {
        const t = i / count;
        const strand = i % strands;
        const angle = t * Math.PI * 8 + time * 0.3 + strand * Math.PI;
        const radius = 3.5;
        const y = (t - 0.5) * 12;

        dummy.position.set(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        );
        dummy.rotation.y = -angle + Math.PI / 2;
        dummy.scale.setScalar(0.5 + Math.sin(t * Math.PI) * 0.3);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);

        const colorIndex = Math.floor(t * (colorPalette.length - 1));
        const colorMix = t * (colorPalette.length - 1) - colorIndex;
        const c1 = colorPalette[colorIndex];
        const c2 = colorPalette[Math.min(colorIndex + 1, colorPalette.length - 1)];
        const r = c1.r + (c2.r - c1.r) * colorMix;
        const g = c1.g + (c2.g - c1.g) * colorMix;
        const b = c1.b + (c2.b - c1.b) * colorMix;
        instancedMesh.setColorAt(i, new THREE.Color(r, g, b));
      }
      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }

      // Rotate groups
      helixGroup.rotation.y = time * 0.05;
      wordsGroup.rotation.y = time * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
