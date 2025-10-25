<template>
  <div :id="viewId" class="CesiumViewContainer">
  </div>
</template>

<script lang="ts">
// import configs from '@/configs';
// import { Viewer, Terrain, Ion, Cartesian3, Math as CesiumMath, createOsmBuildingsAsync } from 'cesium';
import cesium from '@/cesium';
import camera from '@/cesium/camera';
import utils from '@/utils';
export default {
  data() {
    return {
      viewId: 'CesiumViewContainer'
    };
  },
  mounted() {
    this.init(this.viewId);
  },
  methods: {
    async init(viewId: string) {
      let viewer = cesium.init(viewId)

      // Fly the camera to San Francisco at the given longitude, latitude, and height.
      camera.flyTo(viewer)

      // // Add Cesium OSM Buildings, a global 3D buildings layer.
      // const buildingTileset = await createOsmBuildingsAsync();
      // viewer.scene.primitives.add(buildingTileset);
    }
  }
};
</script>

<style scoped>
.CesiumViewContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
