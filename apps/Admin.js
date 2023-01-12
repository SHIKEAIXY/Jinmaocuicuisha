import plugin from '../../../lib/plugins/plugin.js';
import CfgSet from '../../Cfg/CfgSet.js';
export class Admin extends plugin {
    constructor() {
        super({
            name: 'Admin',
            dsc: 'Admin',
            event: 'message',
            priority: 1,
            rule: [
                {
                    reg: '^#关闭云崽',
                    fnc: 'CloseRobot',
                },
                {
                    reg: '^#关闭云崽帮助',
                    fnc: 'CloseRobothelp',
                },
                {
                    reg: '^#添加主人.*',
                    fnc: 'AddMaster',
                },
                {
                    reg: '^#删除主人.*',
                    fnc: 'DeleteMaster',
                }
            ],
        });
    };
    OffGroup = async (e) => {
        if (!e.isMaster) {
            return;
        };
        e.reply(defSet.OffGroup());
        return;
    };
    OnGroup = async (e) => {
        if (!e.isMaster) {
            return;
        };
        e.reply(defSet.OnGroup());
        return;
    };
    AddMaster = async (e) => {
        if (!e.isMaster) {
            return;
        };
        const QQ = e.msg.replace('#修仙添加主人', '');
        e.reply(defSet.AddMaster(QQ));
        return;
    };
    DeleteMaster = async (e) => {
        if (!e.isMaster) {
            return;
        };
        const QQ = e.msg.replace('#修仙删除主人', '');
        e.reply(defSet.DeleteMaster(QQ));
        return;
    }
    CloseRobot = async (e) => {
        if (!e.isMaster) {
            return;
        };
        e.reply(defSet.ReadConfig());
        return;
    };
    CloseRobothelp = async (e) => {
        if (!e.isMaster) {
            return;
        };
        e.reply(defSet.ReadConfighelp());
        return;
    }
};