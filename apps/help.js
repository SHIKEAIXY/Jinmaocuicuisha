import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'
import fetch from 'node-fetch'
import fs from 'fs'
import YAML from 'yaml'
import Yaml from '../Yaml/Yaml.js'
import Theme from '../model/theme.js'
import { Common, Data} from '../components/index.js'
import { Cfg } from '../components/index.js'
const _path = process.cwd();

let path ='./plugins/Jinmaocuicuisha-plugin/Cfg/绝对主人/绝对主人.yaml'
let Cfgsys ='./plugins/Jinmaocuicuisha-plugin/Cfg/Loadhelp.yaml'

export class Jmccshelp extends plugin {
	constructor () {
		super({
			/** 功能名称 */
			name: '脆脆鲨帮助',
			/** 功能描述 */
			dsc: '脆脆鲨使用说明',
			event: 'message',
			/** 优先级，数字越小等级越高 */
			priority: 3000,
			rule: [
				{
					/** 命令正则匹配 */
					reg: '^#?脆脆鲨(帮助|菜单|使用说明)$',
					/** 执行方法 */
					fnc: 'msg'
				}
			]
		});
	}
	
	async msg(){

    let mst = await Yaml.getread(path)
    let data = await Yaml.getread(Cfgsys)
    let uid = mst.绝对主人;
    let Loadhelp = data.Loadhelp;
    if (!(Loadhelp==true)){
    if (!(this.e.user_id==uid)){
        this.e.reply(`请先给Bot发送 #设置绝对权限 再使用帮助！！！`);
        return false;
        }
    }
	 return await help(this.e);
	}

}

async function help(e){
  let custom = {}
  let help = {}

  let { diyCfg, sysCfg } = await Data.importCfg('help')

  custom = help

  let helpConfig = lodash.defaults(diyCfg.helpCfg || {}, custom.helpCfg, sysCfg.helpCfg)
  let helpList = diyCfg.helpList || custom.helpList || sysCfg.helpList
  let helpGroup = []

  lodash.forEach(helpList, (group) => {
    if (group.auth && group.auth === 'master' && !e.isMaster) {
      return true
    }

    lodash.forEach(group.list, (help) => {
      let icon = help.icon * 1
      if (!icon) {
        help.css = 'display:none'
      } else {
        let x = (icon - 1) % 10
        let y = (icon - x - 1) / 10
        help.css = `background-position:-${x * 50}px -${y * 50}px`
      }
    })

    helpGroup.push(group)
  })
  let themeData = await Theme.getThemeData(diyCfg.helpCfg || {}, sysCfg.helpCfg || {})
  
  return await Common.render('help/index', {
    helpCfg: helpConfig,
    helpGroup,
    ...themeData,
    element: 'default'
  }, { e, scale: 1 })
}