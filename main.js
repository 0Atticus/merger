const game_div = document.getElementById("game");


var c1;
var c2 = 0;
var max = 2;

async function swap() {
    let combined = parseInt(c1.getAttribute("val")) + parseInt(c2.getAttribute("val"));
    c2.setAttribute("val", (String)(combined));
    c2.innerHTML = (String)(combined);
    let new_num = Math.floor(Math.random() * max) + 1;
    if (new_num % 2 == 0 || new_num == 1) {
        null;
    } else {
        ++new_num;
    }
    c1.setAttribute("val", (String)(new_num));
    c1.innerHTML = (String)(new_num);
    c1.setAttribute("style", "animation: spawn 0.5s");
    await sleep(500);

    max = combined / 2;

}




async function preswap() {

    var c1val = c1.getAttribute("val");
    var c1loc = c1.getAttribute("id").split(", ");
    var c2val = c2.getAttribute("val");
    var c2loc = c2.getAttribute("id").split(", ");
    c1x = parseInt(c1loc[0]);
    c1y = parseInt(c1loc[1]);
    c2x = parseInt(c2loc[0]);
    c2y = parseInt(c2loc[1]);

    if (c1val == c2val) {

        if (c1x + 1 == c2x && c1y == c2y) {
            c1.setAttribute("style", "animation: swap_down 0.5s");
            await sleep(500);
            swap();
        } else if (c1x - 1 == c2x && c1y == c2y) {
            c1.setAttribute("style", "animation: swap_up 0.5s");
            await sleep(500);
            swap();
        } else if (c1y + 1 == c2y && c1x == c2x) {
            c1.setAttribute("style", "animation: swap_right 0.5s");
            await sleep(500);
            swap();
        } else if (c1y - 1 == c2y && c1x == c2x) {
            c1.setAttribute("style", "animation: swap_left 0.5s");
            await sleep(500);
            swap();
        } else {
            null;
        }

    }

    c1.className = "";
    c1 = 0;
    c2 = 0;


}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i = 0; i < 5; ++i) {
    var col = document.createElement("div");
    for(var b = 0; b < 5; ++b) {
        var tile = document.createElement("p");
        tile.setAttribute("val", 1);
        tile.innerHTML = "1";
        tile.setAttribute("id", (String)(b) + ", " + (String)(i))
        tile.setAttribute("onclick", "if (!c1 > 0) {c1 = this; this.className='c1';} else if (c2 <= 0 && c1 != this) {c2 = this; preswap();}");
        col.appendChild(tile);
    }
    col.setAttribute("class", "col");
    game_div.appendChild(col);
    
}
