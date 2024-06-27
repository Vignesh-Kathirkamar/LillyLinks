function copyText() {
    // Get the text field
    var copyText = document.getElementById("textToCopy");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value).then(function() {
        // Display success message
        document.getElementById("message").textContent = "Text copied to clipboard!";
    }).catch(function(err) {
        // Display error message
        document.getElementById("message").textContent = "Failed to copy text: " + err;
    });
}
