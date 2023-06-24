//由于api提供商特殊 此功能为测试功能 不定期进行调整
import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
const key = 'UDXaG8Th9jS28HOFPrzkjtOvoY';

export class 脆脆鲨测试功能 extends plugin {
    constructor () {
      super({
        name: 'CcsWallTKpaper',
        dsc: '脆脆鲨扩展tk壁纸功能',
        event: 'message',
        priority: -500,
        rule: [
              {
                reg: '^#?(测试功能ip)$',
                fnc: '脆脆鲨测试功能ip'         
              },
              {
                reg: '^#?(测试功能原神)$',
                fnc: '脆脆鲨测试功能原神'         
              },
              {
                reg: '^#?(测试功能美女)$',
                fnc: '脆脆鲨测试功能美女'         
              },
              {
                reg: '^#?(测试功能白丝)$',
                fnc: '脆脆鲨测试功能白丝'         
              },
              {
                reg: '^#?(测试功能黑丝)$',
                fnc: '脆脆鲨测试功能黑丝'         
              },
              {
                reg: '^#?(测试功能日历)$',
                fnc: '脆脆鲨测试功能日历'         
              },
              {
                reg: '^#?(测试功能动漫)$',
                fnc: '脆脆鲨测试功能动漫'         
              },
              {
                reg: '^#?(测试功能小c)$',
                fnc: '脆脆鲨测试功能小c'         
              },
              {
                reg: '^#?(测试功能日期)$',
                fnc: '脆脆鲨测试功能日期'         
              },
              {
                reg: '^#?(测试功能猫猫)$',
                fnc: '脆脆鲨测试功能猫猫'         
              },
              {
                reg: '^#?(测试功能滑稽)$',
                fnc: '脆脆鲨测试功能滑稽'         
              },
              {
                reg: '^#?(测试功能爱坤)$',
                fnc: '脆脆鲨测试功能爱坤'         
              },]
    })
}
async 脆脆鲨测试功能ip(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/IP/1?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能原神(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/ys/t?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能美女(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/mnt/index?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能白丝(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/bhs/b?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能日历(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/ri/li?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能动漫(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/dm/index?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能小c(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/xc/index?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能日期(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/huac/h?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能猫猫(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/chai/c?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能滑稽(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/long/l?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}

async 脆脆鲨测试功能爱坤(e) {
  console.log("用户命令：", e.msg);
 
  let url = `http://api.caonm.net/api/kun/k?key=${key}`;
  let res = await fetch(url).catch((err) => logger.error(err));
  let msg = [segment.image(res.url)];
  e.reply(msg);
  return true; 
}
}