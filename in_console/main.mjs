async function fun() {
  let con = prompt("enter coutry name");
  let res = await fetch("https://restcountries.com/v3.1/name/" + con);
  // let res = await fetch("https://restcountries.com/v3.1/name/india");
  let result = await res.json();
  // console.log(result[0].name.official);
  for (let x of result) {
    console.log(x.name.official);
  }
}

fun();
