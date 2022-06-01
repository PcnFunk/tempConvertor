document.getElementById("submitBtn").onclick = function () {

  let temp;
    if (document.getElementById("celsius").checked) {
      temp = document.getElementById("temperature").value;
      let cTemp = (temp - 32) * (5/9);
      document.getElementById("result").innerHTML = `${cTemp} °C`;
    }

    else if(document.getElementById("fahrenheit").checked) {
      temp = document.getElementById("temperature").value;
      let fTemp = temp * 9 / 5 + 32;
      document.getElementById("result").innerHTML = `${fTemp} °F`;
    }

    else{
      document.getElementById("result").innerHTML = "Select a unit";
    }
}
