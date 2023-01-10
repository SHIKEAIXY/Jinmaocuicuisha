
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

let path='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/qq.yaml'
let source={}

if (!fs.existsSync(path)) {fs.writeFileSync(path,'')}

export class Automaticwithdrawalset extends plugin {
    constructor() {
		super({
			name: '自动撤回开关',
			dsc: '自动撤回开关',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			priority: 5000,
			rule: [
                {   /** 命令正则匹配 */
                    reg: '^#?设置自动撤回时间(\\d)+(秒)?$',
                    /** 执行方法 */
                    fnc: 'recalltime',
                },
                {
                    /** 命令正则匹配 */
                    reg: '^#?本群(禁用|启用)自动撤回$',
                    /** 执行方法 */
                    fnc: 'Automaticwithdrawalset',
                    permission: 'master'
                }
            ]
        })
    }

    async recalltime(e){

    if (!e.isMaster)  {return false}
    let data=await Yaml.getread(path)
    let recalltime=e.msg.replace(/#|设置自动撤回时间|秒/g,'')
    let 时间=recalltime
    recalltime=recalltime*60
    data.自动撤回时间=recalltime
    await Yaml.getwrite(path,data)
    return e.reply(`自动撤回时间,成功设置为${时间}秒`)
    }

    async Automaticwithdrawalset(e) {

    if (!e.isGroup) return false;
 
      let data=await Yaml.getread(path)
      if (!data) data= [];
      if (data.indexOf(e.group_id) == -1&&e.msg.includes('禁用')){
      await data.push(e.group_id)
      await e.reply(`本群已禁用自动撤回~`)
      }
      if (data.indexOf(e.group_id)!== -1&&e.msg.includes('启用')){
      await data.splice(data.indexOf(e.group_id), 1)
      await e.reply(`本群已启用自动撤回~`)
      }
      Yaml.getwrite(path,data)
    }
}
