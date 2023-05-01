//太水了
import plugin from "../../../lib/plugins/plugin.js"

export class ccsapi extends plugin {
    constructor() {
        super({
            name: "Garbageccsapick",
            dsc: "Garbageccsapick",
            event: "message.group",
            priority: 1000,
            rule: [
                {
                    /** 命令正则匹配（此处可以自行更改） */
                    reg: "^#?[\\s\\S]*(参考api|api参考|apick|APICK|APIcank|apick|ckAPI|CKapi|cankaoapi|CANKAOAPI|apicankao|APIcankao|apicankao|ccsapi|ccsapick|CCSAPICK|CCSAPI)$",
                    /** 执行方法 */
                    fnc: "Garbageccsapicklaile"
                }
            ]
        });
    }

    async Garbageccsapicklaile(e) {
        //获取项目运行路径
        const _path = process.cwd();

        const text = "不想自己找api？使用以下动漫图片api全部可用\n动漫api一http://www.dmoe.cc/random.php\n动漫api二https://api.ayao.ltd/Mobile/api.php\n动漫api三http://api.caonm.net/api/dm/index.php\n动漫api四https://img.xjh.me/random_img.php?return=302\n动漫api五https://img.xjh.me/random_img.php\n动漫api六https://api.ayao.ltd/head-portrait/api.php \napi不正经的https://api.btstu.cn/sjbz/api.php\n动漫api七https://api.vvhan.com/api/acgimg\n动漫api八http://www.dmoe.cc/random.php\n动漫api九http://img.xjh.me/random_img.php\n动漫api十https://api.yimian.xyz/img\n动漫api十一https://api.ghser.com/random/api.php\n动漫api十二https://api.yimian.xyz/img \n使用方法 #写入打人api+上面的随便一个api即可 \n注意每次更换api时请先 #删除打人api 再写入api";
        let msg = [
            //@bot的小黑子
            segment.at(e.user_id),
            //返回
            text,
            ////返回一张图 （返回的图显示过期？请自行更换下面的api）
            segment.image('https://img.xjh.me/random_img.php')
        ];
        e.reply(msg);

        //返回true 阻挡消息不再往下
        return true;
    }
}