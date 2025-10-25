import configs from '@/configs';
import utils from '@/utils';

import { Viewer, Terrain, Ion, Cartesian3, Math as CesiumMath, createOsmBuildingsAsync } from 'cesium';

import camera from './camera';

export default {
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
    }

}