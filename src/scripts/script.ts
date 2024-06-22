const projects: any = {
    konnected: {
        title: "Konnected Reverse Raffle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
            // "path/to/video1.mp4",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.png",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-license.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-user-list.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-aqua-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-black-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-come-back.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-eliminated.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-final-10.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-come-back.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-eliminated.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-final-10.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-pink-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-purple-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-come-back.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-eliminated.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-final-10.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-yellow-grid.PNG",
            "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/valid-license-key.PNG",
        ]
    },
    loote: {
        title: "Loote",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
            "src/assets/img/Portfolio/Loote/email marketing.png",
            "src/assets/img/Portfolio/Loote/Loote Application.mp4",
            "src/assets/img/Portfolio/Loote/Loote.docx",
            "src/assets/img/Portfolio/Loote/Loote.pdf",
            "src/assets/img/Portfolio/Loote/Loote2.pdf",
            "src/assets/img/Portfolio/Loote/Portfolio1.mp4",
            "src/assets/img/Portfolio/Loote/Portfolio2.mp4",
        ]
    },
    "vital-ai": {
        title: "Vital AI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
            "src/assets/img/Portfolio/Vital AI/appointments.png",
            "src/assets/img/Portfolio/Vital AI/diagnoses.png",
            "src/assets/img/Portfolio/Vital AI/home.PNG",
            "src/assets/img/Portfolio/Vital AI/patients-detail.PNG",
            "src/assets/img/Portfolio/Vital AI/patients.png",
            "src/assets/img/Portfolio/Vital AI/questionnaire.png",
            "src/assets/img/Portfolio/Vital AI/treatment-page.png",
            // "path/to/video3.mp4",
        ]
    },
    "aspect-gaming": {
        title: "Aspect Gaming",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [
        // "src/assets/img/Portfolio/AspectGaming/Aspect Gaming Software.docx",
        // "src/assets/img/Portfolio/AspectGaming/Aspect Gaming Software.pdf",
        "src/assets/img/Portfolio/AspectGaming/Cleanup.png",
        "src/assets/img/Portfolio/AspectGaming/Contact Us Page.png",
        "src/assets/img/Portfolio/AspectGaming/GPU page.png",
        "src/assets/img/Portfolio/AspectGaming/home.png",
        "src/assets/img/Portfolio/AspectGaming/License Page.png",
        "src/assets/img/Portfolio/AspectGaming/Memory Tweaks.png",
        "src/assets/img/Portfolio/AspectGaming/Mouse Keyboard Tweaks.png",
        ]
    },
    "recipito": {
        title: "Recipito",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        media: [           
    "src/assets/img/Portfolio/Recipe/admin-page.png",
    "src/assets/img/Portfolio/Recipe/admin-recipe-model-page.PNG",
    "src/assets/img/Portfolio/Recipe/cake-recipe.png",
    "src/assets/img/Portfolio/Recipe/categories.png",
    "src/assets/img/Portfolio/Recipe/home-long.png",
    "src/assets/img/Portfolio/Recipe/home.png",
    "src/assets/img/Portfolio/Recipe/profile-update.png",
    "src/assets/img/Portfolio/Recipe/profile.png",
    "src/assets/img/Portfolio/Recipe/profile2.png",
    "src/assets/img/Portfolio/Recipe/recipe.png",
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

