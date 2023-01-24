
  import { useState, useEffect, useRef, Suspense, useLayoutEffect } from "react";
  import Image from "next/image";
  import Style from "./HomeBanner.module.scss";
  import Assets from "../Layout/CommonLayout/assets";
  import { Canvas, useFrame } from "@react-three/fiber"
  import { Environment, ContactShadows, Html } from '@react-three/drei'
  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  // import Box from "../utils/Box";
  import Watch from "../utils/Watch";
  // function Rig() {
  //   return useFrame((state) => {
  //     state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1 + state.mouse.x / 4, 0.075)
  //     state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075)
  //   })
  // }
  
  
  const HomeBanner = ({ props }) => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [mouseM, setMouseM] = useState(false)
  
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }
  
    useLayoutEffect(() => {
      document.addEventListener('mousemove', function () {
        setMouseM(true)
        setTimeout(function () {
          setMouseM(false)
        }, 4000);
      });
      gsap.utils.toArray(sectionRef.current).forEach(section => {
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top ",
              // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
              end: () => "+=900", 
              scrub: true,
              // pin: true,
              anticipatePin: 1
            },
            defaults: {ease: "none", transformOrigin: "top left"}
          });
        // animate the container one way...
        tl.to(section.querySelector(`.${Style.logo}`), {yPercent: -150, scale: .2})
          // ...and the image the opposite way (at the same time)
          // .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
      }); 
  
    }, [])
  
  
  
    return (
      <div ref={sectionRef} >
        <section className={Style.ns_banner_home}  >
          <div className="container-fluid ">
  
            <div className={Style.content}>
              <h4>The <span> Middle East and North Africa’s</span> leading companion
                pet care company</h4>
            </div>
            <div className={Style.canvas} onMouseMove={(event) => handleMouseMove(event)}>
              <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1, 3], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                <group position={[0, 0, 1]} scale={2}>
                  <Watch mouseM={mouseM} mousePosition={cursorPosition} />
                </group>
                {/* <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
                  <planeBufferGeometry args={[10, 10, 1, 1]} />
                  <shadowMaterial transparent opacity={0.2} />
                </mesh> */}
                {/* <Rig /> */}
                <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
              </Canvas>
            </div>
            <div className={Style.logo_wrap}>
              <div className={Style.logo}>
                <Image src={Assets.logo} fill alt="logo" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default HomeBanner;
  
  