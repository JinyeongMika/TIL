var 고칠문자열 = "hELlo THERE, hOW ARE yOu doING?"; // Hello there, how are you doing? 으로 만들기
var 소문자문자열 = 고칠문자열.toLowerCase();
var 첫글자자르기 = 소문자문자열.slice(0,1);
var 첫글자대문자 = 첫글자자르기.toUpperCase();
var 완성 = 첫글자대문자+소문자문자열.slice(1);
console.log(완성);


var 고칠문자열2 = "hELlo THERE, hOW ARE yOu doING?";
var 완성2 = 고칠문자열2[0].toUpperCase() + 고칠문자열2.slice(1).toLowerCase(); // 줄여서 작성해보기
console.log(완성2);

/*
자바스크립트 1일차입니다. 초보+이해를 위해서 변수 이름을 한글로 작성했어요.
 */



