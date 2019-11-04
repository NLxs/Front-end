import Vue from 'vue'
import Router from 'vue-router'
// import Foo from '../components/Foo'
// import Bar from '../components/Bar'
// import Test from '../components/Test'
// import Header from '../components/Header'
// import Title1 from '../components/Title1'
// import Title2 from '../components/Title2'
// import Goods from '../components/Goods'
import View from '../components/View'
import Body1 from '../components/Body1'
import Body2 from '../components/Body2'

Vue.use(Router)

export default new Router({
  routes: [/*
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    },
    // 动态路由
    {
      path: '/test/:id/name/:name',
      name: 'test',
      component: Test
    },
    {
      path: '/header',
      name: 'header',
      component: Header,
      children: [
        // 嵌套路由不需要加 / 
        {
          path: 'title1',
          name: 'title1',
          component: Title1
        },
        {
          path: 'title2',
          name: 'title2',
          component: Title2
        }
      ]
    },
    // 编程式路由
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },*/
    // 命名视图
    {
      path: '/',
      name: '/',
      components: {
        default: View,
        body1: Body1,
        body2: Body2
      }
    }
  ]
})
