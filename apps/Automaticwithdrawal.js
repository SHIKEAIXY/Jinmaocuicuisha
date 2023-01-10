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

            if(e.xml){
                let F;
                F = await e.group.getChatHistory(segment.xml())
                await sleep(30000)
                await e.group.recallMsg(F.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;

                } else if(e.forward){
                let E;
                E = await e.group.getChatHistory(segment.forward())
                await sleep(30000)
                await e.group.recallMsg(E.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;

                } else if(e.video){
                let D;
                D = await e.group.getChatHistory(segment.video())
                await sleep(30000)
                await e.group.recallMsg(D.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;

                } else if(e.voice){
                let C;
                C = await e.group.getChatHistory(segment.voice())
                await sleep(30000)
                await e.group.recallMsg(C.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;

                } else if(e.img){
                let B;
                B = await e.group.getChatHistory(segment.image())
                await sleep(30000)
                await e.group.recallMsg(B.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;

                } else if(e.msg){
                let A;
                A = await e.group.getChatHistory(segment.message())
                await sleep(30000)
                await e.group.recallMsg(A.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;
            
                } else {
                let J;
                J = (await e.group.getChatHistory(e.source.seq, 1))[0].message_id
                await sleep(30000)
                await e.group.recallMsg(J.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self = true;
                await Yaml.getwrite(bot, cfg, 'utf8')
                return true;
            }
        }
    }
}

