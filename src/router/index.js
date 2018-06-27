import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/public/login.vue'
import TeacherHome from '../components/teacher/home/home.vue'
import StudentHome from '../components/student/home/home.vue'
import Edit from '../components/teacher/draw/edit'
import Ans from '../components/student/answer/answer.vue'
import StuRecord from '../components/student/record/record.vue'
import TeaRecord from '../components/teacher/record/rec.vue'
import TeaRecordR from '../components/teacher/record/record.vue'



Vue.use(Router)

export default new Router({
  routes: [

    
    {
      path:'/teacher',
      component: TeacherHome,
    },
      {
          path: '/teacher/edit',
          component: Edit

      },
      {
        path: '/teacher/record',
        component: TeaRecord
      },
      {
        path:'/teacher/record/rec',
        component: TeaRecordR
      },
      {
        path :'/student',
        component: StudentHome
      },
      {
        path:'/student/ans',
        component: Ans
      },
      {
        path:'/student/record',
        component: StuRecord
      },
      

    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
