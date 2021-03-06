window.addEventListener("load", (event) => {
    var data_vowel =
    [
        {
            tip: '1不去掉兩點的「女」全字',
            pinyin: 'nv3',
            zhuyin: 'ㄋㄩˇ',
            remark: 'ｎｖ３',
            voice: '/assets/audios/tone/lettert1.wav'
        },
        {
            tip: '2不去掉兩點的「綠」全字',
            pinyin: 'lv4',
            zhuyin: 'ㄌㄩˋ',
            remark: 'ｌｖ４',
            voice: '/assets/audios/tone/lettert2.wav'
        },
        {
            tip: '3輕聲「的」全字',
            pinyin: 'de ',
            zhuyin: 'ㄉㄜ˙',
            remark: 'ｄｅ再按空白鍵',
            voice: '/assets/audios/tone/lettert3.wav'
        },
        {
            tip: '4輕聲「麼」全字',
            pinyin: 'me ',
            zhuyin: 'ㄇㄜ˙',
            remark: 'ｍｅ再按空白鍵',
            voice: '/assets/audios/tone/lettert4.wav'
        },
        {
            tip: '5「知」全字',
            pinyin: 'zhi1',
            zhuyin: 'ㄓ',
            remark: 'ｚｈｉ１',
            voice: '/assets/audios/tone/lettert5.wav'
        },
        {
            tip: '6「直」全字',
            pinyin: 'zhi2',
            zhuyin: 'ㄓˊ',
            remark: 'ｚｈｉ２',
            voice: '/assets/audios/tone/lettert6.wav'
        },
        {
            tip: '7「紙」全字',
            pinyin: 'zhi3',
            zhuyin: 'ㄓˇ',
            remark: 'ｚｈｉ３',
            voice: '/assets/audios/tone/lettert7.wav'
        },
        {
            tip: '8「智」全字',
            pinyin: 'zhi4',
            zhuyin: 'ㄓˋ',
            remark: 'ｚｈｉ４',
            voice: '/assets/audios/tone/lettert8.wav'
        },
        {
            tip: '9「吃」全字',
            pinyin: 'chi1',
            zhuyin: 'ㄔ',
            remark: 'ｃｈｉ１',
            voice: '/assets/audios/tone/lettert9.wav'
        },
        {
            tip: '10「池」全字',
            pinyin: 'chi2',
            zhuyin: 'ㄔˊ',
            remark: 'ｃｈｉ２',
            voice: '/assets/audios/tone/lettert10.wav'
        },
        {
            tip: '11「齒」全字',
            pinyin: 'chi3',
            zhuyin: 'ㄔˇ',
            remark: 'ｃｈｉ３',
            voice: '/assets/audios/tone/lettert11.wav'
        },
        {
            tip: '12「翅」全字',
            pinyin: 'chi4',
            zhuyin: 'ㄔˋ',
            remark: 'ｃｈｉ４',
            voice: '/assets/audios/tone/lettert12.wav'
        },
        {
            tip: '13「師」全字',
            pinyin: 'shi1',
            zhuyin: 'ㄕ',
            remark: 'ｓｈｉ１',
            voice: '/assets/audios/tone/lettert13.wav'
        },
        {
            tip: '14「石」全字',
            pinyin: 'shi2',
            zhuyin: 'ㄕˊ',
            remark: 'ｓｈｉ２',
            voice: '/assets/audios/tone/lettert14.wav'
        },
        {
            tip: '15「屎」全字',
            pinyin: 'shi3',
            zhuyin: 'ㄕˇ',
            remark: 'ｓｈｉ３',
            voice: '/assets/audios/tone/lettert15.wav'
        },
        {
            tip: '16「是」全字',
            pinyin: 'shi4',
            zhuyin: 'ㄕˋ',
            remark: 'ｓｈｉ４',
            voice: '/assets/audios/tone/lettert16.wav'
        },
        {
            tip: '17「衣」全字',
            pinyin: 'yi1',
            zhuyin: '一',
            remark: 'ｙｉ１',
            voice: '/assets/audios/tone/lettert17.wav'
        },
        {
            tip: '18「姨」全字',
            pinyin: 'yi2',
            zhuyin: '一 ˊ',
            remark: 'ｙｉ２',
            voice: '/assets/audios/tone/lettert18.wav'
        },
        {
            tip: '19「椅」全字',
            pinyin: 'yi3',
            zhuyin: '一 ˇ',
            remark: 'ｙｉ３',
            voice: '/assets/audios/tone/lettert19.wav'
        },
        {
            tip: '20「意」全字',
            pinyin: 'yi4',
            zhuyin: '一ˋ ',
            remark: 'ｙｉ４',
            voice: '/assets/audios/tone/lettert20.wav'
        },
        {
            tip: '21「居」全字',
            pinyin: 'ju1',
            zhuyin: 'ㄐㄩ',
            remark: 'ｊｕ１',
            voice: '/assets/audios/tone/lettert21.wav'
        },
        {
            tip: '22「橘」全字',
            pinyin: 'ju2',
            zhuyin: 'ㄐㄩˊ',
            remark: 'ｊｕ２',
            voice: '/assets/audios/tone/lettert22.wav'
        },
        {
            tip: '23「舉」全字',
            pinyin: 'ju3',
            zhuyin: 'ㄐㄩˇ',
            remark: 'ｊｕ３',
            voice: '/assets/audios/tone/lettert23.wav'
        },
        {
            tip: '24「巨」全字',
            pinyin: 'ju4',
            zhuyin: 'ㄐㄩˋ',
            remark: 'ｊｕ４',
            voice: '/assets/audios/tone/lettert24.wav'
        },

    ]
    // test start 
    var count = 0;
    var length = data_vowel.length;
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var wrongData = [];
    var wrongLength = wrongData.length;
    var itemWrong = 0;

    function showFirst() {
        document.getElementById('tip').innerHTML = data_vowel[0].tip;
        document.getElementById("voice").src = data_vowel[0].voice;
    };

    window.onload = showFirst();

    // test input Enter action
    $("#answer").on('keyup', function (e) {
        if (e.keyCode === 13) {
            if (data_vowel[count].pinyin == document.getElementById('answer').value.toLowerCase()) {
                ++rightAnswer;
                document.getElementById('right').innerHTML = rightAnswer;
            }
            else {
                ++wrongAnswer;
                document.getElementById('wrong').innerHTML = wrongAnswer;
                wrongData.push(data_vowel[count]);

            }
            ++count;
            if (count < length) {
                document.getElementById('tip').innerHTML = data_vowel[count].tip;
                document.getElementById("voice").src = data_vowel[count].voice;
                document.getElementById('answer').value = '';
            }
            else {
                document.getElementById("end").style.visibility = "visible";
                document.getElementById('answerTip').style.visibility = 'hidden';
                document.getElementById('answer').style.visibility = 'hidden';
                document.getElementById('questionTip').style.visibility = 'hidden';
                document.getElementById('tip').style.visibility = 'hidden';

                if (wrongAnswer > 0) {
                    document.getElementById("linkCorrect").style.display = "inline-block";
                }
            }
        }
    });

    // correction 
    $("#startCorrect").click(function () {
        if (wrongData.length > 0) {
            document.getElementById('tipCorrect').innerHTML = wrongData[0].tip;
            document.getElementById("voiceCorrect").src = wrongData[0].voice;
            document.getElementById('voiceCorrect').style.visibility = 'visible';
            document.getElementById('tipQuestion').style.visibility = 'visible';
            document.getElementById('tipPractice').style.visibility = 'visible';
            document.getElementById('tipCorrect').style.visibility = 'visible';
            document.getElementById('answerCorrect').style.visibility = 'visible';
            document.getElementById("linkTest").style.display = "none";
            document.getElementById("answerCorrect").focus();
        }
        else { alert('沒有錯誤!') }
    });

    $("#answerCorrect").on('keyup', function (e) {
        if (e.keyCode === 13) {
            console.log();
            if (wrongData[itemWrong].pinyin == document.getElementById('answerCorrect').value.toLowerCase()) {
                ++itemWrong;
                if (itemWrong < wrongAnswer) {
                    document.getElementById('tipCorrect').innerHTML = wrongData[itemWrong].tip;
                    document.getElementById("voiceCorrect").src = wrongData[itemWrong].voice;
                }
                else {
                    itemWrong = 0
                    document.getElementById('tipCorrect').style.visibility = 'hidden';
                    document.getElementById('answerCorrect').style.visibility = 'hidden';
                    document.getElementById('tipQuestion').style.visibility = 'hidden';
                    document.getElementById('tipPractice').style.visibility = 'hidden';
                    document.getElementById('voiceCorrect').style.visibility = 'hidden';
                    document.getElementById("linkTest").style.display = "inline-block";
                }
            }
            else {

                var register = wrongData[itemWrong].tip + "拼音符號是:  " + wrongData[itemWrong].pinyin;
                alert(register);

            }
            document.getElementById('answerCorrect').value = '';
        }
    });
});
