/**
 * 生产环境载入文件
 * @param fileName 文件路径，不包括文件名
 * @param viewPath 视图目录
 */

module.exports = (file: string, viewPath: string = 'views') => {
  return import(`@/${viewPath}/${file}.vue`)
}
