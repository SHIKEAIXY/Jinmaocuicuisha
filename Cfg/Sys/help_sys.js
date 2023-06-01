/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 
* */

export const helpCfg = {
  title: '脆脆鲨食用指南',
  subTitle: 'Yunzai-Bot V3 && Jinmaocuicuisha-plugin',
  columnCount: 1,
  colWidth: 420,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 0,
    headerBgColor: 'rgba(6, 21, 31, .4)',
    rowBgColor1: 'rgba(6, 21, 31, .2)',
    rowBgColor2: 'rgba(6, 21, 31, .35)'
  }
}

export const helpList = [

    {
    "group": "脆脆酱小提示:没有反应可以尝试去掉 # 发送",
    },

    {
    "group": "乐子img",
    "list":  [
    {
      "icon": 118,
      "title": "`#设置打人Bot名字` `#本群禁用|启用打人` `#打他仅我|所有人可用`", "desc": "打人设置"
    },
    {
      "icon": 116,
      "title": "`#打我` `#打他`", "desc": "打我或者打他"
    }, 
        {
      "icon": 114,
      "title": "`#写入打人api` `#查看打人api``#删除打人api`", "desc": "打人api"
    }, 
    {
      "icon": 115,
      "title": "`#参考api`", "desc": "没用的小功能"
    }, 
        {
      "icon": 112,
      "title": " `#真寻壁纸`", "desc": "发送一张欧尼酱图片图片"
    }, 
    {
      "icon": 120,
      "title": "`#骰子` `#重置骰子` `#一到六` `#开`", "desc": "发送#一到六 后再发送#开"
    }
    ]
    },

    {
    "group": "小功能(emmm)",
    "list": [
    {
      "icon": 113,
      "title": "`#开启|关闭自动撤回` `#本群禁用|启用自动撤回` `#设置自动撤回时间15秒`", "desc": "自动撤回"
    },
    {
      "icon": 114,
      "title": "`#写入|删除文字` `#词库列表`", "desc": "需要自己写入文字（默认无文字）"
    },
    {
      "icon": 126,
      "title": "`#上传|删除骂人图片``#骂人图片列表`", "desc": "需要自己上传图片（默认无图片）"
    }
    ]
    },

    {
    "group": "超级用户(主人)管理",
    "auth": "master",
    "list": [
    {
        "icon": 108,
        "title": "`#增加|删除主人` `#主人列表` `#删除所有主人`", "desc": "主人管理"
    },
    {
        "icon": 109,
        "title": "`#拉黑用户` `#拉黑解除` `#拉黑列表`", "desc": "拉黑用户管理"
    },
    {
        "icon": 131,
        "title": "`#拉黑群+群号` `#解除拉黑群+群号` `#群拉黑列表`", "desc": "群拉黑管理"
    }
    ]
    },

    {
    "group": "超级用户(禁言|白名单)管理",
    "auth": "master",
    "list":  [
    {
        "icon": 137,
        "title": "`#插件名` `#本群启用白名单` `#本群启用禁用`", "desc": "查看所有的插件名字,单群使用白名单或者禁用"
    },
    {
        "icon": 111,
        "title": "`#全局禁用|启用+插件名字` `#全局禁用列表` `#清空全局禁用`", "desc": "可以通过#插件名来(禁用|启用)"
    },
    {
        "icon": 111,
        "title": "`#全局设置|删除白名单+插件名字` `#全局白名单列表` `#全局清空白名单`", "desc": "可以通过#插件名来(设置|删除)"
    },
    {
        "icon": 135,
        "title": "`#本群禁用|启用+插件名字` `#本群禁用列表`", "desc": "可以通过#插件名来(禁用|启用)"
    },
    {
        "icon": 136,
        "title": "`#设置|删除本群白名单+插件名字` `#本群白名单列表`", "desc": "可以通过#插件名来(设置|删除)"
    }
    ]

  }]

export const isSys = true
