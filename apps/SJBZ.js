import plugin from '../../../lib/plugins/plugin.js'
import { segment } from 'oicq';
import fetch from 'node-fetch'

//是否开启 false关闭 true开启
let isGame = false
export class SJBZ extends plugin {

  constructor () {
    super({
      name: 'SJBZ',
      dsc: 'SJBZ',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#*随机恋爱$',
          fnc: 'guess'
        },
        {
          reg: '^(应该|不应该|拯救|拆散)$',
          fnc: 'answerCheck'
        },
        {
          reg: '^结束随机恋爱$',
          fnc: 'Endcheck'
        },
      ]
    })
  }

 
  async guess (e) {
    let guessConfig = getGuessConfig(e)
  if (guessConfig.gameing) {
    e.reply('随机恋爱正在进行哦!')
    return false;
  }
  


  let res =await (await fetch("https://xiaoapi.cn/API/yl_lazj.php?msg=游戏开始")).json();
  let msg =[res.data.title,"\n\n回答:\n" + res.data.opt[0] + "\n" + res.data.opt[1]]
  
  e.reply(msg)
  
  guessConfig.gameing = true;
  guessConfig.current = e.user_id

  guessConfig.timer = setTimeout(() => {
    if (guessConfig.gameing) {
      guessConfig.gameing = false;
      isGame = false
      guessConfig.current =''
      e.reply('随机恋爱游戏超时，已结束');
    }
  }, 5 * 60000)//分

  return true
  }

  async answerCheck(e){
    let guessConfig = getGuessConfig(e);
    
    let { gameing, current } = guessConfig;
    if(!gameing) return false
    if(current !== e.user_id){ 
      e.reply("只能发起者回答",true) 
      return true
  }
    if(isGame){
      if(e.msg == "拯救"||e.msg == "拆散"){
      e.reply("请回答应该或不应该",true)
      return true
      }
    } 
    let res =await (await fetch(`https://xiaoapi.cn/API/yl_lazj.php?msg=${e.msg}`)).json();
    let msg=[res.data.title,"\n\n问:" + res.data.text + "\n\n" + "回答:" + res.data.opt]
    console.log(msg)
    
  
    for(let opt of res.data.opt){
      if(opt == null || opt !== "再次挑战"){
        continue;
      }
      if(opt.includes("再次挑战")){
        e.reply([res.data.title,"\n" + res.data.text])
        guessConfig.gameing = false;
        guessConfig.current = ''
        isGame = false
      clearTimeout(guessConfig.timer)
      return true;
      }
    }

    e.reply(msg)
   
    isGame = true;
  
  }

  async Endcheck(e){
    let guessConfig = getGuessConfig(e);

    guessConfig.gameing = false;
    guessConfig.current = ''
    clearTimeout(guessConfig.timer)
    isGame =false
    e.reply("已成功结束随机恋爱")
    return true
  }
}

const guessConfigMap = new Map()

function getGuessConfig(e) {
    let key = e.message_type + e[e.isGroup ? 'group_id' : 'user_id'];
    let config = guessConfigMap.get(key);
    if (config == null) {
      config = {
        gameing: false,
        current: '',
        timer: null,
      }
      guessConfigMap.set(key, config);
    }
    return config;
  }
