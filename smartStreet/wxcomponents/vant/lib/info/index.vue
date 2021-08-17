<template>
<uni-shadow-root class="vant-lib-info-index"><view v-if="info !== null && info !== ''" class="custom-class van-info" :style="customStyle">{{ info }}</view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'vant/lib/info/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    props: {
        info: null,
        customStyle: String
    }
});
export default global['__wxComponents']['vant/lib/info/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-info{position:absolute;top:-8px;right:0;min-width:16px;padding:0 3px;font-family:PingFang SC,Helvetica Neue,Arial,sans-serif;font-size:12px;font-weight:500;line-height:14px;color:#fff;text-align:center;white-space:nowrap;background-color:#f44;border:1px solid #fff;border-radius:16px;-webkit-transform:translateX(50%);transform:translateX(50%);box-sizing:border-box;-webkit-transform-origin:100%;transform-origin:100%}
</style>