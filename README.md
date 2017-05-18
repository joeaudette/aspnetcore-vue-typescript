# aspnetcore-vue-typescript
some boilerplate for using vue, typescript, and webpack with asp,net core

This is based on [the asp.net spa template for Vue](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/), but changed to suit my tastes.

It took some experimenting to get things working as I wanted so thought I should put this in a repository for reference

### Specific Changes 

* using ts-loader instead of awesome-ts-loader
* using .vue instead of .vue.html
* updated webpack and other npm dependencies to the latest versions

## Observations about Tooling

I really wanted to use the single .vue file approach with the template, script, and css all in one file per component, whereas the original template split things into separate ,ts and .css files. I managed to get it working with code like this:

    <template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count: <strong>{{ currentcount }}</strong></p>

        <button @click="incrementCounter">Increment</button>
    </div>
    </template>
    <script lang="ts">

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
	<style>
	
	</style>
	
but the downside to doing it this way, is that in VSCode you do not get typescript intellisense inside the script element which you do get if you use a separate file. Even worse in VS 2017 you get intellsiense errors that are not true, ie it builds, it works but intellisense tells you there are errors. 
Using [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) in VSCode or [VuePack](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.VuejsPack-18329) in VS 2017, you do get nice color coding/syntax highlighting but still no intellisense on the code unless you use separate .ts files. So my advice is for non trivial components use separate files, for small components you can get away with the single file approach. I do hope these tooling issues can be addressed upstream at some point.

## TO DO:

* I would like to add client side testing to this sample
* I would like to add vuex to this sample


