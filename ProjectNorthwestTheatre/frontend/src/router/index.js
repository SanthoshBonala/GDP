import Vue from 'vue'
import Router from 'vue-router'
import UserDashboard from '../components/User/UserDashboard.vue'
import AdminLogin from '../components/Admin/AdminLogin.vue'
import UserReservation from '../components/User/UserShowReservation.vue'
import AdminDashboard from '../components/Admin/AdminDashboard.vue'
import AddAdmin from '../components/Admin/AddAdmin.vue'
import AddSection from '../components/Admin/AddSection.vue'
import Guard from '../services/authservice'
import AdminList from '../components/Admin/AdminList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: UserDashboard,
      component: UserDashboard
    },
    {
      path: '/admin/login',
      name: AdminLogin,
      component: AdminLogin
    },
    {
      path: '/user/reservation',
      name: UserReservation,
      component: UserReservation
    },
    {
      path: '/admin/dashboard',
      name: AdminDashboard,
      beforeEnter: Guard.auth,
      component: AdminDashboard
    },
    {
      path: '/admin/addadmin',
      name: AddAdmin,
      beforeEnter: Guard.auth,
      component: AddAdmin
    },
    {
      path: '/admin/addsection',
      name: AddSection,
      beforeEnter: Guard.auth,
      component: AddSection
    },
    {
      path: '/admin/adminlist',
      name: AdminList,
      component: AdminList
    }
  ]
})
