var Testname = ["moomin", "mika", "rocket", "groot"];

for (var i = 0; i < 5; i++){
  matchName(Testname[i])
}

function matchName (a) {
  if (a==="moomin"){
    return '하얗고 통통한 트롤';
  } else if(a==="mika"){
    return "고통받는 디자인 팀장";
  } else if(a==="rocket"){
    return "우주 최강 똑똑이";
  } else if(a==="groot"){
    return "I'm Groot.";
  } else {
    return '알 수 없는 캐릭터 입니다.';
  }
}


document.querySelector('.input_button').addEventListener('click', function () {
  var inputname = document.querySelector('.input_box').value;
  document.querySelector('.result').textContent = matchName(inputname);
});
