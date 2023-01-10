import fs from 'node:fs'
import chalk from 'chalk'

const files = fs.readdirSync('./plugins/Jinmaocuicuisha-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

logger.info(chalk.cyan('Σ(°Д°;--Σ(°Д°;--Σ(°Д°;--Σ(°Д°;--Σ(°Д°;'))
logger.info(`非常感谢您的支持!脆脆鲨插件载入中...`)
logger.info(chalk.magenta('------------------------------------'))


files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
    let name = files[i].replace('.js', '')

    if (ret[i].status != 'fulfilled') {
        logger.error(`载入插件错误：${logger.red(name)}`)
        logger.error(ret[i].reason)
        continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
export { apps }
