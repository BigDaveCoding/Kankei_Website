

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger,TextPlugin);

    let intro_animation_complete = false;


    if (!intro_animation_complete) {
        const tl = gsap.timeline({
            onComplete: function() {
                intro_animation_complete = true;
                console.log("intro animation complete is:" + intro_animation_complete)

                triggerHomepage();
            }
        });
        tl.from("#kankei_logo", { duration: 1, opacity: 0 })
            .to("#kankei_logo", { duration: 1, scale: 0.25 })
            .to(".logo_container", {duration: 1, height: "10vh", ease: "none"}, "<");
            
        console.log("intro animation complete is: " + intro_animation_complete)
    }

    function triggerHomepage() {
        var hero_content = document.querySelector(".hero_text_picture");
        hero_content.style.display = "flex";

        gsap.to(".hero_text h1", {
            duration: 2,
            text: "WE ARE KANKEI",
            ease: "power2.inOut",
            stagger: 0.5,
            oncComplete: function() {
                console.log("WE ARE KANKEI Text animation complete");
            }
        });
        gsap.from(".hero_picture", {duration: 5, opacity: 0, delay: 2});
        gsap.from(".hero_text p", {duration: 5, opacity: 0, delay: 2});
    }

    
});