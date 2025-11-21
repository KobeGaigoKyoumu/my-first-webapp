console.log("script.js 読み込み完了"); 

const correctAnswer = "こんにちは";

function checkAnswer() {
  console.log("checkAnswer() が呼ばれたよ");

  const userAnswer = document.getElementById("answer").value;
  console.log("ユーザーの入力:", userAnswer);

  const result = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    console.log("判定: 正解");
    result.textContent = "正解";
  } else {
    console.log("判定: 不正解 / 正解は:", correctAnswer);
    result.textContent = "不正解。正解は「こんにちは」";
  }
}
