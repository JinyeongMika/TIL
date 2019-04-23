var 색상목록 = ["파란","붉은","샛노란","푸른","검은","하얀"];
var 자연목록 = ["나무","히아신스","바다","하늘","우주"];
var 단어목록 = ["겸손","음악","소리","그림","꿈","용기"];

var 색상 = 색상목록[Math.floor(Math.random() * 6)];
var 자연 = 자연목록[Math.floor(Math.random() * 5)];
var 단어 = 단어목록[Math.floor(Math.random() * 6)];

var 인디언이름 = 색상 + " " + 자연 + "의 " + 단어;
console.log(인디언이름);
