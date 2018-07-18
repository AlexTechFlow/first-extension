chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
   chrome.declarativeContent.onPageChanged.addRules([{
     conditions: [new chrome.declarativeContent.PageStateMatcher({
       pageUrl: {schemes: ['https', 'http', 'localhost', 'chrome']},
     })
     ],
 actions: [new chrome.declarativeContent.ShowPageAction()]
   }]);
 });

chrome.pageAction.onClicked.addListener(function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        file: 'main.js'
      }
    );
  });
});

// Script.js tells the browser to activate the extension button, 
// but not do anything until the button is pressed. 
// When the button is pressed, run anything that's in main.js.
// Main.js tells the current page to turn green.