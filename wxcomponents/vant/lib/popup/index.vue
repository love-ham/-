<template>
<uni-shadow-root class="vant-lib-popup-index"><van-overlay v-if="overlay" mask :show="show" :z-index="zIndex" :custom-style="overlayStyle" :duration="duration" @click="onClickOverlay"></van-overlay>
<view v-if="inited" :class="'custom-class '+(classes)+' '+(utils.bem('popup', [position, { safe: isIPhoneX && safeAreaInsetBottom }]))" :style="'z-index: '+(zIndex)+'; -webkit-transition-duration:'+(currentDuration)+'ms; transition-duration:'+(currentDuration)+'ms; '+(display ? '' : 'display: none;')+' '+(customStyle)" @transitionend="onTransitionEnd">
  <view v-if="safeAreaInsetTop" class="van-popup__safe-top" :style="'padding-top: '+(statusBarHeight)+'px;'"></view>
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanOverlay from '../overlay/index.vue'
global['__wxVueOptions'] = {components:{'van-overlay': VanOverlay}}

global['__wxRoute'] = 'vant/lib/popup/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var transition_1 = require("../mixins/transition");
var safe_area_1 = require("../mixins/safe-area");
component_1.VantComponent({
    classes: [
        'enter-class',
        'enter-active-class',
        'enter-to-class',
        'leave-class',
        'leave-active-class',
        'leave-to-class'
    ],
    mixins: [transition_1.transition(false), safe_area_1.safeArea()],
    props: {
        transition: {
            type: String,
            observer: 'observeClass'
        },
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        }
    },
    created: function () {
        this.observeClass();
    },
    methods: {
        onClickOverlay: function () {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function () {
            var _a = this.data, transition = _a.transition, position = _a.position;
            var updateData = {
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
            this.set(updateData);
        }
    }
});
export default global['__wxComponents']['vant/lib/popup/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-popup{position:fixed;top:50%;left:50%;max-height:100%;overflow-y:auto;background-color:#fff;box-sizing:border-box;-webkit-animation:ease both;animation:ease both;-webkit-overflow-scrolling:touch;transition-timing-function:ease}.van-popup--center{-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--top{top:0;right:auto;bottom:auto;left:50%;width:100%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.van-popup--right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--bottom{top:auto;right:auto;bottom:0;left:50%;width:100%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.van-popup--left{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--bottom.van-popup--safe{padding-bottom:34px}.van-popup--left .van-popup__safe-top,.van-popup--right .van-popup__safe-top,.van-popup--top .van-popup__safe-top{height:44px}.van-popup--bottom .van-popup__safe-top,.van-popup--center .van-popup__safe-top{padding-top:0!important}.van-scale-enter-active,.van-scale-leave-active{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.van-scale-enter,.van-scale-leave-to{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-fade-enter-active,.van-fade-leave-active{transition-property:opacity}.van-fade-enter,.van-fade-leave-to{opacity:0}.van-center-enter-active,.van-center-leave-active{transition-property:opacity}.van-center-enter,.van-center-leave-to{opacity:0}.van-bottom-enter-active,.van-bottom-leave-active,.van-left-enter-active,.van-left-leave-active,.van-right-enter-active,.van-right-leave-active,.van-top-enter-active,.van-top-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.van-bottom-enter,.van-bottom-leave-to{-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.van-top-enter,.van-top-leave-to{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.van-left-enter,.van-left-leave-to{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-right-enter,.van-right-leave-to{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}
</style>