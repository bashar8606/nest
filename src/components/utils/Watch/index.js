
import React, { useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, Html } from "@react-three/drei"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Model(props) {
    gsap.registerPlugin(ScrollTrigger);
    const { nodes, animations } = useGLTF("/3d/nestu.glb")
    const { ref, actions, names } = useAnimations(animations)
    const [index, setIndex] = useState(4)

    useFrame(() => {
        
      }, [ref, nodes])


    useEffect(() => {

        // actions[names[index]].reset().play()
        // console.log(actions[names[1]].warp(0,1,0), "nodes");
        // actions[names[2]].play()
        // actions[names[4]].
        // In the clean-up phase, fade it out
        // return () => actions[names[index]]
    }, [index, actions, names])


    useEffect(() => {
        // console.log(props?.mouseM, "nodes");
        if(props?.mouseM) {
            // actions[names[2]].stop()
            moveJoint(props?.mousePosition, nodes.neck, 50);
        } else {
            // moveJoint = null
            // actions[names[2]].play()
        }
    }, [props?.mousePosition, props?.mouseM])

    function degToRad(de) {
        var pi = Math.PI;
        return de * (pi / 180);
    }
    function moveJoint(mouse, joint, degreeLimit) {
        let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
        joint.rotation.y = degToRad(degrees.x);
        joint.rotation.x = degToRad(-degrees.y);
        joint.rotation.z = degToRad(degrees.y + degrees.x);
    }

    function getMouseDegrees(x, y, degreeLimit) {
        let dx = 0,
            dy = 0,
            xdiff,
            xPercentage,
            ydiff,
            yPercentage;

        let w = { x: window.innerWidth, y: window.innerHeight };

        // Left (Rotates neck left between 0 and -degreeLimit)
        // 1. If cursor is in the left half of screen
        if (x <= w.x / 2) {
            // 2. Get the difference between middle of screen and cursor position
            xdiff = w.x / 2 - x;
            // 3. Find the percentage of that difference (percentage toward edge of screen)
            xPercentage = (xdiff / (w.x / 2)) * 100;
            // 4. Convert that to a percentage of the maximum rotation we allow for the neck
            dx = ((degreeLimit * xPercentage) / 100) * -1;
        }

        // Right (Rotates neck right between 0 and degreeLimit)
        if (x >= w.x / 2) {
            xdiff = x - w.x / 2;
            xPercentage = (xdiff / (w.x / 2)) * 100;
            dx = (degreeLimit * xPercentage) / 100;
        }
        // Up (Rotates neck up between 0 and -degreeLimit)
        if (y <= w.y / 2) {
            ydiff = w.y / 2 - y;
            yPercentage = (ydiff / (w.y / 2)) * 100;
            // Note that I cut degreeLimit in half when she looks up
            dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1;
        }
        // Down (Rotates neck down between 0 and degreeLimit)
        if (y >= w.y / 2) {
            ydiff = y - w.y / 2;
            yPercentage = (ydiff / (w.y / 2)) * 100;
            dy = (degreeLimit * yPercentage) / 100;
        }
        return { x: dx, y: dy };
    }

    return (
        <>
        <group ref={ref} {...props} dispose={null}  onClick={() => setIndex((index + 1) % names.length)}>
            <group rotation={[0, 0, 0]} scale={1}>
                <primitive object={nodes.Scene} />
                {/* 
<mesh object={nodes.Scene} castShadow  onClick={() => setIndex((index + 1) % names.length)}
 skeleton={nodes.JR_terrier.skeleton} 
 receiveShadow geometry={nodes.JR_terrier.geometry} material={materials.JR_terrier} /> */}
            </group>

        </group>
        </>
    )
}
