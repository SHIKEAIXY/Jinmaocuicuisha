import plugin from '../../../lib/plugins/plugin.js'
import co from '../../../lib/common/common.js'
import common from'../../../lib/common/common.js'
import { Cfg } from '../components/index.js'
import { segment } from "oicq";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

let cd = false;
let en = false;
let on = false;

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
              },
              {
                reg: '^#?(1|一)$',
                fnc: 'Dice1'
              },
              {
                reg: '^#?(2|二)$',
                fnc: 'Dice2'
              },
              {
                reg: '^#?(3|三)$',
                fnc: 'Dice3'
              },
              {
                reg: '^#?(4|四)$',
                fnc: 'Dice4'
              },
              {
                reg: '^#?(5|五)$',
                fnc: 'Dice5'
              },
              {
                reg: '^#?(6|六)$',
                fnc: 'Dice6'
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
    en = false;
    on = false;
    e.reply('重置好啦~');
    return false;
    }

    async Dice(e){

    if (!e.isGroup) return false;

    if (cd) return e.reply('每次只能开一局,请等这一局结束，或者发送【重置骰子】重新开始游戏。',true);
    cd = true;
    on = true;
    let msg = [
    segment.image(`file:///${images}/0.gif`),
    `\n请在【一】到【六】之间选一个数,然后发送【开】来查看结果！`,
    ]
    await e.reply(msg);
    return true;
    };

    async Dice1(e){
    if (!on) return false;
    if (!e.isGroup) return false;
    en = true;
    return false;
    };

    async Dice2(e){
    if (!on) return false;
    if (!e.isGroup) return false;
    en = true;
    return false;
    };

    async Dice3(e){
    if (!on) return false;
    if (!e.isGroup) return false;
    en = true;
    return false;
    };

    async Dice4(e){
    if (!on) return false;
    if (!e.isGroup) return false;
    en = true;
    return false;
    };

    async Dice5(e){
    if (!on) return false;
    if (!e.isGroup) return false;
    en = true;
    return false;
    };

    async Dice6(e){
    if (!on) return false;
    if (!e.isGroup) return false;
    en = true;
    return false;
    };

    async Kdice(e){

    if (!e.isGroup) return false;
    if (en) return e.reply('还没有人猜呢~',true);

        let msg = [
        segment.image(`file:///${images}/0.gif`),
        `\n请在【一】到【六】之间选一个数,然后发送【开】来查看结果！`,
        ]
        await e.group.recallMsg(msg);

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
        en = false;
        return true;

        } else if (k < (一 + 二)){

        let msg = [segment.image(`file:///${images}/2.gif`)];
        let msg2 = [`二！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        en = false;
        return true;

        } else if (k < (一 + 二 + 三)){

        let msg = [segment.image(`file:///${images}/3.gif`)];
        let msg2 = [`三！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        en = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四)){

        let msg = [segment.image(`file:///${images}/4.gif`)];
        let msg2 = [`四！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        en = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五)){

        let msg = [segment.image(`file:///${images}/5.gif`)];
        let msg2 = [`五！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        en = false;
        return true;

        } else {

        let msg = [segment.image(`file:///${images}/6.gif`)];
        let msg2 = [`六！`];
        await e.reply(msg);
        await common.sleep(2200);
        await e.reply(msg2);
        cd = false;
        en = false;
        return true;
        }
        return false;
        }
}


