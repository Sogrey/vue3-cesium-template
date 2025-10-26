import { Viewer, Cartesian3, Cartographic, Math as CesiumMath } from 'cesium';

export const degToCartesian = (longitude: number, latitude: number, height: number = 0): Cartesian3 => {
    return Cartesian3.fromDegrees(longitude, latitude, height);
};

export const cartesianToDeg = (position: Cartesian3): { longitude: number, latitude: number, height: number } => {
    const cartographic = Cartographic.fromCartesian(position);
    return {
        longitude: CesiumMath.toDegrees(cartographic.longitude),
        latitude: CesiumMath.toDegrees(cartographic.latitude),
        height: cartographic.height
    };
};

export const getCameraPosition = (viewer: Viewer): { longitude: number, latitude: number, height: number } => {
    const position = viewer.camera.position;
    return cartesianToDeg(position);
};