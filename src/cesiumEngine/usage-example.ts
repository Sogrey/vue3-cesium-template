// 仅用于演示用法，不包含实际业务逻辑
// Cesium Engine 使用示例
import Engine from '@/cesiumEngine';

// 示例：如何使用新的命名空间调用方式
function exampleUsage() {
    // 1. 初始化 Cesium Viewer
    const viewer = Engine.init('cesiumContainer');
    
    // 2. 使用相机模块
    Engine.Camera.flyTo(viewer, 116.3974, 39.9093, 1000); // 飞到北京
    // @ts-ignore
    Engine.Camera.zoomTo(viewer, someEntity); // 缩放到实体
    
    // 3. 使用事件模块
    const clickHandler = Engine.Event.onClick(viewer, (position) => {
        console.log('点击位置:', position);
        
        // 在点击位置添加点
        Engine.Feature.addPoint(viewer, position, {
            color: 'RED',
            description: '点击添加的点'
        });
    });
    
    // 4. 使用要素模块
    const point = Engine.Feature.addPoint(viewer, Engine.Public.degToCartesian(116.3974, 39.9093), {
        color: 'BLUE',
        description: '天安门'
    });
    
    // 5. 使用标签模块
    const label = Engine.Label.addLabel(viewer, Engine.Public.degToCartesian(116.3974, 39.9093), '北京', {
        font: '20pt Arial',
        fillColor: 'WHITE'
    });
    
    // 6. 使用测量模块
    const measurement = Engine.Measurement.startDistanceMeasurement(viewer);
    // 用户点击两个点后
    // const distance = Engine.Measurement.calculateDistance(measurement.positions);
    
    // 7. 使用模型模块
    const model = Engine.Models.loadModel(viewer, '/models/building.glb', Engine.Public.degToCartesian(116.3974, 39.9093));
    
    // 8. 使用特效模块
    Engine.Effect.addGlow(viewer, point);
    
    // 9. 使用公共工具
    const cameraPos = Engine.Public.getCameraPosition(viewer);
    console.log('相机位置:', cameraPos);
}

// 清理示例
function cleanupExample(viewer: any, handlers: any[]) {
    // 移除所有事件处理器
    handlers.forEach(handler => {
        Engine.Event.removeEventHandler(handler);
    });
    
    // 清空实体
    viewer.entities.removeAll();
}

export { exampleUsage, cleanupExample };