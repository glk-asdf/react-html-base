# react-base

## 创建 github 项目，通过 webstorm 使用

1. github 创建新项目
2. 本地新建文件夹
3. git init
4. add =》commit =》push（设置 origin ）

## jsx

> 在 javascript 中直接写标签，这种类似 xml 的写法被称为 jsx

* 编写 jsx 需要在 script 标签添加 type="text/babel"

* jsx 是完全可选的

### jsx 预处理器

* 安装
    1. npm install -y
    2. npm install babel-cli@6 babel-preset-react-app@3
    
* 监测 src 文件夹，生成转义文件至 html/src (npx 是 npm 附带的 package 运行工具)
    1. npx babel --watch src --out-dir html/src presets react-app/prod

## React 和 ReactDOM

> 使用 React 创建组件，使用 ReactDOM 将 React 实例对象添加进 dom 容器

## 收获

* bable 似乎只能在启动服务的状态下使用
