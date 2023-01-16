import plugin from '../../../lib/plugins/plugin.js'
import { execSync } from 'child_process'
import { update } from '../model/update.js'
import fs from 'fs'
import { Common, Plugin_Name} from '../components/index.js'

let mst='./plugins/Jinmaocuicuisha-plugin/Cfg/绝对主人/绝对主人.yaml'
if(!fs.existsSync(mst)) {
        fs.copyFile('./plugins/Jinmaocuicuisha-plugin/Cfg/Sys/绝对主人.txt',mst,(err)=>{
	if(err){
            logger.info(err)
       }
  })
}

let Attl='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/自动撤回.yaml'
if(!fs.existsSync(Attl)) {
        fs.copyFile('./plugins/Jinmaocuicuisha-plugin/Cfg/Sys/自动撤回.txt',Attl,(err)=>{
	if(err){
            logger.info(err)
       }
  })
}

let chtime='./plugins/Jinmaocuicuisha-plugin/Cfg/Automaticwithdrawalset/自动撤回时间.yaml'
if(!fs.existsSync(chtime)) {
        fs.copyFile('./plugins/Jinmaocuicuisha-plugin/Cfg/Sys/自动撤回时间.txt',chtime,(err)=>{
	if(err){
            logger.info(err)
       }
  })
}

let c='./plugins/Jinmaocuicuisha-plugin/Cfg/Ciku/词库.yaml'
if(!fs.existsSync(c)) {
        fs.copyFile('./plugins/Jinmaocuicuisha-plugin/Cfg/Sys/词库.txt',c,(err)=>{
	if(err){
            logger.info(err)
       }
  })
}

let Hitmaster='./plugins/Jinmaocuicuisha-plugin/Cfg/Hitme/Hitmaster.yaml'
if(!fs.existsSync(Hitmaster)) {
        fs.copyFile('./plugins/Jinmaocuicuisha-plugin/Cfg/Sys/Hitmaster.txt',Hitmaster,(err)=>{
	if(err){
            logger.info(err)
       }
  })
}

let Loadhelp='./plugins/Jinmaocuicuisha-plugin/Cfg/Loadhelp.yaml'
if(!fs.existsSync(Loadhelp)) {
        fs.copyFile('./plugins/Jinmaocuicuisha-plugin/Cfg/Sys/Loadhelp.txt',Loadhelp,(err)=>{
	if(err){
            logger.info(err)
       }
  })
}

export class jmccs_update extends plugin {
	constructor () {
		super({
			/** 功能名称 */
			name: '脆脆鲨插件更新',
			/** 功能描述 */
			dsc: '调用Yunzai自带更新模块进行插件更新',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			/** 优先级，数字越小等级越高 */
			priority: 5000,
			rule: [
				{
					/** 命令正则匹配 */
					reg: '^#?脆脆鲨(插件)?(强制)?更新$',
					/** 执行方法 */
					fnc: 'update_plugin'
				}
			]
		});
	}
	
	async update_plugin(){
        if (!this.e.isMaster) {
        if (!(this.e.user_id==2471344750)){
        return false
        }
    }
		let Update_Plugin = new update();
		Update_Plugin.e = this.e;
		Update_Plugin.reply = this.reply;
		
		if(Update_Plugin.getPlugin(Plugin_Name)){
			if(this.e.msg.includes('强制')){
                if (!this.e.isMaster) 
                {return false}
				await execSync('git reset --hard',{cwd: `${process.cwd()}/plugins/${Plugin_Name}/`});
			}
			await Update_Plugin.runUpdate(Plugin_Name);
			if(Update_Plugin.isUp){
			setTimeout(() => Update_Plugin.restart(), 2000)
			}
		}
		return true;
	}
}