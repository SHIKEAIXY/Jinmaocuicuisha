/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 
* */

export const helpCfg = {
  title: '花生帮助',
  subTitle: 'huasheng',
  columnCount: 4,
  colWidth: 300,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 0,
    headerBgColor: 'rgba(255, 222, 142, 0.44)',
    rowBgColor1: 'rgba(255, 166, 99, 0.23)',
    rowBgColor2: 'rgba(251, 113, 107, 0.35)'
  }
}

export const helpList = [{
  "group": "功能类",
  "list": [{
    "icon": 19,
    "title": "绑定", "desc": "在群里，直接通过群名片绑定"
  },
   {
    "icon": 11,
    "title": "拉黑词帮助", "desc": "触发拉黑词，就通知主人"
  },  {
    "icon": 12,
    "title": "早安|晚安", "desc": "记录睡眠时间"
  },
 {
    "icon": 28,
    "title": "我第几(睡觉|起床)", "desc": "查看记录的排名"
 },{
    "icon": 9,
    "title": "全部抽卡记录", "desc": "简单地调用云崽，一次出3张图"
 },{
    "icon": 10,
    "title": "拼接＋[视频链接]", "desc": "解析爱奇艺、芒果、优酷、哔哩的视频链接，腾讯视频的链接不用‘拼接’二字，自动解析，告别VIP"
 },{
    "icon": 107,
    "title": "戳一戳帮助", "desc": "所有群聊戳一戳相关命令"
 }
]
},

{"group": "原神语音命令",
  "list":  [ {
    "icon": 32,
    "title": "xx语音", "desc": "支持中文，英语，韩语，日语，如:丽莎日语语音"
  }, {
    "icon": 50,
     "title": "高清语音(开启|关闭)", "desc": "pc端听不了高清语音，看情况开启哟"
   },{
    "icon": 70,
    "title": "xx语音列表", "desc": "xx角色的全部语音,如:可莉语音列表,回复:序号，不加类型默认中文"
  },{
    "icon":100,
    "title": "猜语音", "desc": "后可加一种类型(支持4类型)，如:猜语音日语"
 }
  ]
},

{"group": "ai命令",
  "list":  [ {
    "icon": 72,
    "title": "ai语音概率+[数字]", "desc": "[openai无效]让ai的回复有概率为小爱语音回复，默认0%"
  },{
    "icon": 77,
    "title": "本群ai插嘴概率+[数字]", "desc": "默认0%,为0时在群里必须带名字或者@机器人才会触发ai"
  },{
    "icon": 78,
    "title": "本群(禁用|启用)ai", "desc": "分群管理ai,默认全部群都启用"
  },{
    "icon": 48,
    "title": "私聊(禁用|启用)ai", "desc": "默认启用"
  },{
    "icon": 61,
    "title": "ai(不)屏蔽xxxxx", "desc": "ai屏蔽的某个词出现在语句中，ai将不再回复"
  },{
    "icon": 53,
     "title": "ai屏蔽词列表", "desc": "列表"
   },{
    "icon": 54,
     "title": "#切换ai", "desc": "切换另一个ai"
   },{
    "icon": 55,
     "title": "花生openai(+你的openai密钥)", "desc": "激活你的openai"
   },{
    "icon": 81,
     "title": "#重新对话", "desc": "用于openai,重置对话"
   },{
    "icon": 1,
     "title": "openai帮助", "desc": "搬得地球佬的链接，请先打开你的魔法"
   }
  ]
},

{
"group": "管理员功能",
  "auth": "master",
  "list":  [{
    "icon": 66,
    "title": "只听我的|听大家的", "desc": "管理Bot对群消息的处理"
  },{
    "icon": 67,
    "title": "花生设置", "desc": "管理花生插件"
  },{
      "icon":1,
      "title":"花生更新","desc":"更新花生插件"
  },{
      "icon":28,
      "title":"花生强制更新","desc":"强制更新花生插件"
  },{
      "icon":19,
      "title":"花生(开启/关闭)全部设置","desc":"开启/关闭全部设置"
  },{
       "icon": 106,
        "title": "#卸载花生",
        "desc": "一键卸载huasheng"
  }
  ]

}]

export const isSys = true
