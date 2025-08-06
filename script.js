
function checkUsername() {
    const username = document.getElementById("username").value;
    const results = document.getElementById("results");
    if (!username) {
        results.innerHTML = "<p>Please enter a username.</p>";
        return;
    }

    results.innerHTML = "<p>Checking availability...</p>";

    const platforms = [
        { name: "GitHub", url: "https://github.com/" + username },
        { name: "Twitter", url: "https://twitter.com/" + username },
        { name: "Instagram", url: "https://instagram.com/" + username }
    ];

    let output = "<h3>Results for: " + username + "</h3><ul>";
    platforms.forEach(platform => {
        output += "<li><a href='" + platform.url + "' target='_blank'>" + platform.name + "</a> - Check manually</li>";
    });
    output += "</ul>";

    results.innerHTML = output;
}
