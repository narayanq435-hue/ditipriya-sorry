"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // Create floating heart particles
    const particlesContainer = document.getElementById("particles");

    if (particlesContainer) {
        const symbols = ["♡", "♥", "✧", "❤"];

        for (let i = 0; i < 24; i++) {
            const particle = document.createElement("span");

            particle.className = "particle";
            particle.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            particle.style.left = `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${9 + Math.random() * 12}s`;

            particle.style.animationDelay =
                `${Math.random() * 12}s`;

            particle.style.fontSize =
                `${12 + Math.random() * 14}px`;

            particlesContainer.appendChild(particle);
        }
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const destination = link.getAttribute("href");

            if (!destination || destination === "#") {
                return;
            }

            const target = document.querySelector(destination);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Interactive final note
    const wishButton = document.getElementById("wishButton");
    const finalNote = document.getElementById("finalNote");

    if (wishButton && finalNote) {
        wishButton.addEventListener("click", () => {
            const isHidden = finalNote.hidden;

            finalNote.hidden = !isHidden;

            wishButton.setAttribute(
                "aria-expanded",
                String(isHidden)
            );

            wishButton.innerHTML = isHidden
                ? 'Close my little note <span>♡</span>'
                : 'Open my little note <span>♡</span>';

            if (isHidden) {
                finalNote.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });
    }

});