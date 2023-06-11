<template>
    <div class="content">
        <div>
            <h1>{{word}}</h1>
            <br>
            <!-- <form action="" v-on:submit.prevent="checkAnswer"> -->
                <input type="text" v-model="value" @keyup.enter="checkAnswer">
                <button @click="checkAnswer">확인</button>
            <!-- </form> -->
            <br>
            <h3>{{result}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            word:'대우학생',
            value:'',
            result:'결과는?'
        }
    },
    methods: {
        checkAnswer(){
            if(this.value.length < 2){
                this.result = '2글자 이상!'
            }else{
                if(this.word[this.word.length-1]== this.value[0]){
                    this.result='정답입니다.'
                    this.word=this.value
                } else {
                    this.result='땡! 다시 입력'
                } 
                this.value=''
            }
        }
    },
}
</script>
<style>
    input{
        height: 50px;
        font-size: 20px;
        padding: 4px;
        border-radius: 10px;
    }
    input:focus{
        border: 5px solid skyblue;
        outline:none;
    }
</style>