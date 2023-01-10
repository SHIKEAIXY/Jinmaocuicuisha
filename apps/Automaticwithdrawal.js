
// by金毛脆脆鲨
// 抄的各位大佬的
// 东拼西凑的东西
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
let path1='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/qq.yaml';
if (!fs.existsSync(path1)) {fs.writeFileSync(path1,'')}

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
    async Automaticwithdrawal(e) {

    if(!e.isGroup){ return false; }

    if(e.isGroup){
    let 禁用 = await getread()
        if(e.group_id == 禁用){
            return false;
        }
    }

    async function sleep(time) { return new Promise(resolve => { setTimeout(resolve, time); })}

        if (e.user_id == Bot.uin) {
            let cfg=await Yaml.getread(bot)
            cfg.ignore_self=false; await Yaml.getwrite(bot,cfg);
            if(e.xml){
                let F;
                F = (await e.group.getChatHistory(e.message_id.seq, 1)).pop();
                await sleep(30000)
                await e.group.recallMsg(F.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;

                } else if(e.forward){
                let E;
                E = (await e.group.getChatHistory(e.message_id.seq, 1)).pop();
                await sleep(30000)
                await e.group.recallMsg(E.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;

                } else if(e.video){
                let D;
                D = (await e.group.getChatHistory(e.message_id.seq, 1)).pop();
                await sleep(30000)
                await e.group.recallMsg(D.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;

                } else if(e.voice){
                let C;
                C = (await e.group.getChatHistory(e.message_id.seq, 1)).pop();
                await sleep(30000)
                await e.group.recallMsg(C.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;

                } else if(e.img){
                let B;
                B = (await e.group.getChatHistory(e.message_id.seq, 1)).pop();
                await sleep(30000)
                await e.group.recallMsg(B.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;

                } else if(e.msg){
                let A;
                A = (await e.group.getChatHistory(e.message_id.seq, 1)).pop();
                await sleep(30000)
                await e.group.recallMsg(A.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;
            
                } else {
                let J;
                J = (await e.group.getChatHistory(e.message_id.seq, 1))[0].message_id
                await sleep(30000)
                await e.group.recallMsg(J.message_id);
                let cfg=await Yaml.getread(bot)
                cfg.ignore_self=true; await Yaml.getwrite(bot,cfg);
                return true;
            }
        }
    }
}

    /** 读取 */
    function getread() {
    try {
        var fileContents = fs.readFileSync(path1, 'utf8');
        } catch (e) {
        console.log(e);
        return false;
        }
        //转换
        return YAML.parse(fileContents);
        }

    /** 写入 */
    function getwrite(data) {
    try {
        //转换
        let yaml = YAML.stringify(data);
        fs.writeFileSync(path1, yaml, 'utf8');
        return true
        } catch (e) {
        //错误处理
        console.log(e);
        return false
        }
     }
