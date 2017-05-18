<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count: <strong>{{ currentcount }}</strong></p>

        <button @click="incrementCounter">Increment</button>
    </div>
</template>

<script lang="ts">
// the downside of the single .vue file approach
// is that while we do get color coding from vetur vscode plugin,
// we get no intellisnse for js or ts unless we use separate files
// in vs2017 we even get intellisense errors that are not true
// so vscode is a little better experience
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 5;

    incrementCounter() {
        this.currentcount++;
    }
}

</script>
