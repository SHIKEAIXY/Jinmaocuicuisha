import plugin from '../../../lib/plugins/plugin.js';
import { segment } from "oicq";
import fetch from 'node-fetch'
import fs from 'fs'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import { Cfg } from '../components/index.js'
const _path = process.cwd();

let path ='./plugins/Jinmaocuicuisha-plugin/Cfg/绝对主人/绝对主人.yaml'
let 主人 = './config/config/other.yaml';

export class Admin extends plugin {
    constructor() {
        super({
            name: 'Admin',
            dsc: 'Admin',
            event: 'message',
            priority: -114514,
            rule: [
                {
                    reg: '^#?删除所有主人$',
                    fnc: 'Qkmster',
                },
                {
                    reg: '^#?设置绝对权限$',
                    fnc: 'Upmaster',
                },
                {
                    reg: '^#?群拉黑列表$',
                    fnc: 'blackGrouplb',
                },
                {
                    reg: '^#?拉黑列表$',
                    fnc: 'blackQQlb',
                },
                {
                    reg: '^#?主人列表$',
                    fnc: 'Masterlb',
                },
                {
                    reg: '^#?增加主人.*$',
                    fnc: 'setMaster',
                },
                {
                    reg: '^#?删除主人.*$',
                    fnc: 'delMaster',
                },
                {
                    reg: '^#?拉黑群.*$',
                    fnc: 'setblackGroup',
                },
                {
                    reg: '^#?解除拉黑群.*$',
                    fnc: 'delblackGroup',
                },
                {
                    reg: '^#?拉黑用户.*$',
                    fnc: 'setblackQQ',
                },
                {
                    reg: '^#?拉黑解除.*$',
                    fnc: 'delblackQQ',
                }
            ],
        });
    };

async delblackQQ(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
    }


    let 拉黑 = await Yaml.getread(主人);
    let num = e.msg.match(/\d+/)
    if (!num) {
    await  e.reply('序号呢？请先发送【拉黑列表】查看下序号！')
    return false;
    }

    let 序号 = 拉黑.blackQQ[num-1]
    if(!序号){return e.reply('请检查序号是否输入正确，或者检查【拉黑列表】是否有这个QQ！')}
    await 拉黑.blackQQ.splice(拉黑.blackQQ.indexOf(序号), 1)
    await Yaml.getwrite(主人, 拉黑);
    let msg = [segment.at(e.user_id), `已从列表中删除！可以发送【拉黑列表】查看哦~`];
    await e.reply(msg)
    return false;
    }

async setblackQQ(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
    }
    
    let G = e.message[0].text.replace(/#|拉黑用户/g, "").trim()
    if(e.message[1]){
    let atItem = e.message.filter((item) => item.type === "at");
    G = atItem[0].qq;
    }else{ G = G.match(/[1-9]\d*/g) }
    if (!G) return e.reply(`请输入正确的QQ号,或艾特要拉黑的人！`)
    G = parseInt(G);
    let TA = G;

    let 拉黑 = await Yaml.getread(主人);
    if ((TA==拉黑.blackQQ)){ e.reply(`该用户已经拉黑了！请不要重复拉黑！`); return false;};
    拉黑.blackQQ.push(TA);
    await Yaml.getwrite(主人, 拉黑);
    let msg = [segment.at(e.user_id), `已添加进拉黑列表！可以发送【拉黑列表】查看哦~`];
    await e.reply(msg)
    return false;
    }

async blackQQlb(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
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
        message: '以下是已拉黑的用户列表'
      }
    ]
    let data=await Yaml.getread(主人)
    let msg=[]
    logger.info(data.blackQQ)
    if(data.blackQQ==null||data.blackQQ.length==0){return e.reply('还没有拉黑的人呢！')}
    for (let v = 0; v < data.blackQQ.length; v++) {
      msg.push(`${v+1}.`+data.blackQQ[v]+'\n')
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
      .replace(/___+/, `<title color="#777777" size="26">拉黑列表</title>`)
    await e.reply(forwardMsg)
    return false;
    }

async delblackGroup(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
    }


    let 拉黑群 = await Yaml.getread(主人);
    let num = e.msg.match(/\d+/)
    if (!num) {
    await  e.reply('序号呢？请先发送【群拉黑列表】查看下序号！')
    return false;
    }

    let 序号 = 拉黑群.blackGroup[num-1]
    if(!序号){return e.reply('请检查序号是否输入正确，或者检查【群拉黑列表】是否有这个群！')}
    await 拉黑群.blackGroup.splice(拉黑群.blackGroup.indexOf(序号), 1)
    await Yaml.getwrite(主人, 拉黑群);
    let msg = [segment.at(e.user_id), `已从列表中删除！可以发送【群拉黑列表】查看哦~`];
    await e.reply(msg)
    return false;
    }

async setblackGroup(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
    }
    
    let G = e.message[0].text.replace(/#|拉黑群/g, "").trim()
    if(e.message[1]){
    let atItem = e.message.filter((item) => item.type === "at");
    G = atItem[0].qq;
    }else{ G = G.match(/[1-9]\d*/g) }
    if (!G) return e.reply(`请输入正确的QQ群！`)
    G = parseInt(G);
    let TA = G;

    let 拉黑群 = await Yaml.getread(主人);
    if ((TA==拉黑群.blackGroup)){ e.reply(`该群已经拉黑过了！请不要重复拉黑！`); return false;};
    拉黑群.blackGroup.push(TA);
    await Yaml.getwrite(主人, 拉黑群);
    let msg = [segment.at(e.user_id), `已添加进群拉黑列表！可以发送【群拉黑列表】查看哦~`];
    await e.reply(msg)
    return false;
    }

async blackGrouplb(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
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
        message: '以下是已拉黑的群列表'
      }
    ]
    let data=await Yaml.getread(主人)
    let msg=[]
    logger.info(data.blackGroup)
    if(data.blackGroup==null||data.blackGroup.length==0){return e.reply('没有拉黑的群呢！')}
    for (let v = 0; v < data.blackGroup.length; v++) {
      msg.push(`${v+1}.`+data.blackGroup[v]+'\n')
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
      .replace(/___+/, `<title color="#777777" size="26">群拉黑列表</title>`)
    await e.reply(forwardMsg)
    return false;
    }

async Qkmster(e) {

    if (!e.isMaster) {e.reply(`你没有权限！`);return false;};
    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){ e.reply(`你没有权限！`); return false;};

    if(e.msg.includes('删除所有主人')){
    let data=await Yaml.getread(主人)
    let All = [];
    data.masterQQ = All;
    await Yaml.getwrite(主人,data)
    return e.reply(`已清空全部主人！`)
        }
    }

async Masterlb(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
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
        message: '以下是Bot主人列表QWQ'
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
    await e.reply(forwardMsg)
    return false;
    }

async delMaster(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
    }


    let 删除主人 = await Yaml.getread(主人);
    let num = e.msg.match(/\d+/)
    if (!num) {
    await  e.reply('序号呢？请先发送【主人列表】查看下序号！')
    return false;
    }

    let 序号 = 删除主人.masterQQ[num-1]
    if(!序号){return e.reply('请检查序号是否输入正确，或者检查【主人列表】是否有这个人！')}
    await 删除主人.masterQQ.splice(删除主人.masterQQ.indexOf(序号), 1)
    await Yaml.getwrite(主人, 删除主人);
    let msg = [segment.at(e.user_id), `已从列表中删除！可以发送【主人列表】查看哦~`];
    await e.reply(msg)
    return false;
    }

async setMaster(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (!(e.user_id==uid)){
        e.reply(`你没有权限！`)
        return false
    }
    
    let G = e.message[0].text.replace(/#|增加主人/g, "").trim()
    if(e.message[1]){
    let atItem = e.message.filter((item) => item.type === "at");
    G = atItem[0].qq;
    }else{ G = G.match(/[1-9]\d*/g) }
    if (!G) return e.reply(`请输入正确的QQ号或者艾特对方！`)
    G = parseInt(G);
    let TA = G;

    let 添加主人 = await Yaml.getread(主人);
    try {
        for (let qqq of 添加主人) {
            if(TA == qqq){
            e.reply(`该用户已经在主人列表了！请不要重复设置！`);
            return false;
            }
        }
    }catch (e){}
    if (!TA==A){ e.reply(`该用户已经在主人列表了！请不要重复设置！`); return false;};
    添加主人.masterQQ.push(TA);
    await Yaml.getwrite(主人, 添加主人);
    let msg = [segment.at(e.user_id), `已添加进主人列表！可以发送【主人列表】查看哦~`];
    await e.reply(msg)
    return false;
    }

async Upmaster(e) {

    let mst = await Yaml.getread(path)
    let uid = mst.绝对主人;
    if (uid>null){
    e.reply(`绝对权限已经设置过了！！！`)
    return false
    }

    if (!e.isMaster) {
    e.reply(`你没有权限！`)
    return false;
    }

    let Atser = e.user_id; 
    mst.绝对主人=Atser
    await Yaml.getwrite(path, mst)
    let msg = [segment.at(e.user_id), `使用提示：\n绝对主人权限设置成功~你可以使用指令【增加主人+QQ号或者艾特对方】来添加新的主人或使用指令【删除主人+序号】删掉不想给主人权限的QQ,具体请发主人列表查看，增加和删除主人只有绝对主人权限能操作哦。`];
    await e.reply(msg)
    return false;
    }
};