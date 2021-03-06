import Vue from 'vue'
import VueRouter from 'vue-router'
import appConfig from '../app.config'

const Home = () => import('../views/home/index')
const About = () => import('../views/about/index')
const Report = () => import('../views/report/index')
const Answer = () => import('../views/answer')
const Article = () => import('../views/article/index')
const Chat = () => import('../views/chat')
const Classes = () => import('../views/classes')
const Statistics = () => import('../views/statistics')
const Task = () => import('../views/task')
const Register = () => import('../views/register/index')
const NotFoundComponent = () => import('../views/exception/404')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    mate: {
      title: '主页',
      icon: 'home',
      isLoading: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    mate: {
      isLoading: false
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    mate: {
      title: '报告',
      icon: 'book',
      isLoading: true
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    mate: {
      title: '会议',
      icon: 'schedule',
      isLoading: true
    }
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes,
    mate: {
      title: '班级',
      icon: 'usergroup-add',
      isLoading: true
    }
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
    mate: {
      title: '数据统计',
      icon: 'bar-chart',
      isLoading: true
    }
  },
  {
    path: '/answer',
    name: 'Answer',
    component: Answer,
    mate: {
      title: '答疑',
      icon: 'bulb',
      isLoading: true
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    mate: {
      title: '文章',
      icon: 'book',
      isLoading: true
    }
  },
  {
    path: '/task',
    name: 'Task',
    component: Task,
    mate: {
      title: '任务',
      icon: 'sound',
      isLoading: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    mate: {
      title: '关于',
      icon: 'question-circle',
      isLoading: true
    }
  },
  {
    path: '/exception/403',
    name: '403',
    component: () => import('../views/exception/403'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/500',
    name: '500',
    component: () => import('../views/exception/500'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/404',
    name: '404',
    component: NotFoundComponent,
    mate: {
      isLoading: false
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundComponent,
    mate: {
      isLoading: false
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name + ' - ' + appConfig.title
  next()
})

export { router, routes }
