import { Viewer, ScreenSpaceEventHandler, ScreenSpaceEventType } from 'cesium';

export const onClick = (viewer: Viewer, callback: (position: any) => void) => {
    const handler = new ScreenSpaceEventHandler(viewer.canvas);
    handler.setInputAction((event: any) => {
        const position = viewer.camera.pickEllipsoid(event.position);
        callback(position);
    }, ScreenSpaceEventType.LEFT_CLICK);
    return handler;
};

export const onHover = (viewer: Viewer, callback: (position: any) => void) => {
    const handler = new ScreenSpaceEventHandler(viewer.canvas);
    handler.setInputAction((event: any) => {
        const position = viewer.camera.pickEllipsoid(event.endPosition);
        callback(position);
    }, ScreenSpaceEventType.MOUSE_MOVE);
    return handler;
};

export const removeEventHandler = (handler: ScreenSpaceEventHandler) => {
    handler.destroy();
};