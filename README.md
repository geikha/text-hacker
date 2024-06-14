# text-hacker
Tool and [website](https://text-hacker.glitch.me/) for 'hacked' looking text (UTF-8) made in vanilla javascript

## how it works
The script takes a given text and replaces (or doesn't) each character with a random one from the available sets. If the char isn't available, then it'll not be replaced. 
### sets
| set name      | description                 | target        | example     |
| ------------- |-----------------------------|:-------------:| ----------- |
| weirdLetters  | variations of the letter, and similar looking ones | letters       | a : ǣǺǻǼǽȀȁȂȃȦȧȺɑʼΆΑάαӐ... |
| relatedSymbols| related derivative symbols that are not used in language | letters       | a : Å@@₳    |
| singleCharLeet| l33t code variations of the letter that only occupy one char | letters       | i : 1!¡':¦] |
| multiCharLeet | l33t code variations of the letter that occupy more than one char | letters       | d : [),[>,[},\|),\|},]) |
| turnedLetters | upside down versions of the letters | letters       | e : Ǝǝ      |
| japaneseVowels| corresponding japanese hiragana or katakana for each vowel | vowels        | a : ぁあァア  |
| arabicAlikes  | similar looking abjad letters  | some letters  | j : ݫݬﮊﮋﮌﮍ  |
| weirdNumbers  | related unicode symbols or representations of the number | digits        | 4 : ₄④⑷⒋⓮⓸⛶✤✦ |
| variationsOfPunctuations | some chars that could replace the punctuation character | other chars | , : ;ʻʽ̦̒̓̔̕՝،߸፣᠂᠈⍪❛❜❝❞❟❠︐︑﹐﹑，､ |
| nothing | returns the exact same character | all chars  | a : a
### weights
There's an array for each type of character that lists the usable sets for the given char, as well as a weight indicating how often that set will be used.  
There arrays are `letterWeight`,`vowelWeight`,`numberWeight`, and `elseWeight`.
#### example
```js
const vowelWeight = [
  [nothing,70],
  [weirdLetters,7],
  [relatedSymbols,3],
  [singleCharLeet,5],
  [multiCharLeet,1],
  [arabicAlikes,1],
  [japaneseVowels,2]
]
```
## how to hack text inside your own website
Take everything from [script.js](https://github.com/geikha/text-hacker/blob/main/script.js) except the last two blocks of code. Then you can do something like:
```js
document.addEventListener(
  "DOMContentLoaded",
  function() {
    const id = "hacktext"; // id of the HTML div
    const text = document.getElementById(id).firstChild.nodeValue;
    const rate = 200; // how many ms until next alteration
    let arr = Array.from(text);
    setInterval(function() {
      setText("hacktext", hackString(text, arr));
    }, rate);
  },
  false
);
```
