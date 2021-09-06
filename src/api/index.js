// 包含多个接口请求函数的模块，函数的返回值是promise对象
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 获取视频分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/hsops', {longitude, latitude})
