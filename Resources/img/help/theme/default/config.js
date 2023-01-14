export const style = {
  // 主文字颜色
  fontColor: '#dfff59',
  // 主文字阴影： 横向距离 垂直距离 阴影大小 阴影颜色
  // fontShadow: '0px 0px 1px rgba(6, 21, 31,.3)',
  fontShadow:'-1px 0 black,0 1px black,1px 0 black,0 -1px black',
  // 描述文字颜色
  descColor: '#ffccff',

  /* 面板整体底色，会叠加在标题栏及帮助行之下，方便整体帮助有一个基础底色
  *  若无需此项可将rgba最后一位置为0即为完全透明
  *  注意若综合透明度较低，或颜色与主文字颜色过近或太透明可能导致阅读困难 */
  contBgColor: 'rgba(6, 21, 31, 0.1)',

  // 面板底图毛玻璃效果，数字越大越模糊，0-10 ，可为小数
  contBgBlur: 4,

  // 板块标题栏底色
  headerBgColor: 'rgba(124, 228, 193, 0.8)',
  // 帮助奇数行底色
  rowBgColor1: 'rgba(79, 198, 254, 0.4)',
  // 帮助偶数行底色
  rowBgColor2: 'rgba(109, 255, 192, 0.3)'
}