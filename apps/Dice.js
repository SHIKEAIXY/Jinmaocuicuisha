import plugin from '../../../lib/plugins/plugin.js'
import co from '../../../lib/common/common.js'
import common from'../../../lib/common/common.js'
import { Cfg } from '../components/index.js'
import { segment } from "oicq";

const Dice = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

let Dice = false;

export class dice extends plugin {
  constructor () {
    super({
        name: '骰子',
        dsc: '骰子',
        event: 'message',
        priority: 5000,
        rule: [
              {
                reg: '^#?骰子|roll',
                fnc: 'Dice'
              },
              {
                reg: '^#?(我选|r|roll)(1|一)',
                fnc: 'Dice1'
              },
              {
                reg: '^#?(我选|r|roll)(2|二)',
                fnc: 'Dice2'
              },
              {
                reg: '^#?(我选|r|roll)(3|三)',
                fnc: 'Dice3'
              },
              {
                reg: '^#?(我选|r|roll)(4|四)',
                fnc: 'Dice4'
              },
              {
                reg: '^#?(我选|r|roll)(5|五)',
                fnc: 'Dice5'
              },
              {
                reg: '^#?(我选|r|roll)(6|六)',
                fnc: 'Dice6'
              }
            ]
        })
    }

    async Dice(e){

    if (Dice) return e.reply('每次只能开一局,请等这一局结束！',true);
    Dice = true;
    let k = Math.ceil(Math.random()*6);
    let 一 = 1
    let 二 = 1
    let 三 = 1
    let 四 = 1
    let 五 = 1
    let 六 = 1
    let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/0.gif`)];
    let msg2 = [`请在1到6之间猜一个数,骰子将在一分钟后停下来。`];
    this.e.reply(msg);
    await common.sleep(2000);
    e.reply(msg2);
    await common.sleep(60000);

    if(k < 一){
        let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/1.gif`)];
        let msg2 = [`一！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        return true;

        } else if (k < (一 + 二)){
        let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/2.gif`)];
        let msg2 = [`二！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        return true;

        } else if (k < (一 + 二 + 三)){
        let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/3.gif`)];
        let msg2 = [`三！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        return true;

        } else if (k < (一 + 二 + 三 + 四)){
        let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/4.gif`)];
        let msg2 = [`四！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五)){
        let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/5.gif`)];
        let msg2 = [`五！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五  + 六)){
        let msg = [segment.image(`file:/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/6.gif`)];
        let msg2 = [`六！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        return true;
        }
        return false;
    }
}