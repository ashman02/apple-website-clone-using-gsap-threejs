import { Dispatch, MutableRefObject, SetStateAction, Suspense } from "react"
import * as THREE from "three"
import { ModelObject } from "./Model"
import { Html, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import IPhone from "./IPhone"


interface ModelViewProps {
  index : number
  groupRef : MutableRefObject<THREE.Group<THREE.Object3DEventMap>>
  gsapType : string
  controlRef : MutableRefObject<undefined>
  setRotationSize : Dispatch<SetStateAction<number>>
  item : ModelObject
  size : string
}


const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, item, size} : ModelViewProps) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0,0,4]} />

      <Lights/>

      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        <IPhone/>
      </Suspense>
    </View>
  )
}

export default ModelView
