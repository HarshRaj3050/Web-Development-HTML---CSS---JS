

let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

// This for hero section image
gsap.from(".hero-img1", {
    y:-900, duration: 1.5, ease: "bounce"
})
gsap.from(".hero-img2", {
    y:-900, duration: 1.5, ease: "bounce", delay: 0.2
})
gsap.from(".hero-img3", {
    y:-900, duration: 1.5, ease: "bounce", delay: 0.4
})
gsap.from(".hero-img4", {
    y:-900, duration: 1.5, ease: "bounce", delay: 0.6
})
gsap.from(".hero-img5", {
    y:-900, duration: 1.5, ease: "bounce", delay: 0.8
})


// Hero section Title

gsap.from(".heroh1-first", {
    x: -700, duration: 1, opacity: 1, ease: "back",
})
gsap.from(".heroh1-second", {
    x: -700, duration: 1, opacity: 1, ease: "back", delay: 0.2
})
gsap.from(".heroh1-third", {
    x: -700, duration: 1, opacity: 1, ease: "back", delay: 0.4
})
gsap.from(".hero-rect", {
    x: -700, duration: 1, opacity: 1, ease: "power2.inout", delay: 0.6
})

tl.from(".hero-para", {
    y:100, duration: 1, ease:"power2.inOut", stagger: 0.2, delay: 0.8
})

gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero-img1", {
    x:100,
    rotation: 90,
    scrollTrigger: {
        trigger: ".hero-title",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.to(".hero-img2", {
    x:-40,
    scrollTrigger: {
        trigger: ".hero-title",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.to(".hero-img3", {
    x: -200,
    rotation: 90,
    scrollTrigger: {
        trigger: ".hero-title",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.to(".hero-img4", {
    x: 100,
    rotation: -90,
    scrollTrigger: {
        trigger: ".hero-title",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.to(".hero-img5", {
    x: -50,
    rotation: -90,
    scrollTrigger: {
        trigger: ".hero-title",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
    },
})

