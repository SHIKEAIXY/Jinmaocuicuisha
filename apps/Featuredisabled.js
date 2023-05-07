import plugin from '../../../lib/plugins/plugin.js';
import loader from "../../../lib/plugins/loader.js";
import fetch from 'node-fetch'
import { execSync } from 'child_process'
import fs from 'fs'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import { Cfg, Common, Plugin_Name } from '../components/index.js'
import moment from "moment";

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
                    reg: "^#?插件名$",
                    fnc: "Featuredisabled",
                },
                {
                    reg: '^#?(全局禁用列表)$',
                    fnc: 'Ftdalllb',
                },
                {
                    reg: '^#?全局(白名单列表)$',
                    fnc: 'BFtdalllb',
                },
                {
                    reg: '^#?本群(白名单列表)$',
                    fnc: 'Bqaslllb',
                },
                {
                    reg: '^#?(本群禁用列表)$',
                    fnc: 'FallLb',
                },
                {
                    reg: '^#?(清空全局禁用)$',
                    fnc: 'QFtdall',
                },
                {
                    reg: '^#?(全局清空白名单)$',
                    fnc: 'QBFtdall',
                },
                {
                    reg: '^#?(本群启用白名单|本群启用禁用)$',
                    fnc: 'BqallTs',
                },
                {
                    reg: '^#?全局(设置|删除)白名单.*$',
                    fnc: 'BFtdall',
                },
                {
                    reg: '^#?(设置|删除)本群白名单.*$',
                    fnc: 'Bqasll',
                },
                {
                    reg: '^#?全局(禁用|启用).*$',
                    fnc: 'Ftdall',
                },
                {
                    reg: '^#?本群(禁用|启用).*$',
                    fnc: 'Kmax',
                }
            ],
        });
    };

    async Featuredisabled() {

    if(!this.e.isMaster){ return this.reply('对不起你没有权限！');}
        let pluginList = []
        let plugins = []
        loader.priority.forEach(v => {
        let p = new v.class()
        pluginList.push(p)
        })
        for (let plugin of pluginList) {
            if (!plugin.rule) { continue }
            let command = []
            for (let v of plugin.rule) {
            command.push(v.reg)
            }
        plugins.push([`插件名字: \n${plugin.name}`,`插件指令: \n${command.join('\n')|| '无'}`])}
    await this.sendMessageArray(plugins)
    return true;
    }   

    async sendMessageArray(MessageArray, quote = false, data = {}){
        let MsgArray = []
        let i = 1
        let result
        for (let messageArrayElement of MessageArray) {
        if (MsgArray.length >= 99){
            MsgArray.push(`第${i.toString()}页...未完待续`)
            result = await this.sendByForwardMsg(MsgArray)
            i++
            MsgArray = []
            }
        MsgArray.push(messageArrayElement.join('\n'))
        }
        if (MsgArray){
            MsgArray.push(`第${i.toString()}页，共${i.toString()}页`)
            result = await this.sendByForwardMsg(MsgArray)
        }
        return result
    }
    
    async sendByForwardMsg(MsgArray){
        let massage = []
        for (let msgArrayElement of MsgArray) {massage.push({
            message: msgArrayElement,
            nickname: Bot.nickname,
            user_id: Bot.uin
        })}
        let forwardMsg = await Bot.makeForwardMsg(massage);
        return await this.e.reply(forwardMsg, false, {recallMsg:0})
    }

    async BqallTs(e) {

        if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
        let mst = await Yaml.getread(path)
        let 主人权限 = mst.绝对主人;
        if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}
    
        if(e.msg.includes('本群启用白名单')){
            let data=await Yaml.getread(禁用)
            console.log(data)
            data[e.group_id] = { enable: ["云崽功能管理", ], disable: null };
            await Yaml.getwrite(禁用,data)
            return e.reply(`已清空本群禁用功能！`)
        }
        if(e.msg.includes('本群启用禁用')){
            let data=await Yaml.getread(禁用)
            console.log(data)
            data[e.group_id] = { enable: null, disable: [] };
            await Yaml.getwrite(禁用,data)
            return e.reply(`已清空本群白名单功能！`)
        }
    }

    async Bqaslllb (e) {

        if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
        let mst = await Yaml.getread(path)
        let 主人权限 = mst.绝对主人;
        if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}
    
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
            message: '本群已设置白名单的功能\n可使用【删除本群白名单+(序号)】启用对应功能'
          }
        ]
        let data=await Yaml.getread(禁用)
        let All = data[e.group_id].enable;
        let msg=[]
        logger.info(All)
        if(All==null||All.length==0){return e.reply('本群没有白名单功能呢~')}
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
          .replace(/___+/, `<title color="#777777" size="26">本群已设置白名单的功能</title>`)
        return e.reply(forwardMsg)
        }
    
    async Bqasll(e) {
    
        if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
        let mst = await Yaml.getread(path)
        let 主人权限 = mst.绝对主人;
        if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}
    
        let data=await Yaml.getread(禁用)
        if (!data[e.group_id]) {data[e.group_id] = { disable: [] }}
        console.log(data)
        let All = data[e.group_id].enable;
            if(All==null){All=[];await Yaml.getwrite(禁用,data)}
                if(e.msg.includes('设置本群白名单')){
                let 功能 = e.msg.replace(/#|本群|设置|删除|白名单/g,'')
                if(功能==All){return e.reply('该功能已在本群白名单列表！')}
                if(!功能){return e.reply('要在本群设置白名单的功能名字呢？')}
                All.push(功能)
                await Yaml.getwrite(禁用,data)
                return e.reply(`功能【${功能}】设置本群白名单成功！`)
                }
    
                if(e.msg.includes('删除本群白名单')){
                let num = e.msg.match(/\d+/)
                if (!num) {return  e.reply('序号呢？不知道的话可以用指令【本群白名单列表】查看下功能对应的序号吧~')}
                let 恢复=All[num-1]
                if(!恢复){return e.reply('序号输入错误，请使用指令【本群白名单列表】来查看具体序号，或者检查【本群白名单列表】是否为空！')}
                await All.splice(All.indexOf(恢复), 1)
                await Yaml.getwrite(禁用,data)
                await e.reply('本群白名单删除成功~')
            }
        }

    async Kmax(e) {

    if (!e.isMaster) {return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){return false;}
    
        let data=await Yaml.getread(禁用)
        if (!data[e.group_id]) {data[e.group_id] = { disable: [] }}
        console.log(data)
        let All = data[e.group_id].disable;
        if(All==null){All=[];await Yaml.getwrite(禁用,data)}
            if(e.msg.includes('本群禁用')){
            let 功能 = e.msg.replace(/#|本群|禁用|启用/g,'')
            if(功能==All){return e.reply('该功能已禁用！')}
            if(!功能){return e.reply('要禁用的功能名字呢？')}
            All.push(功能)
            await Yaml.getwrite(禁用,data)
            return e.reply(`功能【${功能}】已经成功禁用！`)
            }
    
            if(e.msg.includes('本群启用')){
            let num = e.msg.match(/\d+/)
            if (!num) {return  e.reply('序号呢？不知道的话可以用指令【本群禁用列表】查看下功能对应的序号哦~')}
            let 恢复=All[num-1]
            if(!恢复){return e.reply('错误序号，请使用指令【本群禁用列表】查看一下序号是否正确，或者检查【本群禁用列表】是否为空！')}
            await All.splice(All.indexOf(恢复), 1)
            await Yaml.getwrite(禁用,data)
            await e.reply('启用成功~')
        }
    }

    async FallLb (e) {

        if (!e.isMaster) {return false;}
        let mst = await Yaml.getread(path)
        let 主人权限 = mst.绝对主人;
        if (!(this.e.user_id==主人权限)){return false;}
    
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
        let data=await Yaml.getread(禁用);
        let All = data[e.group_id].disable;
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
          .replace(/___+/, `<title color="#777777" size="26">本群已禁用的功能</title>`)
        return e.reply(forwardMsg)
    }

    async QFtdall(e) {

    if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}

        if(e.msg.includes('清空全局禁用')){
        let data=await Yaml.getread(禁用)
        console.log(data)
        let All = [];
        data.default.disable = All;
        await Yaml.getwrite(禁用,data)
        return e.reply(`已清空全局禁用！`)
        }
    }

    async QBFtdall(e) {

    if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}

        if(e.msg.includes('全局清空白名单')){
        let data=await Yaml.getread(禁用)
        console.log(data)
        let All = [];
        data.default.enable = All;
        await Yaml.getwrite(禁用,data)
        return e.reply(`已清空全局白名单！`)
        }
    }

    async BFtdalllb (e) {

    if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}

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
        message: '已全局设置白名单的功能\n可使用【全局删除白名单+(序号)】启用对应功能'
      }
    ]
    let data=await Yaml.getread(禁用)
    let All = data.default.enable;
    let msg=[]
    logger.info(All)
    if(All==null||All.length==0){return e.reply('没有全局白名单功能呢~')}
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
      .replace(/___+/, `<title color="#777777" size="26">已全局设置白名单的功能</title>`)
    return e.reply(forwardMsg)
    }

    async BFtdall(e) {

    if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}

    let data=await Yaml.getread(禁用)
    console.log(data)
    let All = data.default.enable;
        if(All==null){All=[];await Yaml.getwrite(禁用,data)}
            if(e.msg.includes('全局设置白名单')){
            let 功能 = e.msg.replace(/#|全局|设置|删除|白名单/g,'')
            if(功能==All){return e.reply('该功能已在全局白名单列表！')}
            if(!功能){return e.reply('要全局设置白名单的功能名字呢？')}
            All.push(功能)
            await Yaml.getwrite(禁用,data)
            return e.reply(`功能【${功能}】全局设置白名单成功！`)
            }

            if(e.msg.includes('全局删除白名单')){
            let num = e.msg.match(/\d+/)
            if (!num) {return  e.reply('序号呢？不知道的话可以用指令【全局白名单列表】查看下功能对应的序号吧~')}
            let 恢复=All[num-1]
            if(!恢复){return e.reply('序号输入错误，请使用指令【全局白名单列表】来查看具体序号，或者检查【全局白名单列表】是否为空！')}
            await All.splice(All.indexOf(恢复), 1)
            await Yaml.getwrite(禁用,data)
            await e.reply('全局白名单删除成功~')
        }
    }

    async Ftdalllb (e) {

    if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}

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

    if (!e.isMaster) {e.reply(`对不起你没有权限！`);return false;}
    let mst = await Yaml.getread(path)
    let 主人权限 = mst.绝对主人;
    if (!(this.e.user_id==主人权限)){e.reply(`对不起你没有权限！`);return false;}

    let data=await Yaml.getread(禁用)
    console.log(data)
    let All = data.default.disable;
        if(All==null){All=[];await Yaml.getwrite(禁用,data)}
            if(e.msg.includes('全局禁用')){
            let 功能 = e.msg.replace(/#|全局|禁用|启用/g,'')
            if(功能==All){return e.reply('该功能已禁用！')}
            if(!功能){return e.reply('要禁用的功能名字呢？')}
            All.push(功能)
            await Yaml.getwrite(禁用,data)
            return e.reply(`功能【${功能}】已经成功禁用！`)
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

