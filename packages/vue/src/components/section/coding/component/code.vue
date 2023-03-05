<template>
  <div class="code-box flex-1 overflow-x-auto overflow-y-hidden overflow-x-auto overflow-y-hidden">
    <!--註解-->
    <p data-show="3" data-g>/**</p>
    <p data-show="3" data-g>
      <i>* @desc</i>
      <i data-l v-t="'section.coding.desc'" />
    </p>
    <p data-show="3" data-g>
      <i>* @param {string} password</i>
      <i data-l v-t="'section.coding.param'" />
    </p>
    <p data-show="3" data-g>
      <i>* @return {number}</i>
      <i data-l v-t="'section.coding.return'" />
    </p>
    <p data-show="3" data-g>*/</p>
    <!--函式-->
    <p>
      <i data-export data-r />
      <i data-function data-r />
      <i data-y>getPasswordStrength</i>
      <i data-r>(password:</i>
      <i data-string />
      <i data-r>):</i>
      <i data-number data-r />
      <i>{</i>
    </p>
    <!--長度 < 8-->
    <p data-show="3">
      <b data-s="1" />
      <i data-mark v-t="'section.coding.comment[0]'" />
    </p>
    <p data-hide="4">
      <b data-s="1" />
      <i data-let data-r />
      <i>strength</i>
      <i data-eq data-b>0</i>
    </p>
    <p>
      <b data-s="1" />
      <i data-if data-r />
      <i>(!password || password</i>
      <i data-length>.</i>
      <i data-lt data-b>8</i>
      <i data-r>)</i>
      <i data-hide="2">{</i>
      <i data-show="2" data-return data-r />
      <i data-hide="4" data-show="2">strength</i>
      <i data-show="4" data-b>0</i>
    </p>
    <p data-hide="2">
      <b data-s="2" />
      <i data-return data-r />
      <i>strength</i>
    </p>
    <p data-hide="2">
      <b data-s="1" />
      <i>}</i>
    </p>
    <!--0-9-->
    <p data-hide="4" data-show="3">
      <b data-s="1" />
      <i data-mark v-t="'section.coding.comment[1]'" />
    </p>
    <p data-hide="4">
      <b data-s="1" />
      <i data-if data-r />
      <i>(</i>
      <i data-g>/[0-9]/</i>
      <i data-test>.</i>
      <i data-r>(password))</i>
      <i data-hide="2">{</i>
      <i data-show="2">strength</i>
      <i data-show="2" data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="2" />
      <i>strength</i>
      <i data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="1" />
      <i>}</i>
    </p>
    <!--a-z-->
    <p data-hide="4" data-show="3">
      <b data-s="1" />
      <i data-mark v-t="'section.coding.comment[2]'" />
    </p>
    <p data-hide="4">
      <b data-s="1" />
      <i data-if data-r />
      <i>(</i>
      <i data-g>/[a-z]/</i>
      <i data-test>.</i>
      <i data-r>(password))</i>
      <i data-hide="2">{</i>
      <i data-show="2">strength</i>
      <i data-show="2" data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="2" />
      <i>strength</i>
      <i data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="1" />
      <i>}</i>
    </p>
    <!--A-Z-->
    <p data-hide="4" data-show="3">
      <b data-s="1" />
      <i data-mark v-t="'section.coding.comment[3]'" />
    </p>
    <p data-hide="4">
      <b data-s="1" />
      <i data-if data-r />
      <i>(</i>
      <i data-g>/[A-Z]/</i>
      <i data-test>.</i>
      <i data-r>(password))</i>
      <i data-hide="2">{</i>
      <i data-show="2">strength</i>
      <i data-show="2" data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="2" />
      <i>strength</i>
      <i data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="1" />
      <i>}</i>
    </p>
    <!--^\w0-9-->
    <p data-hide="4" data-show="3">
      <b data-s="1" />
      <i data-mark v-t="'section.coding.comment[4]'" />
    </p>
    <p data-hide="4">
      <b data-s="1" />
      <i data-if data-r />
      <i>(</i>
      <i data-g>/[^\w0-9]/</i>
      <i data-test>.</i>
      <i data-r>(password))</i>
      <i data-hide="2">{</i>
      <i data-show="2">strength</i>
      <i data-show="2" data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="2" />
      <i>strength</i>
      <i data-aeq data-b>1</i>
    </p>
    <p data-hide="2">
      <b data-s="1" />
      <i>}</i>
    </p>
    <!--return strength-->
    <p data-hide="4">
      <b data-s="1" />
      <i data-return data-r />
      <i>strength</i>
    </p>
    <!--最佳-->
    <p data-show="4">
      <b data-s="1" />
      <i data-mark v-t="'section.coding.comment[5]'" />
    </p>
    <p data-show="4">
      <b data-s="1" />
      <i data-return data-r />
      <i>[</i>
      <i data-g data-co>/[0-9]/</i>
      <i data-g data-co>/[a-z]/</i>
      <i data-g data-co>/[A-Z]/</i>
      <i data-g>/[^\w0-9]/</i>
      <i>]</i>
      <i data-filter>.</i>
      <i>(reg => reg</i>
      <i data-test>.</i>
      <i>(password))</i>
      <i data-length>.</i>
    </p>
    <p>}</p>
  </div>
</template>

<style lang="scss">
@import '@about-me-mix/common/gsap-coding';
</style>
