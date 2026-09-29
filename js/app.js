document.addEventListener("DOMContentLoaded", () => {
    loadProfile();
   async function loadProfile() {
    try {
        const profile = await ApiService.getProfile();

        document.getElementById("profile-name").textContent = profile.name;
        document.getElementById("profile-title").textContent = profile.title;
        document.getElementById("profile-description").textContent = profile.description;
        document.getElementById("profile-location").textContent = profile.location;
        document.getElementById("profile-education").textContent = profile.education;
        document.getElementById("profile-interests").textContent = profile.interests.join(" & ");

    } catch (error) {
        console.error("Gagal memuat profile:", error);
    }
}
    loadProjects();
});

async function loadProjects() {
    try {
        const projects = await ApiService.getProjects();

        const container = document.getElementById("projects-container");

        container.innerHTML = "";

        projects.forEach(project => {
            container.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">

                        <img src="${project.image}" 
                             class="card-img-top" 
                             alt="${project.title}">

                        <div class="card-body">

                            <h5 class="card-title">
                                ${project.title}
                            </h5>

                            <p class="card-text">
                                ${project.description}
                            </p>

                            <span class="badge bg-info text-dark">
                                ${project.category}
                            </span>

                        </div>

                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Gagal memuat projects:", error);
    }
}