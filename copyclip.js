function copyToClipboard() {
    var text = document.getElementById("myText").innerText;

    navigator.clipboard.writeText(text).then(function() {
        alert("Copied the text: " + text);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}