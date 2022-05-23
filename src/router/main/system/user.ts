const user = () => import("@/views/user/user.vue")
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
