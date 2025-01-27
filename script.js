const collabs = document.getElementById("collaborators");
const fetchData = async () => {
    const data = await fetch("./collaborators.json");
    const finalData = await data.json();
    const collaborators = finalData.collaborators;
    
    collabs.innerHTML = `
        <div class="row g-4">
            ${collaborators.map(ele => {
                return (
                    `<div class="col-md-4 participants">
                        <div class="feature-card">
                            <div class="d-flex align-items-center mb-4">
                                <h2 class="fs-4 mb-0">${ele.name}</h2>
                            </div>
                            <p><h6>Year:</h6> ${ele.year}</p>
                            <p><h6>Department:</h6> ${ele.dept}</p>
                            <p><h6>Fun Fact:</h6> ${ele.funfact}</p>
                            <div class="feedback">
                                ${ele.feedback}
                            </div>
                        </div>
                    </div>`
                );
            }).join('')}
        </div>
    `;
};

fetchData();
