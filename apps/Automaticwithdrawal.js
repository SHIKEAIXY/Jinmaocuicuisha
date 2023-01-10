// 欢迎各位大佬萌新进群玩：657142904
import plugin from "../../../lib/plugins/plugin.js"
import co from '../../../lib/common/common.js'
import { segment } from "oicq";
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import fs from 'fs'
import moment from 'moment'
import fetch from 'node-fetch'
const _path = process.cwd();

let bot = './config/config/bot.yaml';
let path='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/qq.yaml';
if (!fs.existsSync(path)) {fs.writeFileSync(path,'')}

export class Automaticwithdrawal extends plugin {
        constructor () {
          super({
            name: 'Automaticwithdrawal',
            dsc: 'Automaticwithdrawal',
            /** https://oicqjs.github.io/oicq/#events */
            event: 'message',
            priority: 5000000,
        })
    }
    async accept(e) {

    if (!e.isGroup) return false;

    if(e.isGroup){
    try {
    let group = await Yaml.getread(path)
        for (let qqq of group) {
            if(e.group_id == qqq){
            return false
            }
        }
        }catch (e){}
    }


    let cfg=await Yaml.getread(bot)
    cfg.ignore_self = false;
    await Yaml.getwrite(bot, cfg, 'utf8')

    if (e.user_id == Bot.uin) {
    async function sleep(time) { return new Promise(resolve => { setTimeout(resolve, time); })}
    let J = (await e.group.getChatHistory(e.Mymessage.seq, 1))[0].message_id
        await sleep(30000)
        await e.group.recallMsg(J);
    } else {
        let cfg=await Yaml.getread(bot)
        cfg.ignore_self = true;
        await Yaml.getwrite(bot, cfg, 'utf8')
        return true;
        }
    }
}

