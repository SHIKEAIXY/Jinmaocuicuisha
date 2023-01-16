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
            name: '云崽功能管理',
            dsc: '功能禁用启用管理',
            event: 'message',
            priority: -300,
            rule: [
                {
                    reg: '^#?(全局禁用列表)$',
                    fnc: 'Ftdalllb',
                },
                {
                    reg: '^#?(白名单列表)$',
                    fnc: 'BFtdalllb',
                },
                {
                    reg: '^#?(清空全局禁用)$',
                    fnc: 'QFtdall',
                },
                {
                    reg: '^#?(清空白名单)$',
                    fnc: 'QBFtdall',
                },
                {
                    reg: '^#?(设置|删除)白名单.*$',
                    fnc: 'BFtdall',
                },
                {
                    reg: '^#?全局(禁用|启用).*$',
                    fnc: 'Ftdall',
                }
            ],
        });
    };

    async QFtdall(e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`你没有权限！`);return false;}

        if(e.msg.includes('清空全局禁用')){
        let data=await Yaml.getread(禁用)
        let All = [];
        data.default.disable = All;
        await Yaml.getwrite(禁用,data)
        return e.reply(`已清空全局禁用！`)
        }
    }

    async QBFtdall(e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`你没有权限！`);return false;}

        if(e.msg.includes('清空白名单')){
        let data=await Yaml.getread(禁用)
        let All = [];
        data.default.enable = All;
        await Yaml.getwrite(禁用,data)
            return e.reply(`已清空白名单！`)
        }
    }

    async BFtdalllb (e) {

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
        message: '已设置白名单的功能\n可使用【删除白名单+(序号)】启用对应功能'
      }
    ]
    let data=await Yaml.getread(禁用)
    let All = data.default.enable;
    let msg=[]
    logger.info(All)
    if(All==null||All.length==0){return e.reply('没有白名单功能呢~')}
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
      .replace(/___+/, `<title color="#777777" size="26">已设置白名单的功能</title>`)
    return e.reply(forwardMsg)
    }

    async BFtdall(e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`你没有权限！`);return false;}

    let data=await Yaml.getread(禁用)
    let All = data.default.enable;
        if(All==null){All=[];await Yaml.getwrite(禁用,data)}
            if(e.msg.includes('设置白名单')){
            let 功能 = e.msg.replace(/#|设置|删除|白名单/g,'')
            if(功能==All){return e.reply('该功能已在白名单列表！')}
            if(!功能){return e.reply('要设置白名单的功能名字呢？')}
            All.push(功能)
            await Yaml.getwrite(禁用,data)
            return e.reply(`功能【${功能}】设置白名单成功！`)
            }

            if(e.msg.includes('删除白名单')){
            let num = e.msg.match(/\d+/)
            if (!num) {return  e.reply('序号呢？不知道的话可以用指令【白名单列表】查看下功能对应的序号哦~')}
            let 恢复=All[num-1]
            if(!恢复){return e.reply('错误序号，请使用指令【白名单列表】查看一下序号是否正确，或者检查【白名单列表】是否为空！')}
            await All.splice(All.indexOf(恢复), 1)
            await Yaml.getwrite(禁用,data)
            await e.reply('删除成功~')
        }
    }

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

    let data=await Yaml.getread(禁用)
    let All = data.default.disable;
        if(All==null){All=[];await Yaml.getwrite(禁用,data)}
            if(e.msg.includes('全局禁用')){
            let 功能 = e.msg.replace(/#|全局|禁用|启用/g,'')
            if(功能==All){return e.reply('该功能已禁用！')}
            if(!功能){return e.reply('要禁用的功能名字呢？')}
            All.push(功能)
            await Yaml.getwrite(禁用,data)
            return e.reply(`功能【${功能}】禁用成功！`)
            }

            if(e.msg.includes('全局启用')){
            let num = e.msg.match(/\d+/)
            if (!num) {return  e.reply('序号呢？不知道的话可以用指令【全局禁用列表】查看下功能对应的序号哦~')}
            let 恢复=All[num-1]
            if(!恢复){return e.reply('错误序号，请使用指令【全局禁用列表】查看一下序号是否正确，或者检查【全局禁用列表】是否为空！')}
            await All.splice(All.indexOf(恢复), 1)
            await Yaml.getwrite(禁用,data)
            await e.reply('启用成功~')
        }
    }
};

