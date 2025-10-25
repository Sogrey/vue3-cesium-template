import { Viewer, Cartesian3, Math as CesiumMath } from 'cesium';


export default {
    flyTo(viewer: Viewer) {
        viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation: {
                heading: CesiumMath.toRadians(0.0),
                pitch: CesiumMath.toRadians(-15.0),
            }
        });
    }
}