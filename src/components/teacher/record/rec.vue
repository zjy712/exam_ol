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
         <Table border :columns="columns7" :data="data6"></Table>
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
                columns7: [
                    {
                        title: '题目',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '完成率',
                        key: 'age'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({
                                                path:'/teacher/record/rec',
                                            })
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'C语言第一次考试',
                        age: '56/60',
                        time: '9月1日 22点01分'
                    },
                    {
                        name: '数据结构第一次考试',
                        age: '57/60',
                        time: '9月1日 22点01分'
                    },
                    {
                        name: 'C语言：指针练习题',
                        age: '56/60',
                        time: '8月8日 12点41分'
                    },
                    {
                        name: 'Java面向对象',
                        age: '56/60',
                        time: '9月15日 21点31分'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].time}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
 
