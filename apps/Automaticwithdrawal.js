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

let bot = './config/config/bot.yaml'; //yunzai设置bot.yaml路径
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
            priority: -5000000,
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


    let cfg = await Yaml.getread(bot) //加载bot.yaml
    cfg.ignore_self = false; //关闭过滤自己消息
    await Yaml.getwrite(bot, cfg) //重新保存bot.yaml

    if (e.user_id == Bot.uin) {
    let Cfgtime = await Yaml.getread(rectime)
    let 时间 = Cfgtime.自动撤回时间
    let J = (await e.group.getChatHistory(e.My_message, 1))[0].message_id

        let cfg = await Yaml.getread(bot) //加载bot.yaml
        cfg.ignore_self = true; //开启过滤自己消息
        await Yaml.getwrite(bot, cfg) //重新保存bot.yaml

        await common.sleep(时间);
        await e.group.recallMsg(J);
        return true;
        }
        return false;
    }
}

