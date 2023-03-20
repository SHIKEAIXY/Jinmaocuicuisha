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

export const helpList = [

    {
    "group": "小提示:本插件大部分功能都不需要加#就可以触发",
    },

    {
    "group": "打人",
    "list":  [
    {
      "icon": 118,
      "title": "#设置打人Bot名字", "desc": "设置机器人打人回复的名字"
    },
    {
      "icon": 116,
      "title": "#本群(禁用|启用)打人", "desc": "某个群关闭打人功能"
    }, 
    {
      "icon": 115,
      "title": "#打他(仅我|所有人)可用", "desc": "打他功能设置仅我或者所有人可以使用"
    },
    {
      "icon": 117,
      "title": "#(写入|删除)打人api", "desc": "打人结束会发图片没有api就发不了，自己给bot发写入api+(地址)设置"
    },
    {
      "icon": 118,
      "title": "api参考", "desc": "查看6个动漫图片api"
    },
    {
      "icon": 99,
      "title": "参考api", "desc": "这个主要是在群里触发好看私聊没反应 私聊用上面的（"
    },
    {
      "icon": 119,
      "title": "#打他|#打我", "desc": "打他+(艾特要打的人)"
    }
    ]
    },

    {
    "group": "骰子",
    "list": [{
      "icon": 120,
      "title": "#骰子|roll", "desc": "发骰子或者roll开始游戏"
    },
    {
      "icon": 121,
      "title": "#重置骰子", "desc": "重置游戏"
    },
    {
      "icon": 122,
      "title": "#开", "desc": "开骰子"
    },
    ]
    },

    {
    "group": "自动撤回功能",
    "list": [
    {
      "icon": 113,
      "title": "#开启|关闭自动撤回", "desc": "功能总开关，默认关闭"
    },
    {
      "icon": 123,
      "title": "#本群(禁用|启用)自动撤回", "desc": "功能分群开启或者关闭，需要总开关为开启状态"
    },
    {
      "icon": 124,
      "title": "#设置自动撤回时间(数字)+(秒)", "desc": "设置撤回时间"
    }
    ]
    },

    {
    "group": "回骂功能(bot被人艾特用傻逼|闭嘴|滚等词骂时会触发回骂，有概率会文字和图片一起回骂)",
    "list": [
    {
      "icon": 114,
      "title": "#(写入|删除)文字+(文字)", "desc": "写入或者删除骂人文字，删除按序号删，bot回骂时会调用，词库空的需要自己写入"
    },
    {
      "icon": 125,
      "title": "#词库列表", "desc": "查看已经写入的文字"
    },
    {
      "icon": 126,
      "title": "#(上传|删除)骂人图片", "desc": "上传或者删除骂人图片，删除按序号删，bot回骂时会调用，也是空的需要自己上传"
    },
    {
      "icon": 127,
      "title": "#骂人图片列表", "desc": "查看已经上传的图片"
    }
    ]
    },
  
    {
    "group": "绝对权限",
    "auth": "master",
    "list":  [{"title": "可使用超级用户所有功能"
    }
    ]
    },

    {
    "group": "超级用户主人管理",
    "auth": "master",
    "list":  [
    {
        "icon": 108,
        "title": "#(增加|删除)主人", "desc": "增加或者删除普通主人"
    },
    {
        "icon": 128,
        "title": "#主人列表", "desc": "查看所有普通主人"
    },
    {
        "icon": 129,
        "title": "#删除所有主人", "desc": "删除所有普通主人"
    }
    ]
    },

    {
    "group": "超级用户拉黑管理",
    "auth": "master",
    "list":  [
    {
        "icon": 109,
        "title": "#拉黑用户|#拉黑解除", "desc": "拉黑某个人不让他使用bot的功能，解除按序号"
    },
    {
        "icon": 130,
        "title": "#拉黑列表", "desc": "查看已拉黑的人"
    },
    {
        "icon": 131,
        "title": "#拉黑群+(群号)|#解除拉黑群", "desc": "拉黑某个群bot的功能这个群不能用，解除按序号"
    },
    {
        "icon": 132,
        "title": "#群拉黑列表", "desc": "查看已拉黑的群"
    }
    ]
    },

    {
    "group": "超级用户功能管理(全局和白名单不能同时用，用另一个必须清空另一个)",
    "auth": "master",
    "list":  [
    {
        "icon": 111,
        "title": "#全局(禁用|启用)+(功能名字)", "desc": "禁用或者启用某个功能，功能名字可以通过#运行日志查看"
    },
    {
        "icon": 133,
        "title": "#全局禁用列表|#清空全局禁用", "desc": "查看已经禁用的功能，清空所有在禁用列表的功能"
    },
    {
        "icon": 111,
        "title": "#(设置|删除)白名单+(功能名字)", "desc": "只启用某个功能其他全禁用，功能名字可以通过#运行日志查看"
    },
    {
        "icon": 134,
        "title": "#白名单列表|#清空白名单", "desc": "查看已设置白名单的功能，清空所有在白名单列表的功能"
    }
    ]

  }]

export const isSys = true
