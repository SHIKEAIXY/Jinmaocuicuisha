//api使用的是第三方的寄了就删掉这个功能
import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import lodash from 'lodash'
const key = 'UDXaG8Th9jS28HOFPrzkjtOvoY';//可以使用你自己申请的key，http://api.caonm.net登录账号-控制台-申请即可（免费）

export class Jinmaocuicuisha_Emojis extends plugin {
    constructor () {
      super({
        name: 'CcsEmojis',
        dsc: '制作表情包',
        event: 'message',
        priority: -5000,
        rule: [
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
                reg: '^#?背刺(.*)$',
                fnc: 'cb'         
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
                reg: '^#?仙女证(.*)$',
                fnc: 'xnz'         
              }]
            })
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
              async cb(e) {
                console.log("用户命令：", e.msg);
                let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
                if (lodash.isEmpty(qq)) {
                  qq = e.msg.match(/\d+/g)
                }
                if (!qq) qq = e.user_id;
                let url = `http://api.caonm.net/api/bei/b?qq=${qq}&qq2=${qq}&key=${key}`;
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
              async xnz(e) {
                console.log("用户命令：", e.msg);
                let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
                if (lodash.isEmpty(qq)) {
                  qq = e.msg.match(/\d+/g)
                }
                if (!qq) qq = e.user_id;
                let url = `http://api.caonm.net/api/zhen/c19?qq=${qq}&key=${key}`;
                let res = await fetch(url).catch((err) => logger.error(err));
                let msg = [segment.image(res.url)];
                e.reply(msg);
                return true; 
              }}