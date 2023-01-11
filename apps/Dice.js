import plugin from '../../../lib/plugins/plugin.js'
import co from '../../../lib/common/common.js'
import common from'../../../lib/common/common.js'
import { Cfg } from '../components/index.js'
import { segment } from "oicq";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

let cd = false;

export class dice extends plugin {
  constructor () {
    super({
        name: '骰子',
        dsc: '骰子',
        event: 'message',
        priority: -114514,
        rule: [
              {
                reg: '^#?骰子|roll',
                fnc: 'Dice'
              }
            ]
        })
    }

    async Dice(e){

    if (cd) return e.reply('每次只能开一局,请等这一局结束！',true);
    cd = true;
    let k = Math.ceil(Math.random()*6);
    let 一 = 1
    let 二 = 1
    let 三 = 1
    let 四 = 1
    let 五 = 1
    let 六 = 1
    let roll = [segment.image(`file:///${images}/0.gif`)];
    let msg2 = [`请在1到6之间猜一个数,骰子将在一分钟后停下来。`];
    this.e.reply(roll);
    await common.sleep(2000);
    e.reply(msg2);
    await common.sleep(5000);

    if(k < 一){
        e.isPrivate.recallMsg(roll.message_id);
        e.group.recallMsg(roll.message_id);
        let msg = [segment.image(`file:///${images}/1.gif`)];
        let msg2 = [`一！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        cd = false;
        return true;

        } else if (k < (一 + 二)){
        e.isPrivate.recallMsg(roll.message_id);
        e.group.recallMsg(roll.message_id);
        let msg = [segment.image(`file:///${images}/2.gif`)];
        let msg2 = [`二！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        cd = false;
        return true;

        } else if (k < (一 + 二 + 三)){
        e.isPrivate.recallMsg(roll.message_id);
        e.group.recallMsg(roll.message_id);
        let msg = [segment.image(`file:///${images}/3.gif`)];
        let msg2 = [`三！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        cd = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四)){
        e.isPrivate.recallMsg(roll.message_id);
        e.group.recallMsg(roll.message_id);
        let msg = [segment.image(`file:///${images}/4.gif`)];
        let msg2 = [`四！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        cd = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五)){
        e.isPrivate.recallMsg(roll.message_id);
        e.group.recallMsg(roll.message_id);
        let msg = [segment.image(`file:///${images}/5.gif`)];
        let msg2 = [`五！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        cd = false;
        return true;

        } else if (k < (一 + 二 + 三 + 四  + 五  + 六)){
        e.isPrivate.recallMsg(roll.message_id);
        e.group.recallMsg(roll.message_id);
        let msg = [segment.image(`file:///${images}/6.gif`)];
        let msg2 = [`六！`];
        this.e.reply(msg);
        await common.sleep(2000);
        e.reply(msg2);
        cd = false;
        return true;
        }
        cd = false;
        return false;
    }
}