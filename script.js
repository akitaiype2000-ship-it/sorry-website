// ===============================
// Floating Hearts Animation
// ===============================

const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {

    function createHeart() {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";
        heart.style.animationDuration = Math.random() * 4 + 5 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);
    }

    setInterval(createHeart, 300);
}

// ===============================
// Apology Text
// ===============================

const typing = document.getElementById("typing");

if (typing) {

    const message = `Dear Shybi ❤️

I know I made mistakes...

And I'm truly sorry.

Hurting you was never my intention.

You are someone incredibly special to me.

Every memory with you means the world to me.

If I could go back, I'd change everything that hurt you.

I don't expect forgiveness immediately...

But I hope one day you'll believe how genuinely sorry I am.

Thank you for being part of my life.

❤️ - Akita`;

    typing.innerText = message;
}

// ===============================
// Button Animation + Scroll
// ===============================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        startBtn.innerHTML = "❤️ Thank You For Reading ❤️";

        startBtn.style.transform = "scale(1.08)";

        setTimeout(() => {

            startBtn.style.transform = "scale(1)";

            const gallery = document.querySelector(".gallery");

            if (gallery) {

                gallery.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }, 300);

    });

}
// ===============================
// Image Popup
// ===============================

const images = document.querySelectorAll(".photos img");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("close");

if (images.length > 0 && popup && popupImage && closeBtn) {

    images.forEach(img => {

        img.addEventListener("click", () => {

            popup.style.display = "flex";

            popupImage.src = img.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        popup.style.display = "none";

    });

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}

// ===============================
// Forgive Page
// ===============================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");

if (yesBtn && success) {

    yesBtn.addEventListener("click", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";

    hero.style.transform = "scale(.9)";

    hero.style.transition = "all .8s ease";

    setTimeout(() => {

        hero.style.display = "none";

        success.style.display = "flex";

        success.style.animation = "fadeSuccess 1s ease";

        launchConfetti();

    },800);

});

}

if (noBtn) {

    noBtn.addEventListener("mouseenter", () => {

        const maxX = window.innerWidth - noBtn.offsetWidth - 30;
        const maxY = window.innerHeight - noBtn.offsetHeight - 30;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

    });

}

// ===============================
// Confetti
// ===============================

function launchConfetti() {

    if (typeof window.confetti !== "function") return;

    const duration = 3500;
    const end = Date.now() + duration;

    (function frame() {

        window.confetti({

            particleCount: 8,
            spread: 100,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}
function successHearts(){

    const success=document.getElementById("success");

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animation="float 6s linear";

    success.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}