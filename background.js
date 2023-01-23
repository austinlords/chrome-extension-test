try {
  console.log("start", chrome);
  console.log({onCompleted: chrome.webRequest.onCompleted})
  console.log({webRequest: chrome.webRequest})

chrome.webRequest.onCompleted.addListener(() => {
    console.log("completed: ");
    //console.log(arguments);
  })

} catch (error) {
  console.error("service worker error: ", error);
}
