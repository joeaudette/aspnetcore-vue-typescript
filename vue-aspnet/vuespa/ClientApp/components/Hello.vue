<template>
<div class="hello">
  <h1>{{ msg }}</h1>
</div>
</template>

<script lang="ts">

import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component'

@Component({
  
})
export default class Hello extends Vue {
  data(): { msg: string } {
    return {
      msg: 'Hello World!'
    }
  }
}

</script>
