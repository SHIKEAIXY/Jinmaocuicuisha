import plugin from "../../../lib/plugins/plugin.js"
import { segment } from "oicq";
import fetch from 'node-fetch'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import fs from 'fs'
const _path = process.cwd();

let MuteTime = 600; // 禁言时间秒(需bot管理员)
let path='./plugins/Jinmaocuicuisha-plugin/Cfg/Ciku/词库.yaml' // 词库存储目录(没有会直接报错)
if (!fs.existsSync(path)) {fs.writeFileSync(path,'')}

export class Maren extends plugin {
    constructor() {
		super({
			name: 'Maren',
			dsc: 'Maren',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			priority: 1000,
			rule: [
                {
                    /** 命令正则匹配 */
                    reg: '^#?骂人使用说明$',
                    /** 执行方法 */
                    fnc: 'Marenhelp'
                },
                {
                    /** 命令正则匹配 */
                    reg: '^#?词库列表$',
                    /** 执行方法 */
                    fnc: 'cikuliebiao',
                    permission: 'master'
                },
                {
                    /** 命令正则匹配 */
                    reg: '^#?(写入|删除)文字(.*)$',
                    /** 执行方法 */
                    fnc: 'ciku',
                    permission: 'master'
                },
                {
                    /** 命令正则匹配 */
                    reg: '^(.*)闭嘴(.*)|(.*)滚(.*)|(.*)傻逼(.*)|(.*)sb(.*)|(.*)gun(.*)|(.*)cnm(.*)|(.*)草泥马(.*)|(.*)操你妈(.*)|(.*)草你妈(.*)|(.*)你麻痹(.*)|(.*)你妈逼(.*)|(.*)日你妈(.*)|(.*)日尼玛(.*)|(.*)nm(.*)|(.*)rnm(.*)|(.*)nmb(.*)$',
                    /** 执行方法 */
                    fnc: 'Maren'
                }
            ]
        })
    }

    async Marenhelp(e) {

        await e.reply('使用说明:\n#词库列表\n#写入文字+(文字)|删除文字+(序号)\n触发指令艾特机器人输入XX闭嘴XX|XX滚XX|XX傻逼XX|XXsbXX|XXgunXX|XXcnmXX|XX草泥马XX|XX操你妈XX|XX草你妈XX')
        return true  
    }

    async cikuliebiao(e){

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
        message: '     词库列表     \n可使用指令【删除文字+(序号)】删除掉对应的文字'
      }
    ]
    let data=await Yaml.getread(path)
    let msg=[]
    logger.info(data.词库列表)
    if(data.词库列表==null||data.词库列表.length==0){return e.reply('词库还没有文字可以用呢~请用指令【写入文字+(文字)】添加文字')}
    for (let v = 0; v < data.词库列表.length; v++) {
      msg.push(`${v+1}.`+data.词库列表[v]+'\n')
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
      .replace(/___+/, `<title color="#777777" size="26">词库列表</title>`)
    return e.reply(forwardMsg)
  }

    async ciku(e) {

    let data=await Yaml.getread(path)
    if(data.词库列表==null){data.词库列表=[]}
        if(e.msg.includes('写入文字')){
        let 文字 = e.msg.replace(/#|写入文字/g,'')
            if(!文字){return e.reply('嗯？要写入的文字内容呢？')}
            data.词库列表.push(文字)
            await Yaml.getwrite(path,data)
            return e.reply(`【${e.msg}】成功添加进词库可使用指令【词库列表】查看！`)
            }
        if(e.msg.includes('删除文字')){
        let num = e.msg.match(/\d+/)
            if (!num) {
            return  e.reply('序号呢？要不先用指令【词库列表】查看下文字对应的序号啊')
            }
            let 内容=data.词库列表[num-1]
                if(!内容){return e.reply('删除失败了呢，请检查序号是否正确，或检查词库列表是不是空的！')}
                await data.词库列表.splice(data.词库列表.indexOf(内容), 1)
                await Yaml.getwrite(path,data)
                await e.reply(`成功把【${内容}】从词库列表中删除~`)
                }
    }

    async Maren(e) {

        if (!e.atBot) { //是否被艾特
        return false;
        }
        
        if (e.atBot) { //是否被艾特
            let number = Math.ceil(Math.random()*100)
            let data = await Yaml.getread(path)
            let 词库列表 = data.词库列表
            let text_number = Math.ceil(Math.random() * 词库列表['length'])-1
            let msg;
            if (data.词库列表==null&&data.词库列表.length==0) {
            msg = ['文字都没有,你让我怎么骂啊！']
            e.reply(msg)
            return true;

            } else if (number < 90) {
            msg = [ segment.at(e.user_id),词库列表[text_number] ] //艾特然后抽取词库中随机一句话回复
            e.reply(msg)
            return true;

            } else if (number < 15 && !e.group.is_admin && !e.group.is_owner && !e.member.is_owner && !e.member.is_admin) {  
            return e.reply("有种给我管理啊！", true);

            } else if (number < 20 && e.group.is_admin && e.group.is_owner) {  
            let i = 0;
            e.group.muteMember(e.user_id, MuteTime*(i+1));  //禁言
            msg = [ segment.at(e.user_id),`你怎么不骂了？你继续啊！` ];
            e.reply(msg)
            return true;
            }
        }
    } 
}