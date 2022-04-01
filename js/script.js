<<<<<<< HEAD
navigator.clipboard;

function copyToClipboard() {
    var copyText = document.getElementById("content").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
=======
function copyToClipboard() {
    var copyText = document.getElementById("content").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
>>>>>>> e1fad0e52a77d517152ffcaeac7adb580e5ed81f
  }