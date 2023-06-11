<template >
    <div class="content">
        <h1>{{chageColor}}</h1>
        <br>
        <button @click="change">change</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            chageColor : `#${Math.round(Math.random() * 0xffffff).toString(16)}`
        }
    },
    methods: {
            change(){
                this.chageColor=`#${Math.round(Math.random() * 0xffffff).toString(16)}`
                document.querySelector('.content').style.backgroundColor=this.chageColor
                document.querySelector('button').style.color=this.chageColor
            }
        }
}
</script>
<style >
    
</style>