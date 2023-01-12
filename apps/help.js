import plugin from "../../../lib/plugins/plugin.js"
import { segment } from "oicq";

export class help extends plugin {
    constructor() {
		super({
			name: '脆脆鲨帮助',
			dsc: '0v0v0',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			priority: 1000,
			rule: [
                {
                    /** 命令正则匹配 */
                    reg: '^#?脆脆鲨(帮助|菜单)$',
                    /** 执行方法 */
                    fnc: 'Marenhelp'
                }
            ]
        })
    }

    async Marenhelp(e) {

        await e.reply('脆脆鲨帮助(文字版)\n#本群(禁用|启用)自动撤回\n#设置自动撤回时间+(秒)\n#打我使用说明\n#骂人使用说明\n#骰子使用说明\n增加了|主人列表(查看bot主人)|增加主人(给bot增加新主人)|删除主人(删除bot的主人)|设置绝对权限 非常重要！非常重要！非常重要！更新后请第一时间给机器人发设置绝对权限(如果被别人设置了别人可以删除你主人权限然后添加自己权限使用你机器人的所有功能)\n#禁用功能(施工中...)\n#脆脆鲨更新|脆脆鲨强制更新')
        return false;
    }
}

