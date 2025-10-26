import { Viewer, Entity } from 'cesium';

export const addGlow = (viewer: Viewer, entity: Entity) => {
    // 添加发光效果实现
    console.log('添加发光效果', entity);
};

export const addBloom = (viewer: Viewer, intensity: number = 1.0) => {
    // 添加泛光效果实现
    console.log('添加泛光效果', intensity);
};

export const removeEffect = (viewer: Viewer, effectId: string) => {
    // 移除特效实现
    console.log('移除特效', effectId);
};