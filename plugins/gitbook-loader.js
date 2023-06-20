function loader(_source, b) {
    let source = _source

    if (typeof source !== "string") {
        return;
    }

    if (source.includes(`alt="">`)) {
      source = source.replaceAll(`alt="">`, `alt=""/>`);
    }

    if (source.includes("<br>")) {
      source = source.replaceAll("<br>", "<br />");
    }

    if (source.includes("<xml>")) {
      source = source.replaceAll("<xml>", "");
    }

    const res = /style="color:(.*);"/.exec(source)

    if (res && res[1]) {
        source = source.replaceAll(/style="color:(.*)"/g, `style={{color:'${res[1]}'}}`)
    }

    if (source.includes(`{% hint style="info" %}`)) {
        source = source.replaceAll(`{% hint style="info" %}`, ':::info\n')
    }

    if (source.includes(`{% hint style="warning" %}`)) {
        source = source.replaceAll(`{% hint style="warning" %}`, ':::warning\n')
    }

    if (source.includes(`{% endhint %}`)) {
        source = source.replaceAll(`{% endhint %}`, ':::')
    }

    source = source.replaceAll(`{% code overflow="wrap" %}`, '')
    source = source.replaceAll(`{% endcode %}`, '')

    source = source.replace(/<img src=".*assets\/([^"]*)"/g, ((_, p) => {
        return `<img src="/${p.replaceAll(' ', '')}"`
    }))

    return source
}

module.exports = loader