document.getElementById("schemeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let occupation = document.getElementById("occupation").value;
    let income = Number(document.getElementById("income").value);

    let schemes = [];

    if (occupation === "Student" && age <= 25) {
        schemes.push("National Scholarship Portal - Student scholarships");
    }

    if (occupation === "Farmer") {
        schemes.push("PM-KISAN - Farmer income support");
    }

    if (occupation === "Unemployed") {
        schemes.push("Skill India - Skill development opportunities");
    }

    if (income <= 250000) {
        schemes.push("Check eligible Central and State welfare schemes");
    }

    let result = document.getElementById("result");

    if (schemes.length === 0) {
        schemes.push("Explore government schemes based on your state and eligibility.");
    }

    result.innerHTML = "<h2>Hello " + name + "!</h2>" +
        "<h3>Suggested Schemes:</h3><ul>" +
        schemes.map(scheme => "<li>" + scheme + "</li>").join("") +
        "</ul><p>Note: These are preliminary suggestions, not confirmed eligibility.</p>";
});
