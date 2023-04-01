//太水了
import plugin from "../../../lib/plugins/plugin.js"
import fetch from 'node-fetch'

 
let ciku = ["不想自己找api？使用以下动漫图片api全部可用\n动漫api一https://api.ayao.ltd/PC/api.php\n动漫api二http://www.dmoe.cc/random.php\n动漫api三https://api.ayao.ltd/Mobile/api.php\n动漫api四http://api.caonm.net/api/dm/index.php\n动漫api五https://img.paulzzh.tech/touhou/random\n动漫api六https://img.xjh.me/random_img.php?return=302\n动漫api七https://img.xjh.me/random_img.php\n动漫api八https://api.paugram.com/wallpaper/\n动漫api九https://api.ayao.ltd/head-portrait/api.php \napi不正经的https://api.btstu.cn/sjbz/api.php\n动漫api十https://api.vvhan.com/api/acgimg\n动漫api十一http://www.dmoe.cc/random.php\n动漫api十二http://img.xjh.me/random_img.php\n动漫api十三https://api.yimian.xyz/img\n动漫api十四https://www.rrll.cc/tuceng/ecy.php\n动漫api十五https://api.ghser.com/random/api.php\n动漫api十六https://api.yimian.xyz/img \n使用方法 #写入打人api+上面的随便一个api即可 \n----jinmocuicuisha-plugin"
]

export class ccsapi extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'ccsapi',
      /** 功能描述 */
      dsc: 'ccsapi',
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
