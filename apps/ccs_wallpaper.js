import plugin from "../../../lib/plugins/plugin.js"
import fetch from "node-fetch";
const _path = process.cwd();

export class Jinmaocuicuisha_wallpaper extends plugin {
  constructor () {
    super({
      name: 'ccswallpaper',
      dsc: '壁纸功能',
      event: 'message',
      priority: 500, 
             //优先级 注：数字越大优先级越低
      rule: [
        {
          reg: "^#?(随机)(图片||tp|TP|Tp|tP)$",
          fnc: 'sjtp'
        },
        {
          reg: "^#?(萌版)(图片||tp|TP|Tp|tP)$",
          fnc: 'mbtp'
        },
        {
          reg: "^#?(原神)(图片||tp|TP|Tp|tP)$",
          fnc: 'ystp'          
        },
        {
          reg: "^#?(小狐狸)(图片||tp|TP|Tp|tP)$",
          fnc: 'hltp'
        }, 
        {
          reg: "^#?(胡桃)(图片||tp|TP|Tp|tP)$",
          fnc: 'http'
        },
        {
          reg: "^#?(头像)(图片||tp|TP|Tp|tP)$",
          fnc: 'txttp'
        }, 
        {
          reg: "^#?(随机米哈游)(图片||tp|TP|Tp|tP)$",
          fnc: 'sjmhytp'
        },
        {
          reg: "^#?(真寻|欧尼|zx|ZX|Zx|zX)(酱|j|J)?(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'zxbz'
        },
        {
          reg: "^#?(二次元|二次元)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'ecybz'
        },
        {
          reg: "^#?(原神)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'ysbz1'          
        }, 
        {
          reg: "^#?(原神)(壁纸2|壁纸2|Bz2|bZ2|BZ2|bz2)$",
          fnc: 'ysbz2'          
        }, 
        {
          reg: "^#?(萌版)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'mbbz'          
        }, 
        {
          reg: "^#?(风景)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'fjbz'          
        },
        {
          reg: "^#?(随机)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'sjbz'          
        }, 
        {
          reg: "^#?(随机白底)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'sjbdbz'          
        },  
        {
          reg: "^#?(崩坏3)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'bhbz'          
        },
        {
          reg: "^#?(小姐姐)(壁纸|壁纸|Bz|bZ|BZ|bz)$",
          fnc: 'xjjbz'          
        }, 
        {
              reg: '^#?(脆脆鲨扩展)(壁纸)?(帮助|help|菜单|使用说明)$',
              fnc: 'BZhelp'         
        }]
    })
}

	async sjtp(e) {
        console.log("用户命令：", e.msg);
       
        let url = `https://t.mwm.moe/mp`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
    }
    async mbtp(e) {
        console.log("用户命令：", e.msg);
       
        let url = `https://t.mwm.moe/moemp`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
    }
    async ystp(e) {
        console.log("用户命令：", e.msg);
       
        let url = `https://t.mwm.moe/ysmp`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
     }
     async hltp(e) {
        console.log("用户命令：", e.msg);
       
        let url = `https://t.mwm.moe/xhl`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
     }
     async http(e) {
        console.log("用户命令：", e.msg);
       
        let url = `https://t.mwm.moe/lai`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
     }
     async txtp(e) {
        console.log("用户命令：", e.msg);
       
        let url = `https://t.mwm.moe/tx`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
     }
     async sjmhytp(e) {
        console.log("用户命令：", e.msg);
       
        let url = `http://mztp.asia/img.php`;
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.image(res.url)];
        e.reply(msg);
        return true; 
     }
     async zxbz(e) {
      console.log("用户命令：", e.msg);
     
     //此api中的图片可以前往 https://gitee.com/SHIKEAIXY/zhenxun-wallpaper-picture 下载
      let url = `https://mahiro.tianyisama.tk`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }
  async ecybz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/ycy`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }
      async ysbz1(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/ysz`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }
  async ysbz2(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/ys`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }
  async mbbz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/moe`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }    
  async fjbz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/fj`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }
  async sjbz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/pc`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }    
  async sjbdbz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://t.mwm.moe/bd`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }        
  async bhbz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://api.dreamofice.cn/hoyorandom/img`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  } 
  async xjjbz(e) {
      console.log("用户命令：", e.msg);
     
      let url = `https://api.btstu.cn/sjbz/api.php`;
      let res = await fetch(url).catch((err) => logger.error(err));
      let msg = [segment.image(res.url)];
      e.reply(msg);
      return true; 
  }
  async BZhelp(e) {
    const imgreply = 'plugins/Jinmaocuicuisha-plugin/Resources/help/BZhelp.jpg';
    logger.info('[BZhelp]', e.msg)
    let msg = [
      imgreply ? segment.image(imgreply) : "",
    ]
    e.reply(msg)
    return true;
  }     
}
