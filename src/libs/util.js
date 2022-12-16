/* eslint-disable comma-dangle */
import common from '@/libs/util.common'
import cookie from '@/libs/util.cookie'
import arr from '@/libs/util.arr'

/**
 * 这里将所有 util 工具方法聚合，具体方法分类放到各个模块
 */
export default {
  ...common,
  cookie,
  arr,
}
