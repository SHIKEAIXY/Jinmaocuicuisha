import plugin from '../../../lib/plugins/plugin.js';
import { segment } from "oicq";
import fs from 'fs'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'

let 绝对主人='./plugins/Jinmaocuicuisha-plugin/Cfg/绝对主人/绝对主人.yaml'
let 主人 = './config/config/other.yaml';
let 禁用 = './config/config/group.yaml';

export class Admin extends plugin {
    constructor() {
        super({
            name: 'Admin',
            dsc: 'Admin',
            event: 'message',
            priority: 1,
            rule: [
                {
                    reg: '^#?设置绝对权限.*$',
                    fnc: 'Mastersetr',
                },
                {
                    reg: '^#?主人列表$',
                    fnc: 'Masterlb',
                },
                {
                    reg: '^#?添加主人.*$',
                    fnc: 'setMaster',
                },
                {
                    reg: '^#?删除主人.*$',
                    fnc: 'delMaster',
                }
            ],
        });
    };

    async Mastersetr(e) {

    if (!this.null==`${Mst}`) {
        if (!(this.e.user_id==`${Mst}`)){
        return false;
        }
    }

    let G = e.message[0].text.replace(/#|添加主人/g, "").trim()
    if(e.message[1]){
    let atItem = e.message.filter((item) => item.type === "at");
    G = atItem[0].qq;
    }else{ G = G.match(/[1-9]\d*/g) }
    if (!G) return e.reply(`请输入正确的QQ号或者艾特对方！`)
    G = parseInt(G);
    let TA = G;

    let 添加绝对主人 = await Yaml.getread(绝对主人);
    添加绝对主人.绝对主人.push(TA);
    await Yaml.getwrite(绝对主人, 添加绝对主人);
    return e.reply(segment.at(e.user_id),`绝对主人权限已添加完成~`)
    return false;
    }

    async Masterlb(e) {

    if (!this.e.isMaster) {
        if (!(this.e.user_id==`${Mst}`)){
        return false;
        }
    }

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
        message: '以下是Bot主人列表QWQ\n可使用【删除主人+(序号)】删除掉对应的主人'
      }
    ]
    let data=await Yaml.getread(主人)
    let msg=[]
    logger.info(data.masterQQ)
    if(data.masterQQ==null||data.masterQQ.length==0){return e.reply('Bot还没有主人呢！')}
    for (let v = 0; v < data.masterQQ.length; v++) {
      msg.push(`${v+1}.`+data.masterQQ[v]+'\n')
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
      .replace(/___+/, `<title color="#777777" size="26">主人列表</title>`)
    return e.reply(forwardMsg)
    }

    async delMaster(e) {

    if (!this.e.isMaster) {
        if (!(this.e.user_id==`${Mst}`)){
        return false;
        }
    }

    let 删除主人 = await Yaml.getread(主人);
    let num = e.msg.match(/\d+/)
    if (!num) {
    return  e.reply('序号呢？请先发送【主人列表】查看下序号')
    }

    let 序号 = 删除主人.masterQQ[num-1]
    if(!序号){return e.reply('请检查序号是否输入正确，或者检查【主人列表】是否有这个人')}
    await 删除主人.masterQQ.splice(删除主人.masterQQ.indexOf(序号), 1)
    await Yaml.getwrite(主人, 删除主人);
    return e.reply(segment.at(e.user_id),`已从列表中删除！可以发送【主人列表】查看哦~`)
    return false;
    }

    async setMaster(e) {

    if (!this.e.isMaster) {
        if (!(this.e.user_id==`${Mst}`)){
        return false;
        }
    }

    let G = e.message[0].text.replace(/#|添加主人/g, "").trim()
    if(e.message[1]){
    let atItem = e.message.filter((item) => item.type === "at");
    G = atItem[0].qq;
    }else{ G = G.match(/[1-9]\d*/g) }
    if (!G) return e.reply(`请输入正确的QQ号或者艾特对方！`)
    G = parseInt(G);
    let TA = G;

    let 添加主人 = await Yaml.getread(主人);
    添加主人.masterQQ.push(TA);
    await Yaml.getwrite(主人, 添加主人);
    return e.reply(segment.at(e.user_id),`已添加进主人列表！可以发送【主人列表】查看哦~`)
    return false;
    }
};