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
    "group": "娱乐功能",
    "list":  [ 
    {
      "icon": 115,
      "title": "打人", "desc": "#打他(仅我|所有人)可用|#本群(禁用|启用)打人|#(写入|删除)打人api|#设置打人Bot名字|#打他|#打我"
    },
    {
      "icon": 116,
      "title": "乐色骰子", "desc": "#(骰子|roll)|#重置骰子|#1|#2|#3|#4|#5|#6|#开"
    }
    ]
    },

    {
    "group": "Bot功能",
    "list": [{
      "icon": 113,
      "title": "自动撤回", "desc": "#本群(禁用|启用)自动撤回|#设置自动撤回时间(数字)+(秒)"
    },
    {
      "icon": 114,
      "title": "骂人功能", "desc": "#(写入|删除)文字|#词库列表|#(上传|删除)骂人图片|#骂人图片列表|用不文明的话艾特bot骂就会触发"
    }
    ]
    },
  
    {
    "group": "绝对权限",
    "auth": "master",
    "list":  [{"title": "可使用超级用户管理所有功能"
    }
    ]
    },

    {
    "group": "超级用户管理",
    "auth": "master",
    "list":  [
    {
        "icon": 108,
        "title": "管理主人", "desc": "#(增加|删除)主人|#主人列表|#删除所有主人"
    },
    {
        "icon": 109,
        "title": "拉黑用户", "desc": "#拉黑用户|#拉黑解除|#拉黑列表"
    },
    {
        "icon": 110,
        "title": "拉黑群", "desc": "#拉黑群|#解除拉黑群|#群拉黑列表"
    },
    {
        "icon": 111,
        "title": "功能禁用", "desc": "#全局(禁用|启用)+(名字)|#全局禁用列表|#清空全局禁用，不能和功能白名单同时用，用之前必须清空另一个的列表"
    },
    {
        "icon": 112,
        "title": "功能白名单", "desc": "#(设置|删除)白名单+(名字)|#白名单列表|#清空白名单，不能和功能禁用同时用，用之前必须清空另一个的列表"
    }
    ]
  }]

export const isSys = true
