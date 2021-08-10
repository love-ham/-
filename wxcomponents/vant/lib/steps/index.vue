<template>
<uni-shadow-root class="vant-lib-steps-index"><view :class="'custom-class '+(utils.bem('steps', [direction]))">
  <view class="van-step__wrapper">
    <view v-for="(item,index) in (steps)" :key="item.index" :class="(utils.bem('step', [direction, status(index, active)]))+' van-hairline'">
      <view class="van-step__title" :style="index === active ? 'color: ' + activeColor : ''">
        <view>{{ item.text }}</view>
        <view>{{ item.desc }}</view>
      </view>
      <view class="van-step__circle-container">
        <view class="van-step__circle" v-if="index !== active" :style="index < active ? 'background-color: ' + activeColor : ''"></view>
        <van-icon v-else name="checked" :color="activeColor" custom-class="van-step__active"></van-icon>
      </view>
      <view v-if="index !== steps.length - 1" class="van-step__line" :style="index < active ? 'background-color: ' + activeColor : ''"></view>
    </view>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs><wxs module="status" src="./index-status.wxs"></wxs>
<script>
import VanIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'van-icon': VanIcon}}

global['__wxRoute'] = 'vant/lib/steps/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
component_1.VantComponent({
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: 'horizontal'
        },
        activeColor: {
            type: String,
            value: color_1.GREEN
        }
    }
});
export default global['__wxComponents']['vant/lib/steps/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-steps{overflow:hidden;background-color:#fff}.van-steps--horizontal{padding:10px}.van-steps--horizontal .van-step__wrapper{position:relative;display:-webkit-flex;display:flex;overflow:hidden}.van-steps--vertical{padding-left:10px}.van-steps--vertical .van-step__wrapper{padding:0 0 0 20px}.van-step{position:relative;-webkit-flex:1;flex:1;font-size:14px;color:#999}.van-step--finish{color:#333}.van-step__circle{width:5px;height:5px;background-color:#999;border-radius:50%}.van-step--horizontal{padding-bottom:14px}.van-step--horizontal:first-child .van-step__title{-webkit-transform:none;transform:none}.van-step--horizontal:first-child .van-step__circle-container{padding:0 8px 0 0;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}.van-step--horizontal:last-child{position:absolute;right:0;width:auto}.van-step--horizontal:last-child .van-step__title{text-align:right;-webkit-transform:none;transform:none}.van-step--horizontal:last-child .van-step__circle-container{right:0;padding:0 0 0 8px;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}.van-step--horizontal .van-step__circle-container{position:absolute;bottom:6px;z-index:1;padding:0 8px;background-color:#fff;-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0)}.van-step--horizontal .van-step__title{display:inline-block;font-size:12px;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.van-step--horizontal .van-step__line{position:absolute;right:0;bottom:6px;left:0;height:1px;background-color:#eee;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}.van-step--horizontal.van-step--process{color:#333}.van-step--horizontal.van-step--process .van-step__active{display:block;font-size:12px;line-height:1}.van-step--vertical{padding:10px 10px 10px 0;font-size:14px;line-height:18px}.van-step--vertical:after{border-bottom-width:1px}.van-step--vertical:last-child:after{border-bottom-width:none}.van-step--vertical:first-child:before{position:absolute;top:0;left:-15px;z-index:1;width:1px;height:20px;background-color:#fff;content:""}.van-step--vertical .van-step__active,.van-step--vertical .van-step__circle,.van-step--vertical .van-step__line{position:absolute;top:19px;left:-14px;z-index:2;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-step--vertical .van-step__active{font-size:12px;line-height:1}.van-step--vertical .van-step__line{z-index:1;width:1px;height:100%;background-color:#eee;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}
</style>