var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var langToBeUsed = 'ko-KR';

//hide message for result


var phrases = [
 '가게',
'가격',
'가구',
'가깝다',
'가끔',
'가늘다',
'가다',
'가득',
'가르치다',
'가리키다',
'가방',
'가볍다',
'가수',
'가슴',
'가요',
'가운데',
'가위',
'가을',
'가장',
'가져가다',
'가져오다',
'가족',
'가지',
'가지다',
'각각',
'간단하다',
'간단히',
'간식',
'간장',
'간호사',
'갈비',
'갈비탕',
'갈색',
'갈아입다',
'갈아타다',
'감',
'감기',
'감기약',
'감다',
'감다',
'감사',
'감자',
'갑자기',
'값',
'강',
'강아지',
'강하다',
'갖다',
'같다',
'같이',
'갚다',
'개',
'개',
'개월',
'거',
'거기',
'거리',
'거리',
'거실',
'거울',
'거의',
'거절',
'거짓말',
'걱정',
'건강',
'건너가다',
'건너다',
'건너편',
'건물',
'걷다',
'걸다',
'걸리다',
'걸어가다',
'걸어오다',
'걸음',
'검사',
'검은색',
'검정',
'것',
'겉',
'게으르다',
'게임',
'겨울',
'결과',
'결석',
'결심',
'결정',
'결혼',
'결혼식',
'경기',
'경찰',
'경찰서',
'경치',
'경험',
'계단',
'계란',
'계산',
'계속',
'계시다',
'계절',
'계획',
'고개',
'고기',
'고등학교',
'고등학생',
'고르다',
'고맙다',
'고모',
'고민',
'고속버스',
'고양이',
'고장',
'고추장',
'고치다',
'고프다',
'고향',
'곧',
'곳',
'공',
'공무원',
'공부',
'공원',
'공장',
'공짜',
'공책',
'공항',
'공휴일',
'과거',
'과일',
'과자',
'관계',
'관광',
'관광객',
'관광지',
'관심',
'광고',
'광주',
'괜찮다',
'괴로워하다',
'교과서',
'교사',
'교수',
'교실',
'교육',
'교통',
'교통비',
'교통사고',
'교환',
'교회',
'구',
'구경',
'구두',
'구름',
'구십',
'구월',
'국',
'국내',
'국수',
'국적',
'국제',
'군인',
'굳다',
'굵다',
'굽다',
'궁금하다',
'권',
'귀',
'귀걸이',
'귀여워하다',
'귀엽다',
'귀찮다',
'규칙',
'귤',
'그',
'그거',
'그것',
'그곳',
'그날',
'그냥',
'그대로',
'그동안',
'그때',
'그래',
'그래서',
'그러나',
'그러니까',
'그러면',
'그러므로',
'그런',
'그런데',
'그럼',
'그럼',
'그렇다',
'그렇지만',
'그릇',
'그리고',
'그리다',
'그림',
'그립다',
'그만',
'그만두다',
'그분',
'그저께',
'그쪽',
'그치다',
'극장',
'근처',
'글',
'글쎄',
'글쎄요',
'글씨',
'글자',
'금방',
'금요일',
'금지',
'급하다',
'기간',
'기다리다',
'기르다',
'기름',
'기말시험',
'기분',
'기뻐하다',
'기쁘다',
'기쁨',
'기숙사',
'기억',
'기억나다',
'기온',
'기자',
'기차',
'기차역',
'기차표',
'기침',
'기타',
'기회',
'긴장',
'길',
'길다',
'길이',
'김',
'김밥',
'김치',
'김치찌개',
'깊다',
'깊이',
'까만색',
'까맣다',
'깎다',
'깜짝',
'깨끗이',
'깨끗하다',
'깨다',
'꺼내다',
'껌',
'꼭',
'꽃',
'꽃다발',
'꽃병',
'꽃집',
'꾸다',
'꿈',
'끄다',
'끊다',
'끓다',
'끓이다',
'끝',
'끝나다',
'끝내다',
'끼다',
'나',
'나가다',
'나누다',
'나다',
'나라',
'나머지',
'나무',
'나쁘다',
'나오다',
'나이',
'나중',
'나타나다',
'나흘',
'낚시',
'날',
'날다',
'날씨',
'날씬하다',
'날아다니다',
'날짜',
'남',
'남기다',
'남녀',
'남다',
'남대문',
'남동생',
'남산',
'남성',
'남자',
'남쪽',
'남편',
'남학생',
'낫다',
'낫다',
'낮',
'낮다',
'낮잠',
'내',
'내과',
'내년',
'내다',
'내려가다',
'내려오다',
'내리다',
'내용',
'내일',
'냄비',
'냄새',
'냉면',
'냉장고',
'너',
'너무',
'너희',
'넓다',
'넘다',
'넘어지다',
'넣다',
'네',
'네',
'네',
'넥타이',
'넷',
'넷째',
'년',
'노란색',
'노랗다',
'노래',
'노래방',
'노력',
'노인',
'노트',
'녹색',
'녹차',
'놀다',
'놀라다',
'놀이',
'농구',
'농담',
'높다',
'높이',
'높이',
'놓다',
'누구',
'누나',
'누르다',
'눈',
'눈',
'눈물',
'눕다',
'뉴스',
'느끼다',
'느낌',
'느리다',
'늘',
'늘다',
'늙다',
'능력',
'늦다',
'다',
'다녀오다',
'다니다',
'다르다',
'다른',
'다리',
'다리',
'다림질',
'다섯',
'다섯째',
'다시',
'다양',
'다음',
'다음날',
'다이어트',
'다치다',
'다하다',
'닦다',
'단순',
'단어',
'단추',
'단풍',
'닫다',
'달',
'달걀',
'달다',
'달력',
'달리기',
'달리다',
'닭',
'닭고기',
'닮다',
'담배',
'답',
'답답하다',
'답장',
'대',
'대구',
'대답',
'대부분',
'대사관',
'대전',
'대학',
'대학교',
'대학생',
'대학원',
'대화',
'대회',
'댁',
'더',
'더럽다',
'더욱',
'덕분',
'던지다',
'덥다',
'데려가다',
'데려오다',
'데이트',
'도',
'도로',
'도서관',
'도시',
'도와주다',
'도움',
'도착',
'독서',
'독일',
'돈',
'돈가스',
'돌',
'돌다',
'돌려주다',
'돌리다',
'돌아가다',
'돌아오다',
'돕다',
'동네',
'동대문',
'동물',
'동물원',
'동생',
'동시',
'동안',
'동전',
'동쪽',
'돼지',
'돼지고기',
'되다',
'된장',
'된장찌개',
'두',
'두껍다',
'두다',
'두부',
'두세',
'두통',
'둘',
'둘째',
'뒤',
'뒤쪽',
'드디어',
'드라마',
'드리다',
'듣다',
'들다',
'들다',
'들르다',
'들리다',
'들어가다',
'들어오다',
'등',
'등산',
'디자인',
'따뜻하다',
'따로',
'딸',
'딸기',
'땀',
'땅',
'때',
'떠나다',
'떠들다',
'떡',
'떡국',
'떡볶이',
'떨어지다',
'또',
'또는'

];

var phrasePara = document.querySelector('.phrase');
var resultPara = document.querySelector('.resultMsg');
var diagnosticPara = document.querySelector('.output');
var said = document.querySelector('.said');
var given = document.querySelector('.given');
var testBtn = document.querySelector('#testbutton');
var hearBtn = document.querySelector('#hearbutton');
var inputtxt = document.querySelector('textarea');
var checkbox1 = document.querySelector('#switch');

var phrase = document.getElementById("oriphrase").value;


function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return number;
}

checkbox1.addEventListener( 'change', function() {
    if(this.checked) {
        phrase = phrases[randomPhrase()];
		document.getElementById("oriphrase").value =  phrase;
    } else {
        phrase = document.getElementById("oriphrase").value;
    }
	console.log(phrase);
});

function hearSpeech() {
	
  let utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = langToBeUsed;
  speechSynthesis.speak(utterance);
}

function testSpeech() {
  testBtn.disabled = true;
  hearBtn.disabled = true;
  testBtn.textContent = 'Test in progress';

  // To ensure case consistency while checking with the returned output text
  //phrase = phrase.toLowerCase();
  
  resultPara.textContent = 'Right or wrong?';
  resultPara.style.background = 'rgba(0,0,0,0.2)';
  diagnosticPara.textContent = '...diagnostic messages';

  var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  //recognition.lang = 'en-US';
  recognition.lang = langToBeUsed ;
  recognition.interimResults = false;
  //recognition.continuous = true;
  recognition.maxAlternatives = 1;

  recognition.start(); 

  recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at position 0.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object 
	if(phrase.endsWith("."))
	{
		var speechResult = event.results[0][0].transcript + '.';
	}
	else
	{
		var speechResult = event.results[0][0].transcript;
	}
	
    diagnosticPara.textContent =  speechResult;
	console.log(speechResult);
	console.log(phrase);
	console.log("is speechResult === phrase ?");
	console.log(speechResult === phrase);
    if(speechResult === phrase) {
      resultPara.textContent = 'I heard the correct phrase!';
      resultPara.style.background = 'lime';
    } else {
      resultPara.textContent = 'That didn\'t sound right.';
      resultPara.style.background = 'red';
    }

    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();

  }

  recognition.onerror = function(event) {
    testBtn.disabled = false;
    testBtn.textContent = 'Start new test';
    diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
	  //document.getElementById('speaker').src= "" ;
	  testBtn.disabled = false;
	  hearBtn.disabled = false;
	  testBtn.textContent = 'Start new test';
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
	  //document.getElementById('speaker').src= "noun_speaking_1749116.svg" ;
  }
  
  recognition.onsoundend = function(event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log('SpeechRecognition.onstart');
  }
}


testBtn.addEventListener('click', testSpeech);
hearBtn.addEventListener('click', hearSpeech);
