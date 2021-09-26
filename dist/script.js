function realParaDolar() {
  var valor = parseFloat(document.getElementById("valor").value);
  var realParaDolar = valor * 5.21;
  document.form.valorH.value = realParaDolar.toFixed(2);
}
//função de real para dólar
function dolarParaReal() {
  var valor = parseFloat(document.getElementById("valor").value);
  var dolarParaReal = valor / 5.21;
  document.form.valorH.value = dolarParaReal.toFixed(2);
}
//função dolar para real

function dolarParaBitcoin() {
  var valorParaConversaoB = document.getElementById("valorb").value;

  var valorB = parseFloat(valorParaConversaoB);

  var dolarParaBitcoin = valorB * 0.000021;

  document.formb.valorB.value = dolarParaBitcoin.toFixed(6);
}
//funcao dolar para bitcoin
function bitcoinParaDolar() {
  var valorParaConversaoB = document.getElementById("valorb").value;

  var valorB = parseFloat(valorParaConversaoB);

  var dolarParaBitcoin = valorB / 0.000021;

  document.formb.valorB.value = dolarParaBitcoin.toFixed(2);
}
//funcao bitcoin para dolar

function converterTemperatura() {
  var tempConver = parseFloat(document.getElementById("temperatura").value);
  var tempConver2 = parseFloat(document.getElementById("temperaturaB").value);
  var selecao1 = document.getElementById("tempeJ");
  var selecao2 = document.getElementById("selectTempJ");
  var opcoes1 = selecao1.options[selecao1.selectedIndex].text;
  var opcoes2 = selecao2.options[selecao2.selectedIndex].text;
  //variaveis do input e do select

  var resultadoDaConversao = document.formC.valorTemp1.value;
  var resultadoDaConversao2 = document.formD.valorTemp2.value;
  var convertido = 0;

  if (
    (opcoes1 == "Celsius" && opcoes2 == "Fahrenheit") ||
    (opcoes1 == "Fahrenheit" && opcoes2 == "Celsius")
  ) {
    convertido = transformarCelsiusParaFahrenheit(
      tempConver,
      tempConver2,
      opcoes1,
      opcoes2
    );
  } else if (
    (opcoes1 == "Fahrenheit" && opcoes2 == "Kelvin") ||
    (opcoes1 == "Kelvin" && opcoes2 == "Fahrenheit")
  ) {
    convertido = transformarFahrenheitParaKelvin(
      tempConver,
      tempConver2,
      opcoes1,
      opcoes2
    );
  } else if (
    (opcoes1 == "Kelvin" && opcoes2 == "Celsius") ||
    (opcoes1 == "Celsius" && opcoes2 == "Kelvin")
  ) {
    convertido = transformarKelvinparaCelsius(
      tempConver,
      tempConver2,
      opcoes1,
      opcoes2
    );
  }
  if (opcoes1 == opcoes2) {
    document.formC.valorTemp1.value = "";
    document.formD.valorTemp2.value = "";
  } else {
    document.formD.valorTemp2.value = convertido.toFixed(1);
  }

  function transformarCelsiusParaFahrenheit(
    tempConver,
    tempConver2,
    opcoes1,
    opcoes2
  ) {
    if (opcoes1 == "Celsius") {
      return tempConver * 1.8 + 32;
    } else {
      return (tempConver - 32) / 1.8;
    }
  }
  function transformarFahrenheitParaKelvin(
    tempConver,
    tempConver2,
    opcoes1,
    opcoes2
  ) {
    if (opcoes1 == "Fahrenheit") {
      return (tempConver - 32) * (5 / 9) + 273;
    } else {
      return (tempConver - 273) * 1.8 + 32;
    }
  }
  function transformarKelvinparaCelsius(
    tempConver,
    tempConver2,
    opcoes1,
    opcoes2
  ) {
    if (opcoes1 == "Kelvin") {
      return tempConver - 273;
    } else {
      return tempConver + 273;
    }
  }
}