<style scoped>

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
       
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
    
      .login{
            background-color:#f4f4f4;
            -ms-transform: translate3d(-50%, -50%, 0);  
            -webkit-transform: translate3d(-50%, -50%, 0);  
            transform: translate3d(-50%, -50%, 0);  

            text-align: center;  
            position: absolute;  
            left: 50%;  
            top: 50%;  
           
        }
        .method-1-wrap{
            position: relative;
            border:3px solid #fff;
            padding: 20px;
            box-sizing: border-box;
            }
        .method-1-wrap .title{
            position: absolute;
            top: -1em;
            left: 10%;
            line-height: 2em;
            padding: 0 1em;
            background-color: #f4f4f4;
        }
       .layout-main{
           height: 500px;
       }
  
    
  
</style>
<template>
    <div class="layout">

        <div class="layout-header">
            <div class="layout-logo">在线考试系统</div>
        </div>
        <div class="layout-main">
            <div class="login">
                <div class="method-1-wrap wrap">
                    <span class="title"><h3>用户登录</h3></span>
                        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem></br>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                    </Form>

                        <RadioGroup v-model="button1" type="button" size="large">
                            <Radio label="学生"></Radio>
                           
                            <Radio label="老师"></Radio> 
                        </RadioGroup> <br><br>
                        <Button type="success" long @click="handleSubmit('formInline')">确认提交</Button><br><br>
                </div>
            </div>
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
                button1:'',
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('验证失败!');
                    }
                })
                
                if(this.button1 ==='学生'){
                    this.$router.push({
                    path:'/student',
                })
            }else if(this.button1 ==='老师'){
                this.$router.push({
                    path:'/teacher',
                })
            }
        }
        }}
</script>
