function copyToClipboard() {
    var textArea = document.getElementById("myText");

    // Select the text field
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand("copy");

    // Alert the copied text (optional)
    alert("Copied the text: " + textArea.value);
}