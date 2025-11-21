const correctAnswer = "こんにちは";

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const result = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    result.textContent = "正解";
  } else {
    result.textContent = "不正解。正解は「こんにちは」";
  }
}
