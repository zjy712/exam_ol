<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 150px;
        height: 30px;
        font-size: 20px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 25px;
        font-family: "微软雅黑";
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .box{
        height: 300px;
        width: 200px;
        line-height:300px;
        text-align: center;
        background-color: #e9eaec;
        border-radius: 20%;
        position: absolute;  
            left: 30%;  
            top: 30%;  
        border: 1px solid #dddee1
    }
    .hr{
        position: absolute;  
            left: 60%;  
            top: 30%;  
    }

    @media screen and (max-width: 768px) {
        .box{
            width: 100%;
            height: 50px;
            line-height: 50px;
            position:absolute;
            border-radius: 0px;
            left:0px;
        }
        .hr{
            position: absolute;  
            left: 0%;  
            top: 40%;
        }
    }

</style>
<template>
    <div class="layout">

        <div class="layout-header">
            <div class="layout-logo">在线考试系统</div>
        </div>
        <div style="height: 500px">
            
         <Table stripe :columns="columns1" :data="data1"></Table>
        </div>
        <div class="layout-copy">
            &copy; Rookie
        </div>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title:'题目',
                        key: 'title'
                    },
                    {
                        title: '得分',
                        key: 'score'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    }
                ],
                data1: [
                    {
                        title: 'C语言第一次考试',
                        score: 89,
                        time: '9月1日 22点01分'
                    },
                    {
                        title: '数据结构第一次考试',
                        score: 93,
                        time: '9月1日 22点01分'
                    },
                    {
                        title: 'C语言：指针练习题',
                        score: 88,
                        time: '8月8日 12点41分'
                    },
                    {
                        title: 'Java面向对象 ',
                        score: 26,
                        time: '9月15日 21点31分'
                    }
                ]
            }
        }
    }

</script>
 
