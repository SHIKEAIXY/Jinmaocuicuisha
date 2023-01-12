import plugin from '../../../lib/plugins/plugin.js';
import { segment } from "oicq";
import fetch from 'node-fetch'
import { execSync } from 'child_process'
import fs from 'fs'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import { Cfg, Common, Plugin_Name } from '../components/index.js'
const _path = process.cwd();

let path ='./plugins/Jinmaocuicuisha-plugin/Cfg/绝对主人/绝对主人.yaml'
let 禁用 = './config/config/group.yaml';

export class Featuredisabled extends plugin {
    constructor() {
        super({
            name: '功能禁用',
            dsc: '功能禁用',
            event: 'message',
            priority: -114514,
            rule: [
                {
                    reg: '^#?(全局禁用列表)$',
                    fnc: 'Ftdalllb',
                },
                {
                    reg: '^#?(本群禁用列表)$',
                    fnc: 'Ftdgrouplb',
                },
                {
                    reg: '^#?全局(禁用|启用).*$',
                    fnc: 'Ftdall',
                }
            ],
        });
    };

    async Ftdalllb (e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`你没有权限！`);return false;}

    let nickname = Bot.nickname
    if (this.e.isGroup) {
      let info = await Bot.getGroupMemberInfo(this.e.group_id, Bot.uin)
      nickname = info.card ?? info.nickname
    }
    let userInfo = {
      user_id: Bot.uin,
      nickname
    }
    let forwardMsg = [
      {
        ...userInfo,
        message: '全局已禁用的功能\n可使用【全局启用+(序号)】启用对应功能'
      }
    ]
    let data=await Yaml.getread(禁用)
    let All = data.default.disable;
    let msg=[]
    logger.info(All)
    if(All==null||All.length==0){return e.reply('没有禁用功能呢~')}
    for (let v = 0; v < All.length; v++) {
      msg.push(`${v+1}.`+All[v]+'\n')
    }
    forwardMsg.push(
          {
            ...userInfo,
            message: msg
          }
        )
    if (this.e.isGroup) {
      forwardMsg = await this.e.group.makeForwardMsg(forwardMsg)
    } else {
      forwardMsg = await this.e.friend.makeForwardMsg(forwardMsg)
    }
    forwardMsg.data = forwardMsg.data
      .replace(/\n/g, '')
      .replace(/<title color="#777777" size="26">(.+?)<\/title>/g, '___')
      .replace(/___+/, `<title color="#777777" size="26">全局已禁用的功能</title>`)
    return e.reply(forwardMsg)
    }

    async Ftdall(e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`你没有权限！`);return false;}

    let nickname = Bot.nickname
    if (this.e.isGroup) {
      let info = await Bot.getGroupMemberInfo(this.e.group_id, Bot.uin)
      nickname = info.card ?? info.nickname
    }
    let userInfo = {
      user_id: Bot.uin,
      nickname
    }
    let forwardMsg = [
      {
        ...userInfo,
        message: '全局已禁用的功能\n可使用【全局启用+(序号)】启用对应功能'
      }
    ]

    let data = await readPluginNames(directory);
    let All = data;
    let msg=[]
    logger.info(All)
    if(All==null||All.length==0){return e.reply('没有禁用功能呢~')}
    for (let v = 0; v < All.length; v++) {
      msg.push(`${v+1}.`+All[v]+'\n')
    }
    forwardMsg.push(
          {
            ...userInfo,
            message: msg
          }
        )
    if (this.e.isGroup) {
      forwardMsg = await this.e.group.makeForwardMsg(forwardMsg)
    } else {
      forwardMsg = await this.e.friend.makeForwardMsg(forwardMsg)
    }
    forwardMsg.data = forwardMsg.data
      .replace(/\n/g, '')
      .replace(/<title color="#777777" size="26">(.+?)<\/title>/g, '___')
      .replace(/___+/, `<title color="#777777" size="26">全局已禁用的功能</title>`)
    return e.reply(forwardMsg)
    }

};

    function readPluginNames(directory) {
    let pluginNames = [];
    fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.js')) {
    pluginNames.push(file.slice(0, -3));
    }
    });
    return pluginNames;
}
