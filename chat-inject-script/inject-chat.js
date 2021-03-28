const css = `.open-button {
    z-index: 1;
    padding: 5px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    right: 28px;
    background: transparent;
  }
  
  /* The popup chat - hidden by default */
  .chat-popup {
    z-index: 100;
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
  }
  
  /* Add styles to the form container */
  .form-container {
    z-index: 11;
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }
  
  
  
  /* When the textarea gets focus, do something */
  .form-container textarea:focus {
    background-color: #ddd;
    outline: none;
  }
  
  /* Set a style for the submit/send button */
  .btn {
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
  }

  .float-left {
      float: left;
  }
  
  /* Add a red background color to the cancel button */
  .form-container .cancel {
    color: red;
    background: transparent;
    float: right;
  }
  
  /* Add some hover effects to buttons */
  .form-container .btn:hover, .open-button:hover {
    opacity: 1;
  }`;

const html = `
<button class="open-button" onclick="openForm()">
<image src="./chat-icon.png" height="50px"></image>
</button>

<div class="chat-popup" id="myForm">
  <div class="form-container">
    <div>
    <div id="chat-header" class="float-left">
        <h5 >Chat</h5>
    </div>
    <button type="button" class="btn cancel" onclick="closeForm()">X</button>
    </div>
    <embed type="text/html" src="http://localhost:4200" height="400px" width="100%">

    
  </div>
</div>
`;
document.addEventListener('readystatechange', (event) => {
  // When HTML/DOM elements are ready:
  if (event.target.readyState === 'interactive') {
    //does same as:  ..addEventListener("DOMContentLoaded"..
    appendChatCss();
    createChatElement();
  }

  // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
  if (event.target.readyState === 'complete') {
    // alert("hi 2");
  }
});

function appendChatCss() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  head.appendChild(style);
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

function createChatElement() {
  document.getElementById('ng-chat').innerHTML = html;
}
function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}
