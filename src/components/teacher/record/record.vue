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
                        title: '姓名',
                        key: 'name'
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
                        name: '王小明',
                        score: 18,
                        time: '9月13日 22点01分'
                    },
                    {
                        name: '张小刚',
                        score: 25,
                        time: '9月11日 2点01分'
                    },
                    {
                        name: '李小红',
                        score: 30,
                        time: '9月1日 20点01分'
                    },
                    {
                        name: '周小伟',
                        score: 26,
                        time: '9月21日 22点21分'
                    }
                ]
            }
        }
    }

</script>
 
