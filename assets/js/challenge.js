// function sum(x,y){
//     let add = (x+y)
//     if(x===y){
//       console.log(add*3)
//     }else{
//         console.log(add)
//     }
// }
// sum(6,6)

function checkString(word) {
  let str = "JAVA";
  for (let i = 0; i < str.length; i++) {
    for (let x = 0; x < word.length; x++) {
      if (str[i] === word[i]) {
        break
      } else {
        console.log("false");
        break;
      }
    }
  }
}
checkString("JAVARSCRIPT");
