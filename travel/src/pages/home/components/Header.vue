<template>
<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入</div>
    <div class="header-right">城市<span class="iconfont">&#xe62d;</span></div>
</div>
</template>

<script>
export default {
    name: 'HomeHeader'   
}

</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
// 1rem =html font-size =50px
    .header
        display:flex 
        height:0.86rem
        background :$bgColor
        color :#fff
        
    .header-left
        
        margin:auto
        margin-left :.2rem
        width 0.64rem
        float:left
        .back-icon：
            text-align :center
            font-size .4rem
    .header-right
        width :1.24rem
        float:right
        margin:auto
        text-align:center
    .header-input
        flex:1  
        padding-left :.2rem  
        line-height :.64rem
        margin-top :.12rem
        height :.64rem
        margin-left :.2rem
        background :#fff
        border-radius : .1rem
        color : #ddd
    

</style>