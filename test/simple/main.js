var testFunction = function (theMQ) {

  if (theMQ === 'mqCore') {
    console.log('mqCore');
  } else if (theMQ === 'mq600') {
    console.log('mq600');
  } else if (theMQ === 'mq768') {
    console.log('mq768');
  } else if (theMQ === 'mq960') {
    console.log('mq960');
  } else if(theMQ === 'mq1200') {
    console.log('mq1200');
  }

};

var anotherTestFunction = function (theMQ) {

  if (theMQ === 'mqCore') {
    console.log('mqCore');
  }

};

checkMQ.addFunctions([
  testFunction,
  anotherTestFunction
]);
