import { Viewer, Entity, Cartesian3, ConstantProperty } from 'cesium';

export const addLabel = (viewer: Viewer, position: Cartesian3, text: string, properties?: any) => {
    const entity = viewer.entities.add({
        position: position,
        label: {
            text: new ConstantProperty(text),
            font: new ConstantProperty(properties?.font || '16pt Arial'),
            fillColor: new ConstantProperty(properties?.fillColor || 'WHITE'),
            outlineColor: new ConstantProperty(properties?.outlineColor || 'BLACK'),
            outlineWidth: new ConstantProperty(properties?.outlineWidth || 2),
            pixelOffset: new ConstantProperty(properties?.pixelOffset || new Cartesian3(0, -40, 0))
        },
        properties: properties
    });
    return entity;
};

export const updateLabel = (entity: Entity, newText: string) => {
    if (entity.label) {
        entity.label.text = new ConstantProperty(newText);
    }
};

export const removeLabel = (viewer: Viewer, entity: Entity) => {
    viewer.entities.remove(entity);
};