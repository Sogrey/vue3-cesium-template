# vue3-cesium-template

基于 Vue3 + Cesium 的三维地球应用模板

## 项目状态

✅ **项目开发完成**
- Vue 3.5.22 + TypeScript + Vite 7.1.11
- Cesium 1.134.1 集成
- 完整的模块化架构
- Vue 3 Composition API 支持
- 所有核心功能实现

## 技术栈

- **前端框架**: Vue 3.5.22
- **三维引擎**: Cesium 1.134.1
- **构建工具**: Vite 7.1.11
- **开发语言**: TypeScript
- **包管理器**: pnpm

## 项目结构

```
cesium-vue3/
├── src/
│   ├── cesium/          # Cesium 相关模块
│   │   ├── camera.ts    # 相机控制
│   │   ├── effect.ts    # 特效
│   │   ├── event.ts     # 事件处理
│   │   ├── feature.ts   # 要素管理
│   │   ├── index.ts     # 主入口
│   │   ├── label.ts     # 标签
│   │   ├── measurement.ts # 测量工具
│   │   ├── models.ts    # 模型加载
│   │   ├── plugin.ts    # 插件
│   │   └── public.ts    # 公共方法
│   ├── components/      # Vue 组件
│   ├── configs/         # 配置文件
│   └── utils/           # 工具函数
├── public/              # 静态资源
└── package.json        # 项目配置
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建项目
pnpm build

# 预览构建结果
pnpm preview

# 类型检查
pnpm type-check
```

## 使用示例

```typescript
import Engine from '@/cesiumEngine';

// 初始化 Cesium 场景
const viewer = Engine.init('cesiumContainer');

// 使用相机控制
Engine.Camera.flyTo(viewer, 116.3974, 39.9093, 1000);

// 添加标注点
const position = Engine.Public.degToCartesian(116.3974, 39.9093);
Engine.Feature.addPoint(viewer, position, { color: 'red' });
```

## 功能特性

- [x] 基础三维地球展示
- [x] 相机控制与视角切换
- [x] 图层管理（OSM Buildings）
- [x] 测量工具
- [x] 模型加载
- [x] 标签标注
- [x] 特效功能
- [x] 事件处理系统
- [x] 插件机制
- [x] Vue 3 Composition API 集成

## 环境要求

- Node.js: ^20.19.0 || >=22.12.0
- pnpm: 最新版本
