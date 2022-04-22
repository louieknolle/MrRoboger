$(document).ready(function() {
  $('form#userNumberInputForm').submit(function(event){
    event.preventDefault();
    const userInputNumber = $('input#userNumber').val();
    const robotifiedRange = robotify(userInputNumber);

    $('#resultContainer').html(robotifiedRange);
  });
});

function robotify(number) {
  let userNumberArray = [];
  let substitutedArray = [];
  for (i =0; i<= number; i++) {
    userNumberArray.push(i.toString());
  }

  for (let index of userNumberArray)
    if (index.includes(3)) {
      substitutedArray.push("Won't you be my neighbor?");
    } else if (index.includes(2)) {
      substitutedArray.push("boop");
    } else if (index.includes(1)) {
      substitutedArray.push('beep');
    } else {
      substitutedArray.push(index);
    }
    return substitutedArray.toString();
}