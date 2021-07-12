const arr = ["dog", "cat", "fish", "goat", "shark", "broom"]

for (const e of arr) {
    console.log(checkname(e));
}

function addemoji(text) {
    return text + "😁";
}

function checkname(text) {
    if (text=="fish") return addemoji("FISK!");
    else if (text=="goat") return addemoji("GED!");
    else if (text=="broom") return addemoji("kost:(!");
    else return addemoji(text);
}