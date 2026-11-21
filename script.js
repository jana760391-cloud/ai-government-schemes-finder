
document.getElementById("schemeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let occupation = document.getElementById("occupation").value;
    let income = Number(document.getElementById("income").value);

    let schemes = [];

    if (occupation === "Student" && age <= 25) {
        schemes.push({
            name: "National Scholarship Portal",
            link: "https://scholarships.gov.in/"
        });
    }

    if (occupation === "Farmer") {
        schemes.push({
            name: "PM-KISAN",
            link: "https://pmkisan.gov.in/"
        });
    }

    if (occupation === "Unemployed") {
        schemes.push({
            name: "Skill India Digital Hub",
            link: "https://www.skillindiadigital.gov.in/"
        });
    }

    if (schemes.length === 0) {
        schemes.push({
            name: "Explore Government Schemes",
            link: "https://www.myscheme.gov.in/"
        });
    }

    let result = document.getElementById("result");

    result.innerHTML =
        "<h2>Hello " + name + "!</h2>" +
        "<h3>Suggested Schemes:</h3>" +
        schemes.map(s =>
            '<p>' + s.name +
            ' <a href="' + s.link +
            '" target="_blank" rel="noopener">Visit Official Website</a></p>'
        ).join("") +
        "<p>Note: Check official eligibility criteria before applying.</p>";
});
