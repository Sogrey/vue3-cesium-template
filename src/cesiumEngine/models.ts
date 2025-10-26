import { Viewer, Entity, Cartesian3, Cesium3DTileset, ConstantProperty } from 'cesium';

export const loadModel = (viewer: Viewer, url: string, position: Cartesian3, properties?: any) => {
    const entity = viewer.entities.add({
        position: position,
        model: {
            uri: url,
            scale: new ConstantProperty(properties?.scale || 1.0),
            minimumPixelSize: new ConstantProperty(properties?.minimumPixelSize || 128),
            maximumScale: new ConstantProperty(properties?.maximumScale || 20000)
        },
        properties: properties
    });
    return entity;
};

export const load3DTiles = (viewer: Viewer, url: string, properties?: any) => {
    const tileset = viewer.scene.primitives.add(new Cesium3DTileset({
        url: url,
        ...properties
    }));
    return tileset;
};

export const removeModel = (viewer: Viewer, entity: Entity) => {
    viewer.entities.remove(entity);
};