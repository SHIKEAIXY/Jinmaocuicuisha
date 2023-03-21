//打开看干嘛 写的这么水 都不好意思上传
import { segment } from "oicq";
import plugin from "../../../lib/plugins/plugin.js"

export class ccsapi extends plugin {
    constructor() {
        super({
            name: "CCSAPICK",
            dsc: "CCSAPICK",
            /** https://oicqjs.github.io/oicq/#events */
            event: "message.group",
            priority: 1000,
            rule: [
                {
                    /** 命令正则匹配 */
                    reg: "^[\\s\\S]*(参考api)$",
                    /** 执行方法 */
                    fnc: "jmccsapick"
                }
            ]
        });
    }

    async jmccsapick(e) {
        //获取项目运行路径
        const _path = process.cwd();

        const text = "不想自己找api？使用以下动漫图片api全部可用\n动漫api一https://api.ixiaowai.cn/api/api.php\n动漫api二http://www.dmoe.cc/random.php\n动漫api三https://api.ixiaowai.cn/mcapi/mcapi.php\n动漫api四http://api.caonm.net/api/dm/index.php\n动漫api五https://img.paulzzh.tech/touhou/random\n动漫api六https://img.xjh.me/random_img.php?return=302\n动漫api七https://img.xjh.me/random_img.php\n动漫api八https://api.paugram.com/wallpaper/\n动漫api九https://api.mtyqx.cn/api/random.php\napi不正经的https://api.btstu.cn/sjbz/api.php\n动漫api十https://api.ixiaowai.cn/api/api2.php\n动漫api十一https://api.ixiaowai.cn/mcapi/mcapi2.php\n动漫api十二https://api.ixiaowai.cn/gqapi/gqapi2.php\n动漫api十三https://api.yimian.xyz/img\n使用方法 #写入打人api+上面的随便一个api即可 ----jinmocuicuisha-plugin";
        let msg = [
            //@脆脆鲨的小黑子
            segment.at(e.user_id),
            //想不出写什么
            text,
            //随机返回一个图片
            segment.image('https://iw233.cn/API/Random.php')
        ];
        e.reply(msg);

        //返回true 阻挡消息不再往下
        return true;
    }
}