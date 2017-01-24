// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
  console.log('reading');

  //capture the submit event
    document.f.onsubmit = process;

    //define process function
    function process() {

      //store user name in a variable
      var userName = document.f.userName.value;
      alert('Hi ' + userName);

      var userColor = document.f.userName.value;
      alert('Your favorite color is ' + userColor);

      //use the alert() to concatenate a message

       //prevent page from reloading
      return false;

    }
