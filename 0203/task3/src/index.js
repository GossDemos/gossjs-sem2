const submit = document.getElementById('modify_input');

const caser = x => x.toUpperCase();
const padder = x => x.padEnd(10, "*");
const doubler = x => x + x;
const reverser = x => x.split("").reverse().join("");

submit.addEventListener('click', () => {
  let input = document.getElementById('user_input').value;
  if (input.length >= 3 && input.length <= 5) {
    let result = input
      |> caser
      |> padder
      |> doubler
      |> reverser;
    console.log(result);
    console.log(reverser(doubler(padder(caser(input)))));
  }
});
