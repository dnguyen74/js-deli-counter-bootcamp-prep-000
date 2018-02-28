var katzDeli = [];

function takeANumber (katzDeliLine, custName) {
  //katzDeli = [];
  katzDeliLine.push(custName);
  
  return "Welcome, " + custName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing () {
  var deliLine = katzDeli;
  
  if (deliLine.length === 1) {
    return 'There is nobody waiting to be served!'
  }
  else {
    katzDeli.shift();
    return "Currently serving " + deliLine[0];
  }  
}

