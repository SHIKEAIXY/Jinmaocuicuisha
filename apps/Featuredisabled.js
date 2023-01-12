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
                },
                {
                    reg: '^#?本群(禁用|启用).*$',
                    fnc: 'Ftdgroup',
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

        let data = await Yaml.getread(禁用);
        let All = data.default.disable;
        if(All==null){All=[]};
            if(e.msg.includes('全局禁用')){
                let 功能 = e.msg.replace(/#|全局禁用|启用/g,'');
                if(功能==All){return e.reply('该功能已禁用！请不要重复操作！')};
                if(!功能){return e.reply('要全局禁用的功能呢？')};
                All.push(功能);
                await Yaml.getwrite(禁用, data);
                let msgres = [segment.at(e.user_id), `【${e.msg}】已成功禁用！如要查看全局禁用功能可以使用指令【全局禁用列表】来查看哦~(如果禁用失败请重启试试)`];
                await e.reply(msgres);
                return false;
            }

            if(e.msg.includes('全局启用')){
            let num = e.msg.match(/\d+/)
                if (!num) {
                return  e.reply('序号呢？不知道的话可以通过指令【全局禁用列表】来查看哦~')
                }
                let 恢复=All[num-1]
                if(!恢复){return e.reply('请使用指令【全局禁用列表】，检查序号是否正确，或者检查【全局禁用列表】是否是空的！')}
                await All.splice(All.indexOf(恢复), 1)
                await Yaml.getwrite(禁用,data)
                await e.reply('该功能已成功启用~(如果启用失败请重启试试)')
            }
    }

    async Ftdgrouplb (e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    if (!e.isGroup) {e.reply(`请在要禁用功能的群里使用！`);return false;}

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
        message: '本群已禁用的功能\n可使用【本群启用+(序号)】启用对应功能'
      }
    ]
    let data=await Yaml.getread(禁用)
    let groupids = e.group_id;
    groupids.push(功能);
    await Yaml.getwrite(禁用, data);

    let disable = disable;
    disable.push(功能);
    await Yaml.getwrite(禁用, data);
    
    let data=await Yaml.getread(禁用)
    let group = data.groupids.disable;
    let msg=[]
    logger.info(group)
    if(group==null||group.length==0){return e.reply('本群没有禁用功能呢~')}
    for (let v = 0; v < group.length; v++) {
      msg.push(`${v+1}.`+group[v]+'\n')
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
      .replace(/___+/, `<title color="#777777" size="26">本群已禁用的功能</title>`)
    return e.reply(forwardMsg)
    }

    async Ftdgroup(e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    if (!e.isGroup) {e.reply(`请在要禁用功能的群里使用！`);return false;}

        let data = await Yaml.getread(禁用);
        let groupids = e.group_id;
        let group = data.groupids.disable;
        if(group==null){group=[]};
            if(e.msg.includes('本群禁用')){
                let 功能 = e.msg.replace(/#|本群禁用|启用/g,'');
                if(功能==group){return e.reply('该功能本群已禁用！请不要重复操作！')};
                if(!功能){return e.reply('要禁用的功能呢？')};
                group.push(功能);
                await Yaml.getwrite(禁用, data);
                let msgres = [segment.at(e.user_id), `【${e.msg}】已成功禁用！如要查看本群禁用功能可以使用指令【本群禁用列表】来查看哦~(如果禁用失败请重启试试)`];
                await e.reply(msgres);
                return false;
            }

            if(e.msg.includes('本群启用')){
            let num = e.msg.match(/\d+/)
                if (!num) {
                return  e.reply('序号呢？不知道的话可以通过指令【本群禁用列表】来查看哦~')
                }
                let 恢复=group[num-1]
                if(!恢复){return e.reply('请使用指令【本群禁用列表】，检查序号是否正确，或者检查【本群禁用列表】是否是空的！')}
                await group.splice(group.indexOf(恢复), 1)
                await Yaml.getwrite(禁用,data)
                await e.reply('该功能已成功启用~(如果启用失败请重启试试)')
            }
    }

};