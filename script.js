function displayOption(option) {
    var content = "";
    switch(option) {
        case 1:
            content = "<h2>Option 1 Content</h2><p>This is the content for option 1.</p>";
            break;
        case 2:
            content = "<h2>Option 2 Content</h2><p>This is the content for option 2.</p>";
            break;
        case 3:
            content = "<h2>Option 3 Content</h2><p>This is the content for option 3.</p>";
            break;
        default:
            content = "<h2>Error</h2><p>Invalid option selected.</p>";
    }
    document.getElementById("mainContent").innerHTML = content;
}
