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

        await e.reply('脆脆鲨帮助(文字版)\n#本群(禁用|启用)自动撤回\n#设置自动撤回时间+(秒)\n#打我使用说明\n#骂人使用说明\n#禁用功能(施工中...)\n#脆脆鲨更新|脆脆鲨强制更新')
        return true  
    }
}

