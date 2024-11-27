

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
            text: "WELCOME TO KANKEI",
            ease: "power2.inOut",
            // stagger: 0.5,
            oncComplete: function() {
                console.log("WE ARE KANKEI Text animation complete");
            }
        });
        gsap.from(".hero_picture", {duration: 3, opacity: 0, delay: 1.9});
        gsap.from(".hero_text p", {duration: 3, opacity: 0, delay: 1.8});
    }

    gsap.utils.toArray('.services_item').forEach((item) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 100 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                scrollTrigger: {
                    trigger: item,
                    start: 'top 100%',
                    end: 'top 60%',
                    scrub: true,
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo(item,
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 20%',
                    end: 'top -20%',
                    scrub: true,
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    ScrollTrigger.create({
        trigger: ".main_services_title",
        start: "top 91vh",
        endTrigger: '.last_service_section',
        end: "bottom top-=820vh",
        pin: true,
        pinSpacing: false,
        markers: false // Optional: for debugging
    });
});