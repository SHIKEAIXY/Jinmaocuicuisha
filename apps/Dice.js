import plugin from '../../../lib/plugins/plugin.js'
import co from '../../../lib/common/common.js'
import common from'../../../lib/common/common.js'
import { Cfg } from '../components/index.js'
import { segment } from "oicq";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

let cd = false;
let 文字开关 = false;

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
                reg: '^#?(骰子|roll)$',
                fnc: 'Dice'
              },
              {
                reg: '^#?(1|一|one|One)$',
                fnc: 'Dice1'
              },
              {
                reg: '^#?(2|二|two|Two)$',
                fnc: 'Dice2'
              },
              {
                reg: '^#?(3|三|three|Three)$',
                fnc: 'Dice3'
              },
              {
                reg: '^#?(4|四|four|Four)$',
                fnc: 'Dice4'
              },
              {
                reg: '^#?(5|五|five|Five)$',
                fnc: 'Dice5'
              },
              {
                reg: '^#?(6|六|six|Six)$',
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
    文字开关 = false;
    e.reply('骰子重置好啦~');
    return false;
    }

    async Dice1(e){
    文字开关 = true;
    return false
    }
    async Dice2(e){
    文字开关 = true;
    return false
    }
    async Dice3(e){
    文字开关 = true;
    return false
    }
    async Dice4(e){
    文字开关 = true;
    return false
    }
    async Dice5(e){
    文字开关 = true;
    return false
    }
    async Dice6(e){
    文字开关 = true;
    return false
    }

    async Dice(e){

    if (!e.isGroup) return false;

    if (cd) return e.reply('每次只能开一局,请等这一局结束！',true);
    cd = true;
    let k = Math.ceil(Math.random()*6);
    let 一 = 1
    let 二 = 1
    let 三 = 1
    let 四 = 1
    let 五 = 1
    let 六 = 1
    let msg = [segment.image(`file:///${images}/0.gif`)];
    let msg2 = [`骰子开始转动,请在1到6之间猜一个数,骰子将在30秒后停下来！`];
    let roll = await e.reply(msg);
    await common.sleep(500);
    await e.reply(msg2);
    await common.sleep(30000);
    await e.group.recallMsg(roll.message_id);

    if(!文字开关){
    cd = false;
    await e.reply(`啊这！看来没人猜呢~`);
    return false;
    };

    if(k < 一){

        let msg = [segment.image(`file:///${images}/1.jpg`)];
        let msg2 = [`一！`];
        await e.reply(msg);
        await common.sleep(2000);
        await e.reply(msg2);
        cd = false;
        文字开关 = false;
        return true;

        } else if (k < (一 + 二)){

        let msg = [segment.image(`file:///${images}/2.jpg`)];
        let msg2 = [`二！`];
        await e.reply(msg);
        await common.sleep(2000);
        await e.reply(msg2);
        cd = false;
        文字开关 = false;
        return true;

        } else if (k < (一 + 二 + 三)){

        let msg = [segment.image(`file:///${images}/3.jpg`)];
        let msg2 = [`三！`];
        await e.reply(msg);
        await common.sleep(2000);
        await e.reply(msg2);
        cd = false;
        文字开关 = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四)){

        let msg = [segment.image(`file:///${images}/4.jpg`)];
        let msg2 = [`四！`];
        await e.reply(msg);
        await common.sleep(2000);
        await e.reply(msg2);
        cd = false;
        文字开关 = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五)){

        let msg = [segment.image(`file:///${images}/5.jpg`)];
        let msg2 = [`五！`];
        await e.reply(msg);
        await common.sleep(2000);
        await e.reply(msg2);
        cd = false;
        文字开关 = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五  + 六)){

        let msg = [segment.image(`file:///${images}/6.jpg`)];
        let msg2 = [`六！`];
        await e.reply(msg);
        await common.sleep(2000);
        await e.reply(msg2);
        cd = false;
        文字开关 = false;
        return true;
        }
        cd = false;
        return false;
    }
}