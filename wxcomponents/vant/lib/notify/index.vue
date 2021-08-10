<template>
<uni-shadow-root class="vant-lib-notify-index"><van-transition name="slide-down" :show="show" custom-class="van-notify" :custom-style="'background-color:'+(backgroundColor)+'; color: '+(color)+'; z-index: '+(zIndex)+';'">
  <view v-if="safeAreaInsetTop" class="van-notify__safe-top" :style="'padding-top: '+(statusBarHeight)+'px'"></view>
  {{ text }}
</van-transition></uni-shadow-root>
</template>

<script>
import VanTransition from '../transition/index.vue'
global['__wxVueOptions'] = {components:{'van-transition': VanTransition}}

global['__wxRoute'] = 'vant/lib/notify/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
var safe_area_1 = require("../mixins/safe-area");
component_1.VantComponent({
    mixins: [safe_area_1.safeArea()],
    props: {
        text: String,
        color: {
            type: String,
            value: '#fff'
        },
        backgroundColor: {
            type: String,
            value: color_1.RED
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
        }
    },
    methods: {
        show: function () {
            var _this = this;
            var duration = this.data.duration;
            clearTimeout(this.timer);
            this.set({
                show: true
            });
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function () {
            clearTimeout(this.timer);
            this.set({
                show: false
            });
        }
    }
});
export default global['__wxComponents']['vant/lib/notify/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-notify{position:fixed;top:0;width:100%;padding:6px 15px;font-size:14px;line-height:20px;text-align:center;word-break:break-all;box-sizing:border-box}.van-notify__safe-top{height:44px}
</style>