<template>
<uni-shadow-root class="vant-lib-progress-index"><view class="van-progress custom-class">
  <view class="van-progress__portion" :style="'width: '+(percentage)+'%; background: '+(inactive ? '#cacaca' : color)">
    <view v-if="showPivot && getters.text(pivotText, percentage)" :style="'color: '+(textColor)+'; background: '+(pivotColor ? pivotColor : inactive ? '#cacaca' : color)" class="van-progress__pivot">
      {{ getters.text(pivotText, percentage) }}
    </view>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="getters"></wxs>
<script>

global['__wxRoute'] = 'vant/lib/progress/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
component_1.VantComponent({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: color_1.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        }
    }
});
export default global['__wxComponents']['vant/lib/progress/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-progress{position:relative;height:4px;background:#e5e5e5;border-radius:4px}.van-progress__portion{position:absolute;left:0;height:100%;border-radius:inherit}.van-progress__pivot{position:absolute;top:50%;right:0;min-width:2em;padding:0 5px;font-size:10px;line-height:1.6;text-align:center;word-break:keep-all;background-color:#e5e5e5;border-radius:1em;-webkit-transform:translateY(-50%);transform:translateY(-50%);box-sizing:border-box}
</style>