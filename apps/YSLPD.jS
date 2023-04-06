//轮盘赌改原神，如果侵权了请联系我 
//游戏食用帮助：房主（不是主人权限）发起原神轮盘赌,等待op加入游戏,必须两人或以上房主才能开始原神轮盘赌，从一号op开始(房主)轮流开枪，每次中弹的概率是六分之一，中弹的被禁言，活到最后的op则胜利
import plugin from '../../../lib/plugins/plugin.js'
import { segment } from "oicq";
import fs from 'fs'
import YAML from 'yaml'

let game = {}  //游戏房间
const _path = process.cwd().replace(/\\/g,"/");
const data = _path + '\/Cfg\/Jinmaocuicuisha_Cfg\/YSLPD\/user_Cfg.yaml'; //这里定义数据存储路径

export class Roulette extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'YSLPD',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^#?原神轮盘赌$',
          /** 执行方法 */
          fnc: 'elslpd'
        },
        {
          /** 命令正则匹配 */
          reg: '^#?(参与|加入)原神轮盘赌$',
          /** 执行方法 */
          fnc: 'joingame'
        },
        {
          /** 命令正则匹配 */
          reg: '^#?开始$',
          /** 执行方法 */
          fnc: 'start'
        },
        {
          /** 命令正则匹配 */
          reg: '^#?结束原神轮盘赌$',
          /** 执行方法 */
          fnc: 'EndCheck'
        },
        {
          /** 命令正则匹配 */
          reg: '^#?(开火|开枪)$',
          /** 执行方法 */
          fnc: 'kaiqiang'
        },
        {
          /** 命令正则匹配 */
          reg: '^#?踢出原神轮盘赌$',
          /** 执行方法 */
          fnc: 'getout'
        }
      ]
    })
  }

  async  elslpd(e) {
 
   
     let guessConfig = getGuessConfig(e)
  if (guessConfig.gameing ) {
    
   
      if(guessConfig.current){
  
      e.reply(`原神轮盘赌已开始,请op们轮流开枪`)
      return true;
    }
    
    e.reply('原神轮盘赌正在发起噢!请op们快点加入游戏')
    return true;
  }
  
  
  e.reply(`游戏已发起,目前有1位玩家,至少要2名玩家,发送"参与原神轮盘赌"加入游戏`)
  game[e.group_id] = {};
  game[e.group_id].wj = [e.user_id];
  game[e.group_id].i = 0
  game[e.group_id].j = 0
  guessConfig.gameing = true;
 
 console.log(game)
   return true;
}


 async  joingame(e) {
    
  let guessConfig = getGuessConfig(e)
  if (guessConfig.gameing ) {
  if(guessConfig.current){
      e.reply(`原神轮盘赌已开始,请玩家们轮流开枪`)
      return true;
  }
  if(game[e.group_id].wj.indexOf(e.user_id) == -1){
   
      
  game[e.group_id].wj[game[e.group_id].wj.length] = e.user_id
  
  e.reply(`已成功加入游戏,目前有${game[e.group_id].wj.length}名玩家，发送"开始"开始游戏`);
  console.log(game)
  return true;
}else{
    e.reply(`你已经加入游戏了,请不要重复加入`)
    return true;
}
  
}
 e.reply(`当前没有等待中的原神轮盘赌，发送 原神轮盘赌 发起游戏`);
  return true;
}


 async  start(e) {
    
  let guessConfig = getGuessConfig(e)
  let kqsx = Math.round(Math.random() * (game[e.group_id].wj.length - 1) )
  console.log(kqsx)
  if (guessConfig.gameing ) {
      
      if(guessConfig.current){
      e.reply(`游戏开始，当前芭芭拉的轮盘容量为6，但只填充了一发子弹，请参与游戏的双方轮流发送开枪，枪响结束`)
      return true;
  }
      
      
      if(game[e.group_id].wj[0] == e.user_id){
          if(game[e.group_id].wj.length < 2){
              e.reply(`人数不足`)
              return true;
          }
          
          
   
   e.reply(`原神轮盘赌已封闭,无法再加入新玩家,目前玩家人数有${game[e.group_id].wj.length}人,时限五分钟`)
   guessConfig.current = true;
   
   guessConfig.timer = setTimeout(() => {
      if (guessConfig.gameing && guessConfig.current) {
        
        e.reply(`时间已到，原神轮盘赌自动结束`);
        guessConfig.gameing = false;
        guessConfig.current = false;
        delete game[e.group_id]
     
		return true;
      }
    }, 300000)//改自动结束时间 单位毫秒
   
   
   
   game[e.group_id].i = kqsx
   
   
   setTimeout(() => {
    let mag = [
      '游戏开始，当前芭芭拉的轮盘容量为6，但只填充了一发子弹，请参与游戏的双方轮流发送开枪，枪响结束,',
      '芭芭拉以上膛完毕现在请',
      segment.at(game[e.group_id].wj[kqsx]),
      ' 开枪'
    ]
             e.reply(mag)
              return true;
             },2000);
   
      }else{
          e.reply(`发起者才能开始原神轮盘赌噢,快叫他开始吧!`)
          return true;
      }
      
      return true;
    }
 e.reply(`当前没有等待中的原神轮盘赌，发送 原神轮盘赌 发起游戏`);
   return true; //返回true 阻挡消息不再往下
}

 async EndCheck(e) {
    let guessConfig = getGuessConfig(e);
    let {gameing, current } = guessConfig;
    
  if (guessConfig.gameing ) {
     e.reply(`原神轮盘赌已结束`) 
  
     init(e)
  
     return true;

}
 e.reply(`当前没有等待中的原神轮盘赌，发送 原神轮盘赌 发起游戏`);
    return true;
}


 async  kaiqiang(e) {
       await InitializeFolder(data)
    let guessConfig = getGuessConfig(e);
    let num = Math.ceil(Math.random() * 5); //开枪中弹概率
    let index = game[e.group_id].wj.indexOf(e.user_id);
    let indexs = Math.round(Math.random() * (game[e.group_id].wj.length -1) );
    console.log(num)
    
  if (guessConfig.gameing  ) {
      
     if(guessConfig.current && game[e.group_id].wj.indexOf(e.user_id) != -1){
         
         
         if(game[e.group_id].wj[game[e.group_id].i] == e.user_id){
             
             
         
        if(num == 2 || game[e.group_id].j== 5){
            
            if(game[e.group_id].j == 5){
                    e.reply([segment.at(game[e.group_id].wj[indexs]),`你死了，芭芭拉很开心`]);
                     e.group.muteMember(game[e.group_id].wj[indexs],60); //禁言
                    game[e.group_id].wj.splice(indexs,1);
    // 以YAML格式读取文件
    let user_data = YAML.parse(fs.readFileSync(data, 'utf8'));
    // 判断用户是否存在
    if (user_data[e.user_id] === undefined) {
      // 不存在则创建
      user_data[e.user_id] = {gold: 200+gold_add+gold_num,star: 12500+star_add,luckygold: 0}
    } else {
      // 存在则累加
        let gold = 30

      user_data[e.user_id].gold -= gold;

      // 以YAML格式写入文件
      fs.writeFileSync(data, YAML.stringify(user_data));
    }
                    if(game[e.group_id].wj.length == 1){
               	   console.log(game[e.group_id].wj)
                      
    // 以YAML格式读取文件
    let user_data = YAML.parse(fs.readFileSync(data, 'utf8'));
    // 判断用户是否存在
    if (user_data[e.user_id] === undefined) {
      // 不存在则创建
      user_data[e.user_id] = {gold: 200+gold_add+gold_num,star: 12500+star_add,luckygold: 0}
    } else {
      // 存在则累加
        let gold = 10;

      user_data[e.user_id].gold += gold;

      // 以YAML格式写入文件
      fs.writeFileSync(data, YAML.stringify(user_data));
    }
                 
                 init(e)
                 
                 return true;
        
         }else{
             
             
             if(game[e.group_id].i < indexs){
              game[e.group_id].i++;  
             }
             
             if(game[e.group_id].i == game[e.group_id].wj.length){
                  game[e.group_id].i =0;
               }
             
              game[e.group_id].j = 0;
              
         setTimeout(() => {
              e.reply([segment.at(game[e.group_id].wj[game[e.group_id].i]),`\n请开枪`]);
             },2000);
         }
         return true;
                    
             
         }
                    
           
            e.reply("你死了，芭芭拉很开心")
              e.group.muteMember(e.user_id,60);  //中弹后,机器人是管理员就禁言一分钟
               
              game[e.group_id].wj.splice(index,1);

               
               
           if(game[e.group_id].wj.length == 1){
               
             e.reply([segment.at(game[e.group_id].wj),`\n恭喜你活了下来 赢得了芭芭拉的喜欢 芭芭拉打算和你干点什么 你竟然二话不说拒绝了...`]);
             init(e)
             return true;
        
         }else{
            
            
            
            if(game[e.group_id].i ==game[e.group_id].wj.length){
                   game[e.group_id].i =0;
               }

           
           game[e.group_id].j = 0;
         setTimeout(() => {
              e.reply([segment.at(game[e.group_id].wj[game[e.group_id].i]),`\n请开枪`]);
             },2000);
         }
         return true;
        }
         else{
             
             game[e.group_id].i++;
             game[e.group_id].j++;
             
             e.reply(`无事发生,压力来到下一位op\n开火次数:`+game[e.group_id].j+`\n开火次数为5时,下一枪随机死自己或别人`);
             
             if(game[e.group_id].i == game[e.group_id].wj.length){
                 game[e.group_id].i = 0;
             }
             
             setTimeout(() => {
              e.reply([segment.at(game[e.group_id].wj[game[e.group_id].i]),`\n请开枪`]);
             },2000);
             
            return true;
         }
         
         }else{
             e.reply(`现在枪不在你手上哦~`)
             return true;
         }
         
     }else{
         e.reply(`房主还未开始原神轮盘赌或你不是加入的玩家或你是玩家已经去投胎了,无法开火`)
         return true;
     }
    
   
}
 e.reply(`当前没有等待中的原神轮盘赌，发送 原神轮盘赌 发起游戏`);
  return true;
}


 async  getout(e) {
    
  let guessConfig = getGuessConfig(e)
  let  qq;
  let indexs
  
  if (e.message[0].type == 'at') {
      qq = e.message[0].qq
     
    }else if(e.message[1].type =='at' ){
        qq = e.message[1].qq;
        
    }
    
  
  indexs = game[e.group_id].wj.indexOf(qq)
  
  if (guessConfig.gameing && guessConfig.current) {
  if(game[e.group_id].wj.indexOf(e.user_id) != -1){
        
       if(indexs == -1){
         e.reply(`他不是参与游戏的玩家,无法踢出`,true)
         return true
     }
      
      game[e.group_id].wj.splice(indexs,1)
      
      e.reply(`成功踢出玩家,目前玩家人数为${game[e.group_id].wj.length}人`,true)
       
       if(game[e.group_id].wj.length == 1){
          
             e.reply([segment.at(game[e.group_id].wj),`\n恭喜你活了下来 赢得了芭芭拉的喜欢 芭芭拉打算和你干点什么 你竟然二话不说拒绝了...`]);
             init(e)
             return true;
        
       }else{
           
           if(game[e.group_id].i == game[e.group_id].wj.length){
                game[e.group_id].i = 0;
             }
             
             setTimeout(() => {
              e.reply([segment.at(game[e.group_id].wj[game[e.group_id].i]),`\n请开枪`]);
             },2000);
           
             return true;
           
       }
       
  }
   e.reply(`只有正在游戏的玩家才能踢人`,true)
   return true;
  
}
e.reply("原神轮盘赌未开始,无法踢人")
  return true;
}
}

const guessConfigMap = new Map()

function getGuessConfig(e) {
    let key = e.message_type + e[e.isGroup ? 'group_id' : 'user_id'];
    let config = guessConfigMap.get(key);
    if (config == null) {
      config = {
        gameing: false,
        current: false,
        timer: null,
      }
      guessConfigMap.set(key, config);
    }
    return config;
  }
  
function init(e){
   let guessConfig = getGuessConfig(e) 
   guessConfig.gameing = false;
   guessConfig.current = false;
   clearTimeout(guessConfig.timer);
    delete game[e.group_id]
   
}

async function InitializeFolder (path) {
   //判断路径是否含有.，如果有则为文件
   if (path.indexOf('.') != -1) {
     //获取文件路径
     let file_path = path.substring(0, path.lastIndexOf('/'));
     //遍历文件路径，按顺序创建文件夹
     for (let i = 0; i < file_path.split('/').length; i++) {
       let folder_path = file_path.split('/').slice(0, i + 1).join('/');
       //判断文件夹是否存在
       if (!fs.existsSync (folder_path)) {
         //不存在则创建
         fs.mkdirSync(folder_path);
       }
     }
     //判断文件是否存在
     if (!fs.existsSync(path)) {
       //不存在则判断是否为json或者yaml文件，如果是则创建空json或者yaml文件
       if (path.indexOf('.json') != -1) {
         fs.writeFileSync(path, '{}');
       } else if (path.indexOf('.yaml') != -1) {
         fs.writeFileSync(path, '{}');
       } else {
         //不是则创建空文件
         fs.writeFileSync(path, '');
       }
     }
   } else {
     //遍历文件路径，按顺序创建文件夹
     for (let i = 0; i < path.split('/').length; i++) {
       let folder_path = path.split('/').slice(0, i + 1).join('/');
       //判断文件夹是否存在
       if (!fs.existsSync (folder_path)) {
         //不存在则创建
         fs.mkdirSync(folder_path);
       }
     }
   }
 }