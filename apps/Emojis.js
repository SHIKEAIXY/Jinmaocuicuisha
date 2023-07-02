import plugin from "../../../lib/plugins/plugin.js"
import fetch from 'node-fetch';
import lodash from 'lodash'
const key = 'UDXaG8Th9jS28HOFPrzkjtOvoY';//可以使用你自己申请的key，http://api.caonm.net登录账号-控制台-申请即可（免费）

export class Jinmaocuicuisha_Emojis extends plugin {
    constructor () {
      super({
        name: 'CcsEmojis',
        dsc: '脆脆鲨制作表情包',
        event: 'message',
        priority: -5000,
        rule: [
          {
            reg: '^#?脆脆鲨表情包帮助(.*)$',
            fnc: 'ccsbqb'         
          },
              {
                reg: '^#?坤斗罗(.*)$',
                fnc: 'kdl'         
              },
              {
                reg: '^#?没业务(.*)$',
                fnc: 'myw'         
              },
              {
                reg: '^#?坤坤打篮球(.*)$',
                fnc: 'kkdlq'         
              },
              {
                reg: '^#?美女电视(.*)$',
                fnc: 'mnds'         
              },
              {
                reg: '^#?处男证(.*)$',
                fnc: 'cnz'         
              },
              {
                reg: '^#?泡妞证(.*)$',
                fnc: 'pnz'         
              },
              {
                reg: '^#?好夫妻证(.*)$',
                fnc: 'hfqz'         
              },
              {
                reg: '^#?女汉子证(.*)$',
                fnc: 'nhzz'         
              },
              {
                reg: '^#?光棍证(.*)$',
                fnc: 'ggz'         
              },
              {
                reg: '^#?老司机证(.*)$',
                fnc: 'lsjz'         
              },
              {
                reg: '^#?屌丝证(.*)$',
                fnc: 'dsz'         
              },
              {
                reg: '^#?美女证(.*)$',
                fnc: 'mnz'         
              },
              {
                reg: '^#?帅哥证(.*)$',
                fnc: 'sgz'         
              },
              {
                reg: '^#?首富证(.*)$',
                fnc: 'sfz'         
              },
              {
                reg: '^#?订婚证(.*)$',
                fnc: 'dhz'         
              },
              {
                reg: '^#?白富美证(.*)$',
                fnc: 'bfmz'         
              },
              {
                reg: '^#?犯毒(.*)$',
                fnc: 'fd'         
              },
              {
                reg: '^#?哭(.*)$',
                fnc: 'k'         
              },
              {
                reg: '^#?卧倒(.*)$',
                fnc: 'wd'         
              },
              {
                reg: '^#?彩遗(.*)$',
                fnc: 'cy'         
              },
              {
                reg: '^#?精神支柱(.*)$',
                fnc: 'jszz'         
              },
              {
                reg: '^#?踹门(.*)$',
                fnc: 'cm'         
              },
              {
                reg: '^#?需要他(.*)$',
                fnc: 'xyt'         
              },
              {
                reg: '^#?垃圾桶(.*)$',
                fnc: 'ljt'         
              },
              {
                reg: '^#?芙蓉王(.*)$',
                fnc: 'frw'         
              },
              {
                reg: '^#?女同(.*)$',
                fnc: 'nt'         
              },
              {
                reg: '^#?报警(.*)$',
                fnc: 'bj'         
              },
              {
                reg: '^#?疯狂星期四(.*)$',
                fnc: 'fkxqs'         
              },
              {
                reg: '^#?包夜多少钱(.*)$',
                fnc: 'by'         
              },
              {
                reg: '^#?体操服举牌(.*)$',
                fnc: 'tcfjp'         
              },
              {
                reg: '^#?技能(.*)$',
                fnc: 'jn'         
              },
              {
                reg: '^#?(GKD卡|gkd卡)(.*)$',
                fnc: 'gkdk'         
              },
              {
                reg: '^#?沙雕(.*)$',
                fnc: 'sdl'         
              },
              {
                reg: '^#?来床上(.*)$',
                fnc: 'lcs'         
              },
              {
                reg: '^#?啊(.*)$',
                fnc: 'aby'         
              },
              {
                reg: '^#?男同(.*)$',
                fnc: 'nant'         
              },
              {
                reg: '^#?陪睡券(.*)$',
                fnc: 'sjq'         
              },
              {
                reg: '^#?动漫画画(.*)$',
                fnc: 'dmhh'         
              },
              {
                reg: '^#?每次都有你(.*)$',
                fnc: 'lsdmcdyn'         
              },
                            {
                reg: '^#?不要靠近我(.*)$',
                fnc: 'nokj'         
              },
              {
                reg: '^#?看见我的狗了吗(.*)$',
                fnc: 'kjwdglm'         
              },
              {
                reg: '^#?演员证(.*)$',
                fnc: 'yanyz'         
              },
              {
                reg: '^#?大佬(.*)$',
                fnc: 'dalao'         
              },
              {
                reg: '^#?发生了什么(.*)$',
                fnc: 'fslsm'         
              },
              {
                reg: '^#?原神启动(.*)$',
                fnc: 'ysqd'         
              },
              {
                reg: '^#?安全感(.*)$',
                fnc: 'anqg'         
              },
              {
                reg: '^#?摄影师(.*)$',
                fnc: 'sysgzz'         
              },
              {
                reg: '^#?汤姆看电视(.*)$',
                fnc: 'tmkds'         
              },
              {
                reg: '^#?榨精卡(.*)$',
                fnc: 'zhajk'         
              },
              {
                reg: '^#?坤巴卡(.*)$',
                fnc: 'kunbk'         
              },
              {
                reg: '^#?涩涩卡(.*)$',
                fnc: 'sesk'         
              },
              {
                reg: '^#?完美(.*)$',
                fnc: 'wanmei'         
              },
              {
                reg: '^#?骗子(.*)$',
                fnc: 'pianzi'         
              },
              {
                reg: '^#?撸管冠军(.*)$',
                fnc: 'lggjun'         
              },
              {
                reg: '^#?踢足球(.*)$',
                fnc: 'tizq'         
              },
              {
                reg: '^#?诈尸(.*)$',
                fnc: 'zhashi'         
              },
              {
                reg: '^#?紫砂(.*)$',
                fnc: 'zisha'         
              },
              {
                reg: '^#?回旋踢(.*)$',
                fnc: 'hxti'         
              },
              {
                reg: '^#?撕(.*)$',
                fnc: 'si'         
              },
            ]
            })
        }

        async ccsbqb(e) {
          let text = "脆脆鲨表情包使用介绍：\n\n\n#功能+at人\n如：#坤斗罗@脆脆鲨\n\n以下是可用的功能\n#坤斗罗，#没业务， #坤坤打篮球，#美女电视，#处男证，#泡妞证，#好夫妻证，#女汉子证，#光棍证，#老司机证，#屌丝证，#美女证，#帅哥证, #首富证, #订婚证, #白富美证, #犯毒, #哭, #卧倒, #彩遗，#精神支柱，#踹门，#需要他，#垃圾桶，#芙蓉王，#女同，#报警，#疯狂星期四，#包夜多少钱，#体操服举牌，#技能, #GKD卡，#沙雕，#来床上，#啊，#男同，#陪睡券，#动漫画画，#每次都有你，#不要靠近我，#看见我的狗了吗，#演员证，#大佬，#发生了什么，#原神启动，#安全感，#摄影师，#汤姆看电视，#榨精卡，#坤巴卡，#涩涩卡，#完美，#骗子，#撸管冠军，#踢足球，#诈尸，#紫砂，#回旋踢，#撕";
          let msg = [
          text
        ];
          e.reply(msg);
          return true;
        }
        async cm(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zt/ti_2?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async jszz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zt/jing?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async cy(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zt/ji?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async wd(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/lian/api?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async k(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/bzk/index?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async fd(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/duy/d?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async bfm(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c3?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async dhz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c4?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async sfz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c5?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async sgz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c6?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async mnz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c7?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async dsz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c8?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async kdl(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/ikun/a?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async myw(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/yewu/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async kkdlq(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/ikun/ikun?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async mnds(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/dsjp/j?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async cnz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c30?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async pnz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c14?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
          async hfqz(e) {
            console.log("用户命令：", e.msg);
            let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
            if (lodash.isEmpty(qq)) {
              qq = e.msg.match(/\d+/g)
            }
            if (!qq) qq = e.user_id;
            let url = `http://api.caonm.net/api/zhen/c13?qq=${qq}&qq2=${qq}&key=${key}`;
            let res = await fetch(url).catch((err) => logger.error(err));
            let msg = [segment.image(res.url)];
            e.reply(msg);
            return true; 
          }
        async nhzz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c12?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async ggz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c11?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async lsjz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhen/c10?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async xyt(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
       }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zt/need?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async ljt(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/ljt/l?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async frw(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/yan/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async nt(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c66?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async bj(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/baon/1?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async fkxqs(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/kfc/50?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async by(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/guoy/g?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async tcfjp(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/jupai/m?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async jn(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/jineng/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async sdl(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c9?q=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async lcs(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c8?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async aby(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c7?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async nant(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c7?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async sjq(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c5?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async dmhh(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c4?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async lsdmcdyn(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c3?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async gkdk(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/kapian/c5?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
                async nokj(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c2?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async kjwdglm(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async yanyz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/madou/c2?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async dalao(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/c14?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async fslsm(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/asc/wt?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async ysqd(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/op/o?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async anqg(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/anqg/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async sysgzz(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/madou/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async tmkds(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/tmgx/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async zhajk(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/kapian/c3?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async kunbk(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/kapian/c2?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async sesk(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/kapian/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async wanmei(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/meiyou/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async pianzi(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/pianzi/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async lggjun(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/daoguan/c?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async tizq(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/tiqiu/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async zhashi(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/zhas/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async zisha(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/shangd/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
          async yijiao(e) {
            console.log("用户命令：", e.msg);
            let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
            if (lodash.isEmpty(qq)) {
              qq = e.msg.match(/\d+/g)
            }
            if (!qq) qq = e.user_id;
            let url = `http://api.caonm.net/api/zjyj/y?qq=${qq}&qq2=${qq}&key=${key}`;
            let res = await fetch(url).catch((err) => logger.error(err));
            let msg = [segment.image(res.url)];
            e.reply(msg);
            return true; 
          }
        async hxti(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/tmcw/y?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
        async si(e) {
          console.log("用户命令：", e.msg);
          let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
          if (lodash.isEmpty(qq)) {
            qq = e.msg.match(/\d+/g)
          }
          if (!qq) qq = e.user_id;
          let url = `http://api.caonm.net/api/sit/s?qq=${qq}&key=${key}`;
          let res = await fetch(url).catch((err) => logger.error(err));
          let msg = [segment.image(res.url)];
          e.reply(msg);
          return true; 
        }
}

