<template>
<uni-shadow-root class="vant-lib-overlay-index"><van-transition :show="show" custom-class="van-overlay" :custom-style="'z-index: '+(zIndex)+'; '+(mask ? 'background-color: rgba(0, 0, 0, .7);' : '')+'; '+(customStyle)" :duration="duration" @click.native="onClick" @touchmove.native.stop.prevent="noop"></van-transition></uni-shadow-root>
</template>

<script>
import VanTransition from '../transition/index.vue'
global['__wxVueOptions'] = {components:{'van-transition': VanTransition}}

global['__wxRoute'] = 'vant/lib/overlay/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    props: {
        show: Boolean,
        mask: Boolean,
        customStyle: String,
        duration: {
            type: [Number, Object],
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick: function () {
            this.$emit('click');
        },
        // for prevent touchmove
        noop: function () { }
    }
});
export default global['__wxComponents']['vant/lib/overlay/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-overlay{position:fixed;top:0;right:0;bottom:0;left:0}
</style>