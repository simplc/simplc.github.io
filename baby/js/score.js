function getScore(){

    var tot = 4;  // total number of tests

    var scores = [];

    var done = true;

    for (n = 1; n <= tot; n++) {
        var name = "test" + n.toString();
        var radios = document.getElementsByName(name);
        var score = 0;
        for (i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                score = 4 - i;
                scores.push(score);
                break;
            }
        }

        if (score == 0) {
            alert("不  猪猪没做完");
            done = false;
            break;
        }
    }

    if (done) {
        console.log("score:", scores);
        var sum = 0;
        for (i = 0; i < scores.length; i++) {
            sum += scores[i];
        }
        sum /= tot;
        sum *= 25.0;

        switch(Math.ceil(sum)) {
            case 4:
                alert("呀！辰序员得了" + sum.toString() + "分！辰序员一定会继续努力，好好照顾猪宝宝！送你一个密码zzbbsqtxzkadzz去找辰序员吧～");
                break;
            case 3:
                alert("咦！辰序员得了" + sum.toString() + "分，辰序员一定会再接再厉，好好爱护猪宝宝！送你一个密码zzbbsqtxzkadzz去找辰序员吧～");
                break;
            case 2:
                alert("哭哭  辰序员挂科了，只有" + sum.toString() + "分 辰序员知道自己做的不好，辰序员今后要做一个温柔的人，要对猪猪好，不让猪猪受委屈  （送你一个密码zzbbsqtxzkadzz去找辰序员吧）");
                break;
            case 1:
                alert("哭哭  辰序员挂科了，只有" + sum.toString() + "分 辰序员知道自己做的不好，辰序员今后要做一个温柔的人，要对猪猪好，不让猪猪受委屈  （送你一个密码zzbbsqtxzkadzz去找辰序员吧）");
                break;
            default:
                break;
        }

        console.log("avg:", sum);
    }
}