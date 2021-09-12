import Vue from 'vue'
import moment from 'moment'
// import format from 'data-fns/format'
// 自定义过滤器
Vue.filter('data-format', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
  // return format(value, formatStr)
})
