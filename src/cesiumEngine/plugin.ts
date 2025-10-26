import { Viewer } from 'cesium';

export const registerPlugin = (viewer: Viewer, plugin: any) => {
    // 插件注册逻辑
    console.log('注册插件', plugin);
    return true;
};

export const unregisterPlugin = (viewer: Viewer, pluginId: string) => {
    // 插件卸载逻辑
    console.log('卸载插件', pluginId);
    return true;
};

export const getPlugins = (viewer: Viewer) => {
    // 获取已注册插件列表
    return [];
};