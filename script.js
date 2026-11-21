
document.getElementById("schemeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let state = document.getElementById("state").value;
    let occupation = document.getElementById("occupation").value;
    let income = document.getElementById("income").value;

    let result = document.getElementById("result");

    let scheme = "";

    if (occupation === "Student") {
        scheme = `
            <h3>Recommended Scheme Portal</h3>
            <p>National Scholarship Portal</p>
            <a href="https://scholarships.gov.in/" target="_blank">
                Visit Scholarship Portal
            </a>
        `;
    }
    else if (occupation === "Farmer") {
        scheme = `
            <h3>Recommended Scheme</h3>
            <p>PM-KISAN Samman Nidhi</p>
            <a href="https://pmkisan.gov.in/" target="_blank">
                Visit PM-KISAN Portal
            </a>
        `;
    }
    else if (occupation === "Unemployed") {
        scheme = `
            <h3>Recommended Portal</h3>
            <p>National Career Service</p>
            <a href="https://www.ncs.gov.in/" target="_blank">
                Visit NCS Portal
            </a>
        `;
    }
    else {
        scheme = `
            <h3>Explore Government Schemes</h3>
            <a href="https://www.india.gov.in/" target="_blank">
                Visit Government Portal
            </a>
        `;
    }

    result.innerHTML = `
        <h2>Welcome ${name}!</h2>
        <p>Age: ${age}</p>
        <p>State: ${state}</p>
        <p>Occupation: ${occupation}</p>
        <p>Annual Income: ₹${income}</p>
        <h3>Your details submitted successfully!</h3>
        ${scheme}
        <p>Note: Final eligibility depends on the official scheme rules.</p>
    `;
});
