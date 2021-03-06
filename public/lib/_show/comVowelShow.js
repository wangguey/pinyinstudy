window.addEventListener("load", (event) => {
var data_consonant =
    [
        {
            tip: '1「愛」遊戲',
            pinyin: 'ai',
            zhuyin: 'ㄞ',
            remark: 'ａｉ',
            voice: '/assets/audios/comVowel/lettercv1.wav'
        },
        {
            tip: '2「背」東西',
            pinyin: 'ei',
            zhuyin: 'ㄟ',
            remark: 'ｅｉ',
            voice: '/assets/audios/comVowel/lettercv2.wav'
        },
        {
            tip: '3「威」風第一',
            pinyin: 'ui',
            zhuyin: 'ㄨㄟ ',
            remark: 'ｕｉ',
            voice: '/assets/audios/comVowel/lettercv3.wav'
        },
        {
            tip: '4「約」會不戴帽',
            pinyin: 'ue',
            zhuyin: 'ㄩㄝ',
            remark: 'Üｅ(按ue鍵)',
            voice: '/assets/audios/comVowel/lettercv4.wav'
        },
        {
            tip: '5「凹」下去的球',
            pinyin: 'ao',
            zhuyin: 'ㄠ ',
            remark: 'ａｏ',
            voice: '/assets/audios/comVowel/lettercv5.wav'
        },
        {
            tip: '6「歐」洲的房屋',
            pinyin: 'ou',
            zhuyin: 'ㄡ',
            remark: 'ｏｕ',
            voice: '/assets/audios/comVowel/lettercv6.wav'
        },
        {
            tip: '7「優」秀的女巫',
            pinyin: 'iu',
            zhuyin: 'ㄧㄡ',
            remark: 'ｉｕ',
            voice: '/assets/audios/comVowel/lettercv7.wav'
        },
        {
            tip: '8「安」靜的拿',
            pinyin: 'an',
            zhuyin: 'ㄢ',
            remark: 'ａｎ',
            voice: '/assets/audios/comVowel/lettercv8.wav'
        },
        {
            tip: '9給你「恩」惠吶',
            pinyin: 'en',
            zhuyin: 'ㄣ',
            remark: 'ｅｎ',
            voice: '/assets/audios/comVowel/lettercv9.wav'
        },
        {
            tip: '10什麼聲「音」呢',
            pinyin: 'in',
            zhuyin: 'ㄧㄣ ',
            remark: 'ｉｎ',
            voice: '/assets/audios/comVowel/lettercv10.wav'
        },
        {
            tip: '11「溫」暖你',
            pinyin: 'un',
            zhuyin: 'ㄨㄣ',
            remark: 'ｕｎ',
            voice: '/assets/audios/comVowel/lettercv11.wav'
        },
        {
            tip: '12頭「暈」不戴尼絨帽 ',
            pinyin: 'un',
            zhuyin: 'ㄩㄣ',
            remark: 'Üｎ(按un鍵)',
            voice: '/assets/audios/comVowel/lettercv12.wav'
        },
        {
            tip: '13「骯」髒的三哥',
            pinyin: 'ang',
            zhuyin: 'ㄤ ',
            remark: 'ａｎｇ',
            voice: '/assets/audios/comVowel/lettercv13.wav'
        },
        {
            tip: '14「坑」洞三個',
            pinyin: 'eng',
            zhuyin: 'ㄥ',
            remark: 'ｅｎｇ',
            voice: '/assets/audios/comVowel/lettercv14.wav'
        },
        {
            tip: '15老「鷹」三隻',
            pinyin: 'ing',
            zhuyin: 'ㄧㄥ',
            remark: 'ｉｎｇ',
            voice: '/assets/audios/comVowel/lettercv15.wav'
        },
        {
            tip: '16蜜蜂「嗡」嗡嗡',
            pinyin: 'ong',
            zhuyin: 'ㄨㄥ',
            remark: 'ｏｎｇ',
            voice: '/assets/audios/comVowel/lettercv16.wav'
        },
        {
            tip: '17「二」兒子的生日',
            pinyin: 'er',
            zhuyin: 'ㄦ',
            remark: 'ｅｒ',
            voice: '/assets/audios/comVowel/lettercv17.wav'
        },
        {
            tip: '18「佣」人很難當',
            pinyin: 'iong',
            zhuyin: 'ㄩㄥ',
            remark: 'ｉｏｎｇ',
            voice: '/assets/audios/comVowel/lettercv18.wav'
        },
    ]
// show START
var count = 0;
var length = data_consonant.length;
function showFirst() {
    document.getElementById('tip').innerHTML = data_consonant[0].tip;
    document.getElementById('remark').innerHTML = data_consonant[0].remark;
    document.getElementById('zhuyin').innerHTML = data_consonant[0].zhuyin;
    document.getElementById("voice").src = data_consonant[0].voice;
};

window.onload = showFirst;
$("#showNext").click(function () {
    ++count;
    if (count < length) {
        document.getElementById('tip').innerHTML = data_consonant[count].tip;
        document.getElementById('remark').innerHTML = data_consonant[count].remark;
        document.getElementById('zhuyin').innerHTML = data_consonant[count].zhuyin;
        document.getElementById("voice").src = data_consonant[count].voice;
    }
    else {
        alert('全部完成');
        --count;
        // document.getElementByIdx('showNext').disabled = true;
    }
});

$("#showPrevious").click(function () {
    --count;
    if (count >= 0) {
        document.getElementById('tip').innerHTML = data_consonant[count].tip;
        document.getElementById('remark').innerHTML = data_consonant[count].remark;
        document.getElementById('zhuyin').innerHTML = data_consonant[count].zhuyin;
        document.getElementById("voice").src = data_consonant[count].voice;
    }
    else {
        alert('已到起頭');
        ++count
        // document.getElementByIdx('showPrevious').disabled = true;
    }
});
})