function clickButton() {
  document.getElementById("nome").innerHTML =
    document.forms["assinatura"]["fname"].value;

  document.getElementById("cargo").innerHTML =
    document.forms["assinatura"]["fcargo"].value;

  document.getElementById("grupo").innerHTML =
    document.forms["assinatura"]["fgrupo"].value;

  document.getElementById("fone").innerHTML =
    document.forms["assinatura"]["ffone"].value;
}
