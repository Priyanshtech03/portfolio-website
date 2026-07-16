// ==========================================
// PRIYANSH PORTFOLIO SCRIPT
// Premium Minimal Interactions
// ==========================================


document.addEventListener("DOMContentLoaded", () => {


    // =====================================
    // SCROLL PROGRESS BAR
    // =====================================

    const progress = document.createElement("div");

    progress.className = "scroll-progress";

    document.body.appendChild(progress);



    window.addEventListener("scroll", () => {

        const height =
        document.documentElement.scrollHeight -
        window.innerHeight;


        const scrolled =
        (window.scrollY / height) * 100;


        progress.style.width =
        scrolled + "%";


    });





    // =====================================
    // NAVBAR SCROLL EFFECT
    // =====================================

    const header =
    document.querySelector(".header");


    window.addEventListener("scroll", () => {


        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }


    });







    // =====================================
    // SMOOTH NAVIGATION
    // =====================================


    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {


        link.addEventListener("click", e => {


            const target =
            document.querySelector(
                link.getAttribute("href")
            );


            if(target){


                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        });


    });






    // =====================================
    // HERO ENTRANCE
    // =====================================


    const heroItems =
    document.querySelectorAll(
        ".hero-top > *, .hero-main > *, .identity-card"
    );



    heroItems.forEach((item,index)=>{


        item.style.opacity="0";

        item.style.transform=
        "translateY(35px)";


        setTimeout(()=>{


            item.style.transition=
            "all .8s cubic-bezier(.2,.8,.2,1)";


            item.style.opacity="1";


            item.style.transform=
            "translateY(0)";


        },150 + index * 120);



    });








    // =====================================
    // SCROLL REVEAL
    // =====================================


    const revealElements =
    document.querySelectorAll(
        ".about-layout, .mini-card, .skill-card, .project-card, .contact-heading, .contact-links"
    );



    revealElements.forEach(element=>{


        element.style.opacity="0";

        element.style.transform=
        "translateY(45px)";

        element.style.transition=
        "opacity .8s ease, transform .8s ease";


    });





    const observer =
    new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.style.opacity="1";


                entry.target.style.transform=
                "translateY(0)";


                observer.unobserve(
                    entry.target
                );


            }


        });


    },
    {
        threshold:.15
    });




    revealElements.forEach(element=>{

        observer.observe(element);

    });







    // =====================================
    // ACTIVE NAV LINK
    // =====================================


    const sections =
    document.querySelectorAll("section");


    const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );



    window.addEventListener("scroll",()=>{


        let current="";


        sections.forEach(section=>{


            const top =
            section.offsetTop - 250;


            if(window.scrollY >= top){

                current =
                section.id;

            }


        });



        navLinks.forEach(link=>{


            link.style.color="";


            if(
            link.getAttribute("href")
            === "#" + current
            ){

                link.style.color =
                "var(--text)";

            }


        });



    });







    // =====================================
    // CARD SOFT HOVER EFFECT
    // =====================================


    const cards =
    document.querySelectorAll(
        ".mini-card, .skill-card, .project-card"
    );



    cards.forEach(card=>{


        card.addEventListener(
        "mouseenter",
        ()=>{


            card.style.transition =
            "transform .35s ease";


            card.style.transform =
            "translateY(-8px)";


        });



        card.addEventListener(
        "mouseleave",
        ()=>{


            card.style.transform =
            "";


        });



    });







    // =====================================
    // PROJECT PREVIEW DEPTH
    // =====================================


    const visuals =
    document.querySelectorAll(
        ".project-visual"
    );



    visuals.forEach(item=>{


        item.addEventListener(
        "mouseenter",
        ()=>{


            item.style.transform =
            "scale(1.02)";


        });



        item.addEventListener(
        "mouseleave",
        ()=>{


            item.style.transform =
            "";


        });


    });







    // =====================================
    // FOOTER BACK TO TOP
    // =====================================


    const top =
    document.querySelector(
        ".footer a"
    );


    if(top){


        top.addEventListener(
        "click",
        e=>{


            e.preventDefault();


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        });


    }




});