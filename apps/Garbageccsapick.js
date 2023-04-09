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
                    /** 命令正则匹配 */
                    reg: "^#?[\\s\\S]*(参考api|api参考|apick|APICK|APIcank|apick|ckAPI|CKapi|cankaoapi|CANKAOAPI|apicankao|APIcankao|apicankao)$",
                    /** 执行方法 */
                    fnc: "Garbageccsapicklaile"
                }
            ]
        });
    }

    async Garbageccsapicklaile(e) {
        //获取项目运行路径
        const _path = process.cwd();

        const text = "不想自己找api？使用以下动漫图片api全部可用\n动漫api一https://api.ayao.ltd/PC/api.php\n动漫api二http://www.dmoe.cc/random.php\n动漫api三https://api.ayao.ltd/Mobile/api.php\n动漫api四http://api.caonm.net/api/dm/index.php\n动漫api五https://img.paulzzh.tech/touhou/random\n动漫api六https://img.xjh.me/random_img.php?return=302\n动漫api七https://img.xjh.me/random_img.php\n动漫api八https://api.paugram.com/wallpaper/\n动漫api九https://api.ayao.ltd/head-portrait/api.php \napi不正经的https://api.btstu.cn/sjbz/api.php\n动漫api十https://api.vvhan.com/api/acgimg\n动漫api十一http://www.dmoe.cc/random.php\n动漫api十二http://img.xjh.me/random_img.php\n动漫api十三https://api.yimian.xyz/img\n动漫api十四https://www.rrll.cc/tuceng/ecy.php\n动漫api十五https://api.ghser.com/random/api.php\n动漫api十六https://api.yimian.xyz/img \n使用方法 #写入打人api+上面的随便一个api即可 \n注意每次更换api时请先 #删除打人api 再写入api";
        let msg = [
            //@脆脆鲨的小黑子
            segment.at(e.user_id),
            //返回
            text,
            ////返回一张图 下面的api如果寄了可以发送 #参考api 查看更多api自行更改或等更新 一般1-2周我会检查所有api
            segment.image('https://iw233.cn/API/Random.php')
        ];
        e.reply(msg);

        //返回true 阻挡消息不再往下
        return true;
    }
}