# 智慧社区项目
该项目包含五个小程序工程：智慧街道、智慧园区、掌上物业、智慧业主、企业服务平台
均使用Hbuilder打包

## 小程序项目目录结构
┌─common              公有的css资源
│─components          符合vue组件规范的uni-app组件目录
│  └─comp-a.vue       可复用的a组件
├─constants           存放常量文件
├─node_modules        存放模块安装包文件（可选）
├─page                分包页面文件存放的目录
│  ├─smartEnterprise  企业服务平台分包
│  ├─smartOwner       智慧业主分包
│  ├─smartPark        智慧园区分包
│  ├─smartProperty    掌上物业分包
│  └─smartStreet      智慧街道分包
├─pages               业务页面文件存放的目录
│  ├─smartEnterprise  企业服务平台
│     ├─index
│     │  └─index.vue  index页面
│     ├─manifest.json 企业服务平台配置文件
│     └─package.json  企业服务平台配置文件
│  ├─smartOwner       智慧业主
│     ├─index
│     │  └─index.vue  index页面
│     ├─manifest.json 智慧业主配置文件
│     └─package.json  智慧业主配置文件
│  ├─smartPark        智慧园区
│     ├─index
│     │  └─index.vue  index页面
│     ├─manifest.json 智慧园区配置文件
│     └─package.json  智慧园区配置文件
│  ├─smartProperty    掌上物业
│     ├─index
│     │  └─index.vue  index页面
│     ├─manifest.json 掌上物业配置文件
│     └─package.json  掌上物业配置文件
│  └─smartStreet      智慧街道
│     ├─index
│     │  └─index.vue  index页面
│     ├─manifest.json 智慧街道配置文件
│     └─package.json  智慧街道配置文件
├─static              存放应用引用的本地静态资源如图片、视频等，注意：静态资源只能存放于此
├─uni_modules         存放[uni_module](/uni_modules)规范的插件
├─unpackage           开发使用，不会被打包
├─utils               存放工具函数
├─wxcomponents        存放小程序组件
├─main.js             Vue初始化入口文件
├─App.vue             应用配置，用来配置App全局样式以及监听应用生命周期
├─package-lock.json   npm模块锁版本管理文件（可选）
├─package.json        npm模块管理文件（可选）
├─run.shell           运行小程序前的脚本文件
└─README.md           项目的说明文档，至少要说明如何运行项目

## 项目运行
* 运行shell脚本，将各自小程序的配置文件复制到跟目录下，需要输入待复制的两个文件目录
其中`pages.json`是配置页面路由、导航条、选项卡等页面类信息，
`manifest.json`是配置应用名称、appid、logo、版本等打包信息
 
 `./start.shell  ./pages/smartOwner/pages.json ./pages/smartOwner/manifest.json`
 
* 在HBuilderX中打开项目点击工具栏中的`运行->运行到小程序模拟器`即可启动项目

