//太水了
import plugin from "../../../lib/plugins/plugin.js"
import { segment } from "oicq";
import fetch from 'node-fetch'

 
let ciku = ["不想自己找api？使用以下动漫图片api全部可用 https://api.ixiaowai.cn/api/api.php                     http://www.dmoe.cc/random.php     https://api.ixiaowai.cn/mcapi/mcapi.php     http://api.caonm.net/api/dm/index.php     https://img.paulzzh.tech/touhou/random      https://img.xjh.me/random_img.php?return=302                                                    #写入打人api+上面的随便一个api即可----jinmocuicuisha-plugin "
]

export class ccsapi extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'ccsapi',
      /** 功能描述 */
      dsc: 'ccsapi',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^api参考$',
          /** 执行方法 */
          fnc: 'apick'
        }
      ]
    })
  }

 
  async apick (e) {
  let i = Math.round(Math.random() * (ciku.length - 1))

	e.reply(ciku[i]);
	
	return true;
  }
}
