// Mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Close the mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.remove("active");
    });
});

// Add certificate
function addCertificate() {
    document.getElementById("certificateInput").click();
}

var certificateInput = document.getElementById("certificateInput");

// Stop the input's own click from bubbling back up to the "Add Certificate" box
certificateInput.addEventListener("click", function (e) {
    e.stopPropagation();
});

certificateInput.addEventListener("change", function () {
    var file = certificateInput.files[0];
    if (!file) return;

    var reader = new FileReader();

    reader.onload = function (e) {
        var card = document.createElement("div");
        card.className = "certificate-card";

        var imageWrap = document.createElement("div");
        imageWrap.className = "certificate-image";
        var img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Certificate";
        imageWrap.appendChild(img);

        var info = document.createElement("div");
        info.className = "certificate-info";
        var label = document.createElement("span");
        label.textContent = "CERTIFICATE";
        var title = document.createElement("h3");
        title.textContent = file.name.replace(/\.[^.]+$/, "");
        var desc = document.createElement("p");
        desc.textContent = "Certificate of achievement.";
        info.appendChild(label);
        info.appendChild(title);
        info.appendChild(desc);

        card.appendChild(imageWrap);
        card.appendChild(info);

        var grid = document.getElementById("certificateGrid");
        grid.insertBefore(card, document.getElementById("certificateAdd"));

        certificateInput.value = "";
    };

    reader.readAsDataURL(file);
});