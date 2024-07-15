const projects: any = {
    konnected: {
        title: "Konnected Reverse Raffle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
            // "path/to/video1.mp4",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.png",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-license.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-user-list.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-aqua-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-black-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-come-back.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-eliminated.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-final-10.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-come-back.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-eliminated.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-final-10.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-pink-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-purple-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-come-back.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-eliminated.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-final-10.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-yellow-grid.PNG",
            "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/valid-license-key.PNG",
        ]
    },
    loote: {
        title: "Loote",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
            "/assets/img/Portfolio/Loote/email marketing.png",
            "/assets/img/Portfolio/Loote/Loote Application.mp4",
            "/assets/img/Portfolio/Loote/Loote.docx",
            "/assets/img/Portfolio/Loote/Loote.pdf",
            "/assets/img/Portfolio/Loote/Loote2.pdf",
            "/assets/img/Portfolio/Loote/Portfolio1.mp4",
            "/assets/img/Portfolio/Loote/Portfolio2.mp4",
        ]
    },
    "vital-ai": {
        title: "Vital AI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
            "/assets/img/Portfolio/Vital AI/appointments.png",
            "/assets/img/Portfolio/Vital AI/diagnoses.png",
            "/assets/img/Portfolio/Vital AI/home.PNG",
            "/assets/img/Portfolio/Vital AI/patients-detail.PNG",
            "/assets/img/Portfolio/Vital AI/patients.png",
            "/assets/img/Portfolio/Vital AI/questionnaire.png",
            "/assets/img/Portfolio/Vital AI/treatment-page.png",
            // "path/to/video3.mp4",
        ]
    },
    "aspect-gaming": {
        title: "Aspect Gaming",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
        // "/assets/img/Portfolio/AspectGaming/Aspect Gaming Software.docx",
        // "/assets/img/Portfolio/AspectGaming/Aspect Gaming Software.pdf",
        "/assets/img/Portfolio/AspectGaming/Cleanup.png",
        "/assets/img/Portfolio/AspectGaming/Contact Us Page.png",
        "/assets/img/Portfolio/AspectGaming/GPU page.png",
        "/assets/img/Portfolio/AspectGaming/home.png",
        "/assets/img/Portfolio/AspectGaming/License Page.png",
        "/assets/img/Portfolio/AspectGaming/Memory Tweaks.png",
        "/assets/img/Portfolio/AspectGaming/Mouse Keyboard Tweaks.png",
        ]
    },
    "recipito": {
        title: "Recipito",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [           
    "/assets/img/Portfolio/Recipe/admin-page.png",
    "/assets/img/Portfolio/Recipe/admin-recipe-model-page.PNG",
    "/assets/img/Portfolio/Recipe/cake-recipe.png",
    "/assets/img/Portfolio/Recipe/categories.png",
    "/assets/img/Portfolio/Recipe/home-long.png",
    "/assets/img/Portfolio/Recipe/home.png",
    "/assets/img/Portfolio/Recipe/profile-update.png",
    "/assets/img/Portfolio/Recipe/profile.png",
    "/assets/img/Portfolio/Recipe/profile2.png",
    "/assets/img/Portfolio/Recipe/recipe.png",
        ]
    }
};

export function openPopup(projectKey: string) : void {
    const project = projects[projectKey];
    console.log(project)
    const popupInnerContent = document.getElementById('popup-inner-content');

    if (popupInnerContent)
    popupInnerContent.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        ${project.media.map((media: string) => {
            if (media.endsWith('.mp4')) {
                return `<video src="${media}" controls></video>`;
            } else {
                return `<img src="${media}" alt="${project.title}">`;
            }
        }).join('')}
    `;
    let element = document.getElementById('popup');
    if (element) element.style.display = 'block';
}

export function closePopup(): void {
    let element = document.getElementById('popup');
    if (element) element.style.display = 'none';
}

