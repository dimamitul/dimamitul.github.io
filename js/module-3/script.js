
    const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

    const firstKeyRowLength = 12;
    const secondKeyRowLength = 11;
    const thirdKeyRowLength = 10;

    var keyboard = [[], [], []];

    var keyRowIndex = 0;
    var keyIndex = 0;
    for(var i = 0; i < alphabet.length; i++) {
        switch (keyRowIndex) {
            case 0: if (keyIndex == 12) {
                keyIndex = 0;
                keyRowIndex++;
            };
                break;
            case 1: if (keyIndex == 11) {
                    keyIndex = 0;
                    keyRowIndex++;
                };
                break;
            case 2: if (keyIndex == 10) {
                    keyIndex = 0;
                    keyRowIndex++;
                };
                break;

            default: break;
        }

        keyboard[keyRowIndex][keyIndex] = alphabet[i];


        keyIndex++;
    }

    var word1 = getWordHello();
    var word2 = getWordJavascript();
    var word3 = getWordTrainer();

    console.log(word1);
    console.log(word2);
    console.log(word3);

    function getWordHello() {
        var res = "";

        res += keyboard[1][5];
        res += keyboard[0][2];
        res += keyboard[1][8];
        res += keyboard[1][8];
        res += keyboard[0][8];

        return res;
    }
    function getWordJavascript() {
        var res = "";

        res += keyboard[1][6];
        res += keyboard[1][0];
        res += keyboard[2][3];
        res += keyboard[1][0];
        res += keyboard[1][1];
        res += keyboard[2][2];
        res += keyboard[0][3];
        res += keyboard[0][7];
        res += keyboard[0][9];
        res += keyboard[0][4];

        return res;
    }
    function getWordTrainer() {

        var res = "";

        res += keyboard[0][4];
        res += keyboard[0][3];
        res += keyboard[1][0];
        res += keyboard[0][7];
        res += keyboard[2][5];
        res += keyboard[0][2];
        res += keyboard[0][3];

        return res;
    }