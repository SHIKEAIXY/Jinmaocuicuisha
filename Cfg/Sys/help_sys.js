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
      "title": "`#打我``#打他`", "desc": "要先设置名字`#设置打人Bot名字`"
    },
    {
      "icon": 116,
      "title": "开关", "desc": "`#本群(禁用|启用)打人``#打他(仅我|所有人)可用`"
    }, 
    {
      "icon": 117,
      "title": "图片地址", "desc": "`#(写入|删除)打人api`"
    },
    {
      "icon": 120,
      "title": "`#骰子`", "desc": "输入一到六再发`#开`结束游戏"
    },
    {
      "icon": 121,
      "title": "`#重置骰子`", "desc": "重置游戏"
    }
    ]
    },

    {
    "group": "小功能(emmm)",
    "list": [
    {
      "icon": 113,
      "title": "总开关", "desc": "`#开启|关闭自动撤回`"
    },
    {
      "icon": 123,
      "title": "群开关", "desc": "`#本群(禁用|启用)自动撤回`"
    },
    {
      "icon": 124,
      "title": "撤回时间", "desc": "`#设置自动撤回时间S秒`"
    },
    {
      "icon": 114,
      "title": "回骂文字`#词库列表`", "desc": "`#(写入|删除)文字`词库没有东西的要自己写"
    },
    {
      "icon": 126,
      "title": "骂回图片`#骂人图片列表`", "desc": "`#(上传|删除)骂人图片`没有东西的要自己上传"
    }
    ]
    },

    {
    "group": "超级用户管理",
    "auth": "master",
    "list":  [
    {
        "icon": 108,
        "title": "主人功能", "desc": "`#(增加|删除)主人``#主人列表``#删除所有主人`"
    },
    {
        "icon": 109,
        "title": "拉黑用户", "desc": "`#拉黑用户``#拉黑解除``#拉黑列表`"
    },
    {
        "icon": 131,
        "title": "拉黑群", "desc": "`#拉黑群(群号)``#解除拉黑群``#群拉黑列表`"
    },
    {
        "icon": 111,
        "title": "全局功能配置", "desc": "`#全局(禁用|启用)(功能)``#全局禁用列表``#清空全局禁用`"
    },
    {
        "icon": 111,
        "title": "全局白名单配置", "desc": "`#全局(设置|删除)白名单(功能)``#全局白名单列表``#全局清空白名单`"
    },
    {
        "icon": 135,
        "title": "本群功能配置", "desc": "`#本群(禁用|启用)(功能)``#本群禁用列表`"
    },
    {
        "icon": 136,
        "title": "本群白名单配置", "desc": "`#(设置|删除)本群白名单(功能)``#本群白名单列表``#本群启用白名单``#本群启用禁用`"
    }
    ]

  }]

export const isSys = true
