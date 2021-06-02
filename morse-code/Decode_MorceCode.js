let morse = {  
        "-----":"0",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        ".-":"A",
        "-...":"B",
        "-.-.":"C",
        "-..":"D",
        ".":"E",
        "..-.":"F",
        "--.":"G",
        "....":"H",
        "..":"I",
        ".---":"J",
        "-.-":"K",
        ".-..":"L",
        "--":"M",
        "-.":"N",
        "---":"O",
        ".--.":"P",
        "--.-":"Q",
        ".-.":"R",
        "...":"S",
        "-":"T",
        "..-":"U",
        "...-":"V",
        ".--":"W",
        "-..-":"X",
        "-.--":"Y",
        "--..":"Z",
        "-.-.--":"!",
        ".-.-.-":".",
        "--..--":","
    };

decodeMorse = function(morseCode) {
  let wordsSplit = morseCode.split("   ")
  //console.log(wordsSplit)
  let lettersSplit = wordsSplit.map(word => word.split(" ").map(character => morse[character]).join(''))
  //console.log(lettersSplit)
  let lastStep = lettersSplit.join(' ');
  return lastStep;
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. .   ... --- ..."));
