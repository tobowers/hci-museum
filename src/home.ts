import * as THREE from "three";
import { gsap } from "gsap";
import { exhibits, featured, type Exhibit } from "./data";

renderHeroFeature(featured);
renderGallery();
initAmbient();
setCounts();
initMotion();

function setCounts() {
  const countEl = document.getElementById("hero-exhibit-count");
  const galleryCountEl = document.getElementById("gallery-count");
  if (countEl) countEl.textContent = String(exhibits.length);
  if (galleryCountEl) galleryCountEl.textContent = `${exhibits.length} artifacts recovered`;
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.replaceChildren(
    ...exhibits.map((exhibit) => {
      const card = document.createElement("a");
      card.className = "exhibit-card";
      if (exhibit.span === 2) card.classList.add("exhibit-card--wide");
      card.href = `./exhibits/${exhibit.slug}/`;
      card.setAttribute("aria-label", `${exhibit.title}, ${exhibit.year}`);

      const media = document.createElement("div");
      media.className = "exhibit-card__media";

      const img = document.createElement("img");
      img.className = "exhibit-card__image";
      img.src = exhibit.image;
      img.alt = `${exhibit.title} archival photograph`;
      img.loading = "lazy";

      const glitch = document.createElement("div");
      glitch.className = "exhibit-card__image-glitch";

      const year = document.createElement("span");
      year.className = "exhibit-card__year";
      year.textContent = exhibit.year;

      media.append(img, glitch, year);

      const body = document.createElement("div");
      body.className = "exhibit-card__body";

      const title = document.createElement("h3");
      title.className = "exhibit-card__title";
      title.textContent = exhibit.title;

      const subtitle = document.createElement("p");
      subtitle.className = "exhibit-card__subtitle";
      subtitle.textContent = exhibit.subtitle;

      const tags = document.createElement("div");
      tags.className = "exhibit-card__tags";
      tags.append(
        ...exhibit.tags.map((tag) => {
          const span = document.createElement("span");
          span.className = "exhibit-card__tag";
          span.textContent = tag;
          return span;
        }),
      );

      body.append(title, subtitle, tags);
      card.append(media, body);
      return card;
    }),
  );
}

function renderHeroFeature(exhibit: Exhibit) {
  const img = document.getElementById("hero-feature-image") as HTMLImageElement | null;
  const info = document.getElementById("hero-feature-info");
  if (!img || !info) return;

  img.src = exhibit.image;
  img.alt = `${exhibit.title} archival photograph`;

  const year = document.createElement("span");
  year.className = "hero__feature-year";
  year.textContent = exhibit.year;

  const title = document.createElement("h2");
  title.className = "hero__feature-title";
  title.textContent = exhibit.title;

  const subtitle = document.createElement("p");
  subtitle.className = "hero__feature-subtitle";
  subtitle.textContent = exhibit.blurb;

  const link = document.createElement("a");
  link.className = "hero__feature-link";
  link.href = `./exhibits/${exhibit.slug}/`;
  link.textContent = "Inspect artifact";

  info.replaceChildren(year, title, subtitle, link);
}

function initMotion() {
  const hero = document.getElementById("hero");
  const galleryGrid = document.getElementById("gallery-grid");
  if (!hero || !galleryGrid) return;

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set(
      [
        ".site-header",
        ".hero__kicker",
        ".hero__title",
        ".hero__lede",
        ".hero__meta-item",
        ".hero__feature",
        ".hero__feature-info > *",
        ".gallery__header",
        ".exhibit-card",
      ],
      { clearProps: "all" },
    );
  });

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const cards = gsap.utils.toArray<HTMLElement>(".exhibit-card").slice(0, 12);
    const heroItems = [
      ".site-header",
      ".hero__kicker",
      ".hero__title",
      ".hero__lede",
      ".hero__meta-item",
      ".hero__feature",
      ".hero__feature-info > *",
    ];

    gsap.set(heroItems, { autoAlpha: 1 });
    gsap.set(cards, { autoAlpha: 1 });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".site-header", { y: -12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 })
      .fromTo(
        ".hero__feature",
        { clipPath: "inset(0 0 100% 0)", filter: "brightness(1.35) contrast(1.25)" },
        { clipPath: "inset(0 0 0% 0)", filter: "brightness(1) contrast(1)", duration: 0.72 },
        "-=0.18",
      )
      .fromTo(
        ".hero__feature-glitch",
        { autoAlpha: 1, x: -10 },
        { autoAlpha: 0.18, x: 0, duration: 0.5, clearProps: "visibility,x" },
        "-=0.48",
      )
      .fromTo(
        [".hero__kicker", ".hero__title", ".hero__lede"],
        { y: 18, autoAlpha: 0, filter: "blur(4px)" },
        { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.58, stagger: 0.07 },
        "-=0.28",
      )
      .fromTo(
        ".hero__meta-item",
        { y: 10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.38, stagger: 0.05 },
        "-=0.26",
      )
      .fromTo(
        ".hero__feature-info > *",
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.05 },
        "-=0.3",
      )
      .fromTo(
        ".gallery__header",
        { y: 14, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.42 },
        "-=0.12",
      )
      .fromTo(
        cards,
        { y: 16, autoAlpha: 0, filter: "brightness(1.2) blur(2px)" },
        { y: 0, autoAlpha: 1, filter: "brightness(1) blur(0px)", duration: 0.42, stagger: 0.035 },
        "-=0.22",
      );

    return () => tl.revert();
  });

  return () => mm.revert();
}

function initAmbient() {
  const canvas = document.getElementById("ambient-canvas") as HTMLCanvasElement | null;
  if (!canvas) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const uniforms = {
    uTime: { value: 0 },
    uGlitch: { value: 0.1 },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      uniform float uTime;
      uniform float uGlitch;
      varying vec2 vUv;
      varying float vRim;

      float hash(float v) { return fract(sin(v * 113.17) * 43758.5453); }

      void main() {
        vUv = uv;
        vec3 pos = position;
        float band = floor((pos.y + 1.5) * 18.0);
        float glitch = step(1.0 - uGlitch * 0.3, hash(band + floor(uTime * 5.0)));
        pos += normal * glitch * 0.08 * sin(uTime * 20.0 + band);
        vRim = pow(1.0 - abs(dot(normalize(normalMatrix * normal), vec3(0.0, 0.0, 1.0))), 2.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uGlitch;
      varying vec2 vUv;
      varying float vRim;

      float lineMask(float v, float s, float w) {
        return 1.0 - smoothstep(w, w + 0.01, abs(fract(v * s) - 0.5));
      }

      void main() {
        float lat = lineMask(vUv.y, 28.0, 0.012);
        float lon = lineMask(vUv.x, 40.0, 0.008);
        float scan = lineMask(vUv.y + uTime * 0.03, 80.0, 0.005) * 0.2;
        float wire = max(lat, lon) * 0.6;
        float intensity = wire + scan + vRim * 0.3;
        vec3 color = vec3(0.0, 1.0, 0.48) * intensity;
        gl_FragColor = vec4(color, clamp(intensity, 0.0, 0.7));
      }
    `,
  });

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 80, 60), material);
  scene.add(sphere);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.9, 0.008, 4, 80),
    new THREE.MeshBasicMaterial({ color: 0x00ff7b, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending }),
  );
  ring.rotation.x = Math.PI * 0.5;
  scene.add(ring);

  function resize() {
    const w = Math.max(1, window.innerWidth);
    const h = Math.max(1, window.innerHeight);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  let frame = 0;
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(resize);
  });
  ro.observe(canvas);
  resize();

  let prev = performance.now();
  let start = prev;

  renderer.setAnimationLoop(() => {
    const now = performance.now();
    const time = (now - start) / 1000;
    const delta = (now - prev) / 1000;
    prev = now;
    const motion = reducedMotion.matches ? 0.2 : 1;

    uniforms.uTime.value = time;
    sphere.rotation.y += delta * 0.12 * motion;
    sphere.rotation.x = Math.sin(time * 0.3) * 0.04 * motion;
    ring.rotation.z = -time * 0.06 * motion;
    renderer.render(scene, camera);
  });
}
