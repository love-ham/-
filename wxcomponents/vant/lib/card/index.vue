<template>
<uni-shadow-root class="vant-lib-card-index"><view class="custom-class van-card">
  <view :class="utils.bem('card__header', { center: centered })">
    <view class="van-card__thumb" @click="onClickThumb">
      <image v-if="thumb" :src="thumb" :mode="thumbMode" :lazy-load="lazyLoad" class="van-card__img thumb-class"></image>
      <slot name="thumb"></slot>
      <van-tag v-if="tag" mark type="danger" custom-class="van-card__tag">
        {{ tag }}
      </van-tag>
    </view>

    <view class="van-card__content">
      <view v-if="title" class="van-card__title title-class">{{ title }}</view>
      <slot v-else name="title"></slot>

      <view v-if="desc" class="van-card__desc desc-class">{{ desc }}</view>
      <slot v-else name="desc"></slot>

      <slot name="tags"></slot>

      <view class="van-card__bottom">
        <view v-if="price || price === 0" class="van-card__price price-class">{{ currency }} {{ price }}</view>
        <view v-if="originPrice || originPrice === 0" class="van-card__origin-price origin-price-class">{{ currency }} {{ originPrice }}</view>
        <view v-if="num" class="van-card__num num-class">x {{ num }}</view>
        <slot name="bottom"></slot>
      </view>
    </view>
  </view>

  <view class="van-card__footer">
    <slot name="footer"></slot>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanTag from '../tag/index.vue'
global['__wxVueOptions'] = {components:{'van-tag': VanTag}}

global['__wxRoute'] = 'vant/lib/card/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("../mixins/link");
var component_1 = require("../common/component");
component_1.VantComponent({
    classes: [
        'num-class',
        'desc-class',
        'thumb-class',
        'title-class',
        'price-class',
        'origin-price-class',
    ],
    mixins: [link_1.link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        onClickThumb: function () {
            this.jumpLink('thumbLink');
        }
    }
});
export default global['__wxComponents']['vant/lib/card/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-card{position:relative;padding:5px 15px;font-size:12px;color:#333;background-color:#fafafa;box-sizing:border-box}.van-card__header{display:-webkit-flex;display:flex}.van-card__header--center{-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}.van-card__thumb{position:relative;width:90px;height:90px;margin-right:10px;-webkit-flex:none;flex:none}.van-card__thumb:empty{display:none}.van-card__img{width:100%;height:100%}.van-card__content{position:relative;min-width:0;-webkit-flex:1;flex:1}.van-card__desc,.van-card__title{word-break:break-all}.van-card__title{font-weight:700;line-height:16px}.van-card__desc{color:#7d7e80}.van-card__bottom,.van-card__desc{line-height:20px}.van-card__price{display:inline-block;font-weight:700;color:#f44}.van-card__origin-price{display:inline-block;margin-left:5px;font-size:10px;color:#7d7e80;text-decoration:line-through}.van-card__num{float:right}.van-card__tag{position:absolute;top:2px;left:0}.van-card__footer{width:100%;text-align:right;-webkit-flex:none;flex:none}
</style>