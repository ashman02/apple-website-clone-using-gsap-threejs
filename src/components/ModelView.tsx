import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  Suspense,
} from "react"
import * as THREE from "three"
import { ModelObject } from "./Model"
import {  PerspectiveCamera, View, OrbitControls } from "@react-three/drei"
import Lights from "./Lights"
import IPhone from "./IPhone"
import Loader from "./Loader"

interface ModelViewProps {
  index: number
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>
  gsapType: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlRef: any
  setRotationState: Dispatch<SetStateAction<number>>
  item: ModelObject
  size: string
}

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={.5} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
           <Loader/>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
