//发送的图片寄了会及时修复的
//发送后没有反应 可以尝试不加# 如： 二次元壁纸 ，原神壁纸
//持续更新中.咕咕咕......
import plugin from "../../../lib/plugins/plugin.js"
import fetch from "node-fetch";
const _path = process.cwd();

export class Jinmaocuicuisha_wallpaper extends plugin {
  constructor () {
    super({
      name: 'CcsWallpaper',
      dsc: '脆脆鲨扩展美图壁纸功能',
      event: 'message',
      priority: -500,
      rule: [
        //------------------------------------------------------------------------//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 132-210行
         //   横版壁纸      横版壁纸      横版壁纸      横版壁纸      横版壁纸      //    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 132-210行
          //   横版壁纸       横版壁纸      横版壁纸      横版壁纸      横版壁纸   //      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 132-210行  
           //    横版壁纸       横版壁纸      横版壁纸      横版壁纸      横版壁纸//        ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 132-210行
            //----------------------------------------------------------------//           ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 132-210行
              {
                reg: "^#?(二次元|二次元)(壁纸|Bz|bZ|BZ|bz)$",
                fnc: '二次元壁纸'
              },
              {
                reg: "^#?(原神)(壁纸|Bz|bZ|BZ|bz)$",
                fnc: '原神壁纸1'          
              }, 
              {
                reg: "^#?(原神)(壁纸2|Bz2|bZ2|BZ2|bz2)$",
                fnc: '原神壁纸2'          
              }, 
              {
                reg: "^#?(原神)(壁纸3|Bz3|bZ3|BZ3|bz3)$",
                fnc: '原神壁纸3'          
              }, 
              {
                reg: "^#?(萌版)(壁纸|Bz|bZ|BZ|bz)$",
                fnc: '萌版壁纸'          
              }, 
              {
                reg: "^#?(风景)(壁纸|Bz|bZ|BZ|bz)$",
                fnc: '风景壁纸'          
              },
              {
                reg: "^#?(随机)(壁纸|Bz|bZ|BZ|bz)$",
                fnc: '随机壁纸'          
              }, 
              {
                reg: "^#?(随机白底)(壁纸|Bz|bZ|BZ|bz)$",
                fnc: '随机白底'          
              },  
        //-----------------------------------------------------------------------//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 216-244行
         //   竖版图片      竖版图片      竖版图片      竖版图片      竖版图片     //    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 216-244行
          //   竖版图片      竖版图片     竖版图片      竖版图片      竖版图片   //       ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 216-244行
           //   竖版图片      竖版图片      竖版图片     竖版图片      竖版图片 //         ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 216-244行
            //---------------------------------------------------------------//           ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 216-244行
            {
              reg: "^#?(随机)(图片|tp|TP|Tp|tP)$",
              fnc: '随机图片'
            },
            {
              reg: "^#?(萌版)(图片|tp|TP|Tp|tP)$",
              fnc: '萌版图片'
            },
            {
              reg: "^#?(原神)(图片|tp|TP|Tp|tP)$",
              fnc: '原神图片'          
            },
        //-----------------------------------------------------------------------//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 250-308行
         //   其他照片      其他照片     其他照片      其他照片      其他照片     //     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 250-308行
          //   其他照片      其他照片     其他照片      其他照片      其他照片   //       ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 250-308行
           //   其他照片      其他照片     其他照片      其他照片      其他照片 //         ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 250-308行
            //--------------------------------------------------------------//            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 250-308行
              {
                reg: "^#?(崩坏3)(照片|zp|ZP|Zp|zP)$",
                fnc: '崩坏3照片'          
              },
              {
                reg: "^#?(小狐狸)(照片|zp|ZP|Zp|zP)$",
                fnc: '小狐狸照片'
              }, 
              {
                reg: "^#?(小胡桃)(照片|zp|ZP|Zp|zP)$",
                fnc: '小胡桃照片'
              },
              {
                reg: "^#?(头像)(照片|zp|ZP|Zp|zP)$",
                fnc: '头像照片'
              }, 
              {
                reg: "^#?(随机原崩)(照片|zp|ZP|Zp|zP)$",
                fnc: '随机原神崩坏照片'
              }, 
              {
                reg: "^#?(真寻|欧尼|zx|ZX|Zx|zX)(酱|j|J)?(照片|zp|ZP|Zp|zP)$",
                fnc: '真寻照片'
              },
        //-----------------------------------------------------------------------//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 314-342行
         //   美图美图      美图美图     美图美图      美图美图      美图美图     //     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 314-342行
          //   美图美图      美图美图     美图美图      美图美图      美图美图   //       ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 314-342行
           //   美图美图      美图美图     美图美图      美图美图      美图美图 //         ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 314-342行
            //---------------------------------------------------------------//           ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 314-342行
              {
                reg: "^#?(小姐姐)(美图|mt|MT|Mt|mT)$",
                fnc: '小姐姐美图'          
              }, 
              {
                reg: "^#?(三次元白丝)(美图|mt|MT|Mt|mT)$",
                fnc: '三次元白丝美图'          
              }, 
              {
                reg: "^#?(三次元黑丝)(美图|mt|MT|Mt|mT)$",
                fnc: '三次元黑丝美图'          
              }, 
        //-----------------------------------------------------------------------//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 348-356行
         //   扩展帮助      扩展帮助     扩展帮助      扩展帮助      扩展帮助     //     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 348-356行
          //   扩展帮助      扩展帮助     扩展帮助      扩展帮助      扩展帮助   //       ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 348-356行
           //   扩展帮助      扩展帮助     扩展帮助      扩展帮助      扩展帮助 //         ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 348-356行
            //---------------------------------------------------------------//           ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 348-356行
              {
                reg: '^#?(脆脆鲨扩展)(壁纸)?(帮助|help|菜单|使用说明)$',
                fnc: '脆脆鲨扩展帮助'         
              }]
    })
}

//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓
//----------------------------------------------------以下是横版壁纸---------------------------------------------------// ↓↓↓↓↓↓↓↓
//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓

async 二次元壁纸(e) {
    console.log("用户命令：", e.msg);
   
    let url = `https://t.mwm.moe/ycy`;
    let res = await fetch(url).catch((err) => logger.error(err));
    let msg = [segment.image(res.url)];
    e.reply(msg);
    return true; 
}

async 原神壁纸1(e) {
    console.log("用户命令：", e.msg);
   
    let url = `https://t.mwm.moe/ysz`;
    let res = await fetch(url).catch((err) => logger.error(err));
    let msg = [segment.image(res.url)];
    e.reply(msg);
    return true; 
}

async 原神壁纸2(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/ys`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 原神壁纸3(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://api.dujin.org/pic/yuanshen`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 萌版壁纸(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/moe`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}  

async 风景壁纸(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/fj`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 随机壁纸(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/pc`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}    

async 随机白底壁纸(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/bd`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}   

//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓
//----------------------------------------------------以下是竖版图片---------------------------------------------------// ↓↓↓↓↓↓↓↓
//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓

async 随机图片(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/mp`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 萌版图片(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/moemp`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 原神图片(e) {
  console.log("用户命令：", e.msg);
 
  let url = `https://t.mwm.moe/ysmp`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}
    
//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓
//----------------------------------------------------以下是其他照片---------------------------------------------------// ↓↓↓↓↓↓↓↓
//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓

async 崩坏3照片(e) {
  console.log("用户命令：", e.msg);

  let url = `https://api.dreamofice.cn/hoyorandom/img`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
 return true; 
} 

async 小狐狸照片(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://t.mwm.moe/xhl`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 小胡桃照片(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://t.mwm.moe/lai`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 头像照片(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://t.mwm.moe/tx`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 随机原神崩坏照片(e) {
  console.log("用户命令：", e.msg);
  
  let url = `http://mztp.asia/img.php`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 真寻照片(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://mahiro.tianyisama.tk`;  //此api由 冀安(2675712883) 部署 ----- //图片可以前往 https://gitee.com/SHIKEAIXY/zhenxun-wallpaper-picture 下载//
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓
//----------------------------------------------------以下是美图美图---------------------------------------------------// ↓↓↓↓↓↓↓↓
//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓

async 小姐姐美图(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://api.btstu.cn/sjbz/api.php`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 三次元白丝美图(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://api.caonm.net/api/bhs/b.php`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 三次元黑丝美图(e) {
  console.log("用户命令：", e.msg);
  
  let url = `https://api.caonm.net/api/bhs/h.php`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓
//------------------------------------------------这是脆脆鲨扩展本地图帮助----------------------------------------------// ↓↓↓↓↓↓↓↓
//--------------------------------------------------------------------------------------------------------------------// ↓↓↓↓↓↓↓↓

async 脆脆鲨扩展帮助(e) {
  const imgreply = 'plugins/Jinmaocuicuisha-plugin/resources/help/BZhelp.jpg';
  logger.info('[BZhelp]', e.msg)
  let msg = [
  imgreply ? segment.image(imgreply) : "",
  ]
  e.reply(msg)
  return true;
}
}