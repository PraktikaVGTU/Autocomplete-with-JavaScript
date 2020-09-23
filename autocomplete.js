/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
  var shipname = document.getElementById('shippingName');
  var shipzip = document.getElementById('shippingZip');
  var billname = document.getElementById('billingName');
  var billzip = document.getElementById('billingZip');
  var checkedbox = document.getElementById('same');

  if (document.getElementById('same').checked){
     billname.value = shipname.value;
     billzip.value = shipzip.value;
  }
  else{
      document.getElementById('billingName').value = "";
     document.getElementById('billingZip').value = "";

  }
}
