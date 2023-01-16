import plugin from '../../../lib/plugins/plugin.js'
import { segment } from 'oicq'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import fs from 'fs'
const _path = process.cwd();
const Automaticwithdrawalbot = 3; //检测消息数\/小于2会失效

let Attl='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/自动撤回.yaml'

export class Automaticwithdrawal extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'Bot检测中...',
            /** 功能描述 */
            dsc: 'emmmmm',
            /** https://oicqjs.github.io/oicq/#eveAnts */
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 5000,
            rule: [
                {
                    /** 命令正则匹配 */
                    reg: '',
                    /** 执行方法 */
                    fnc: 'Automaticwithdrawal'
                }
            ]
        })
    }

    async Automaticwithdrawal(e) {

        if (!e.isGroup) return false;

        if(e.isGroup){
        try {
        let data = await Yaml.getread(Attl)
        let 自动撤回开关 = data.自动撤回;
        let group = await Yaml.getread(path)
            for (let qqq of group) {
                if (自动撤回开关)  {
                    if(e.group_id == qqq){
                    return false;
                    }
                }
            }
            }catch (e){}
        }


        let key = `Yunzai:Automaticwithdrawal:${e.group_id}`;
        let res = await global.redis.get(key);
        let newMsg = e.toString();

        if (!res) { res = { AutomaticwithdrawalID: e.user_id, msgNum: 1, msg: newMsg, sendMsg: "" };
        await global.redis.set(key, JSON.stringify(res), {
            EX: 3600 * 8, });
            return true;
        } else {
            res = JSON.parse(res);
        }

        if (newMsg == res.msg && res.AutomaticwithdrawalID === e.user_id) { res.msgNum++;
        } else {
            res.AutomaticwithdrawalID = e.user_id;
            res.msg = newMsg;
            res.msgNum = 1;
        }

        if ((res.msgNum++) > Automaticwithdrawalbot && newMsg != res.sendMsg) {
            res.sendMsg = newMsg;
            await global.redis.set(key, JSON.stringify(res), {
                EX: 3600 * 8,
            });
            return true;
        }
        await global.redis.set(key, JSON.stringify(res), {
            EX: 3600 * 8,
        });
        return false;
    }
}
