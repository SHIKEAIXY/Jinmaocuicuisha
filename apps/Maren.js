
// by金毛脆脆鲨
// 抄的各位大佬的
// 东拼西凑的东西
// 欢迎各位大佬萌新进群玩：657142904

import plugin from "../../../lib/plugins/plugin.js"
import { segment } from "oicq";
import fetch from 'node-fetch'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import fs from 'fs'
const _path = process.cwd();

let MuteTime = 600; // 禁言时间秒(需bot管理员)
let path='./plugins/Jinmaocuicuisha-plugin/Cfg/Ciku/ciku.yaml' // 词库存储目录(没有会直接报错)
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
                    reg: '^#?骂人帮助$',
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
                    reg: '^#?(加入|写入|删除|去掉)词库(.*)$',
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

        await e.reply('骂人帮助(文字版)\n#词库列表\n#加入|写入|删除|去掉词库+要加的词\n触发指令艾特机器人输入XX闭嘴XX|XX滚XX|XX傻逼XX|XXsbXX|XXgunXX|XXcnmXX|XX草泥马XX|XX操你妈XX|XX草你妈XX\n#骂人帮助\n#脆脆鲨更新|强制更新')
        return true  
    }

    async cikuliebiao(e){
        let data = getread()
        let msg = ['词库空空如也呢~']
        if(data){
        data.map((v,i)=>{
        msg[0]='词库\n'
        msg.push(`${i+1},${v}\n`)
        })
        }
        let forwardMsg = { message: msg, nickname: Bot.nickname, user_id: Bot.uin }
        if (e.isGroup) {
        forwardMsg = await e.group.makeForwardMsg(forwardMsg)
        } else {
        forwardMsg = await e.friend.makeForwardMsg(forwardMsg)
        }
        forwardMsg.data = forwardMsg.data
            .replace(/\n/g, '')
            .replace(/<title color="#777777" size="26">(.+?)<\/title>/g, '___')
            .replace(/___+/, `<title color="#777777" size="26">Σ(°Д°;词库列表</title>`)
        //发送消息
        e.reply(forwardMsg)
    }

    async ciku(e) {
        let Ciku=e.msg.replace(/#|加入|写入|删除|去掉|词库/g,'')
        let data=await getread()
            if (!data) data= [];
            if (data.indexOf(Ciku) == -1&&e.msg.includes('词库')){
            await data.push(Ciku)
            await e.reply(`已经将【${Ciku}】添加进词库啦~`)
            }
            if (data.indexOf(Ciku)!== -1&&e.msg.includes('删除词库')){
            await data.splice(data.indexOf(Ciku), 1)//位置索引，删除1个
            await e.reply(`已经将【${Ciku}】从词库中删除啦~`)
            }
            if (data.indexOf(Ciku)!== -1&&e.msg.includes('去掉词库')){
            await data.splice(data.indexOf(Ciku), 1)//位置索引，删除1个
            await e.reply(`已经将【${Ciku}】从词库中删除啦~`)
            }
           await getwrite(data)
        return true
    }

    async Maren(e) {

        if (!e.atBot) { //是否被艾特
        return false;
        }
        
        if (e.atBot) { //是否被艾特
            let random_type = Math.random()
            let number = Math.round(Math.random() * 100 + 1)
            let data = getread()
            let Ciku = await data.splice(data.indexOf() * 0)
            let text_number = Math.ceil(Math.random() * Ciku['length'])
            let msg;
            if (Ciku.length == 0 ) {
            msg = ['额,词库空空如也呢~']
            } else if (Ciku.length > 0 && number < 15) {
            msg = [ segment.at(e.user_id),Ciku[text_number-1] ] //艾特然后抽取词库中随机一句话回复
            } else if (Ciku.length > 0 && number < 30) {
            msg = [ segment.at(e.user_id),Ciku[text_number-1] ] //艾特然后抽取词库中随机一句话回复
            } else if (Ciku.length > 0 && number < 45) {
            msg = [ segment.at(e.user_id),Ciku[text_number-1] ] //艾特然后抽取词库中随机一句话回复
            } else if (Ciku.length > 0 && number < 60) {
            msg = [ segment.at(e.user_id),Ciku[text_number-1] ] //艾特然后抽取词库中随机一句话回复
            } else if (Ciku.length > 0 && number < 75 && !e.group.is_admin && !e.group.is_owner && !e.member.is_owner && !e.member.is_admin) {  
            return e.reply("MD，有种给我管理啊！", true);
            } else if (Ciku.length > 0 && number < 90 && e.group.is_admin && e.group.is_owner) {  
            let i = 0;
            e.group.muteMember(e.user_id, MuteTime*(i+1));  //禁言
            msg = [ segment.at(e.user_id),`你TM继续啊！` ];
            e.reply(msg)
            return true;
            } else {
            msg = [ segment.at(e.user_id),Ciku[text_number-1] ]
            }
            /** 最后回复消息 */
            e.reply(msg)
            return true;
        }
    } 
}
    
    //读取词库
    function getread() {
      try {
        var fc = fs.readFileSync(path, 'utf8');
        } catch (e) {
        console.log(e);
        return false;
        }
        return YAML.parse(fc);
    }
  
    //写入词库
    function getwrite(data) {
      try {
        let yaml = YAML.stringify(data);
        fs.writeFileSync(path, yaml, 'utf8');
        return true
        } catch (e) {
        console.log(e);
        return false
        }
    }
