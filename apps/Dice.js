import plugin from '../../../lib/plugins/plugin.js'
import co from '../../../lib/common/common.js'
import common from'../../../lib/common/common.js'
import { Cfg } from '../components/index.js'
import { segment } from "oicq";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

let cd = false;
let 开 = false;

export class dice extends plugin {
  constructor () {
    super({
        name: '骰子',
        dsc: '骰子',
        event: 'message',
        priority: 50,
        rule: [
              {
                reg: '^#?(骰子|roll)使用说明$',
                fnc: 'Dicehelp'
              },
              {
                reg: '^#?(重置骰子)$',
                fnc: 'czDice'
              },
              {
                reg: '^#?(开)$',
                fnc: 'Kdice'
              },
              {
                reg: '^#?(骰子|roll)$',
                fnc: 'Dice'
              }
            ]
        })
    }

    async Dicehelp(e){
    e.reply('使用说明:\n#重置骰子\n#骰子|roll');
    return false;
    }

    async czDice(e){
    cd = false;
    开 = false;
    e.reply('重置好啦~');
    return false;
    }

    async Dice(e){

    if (!e.isGroup) return false;

    if (cd) return e.reply('每次只能开一局,请等这一局结束，或者发送【重置骰子】重新开始游戏。',true);
    cd = true;
    开 = true;
    let roll = e.reply(segment.image(`file:///${images}/0.gif`));
    await common.sleep(500);
    await e.reply(`\n请在【一】到【六】之间选一个数,然后发送【开】来查看结果！`);
    await redis.set(`Dice:k:${Kdice}`,roll)
    return true;
    };

    async Kdice(e){

    if (!e.isGroup) return false;
    if(开){
        let roll = await redis.get(`Dice:k:${Kdice}`)
        await e.group.recallMsg(roll.message_id);
        let k = Math.ceil(Math.random()*6);
        let 一 = 1
        let 二 = 1
        let 三 = 1
        let 四 = 1
        let 五 = 1
        let 六 = 1

        if(k < 一){
        let msg = [segment.image(`file:///${images}/1.gif`)];
        let msg2 = [`一！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        开 = false;
        return true;

        } else if (k < (一 + 二)){

        let msg = [segment.image(`file:///${images}/2.gif`)];
        let msg2 = [`二！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        开 = false;
        return true;

        } else if (k < (一 + 二 + 三)){

        let msg = [segment.image(`file:///${images}/3.gif`)];
        let msg2 = [`三！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        开 = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四)){

        let msg = [segment.image(`file:///${images}/4.gif`)];
        let msg2 = [`四！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        开 = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五)){

        let msg = [segment.image(`file:///${images}/5.gif`)];
        let msg2 = [`五！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        开 = false;
        return true;

        } else {

        let msg = [segment.image(`file:///${images}/6.gif`)];
        let msg2 = [`六！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        开 = false;
        return true;
        }
        return false;
        }
    }
}