import plugin from '../../../lib/plugins/plugin.js'
import co from '../../../lib/common/common.js'
import common from'../../../lib/common/common.js'
import { Cfg } from '../components/index.js'
import { segment } from "oicq";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/help/';

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

    if (e.isMaster) {
    await e.reply(segment.image(`file:///${images}/1.jpg`));
    return false;
    } else {
    await e.reply(segment.image(`file:///${images}/0.jpg`));
    return false;
    }
}

