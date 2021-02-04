let nothing = {} //it just does... nothig

let weirdLetters = {
    'a':"ɐΛʌAaÀÁÂÃÄÅÆàáâãäåæĀāĂăĄąƉǍǎǞǟǠǡǢǣǺǻǼǽȀȁȂȃȦȧȺɑʼΆΑάαӐӑӒӓḀḁẚẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặἀἁἂἃἄἅἆἇἈἉἊἋἌἍἎἏὰάᾀᾁᾂᾃᾄᾅᾆᾇᾈᾉᾊᾋᾌᾍᾎᾏᾰᾱᾲᾳᾴᾶᾷᾸᾹᾺΆᾼₐⱥⲀⲁꓮꓯ",
    'b':"BbƀƁƂƃɃɓʙΒβБᴃᵬᶀḂḃḄḅḆḇℬＢｂᴃ",
    'c':"CcÇçĆćĈĉĊċČčƇƈȻȼɕͻͼͽᴄℂｃＣ",
    'd':"DdÐðĎďĐđƊƋƌǄǅǆǱǲǳȡɖɗɟʄʣʤʥԀԁᴅᴆᴰᵈᵟᵭᶁᶑᶞḊḋḌḍḎḏḐḑḒḓẟðＤⅅⅆ",
    'e':"EeÈÉÊËÐèéêëĒēĔƏƩĕĖėĘęĚěƩƷƸƹƺǮǯȄȅȆȇȨȩɆɇΈΕέεϵ϶ḔḕḖḗḘḙḚḛḜḝẸẹẺẻẼẽẾếỀềỂểỄễỆệἐἑἒἓἔἕἘἙἚἛἜἝῈΈ⁸₈ₑℯℰⅇꓰꓱⲈⲉ",
    'f':"FfƑƒʩＦｆꜰᵮᶂḞḟℲⅎ",
    'g':"GgĜĝĞğĠġĢģƓƔǤǥǦǧǴǵɠɢḠḡꞠꞡＧｇᴳᵍ",
    'h':"HhĤĥĦħƕƛǶȞȟɦɧʜʰʱԦɥԧⲎⲏḩḪḫẖₕℋℌℍꚔꚕᴴḢḣḤḥḦḧḨＨｈҢңҤҥӇӈӉӊ",
    'i':"IiÌÍÎÏìíîïĨĩĪīĬĭĮįİƖƗƾǏǐȈȉȊȋɨɩɪḬḭḮḯỈỉỊịᶖᴵᵢἰἱἲἳἴἵἶἷἸἹἺἻἼἽἾἿὶίῐῑῒΐῖῗῘῙῚΊⁱℐℑＩｉΊΐΙΪίιϊ",
    'j':"JjĴĵǰɈɉʝʲЈјＪｊᴊᴶᶨⅉⱼ",
    'k':"KkĶķĸƘƙǨǩΚκϏЌЖКжкќҖҗҚқҜҝҞҟҠҡӁӂӃӄӜӝԞԟᴋᴷᵏｋＫḰḱḲḳḴḵₖ",
    'l':"LlĹĺĻļĽľĿŀŁłȽɫɬɭɮʪʫԼＬｌḶḷḸḹḺḻḼḽ",
    'm':"MmɱΜМмӍӎḾḿṀṁṂṃᴍᴹᵐᵯᶆꙦꙧⱮⲘⲙɯɰ",
    'n':"んNnÑñŃńŅņŇňŉŊŋƝƞǊǋǌǸǹȠȵɲɳɴṄṅṆṇṈṉṊṋⁿᴺᵑᵰᵸᶇᶮᶯꝴꞐꞑꞤꞥＮｎ",
    'o':"OoÒÓÔÕÖØòóôõöøŌōŎŏŐőƆƐƟƠơƢƣǑǒǪǫǬǭǾǿȌȍȎȏȢȣȪȫȬȭȮȯȰȱΌΏΟΩοόώОоӦӧՕօṌṍṎṏṐṑṒṓỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợὀὁὂὃὄὅὈὉὊὋὌὍὨὩὪὫὬὭὮὯὸόᾨᾩᾪᾫᾬᾭᾮᾯῸΌῺΏῼₒℴⓄⓞＯｏꝊꝋꝌꝍꝎꝏ",
    'p':"PpƤƥᴘᴾᵖᵱᵽᶈṔṕṖṗꝐꝑꝒꝓꝔꝕⴔＰｐπ",
    'q':"♀QqȹɊɋʠϘϙҀҁԚԛꝖꝗꝘꝙ",
    'r':"RrŔŕŖŗŘřƎƔƪȐȑȒȓɌɍɼɽɾɿʀṘṙṚṛṜṝṞṟῤῥῬℛℜℝᴙᴦＲｒꝵꝶꝚꝛꞧꞦⱤ",
    's':"SsßŚśŜŝŞşŠšȘșȿʂᶘṠṡṢṣṤṥṦṧṨṩẞꜱ",
    't':"TtŢţŤťŦŧƫƬƭƮȚțȶȾʇʈⲦⲧṪṫṬṭṮṯṰṱẗꚌꚍꚐꚑꓔꓕᵀᶵᵗ",
    'u':"UuÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄʉʊΰυϋύᵾᵿᶙṲṳṴṵṶṷṸṹṺṻỤụỦủỨứỪừỬửỮữỰựὐὑὒὓὔὕὖὗὺύῠῡῢΰῦῧｕꓴꓵμ",
    'v':"VvƲʋѴѵѶѷṼṽṾṿ⩡Ｖｖᵛᵥᶌᶹ",
    'w':"WwŴŵԜԝⱲⱳẀẁẂẃẄẅẆẇẈẉẘＷｗꝠꝡ",
    'x':"XxˣͯΞΧχ᙭ᚷẊẋẌẍₓＸｘ",
    'y':"YÝýÿŶŷŸȲȳɎɏʎʏʸϒϓϔ⅄ＹｙῨῩῪΎὙὛὝὟ",
    'z':"ZzŹźŻżŽžƵƶȤȥɀʐʑΖζẐẑẒẓẔẕᴢᵶᶎᶻᶼⱫⱬⱿⲌⲍ"
}

let relatedSymbols = {
    'a':"Å@@₳",
    'b':"␢฿₿♭",
    'c':"℃¢₡₢₵",
    'd':"₫∂",
    'e':"€€€€℮e∃∈",
    'f':"₣℉",
    'g':"₲",
    'h':"ℏ",
    'i':"iI",//null
    'j':"jJ",//null
    'k':"₭",
    'l':"lL£",//null
    'm':"₥₥™℠",
    'n':"₦",
    'o':"oO",//null
    'p':"₱℘℗♇¶",
    'q':"Qq",//null
    'r':"℟℞",
    's':"$₷§∫",
    't':"₮₸☦☨☩♰♱✝✞✟┬├╦",
    'u':"Uu",//null
    'v':"√",//null
    'w':"₩",
    'x':"╳⚔⛌❌❎☠",
    'y':"¥",
    'z':"Zz"//null
}

let singleCharLeet = {
    'a':"4",
    'b':"86",
    'c':"(<[{",
    'd':"d0",
    'e':"3&",
    'f':"(=}",
    'g':"6;",
    'h':"#4",
    'i':"1!¡':¦]",
    'j':"7¿]",
    'k':"k",
    'l':"1|¬",
    'm':"m",
    'n':"n",
    'o':"0x.*",
    'p':"p",
    'q':"9,",
    'r':"2",
    's':"5",
    't':"7+",
    'u':"vM",
    'v':"v",
    'w':"w",
    'x':"%",
    'y':"9j",
    'z':"2%"
}

let multiCharLeet = {
    'a':["/\\","|\\"],
    'b':["|3","|X","|8","|:","/3","[3","[8","(3"],
    'c':["c"],
    'd':["[)","[>","[}","|)","|}","])"],
    'e':["[-"],
    'f':["]]=","ph","|#","|=","(="],
    'g':["(_+","(_>","[[6","C-","gee","(_-","cj"],
    'h':["(-)",")-(","|-|","/-/","]-[","]~[","{-}",":-:","}{","}-{"],
    'i':["][","[]",""],
    'j':[",|","_|","_/","(/"],
    'k':["]{","|(","|<","|\\{","}<","|X"],
    'l':["][_","|_","1_"],
    'm':["(V)","(u)",".\\\\","//.","ɅɅ","|V|","[V]","em","nn","|v|","^^","|^^|"],
    'n':["(\\)","//","ɅV","[\\]","]\\[","^/","|\\|","[]\\"],
    'o':["()","[]","oh","<>","( )"],
    'p':["][D","[]D","|D","|°","|²","|"],
    'q':["(,)","0,","0_","(_,)","O,","(),"],
    'r':["|2","1²","P\\","|?","12","/2","l2","|^","|`"],
    's':["es","ez","$$"],
    't':["']'","']['","-|-","7`","~|~"],
    'u':["(_)","/_/","|_|","\\_/","\\_\\","]_[","L|"],
    'v':["\\V","\\/"],
    'w':["'//","(Ʌ)","///","uu","UU","vv","UU","\\^/"],
    'x':[")(","><","}{","ex"],
    'y':["'/","V/","_v","`/","`)"],
    'z':["\"/_","~/_","7_",">_"]
}

let turnedLetters = {
    'a':"∀ɐ",
    'b':"q",
    'c':"Ɔɔ",
    'd':"p",
    'e':"Ǝǝ",
    'f':"Ⅎɟ",
    'g':"ƃ",
    'h':"ɥH",
    'i':"Iᴉ",
    'j':"ſɾ",
    'k':"ʞ",
    'l':"˥",
    'm':"Wɯ",
    'n':"Nu",
    'o':"oO",
    'p':"Ԁd",
    'q':"pQ",
    'r':"ᴚɹ",
    's':"Ss",
    't':"⊥ʇ",
    'u':"∩n",
    'v':"Λʌ",
    'w':"Mʍ",
    'x':"Xx",
    'y':"⅄ʎ",
    'z':"Zz"
}

let japaneseVowels = {
    'a':"ぁあァア",
    'i':"ぃいィイ",
    'u':"ぅうゥウ",
    'e':"ぇえェエ",
    'o':"ぉおォオを"//last one is 'wo'
}

let arabicAlikes = {
    'a':"م",
    'e':"ﻍﻎﻉﻊ",
    'f':"ٲ",
    'g':"ۄۅۆۇۈۉۊۋ",
    'i':"ﮅﮆﮇﮈﮉ",
    'j':"ݫݬﮊﮋﮌﮍ",
    'l':"ﭑ",
    'm':"ﱰﱱ",
    'o':"٥",
    'q':"۹",
    's':"ﻰﻱﻲﻯﳒﳓﳔﱯﳕ",
    'y':"٧۲۳",
    'z':"ﱀﱁ"
}

let weirdNumbers = {
    '1':"¹⅐⅑⅒¼½⅙①⑴⒈⓵❶➀➊႑|I∞۰",
    '2':"²Ƨƨƻ２②⑵⒉⓶⚇⚉⛖⛗₂⅔⅖२২৵੨∞:",
    '3':"³¾⅗⅜੩３❸➂➌③⑶⒊⓷⸫∞",
    '4':"⅘⁞⁴₄④⑷⒋⓮⓸⛶✤✦✧㍜㏣∞",
    '5':"Ƽƽ⑤⑸⒌⓹❺➄➎V⅚∞",
    '6':"Ƅƅ⑥⑯⑹⒃⒍⒗⓰⓺♬❻➅➏꘦㍞㍨㏥㏯６∞",
    '7':"⁷₇⅐⅞⑦⑰⑺⒄⒎⒘⓱⓻❼㍟㏦∞",
    '8':"∞⑧⑱⑻⒅⒏⒙⓲⓼㉏㍠㏧♫❽",
    '9':"∞٩۹߉९㍡㏨⁹₉Ⅸⅸ⑨⑲⑼⒆⒐⒚⓳⓽❾➈➒",
    '0':"۰०০੦૦୦௦౦౸೦൦๐໐༠༳၀႐០᠐᱐⁰₀↉⓪⓿〇㍘꘠"
}

let variationsOfPunctuations = {
    '.':"°*·",
    ',':";ʻʽ̦̒̓̔̕՝،߸፣᠂᠈⍪❛❜❝❞❟❠︐︑﹐﹑，､",
    ':':";╎ː꞉∶",
    ';':"؛",
    ' ':"_-_`",
    '!':'¡?¿!!',
    '?':'??¿¡'
}

let emojis = {
    'o':"☠⚙☢♉⛔☭⛧",
}

let tailChars = ",!*¿("

const letterWeight = [
  [nothing,135],
  [weirdLetters,7],
  [relatedSymbols,5],
  [singleCharLeet,6],
  [multiCharLeet,1],
  [arabicAlikes,3]
]

const vowelWeight = [
  [nothing,70],
  [weirdLetters,7],
  [relatedSymbols,3],
  [singleCharLeet,5],
  [multiCharLeet,1],
  [arabicAlikes,1],
  [japaneseVowels,2]
]

const numberWeight = [
  [nothing,15],
  [weirdNumbers,5]
]

const elseWeight = [
  [nothing,13],
  [variationsOfPunctuations,5]
]

function getRandomVariation(data) {
  var total = 0
  for (let i = 0; i < data.length; ++i) {
    total += data[i][1];
  }
  const threshold = Math.random() * total;
  var sum = 0
  for (let i = 0; i < data.length; i++) {
    sum += data[i][1];
    if (sum >= threshold) {
      return data[i][0];
    }
  }
  return data[data.length - 1][0];
}
String.prototype.isLetter = function(){
  return (/[a-zA-Z]/).test(this)
}
String.prototype.isVowel = function(){
  return "aeiou".includes(this)
}
String.prototype.isNumber = function(){
  return "0123456789".includes(this);
}
function setText(id,text){
  document.getElementById(id).innerHTML = 
    text.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}
function getText(id){
  return document.getElementById(id).firstChild.nodeValue;
}
function clearDiv(id) {
  let div = document.getElementById(id);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function addLineToText(id,text){
  let div = document.getElementById(id)
  div.insertAdjacentHTML('afterbegin',text+"<br/>");
}
function randomInt(min,max){
  return Math.round(Math.random()*(max-min)+min);
}
function getOptionFrom(ch, charmap) {
  try {
    const source = charmap[ch.toLowerCase()];
    const length = source.length;
    const i = randomInt(0, length - 1);
    return source[i];
  } catch {
    return ch;
  }
}
function getCharWeight(ch) {
  var weight = elseWeight;
  if (ch.isLetter())
    if (ch.isVowel()) weight = vowelWeight;
    else weight = letterWeight;
  else if (ch.isNumber()) weight = numberWeight;
  else weight = elseWeight;
  return weight
}
function hackString(s, out) {
  const amt = Math.round((Math.random() * s.length) / 2);
  for (let i = 0; i < amt; i++) {
    let j = Math.floor(Math.random() * s.length);
    var weight = getCharWeight(s[j])
    const source = getRandomVariation(weight);
    out[j] = getOptionFrom(s[j], source);
  }
  return out.join("");
}

function start(ogtext, caller, isAcc, rateValue) {
  let arr = Array.from(ogtext);
  return setInterval(function() {
    if(isAcc)
      addLineToText("hacktext", hackString(ogtext, arr))
    else  
      setText("hacktext", hackString(ogtext, arr));
  }, rateValue || 300);
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    
    var txt = document.getElementById("txt")
    var button = document.getElementById("button")
    var acc = document.getElementById("acc")
    var rate = document.getElementById("rate")
    var defaultText = document.getElementById("hacktext").firstChild.nodeValue
    
    var hacking = start(defaultText);
    function restartHacking(text, isAcc, rateValue) {
      clearInterval(hacking);
      if(!isAcc)
        clearDiv("hacktext")
      hacking = start(text, hacking, isAcc, rateValue);
    }
    button.addEventListener("click", function() {
      const isAcc = acc.checked
      const text = txt.value ? txt.value : defaultText
      const rateValue = rate.value
      restartHacking(text, isAcc, rateValue);
    });
    acc.addEventListener("click", function() {
      button.click()
    });
    rate.addEventListener("input", function() {
      button.click()
    });
    
  },
  false
);
