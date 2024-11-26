

document.addEventListener('DOMContentLoaded', function() {

    let intro_animation_complete = false;


    if (!intro_animation_complete) {
        const tl = gsap.timeline({
            onComplete: function() {
                intro_animation_complete = true;
                console.log("intro animation complete is:" + intro_animation_complete)
            }
        });
        tl.from("#kankei_logo", { duration: 2.5, opacity: 0 })
            .to("#kankei_logo", { duration: 1.5, scale: 0.25 })
            .to(".logo_container", {duration: 1.7, height: "15vh", ease: "none"}, "<");
            
        console.log("intro animation complete is: " + intro_animation_complete)
    }

    
});