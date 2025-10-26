import { Viewer, Cartesian3, Math as CesiumMath } from 'cesium';

export const flyTo = (viewer: Viewer, longitude?: number, latitude?: number, height?: number) => {
    viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(longitude || -122.4175, latitude || 37.655, height || 400),
        orientation: {
            heading: CesiumMath.toRadians(0.0),
            pitch: CesiumMath.toRadians(-15.0),
        }
    });
};

export const setView = (viewer: Viewer, position: Cartesian3) => {
    viewer.camera.setView({
        destination: position
    });
};

export const zoomTo = (viewer: Viewer, entity: any) => {
    viewer.zoomTo(entity);
};