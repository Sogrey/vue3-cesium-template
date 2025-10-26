import { Viewer, Entity, EntityCollection, Color, ConstantProperty } from 'cesium';

export const addPoint = (viewer: Viewer, position: any, properties?: any) => {
    const entity = viewer.entities.add({
        position: position,
        point: {
            pixelSize: new ConstantProperty(10),
            color: new ConstantProperty(Color.fromCssColorString(properties?.color || 'yellow'))
        },
        properties: properties
    });
    return entity;
};

export const addPolyline = (viewer: Viewer, positions: any[], properties?: any) => {
    const entity = viewer.entities.add({
        polyline: {
            positions: positions,
            width: new ConstantProperty(properties?.width || 5),
            material: Color.fromCssColorString(properties?.material || 'blue')
        },
        properties: properties
    });
    return entity;
};

export const removeFeature = (viewer: Viewer, entity: Entity) => {
    viewer.entities.remove(entity);
};