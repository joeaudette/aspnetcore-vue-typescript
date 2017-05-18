/* global describe, it, expect */

import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component'
//import Hello from '../../ClientApp/components/Hello.vue'
var Hello = require('./../../ClientApp/components/Hello.vue')

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><hello></hello></div>',
      components: { Hello }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).toBe('Hello World!')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
