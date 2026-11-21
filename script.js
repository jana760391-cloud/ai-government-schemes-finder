
const schemes = [
    {
        name: "National Scholarship Portal",
        category: "Student",
        benefit: "Explore central and state scholarship opportunities.",
        eligibility: "Eligibility varies by scholarship, course and income criteria.",
        link: "https://scholarships.gov.in/"
    },
    {
        name: "PM-KISAN",
        category: "Farmer",
        benefit: "Eligible farmer families may receive financial assistance.",
        eligibility: "Subject to PM-KISAN landholding and exclusion rules.",
        link: "https://pmkisan.gov.in/"
    },
    {
        name: "National Career Service",
        category: "Unemployed",
        benefit: "Explore job opportunities and career services.",
        eligibility: "Check registration and service requirements on the portal.",
        link: "https://www.ncs.gov.in/"
    },
    {
        name: "e-Shram",
        category: "Employee",
        benefit: "Explore social security services for eligible unorganised workers.",
        eligibility: "Eligibility depends on unorganised worker criteria.",
        link: "https://eshram.gov.in/"
    },
    {
        name: "MyScheme",
        category: "Other",
        benefit: "Explore government schemes based on your profile.",
        eligibility: "Check the individual scheme eligibility rules.",
        link: "https://www.myscheme.gov.in/"
    }
];

function showSchemes(list) {
    const result = document.getElementById("result");

    if (list.length === 0) {
        result.innerHTML = "<h3>No matching schemes found. Try another search.</h3>";
        return;
    }

    result.innerHTML = "<h2>Recommended Government Schemes</h2>";

    list.forEach(scheme => {
        result.innerHTML += `
            <div class="scheme-card">
                <h3>${scheme.name}</h3>
                <p><b>Benefit:</b> ${scheme.benefit}</p>
                <p><b>Eligibility:</b> ${scheme.eligibility}</p>
                <a href="${scheme.link}" target="_blank" rel="noopener">
                    Visit Official Portal
                </a>
            </div>
        `;
    });
}

document.getElementById("schemeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const state = document.getElementById("state").value.trim();
    const occupation = document.getElementById("occupation").value;
    const income = Number(document.getElementById("income").value);

    if (!name || !state || age < 1 || age > 120 || income < 0) {
        alert("Please enter valid details.");
        return;
    }

    const matches = schemes.filter(scheme =>
        scheme.category === occupation || scheme.category === "Other"
    );

    document.getElementById("result").innerHTML =
        `<h2>Hello ${name}!</h2>
         <p>Age: ${age} | State: ${state}</p>
         <p>Annual Income: ₹${income.toLocaleString("en-IN")}</p>`;

    showSchemes(matches);
});

document.getElementById("searchInput").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();

    const matches = schemes.filter(scheme =>
        scheme.name.toLowerCase().includes(keyword) ||
        scheme.category.toLowerCase().includes(keyword) ||
        scheme.benefit.toLowerCase().includes(keyword)
    );

    const searchResults = document.getElementById("searchResults");

    if (!keyword) {
        searchResults.innerHTML = "";
        return;
    }

    searchResults.innerHTML = matches.map(scheme => `
        <div class="scheme-card">
            <h3>${scheme.name}</h3>
            <p>${scheme.benefit}</p>
            <a href="${scheme.link}" target="_blank" rel="noopener">
                Official Portal
            </a>
        </div>
    `).join("");

    if (matches.length === 0) {
        searchResults.innerHTML = "<p>No schemes found.</p>";
    }
});
