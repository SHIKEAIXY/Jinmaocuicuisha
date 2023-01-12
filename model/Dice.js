import { segment } from "oicq";
import fetch from 'node-fetch'
import fs from 'fs'
import lodash from "lodash";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

export class Dice extends plugin {
  constructor () {
    super({
      name: '更新',
      dsc: '#更新|强制更新',
      event: 'message',
      priority: 5000,
    })
    this.typeName = 'Yunzai-Bot'
  }
}
    function Dices() {

    let msg = [
        segment.image(`file:///${images}/0.gif`),
        await common.sleep(700),
        `\n请在【一】到【六】之间选一个数,然后发送【开】来查看结果！`,
        ]
    await e.reply(msg);
    return false;
    }

