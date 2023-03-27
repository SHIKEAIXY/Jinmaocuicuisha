import fs from 'node:fs'
import chalk from 'chalk'

if (!global.segment) {
  global.segment = (await import("oicq")).segment
}

const files = fs.readdirSync('./plugins/Jinmaocuicuisha-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

logger.info(chalk.rgb(153, 255, 165)('Σ(°Д°;--Σ(°Д°;--Σ(°Д°;--Σ(°Д°;--Σ(°Д°;'))
logger.info(chalk.rgb(153, 255, 165)(`            脆脆鲨插件载入中...         `))
logger.info(chalk.rgb(153, 255, 165)(`   有关本插件问题请加群657142904咨询     `))
logger.info(chalk.rgb(153, 255, 165)(`  非常感谢您的使用!!!脆脆鲨插件载入成功   `))
logger.info(chalk.rgb(153, 255, 165)('---------------------------------------'))


files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
    let name = files[i].replace('.js', '')

    if (ret[i].status != 'fulfilled') {
        logger.error(`脆脆鲨载入插件错误：${logger.red(name)}`)
        logger.error(ret[i].reason)
        continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
export { apps }
