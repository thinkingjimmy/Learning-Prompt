function gitBookPlugin() {
    return {
        configureWebpack(config) {
            config.module.rules.forEach(rule => {
                if (rule.test.toString().includes('md')) {
                    rule.use.push(require.resolve('./gitbook-loader.js'))
                }
            })

        }
    }
}

module.exports = gitBookPlugin;
