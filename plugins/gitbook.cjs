function gitBookPlugin() {
  const resolveFormat = (item) => {
    if (item.children instanceof Array) {
        item.children.forEach(resolveFormat)
    }

    if (typeof item.value !== "string") {
        return;
    }

    if (item.value.includes(`alt="">`)) {
      item.value = item.value.replace(`alt="">`, `alt=""/>`);
    }

    if (item.value.includes("<br>")) {
      item.value = item.value.replace("<br>", "<br />");
    }

    if (item.value.includes("xml")) {
      console.log(item.value);
      item.value = item.value.replace("<xml>", "");
    }

    const res = /style="color:(.*);"/.exec(item.value)

    if (res && res[1]) {
        item.value = item.value.replace(/style="color:(.*)"/g, `style={{color:'${res[1]}'}}`)
    }

    if (item.value.includes(`{% hint style="info" %}`)) {
        item.value = item.value.replace(`{% hint style="info" %}`, ':::info\n')
    }

    if (item.value.includes(`{% endhint %}`)) {
        item.value = item.value.replace(`{% endhint %}`, '\n:::')
    }
  };

  return (ast) => {
    if (Array.isArray(ast)) {
        ast.forEach(resolveFormat)
    } else if (Array.isArray(ast.children)) {
        ast.children.forEach(resolveFormat)
    }

    return;
  };
}

module.exports = gitBookPlugin;
