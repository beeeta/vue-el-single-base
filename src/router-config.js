
import shouyang from './page/shouyang/shouyang.vue'
import songyang from './page/songyang/songyang.vue'
import syfb from './page/songyang/songyang-fb.vue'

export default [
  {
    path:'/',component:shouyang,
  },
  {
    path:'/songyang',component:songyang,children:
    [{
      path:'/songyang/fb',component:syfb,
    }]
  },
]
