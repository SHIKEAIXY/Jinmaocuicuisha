import plugin from "../../../lib/plugins/plugin.js"
import co from '../../../lib/common/common.js'
import cfg from'../../../lib/config/config.js'
import schedule from 'node-schedule'
import { segment } from "oicq";
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import fs from 'fs'
import fetch from 'node-fetch'
import common from'../../../lib/common/common.js'
const _path = process.cwd();

let bot = './config/config/bot.yaml';
let path='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/qq.yaml';
let rectime='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/自动撤回时间.yaml'
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
            return false;
            }
        }
        }catch (e){}
    }


    let cfg = await Yaml.getread(bot)
    cfg.ignore_self = false;
    await Yaml.getwrite(bot, cfg)

    if (e.user_id == Bot.uin) {
    let Cfgtime = await Yaml.getread(rectime)
    let 时间 = Cfgtime.自动撤回时间
    let J = (await e.group.getChatHistory(e.My_message, 1))[0].message_id
        await common.sleep(时间);
        await e.group.recallMsg(J);
        let cfg = await Yaml.getread(bot)
        cfg.ignore_self = true;
        await Yaml.getwrite(bot, cfg)
        return true;
        }
        return false;
    }
}

