import configs from '@/configs';
import utils from '@/utils';

import { Viewer, Terrain, Ion, Cartesian3, Math as CesiumMath, createOsmBuildingsAsync } from 'cesium';

// 导入各功能模块
import * as Camera from './camera';
import * as Effect from './effect';
import * as Event from './event';
import * as Feature from './feature';
import * as Label from './label';
import * as Measurement from './measurement';
import * as Models from './models';
import * as Plugin from './plugin';
import * as Public from './public';

export default {
    // 主功能：初始化 Cesium Viewer
    init(viewId: string, options = {}): Viewer {
        Ion.defaultAccessToken = configs.api.cesiumIonToken

        const defaultConfigs = {
            terrain: Terrain.fromWorldTerrain(),
            infoBox: false,
        }

        // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
        const cesiumOptions = utils.merge({}, defaultConfigs)
        let viewer = new Viewer(viewId, cesiumOptions)

        return viewer
    },

    // 各功能模块命名空间导出
    Camera,
    Effect,
    Event,
    Feature,
    Label,
    Measurement,
    Models,
    Plugin,
    Public
}

