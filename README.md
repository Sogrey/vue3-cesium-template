# vue3-cesium-template

基于 Vue3 + Cesium 的三维地球应用模板

## 项目状态

✅ **项目已初始化完成**
- Vue 3.5.22 + TypeScript + Vite 7.1.11
- Cesium 1.134.1 集成
- 完整的开发环境配置

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

## 开发命令

```bash
# 开发模式
pnpm dev

# 构建项目
pnpm build

# 预览构建结果
pnpm preview

# 类型检查
pnpm type-check
```

## 功能特性

- [ ] 基础三维地球展示
- [ ] 相机控制与视角切换
- [ ] 图层管理
- [ ] 测量工具
- [ ] 模型加载
- [ ] 标签标注
- [ ] 特效功能

## 环境要求

- Node.js: ^20.19.0 || >=22.12.0
- pnpm: 最新版本
