import { Viewer, Cartesian3, Cartesian2, ScreenSpaceEventHandler, ScreenSpaceEventType, Color, ConstantProperty } from 'cesium';

export const startDistanceMeasurement = (viewer: Viewer) => {
    let positions: Cartesian3[] = [];
    let polyline: any = null;

    const handler = new ScreenSpaceEventHandler(viewer.canvas);

    handler.setInputAction((event: any) => {
        const position = viewer.camera.pickEllipsoid(event.position);
        if (position) {
            positions.push(position);

            if (positions.length === 1) {
                // 第一个点，创建临时点
                viewer.entities.add({
                    position: position,
                    point: { pixelSize: 10, color: Color.RED }
                });
            } else if (positions.length >= 2) {
                // 更新折线
                if (polyline) {
                    viewer.entities.remove(polyline);
                }
                polyline = viewer.entities.add({
                    polyline: {
                        positions: positions,
                        width: new ConstantProperty(3),
                        material: Color.YELLOW
                    }
                });
            }
        }
    }, ScreenSpaceEventType.LEFT_CLICK);

    return {
        handler,
        positions,
        finish: () => {
            handler.destroy();
            return positions;
        }
    };
};

export const calculateDistance = (positions: Cartesian3[]): number => {
    let totalDistance = 0;

    if (positions.length < 2) {
        return 0;
    }

    for (let i = 1; i < positions.length; i++) {
        const prevPos = positions[i - 1];
        const currPos = positions[i];
        if (prevPos && currPos) {
            totalDistance += Cartesian3.distance(prevPos, currPos);
        }
    }
    return totalDistance;
};