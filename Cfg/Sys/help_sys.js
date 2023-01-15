/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 
* */

export const helpCfg = {
  title: '脆脆鲨使用指南',
  subTitle: 'Yunzai-Bot V3 && Jinmaocuicuisha-plugin',
  columnCount: 3,
  colWidth: 300,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#FFE8B9',
    descColor: '#FFFEE8',
    contBgColor: 'rgba(0, 0, 0, 0.05)',
    contBgBlur: 0,
    headerBgColor: 'rgba(0, 0, 0, 0.3)',
    rowBgColor1: 'rgba(0, 0, 0, 0.3)',
    rowBgColor2: 'rgba(0, 0, 0, 0.3)'
  }
}

export const helpList = [{
  "group": "Bot功能",
  "list":  [ 
  {
    "icon": 113,
    "title": "#本群(禁用|启用)自动撤回|#设置自动撤回时间(数字)+(秒)", "desc": "群里面是否自动撤回Bot自己的消息(分群开关)，自动撤回时间默认20秒，可以输入指令自己设置"
  },
  {
    "icon": 114,
    "title": "骂人功能", "desc": "##(写入|删除)文字(删除输入序号删具体【#词库列表】查看)被骂时bot会使用词库的文字回复，#(上传|删除)骂人图片(删除输入序号删具体【#骂人图片列表】查看)被骂时bot会使用图片列表的图片概率+文字回复，用不文明的话艾特bot骂就会触发"
  }]
  [{
  "group": "绝对权限",
  "auth": "master",
  "list":  [{"title": "可使用主人增加，删除，拉黑用户，拉黑群，设置白名单功能，设置全局禁用功能。"}]
  }]
  [{
  "group": "超级用户管理",
  "auth": "master",
  "list": [
  {
    "icon": 108,
    "title": "#(增加|删除)主人|#主人列表|#删除所有主人", "desc": "增加新的主人(输入QQ或者艾特),删除主人(按列表输入序号来删除)，查看bot所有主人，删除所有主人是清空主人列表。"
  },
  {
    "icon": 109,
    "title": "#拉黑用户|#拉黑解除|#拉黑列表", "desc": "拉黑指定用户(输入QQ或者艾特)，解除指定用户(按列表输入序号来解除)，已被拉黑的用户的列表"
  },  
  {
    "icon": 110,
    "title": "#拉黑群|#解除拉黑群|#群拉黑列表", "desc": "拉黑某个群(输入QQ)，解除某个已经拉黑的群(按列表输入序号来解除)，已被拉黑的群的列表"
  },
  {
    "icon": 111,
    "title": "#全局(禁用|启用)+(名字)|#全局禁用列表|#清空全局禁用", "desc": "功能名字具体用#运行日志或者后台查看，查看已禁用的功能列表，清空所有禁用"
  },
  {
    "icon": 112,
    "title": "#(设置|删除)白名单+(名字)|#白名单列表|#清空白名单", "desc": "只启用某个功能，查看启用的功能列表，清空所有白名单"
  }]
  }]
}]

export const isSys = true
