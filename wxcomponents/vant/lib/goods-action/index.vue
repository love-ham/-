<template>
<uni-shadow-root class="vant-lib-goods-action-index"><view :class="'custom-class '+(utils.bem('goods-action', { safe: isIPhoneX && safeAreaInsetBottom }))">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = 'vant/lib/goods-action/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var safe_area_1 = require("../mixins/safe-area");
component_1.VantComponent({
    mixins: [safe_area_1.safeArea()]
});
export default global['__wxComponents']['vant/lib/goods-action/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-flex;display:flex;background-color:#fff}.van-goods-action--safe{padding-bottom:34px}
</style>