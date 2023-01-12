import { segment } from "oicq";
import fetch from 'node-fetch'
import fs from 'fs'
import lodash from "lodash";

const images = process.cwd() + '/plugins/Jinmaocuicuisha-plugin/Resources/img/Dice/';

export default new class Dice {
    constructor() {}

    async Dices(e) {

    let msg;
        return [segment.image(
        `file:///${images}/0.gif`),
        await common.sleep(700),
        `\n请在【一】到【六】之间选一个数,然后发送【开】来查看结果！`,
        ]
    return msg;
    }
}
