import * as THREE from "three"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target : string, animationProps : {[key : string] : string | number}, scrollProps? : {[key : string] : string | number}) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger : {
            trigger : target,
            toggleActions : "restart reverse restart reverse",
            start : "top 85%",
            ...scrollProps
        }
    })
}

export const animateWithGsapTimeline = (timeline : gsap.core.Timeline, rotationRef : React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>, rotationState : number, firstTarget : string, secondTarget : string, animationProps : {
    [key : string] : string | number
})  => {
    timeline.to(rotationRef.current.rotation, {
        y : rotationState,
        duration : 1,
        ease : "power2.inOut"
    })

    timeline.to(firstTarget, {
        ...animationProps,
        ease : 'power2.inOut'
    },'<')
    timeline.to(secondTarget, {
        ...animationProps,
        ease : 'power2.inOut'
    },'<')
}