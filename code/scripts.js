let gobackBtn = document.querySelector(".goback-btn");
let swing = document.querySelector(".swing-handle");
let arrows = document.querySelectorAll(".arrow");
let text = document.querySelectorAll(".text");
let swingContainer = document.querySelector(".swing");
let glass = document.querySelector(".glass");
let gobackHref = document.querySelector(".goback-href");

//Warning: terrible code ahead. Do not proceed if you have a weak stomach

setTimeout(() => {
  alert("Just click the stupid button. Is it that hard?");

  gobackBtn.style.top = "50%";
  gobackBtn.style.animation = "shake 500ms infinite";

  setTimeout(() => {
    alert(
      "What are you doing, contacting support? We are also people, let us rest"
    );

    setTimeout(() => {
      alert("*snoring in the background*");
      gobackBtn.style.animation = "shake 300ms infinite";

      setTimeout(() => {
        alert("Oh, you're still here? Wait, or are you not?");

        setTimeout(() => {
          alert(
            "HEY, can someone call an ambulance? The person at the pc lost consciousness"
          );

          gobackBtn.style.animation = "shake 150ms infinite";
          gobackBtn.style.background = "red";

          setTimeout(() => {
            alert("...");

            gobackBtn.style.animation = "shake 3s infinite";
            gobackBtn.style.background = "hsla(234, 100%, 67%, 1)";

            setTimeout(() => {
              arrows.forEach((element) => {
                element.style.animation = "slideTop 4s forwards reverse";
              });
              text.forEach((element) => {
                element.style.top = "50%";
                element.style.animation = "slideTopReverse 10s forwards";
              });

              swing.style.animation =
                "swing-handle 3.5s 4s ease-in-out forwards";

              gobackBtn.style.animation =
                "button-connect 3.5s ease-in-out 9s forwards";
              gobackBtn.style.zIndex = "20";

              setTimeout(() => {
                gobackBtn.style.boxShadow = `0 0 7px hsl(234, 98%, 62%), 0 0 10px 0px hsl(234, 98%, 62%),
    0 0 21px #fff, 0 0 20px 3px hsl(234, 98%, 62%),
    0 0 20px 7px hsl(234, 98%, 62%), 0 0 92px hsl(234, 98%, 62%),
    0 0 102px hsl(234, 98%, 62%), 0 0 151px 20px hsl(234, 98%, 62%)`;

                setTimeout(() => {
                  swingContainer.style.animation =
                    "swing 4s ease-in-out infinite";

                  setTimeout(() => {
                    alert(
                      "Alright, that's it... \n(warning: loud sound ahead)"
                    );

                    swingContainer.style.animation =
                      "swing-hard 1.5s ease-in-out infinite";

                    setTimeout(() => {
                      let breakSound = new Audio("assets/glass-sound.mp3");
                      breakSound.play();

                      swingContainer.style.animation = "none";
                      glass.style.display = "block";
                      setTimeout(() => {
                        alert("Oh...");
                        alert("I might have taken this too far...");
                        alert("Wait");
                        alert("Um, apparently, the button wasn't working...");
                        alert(
                          "Well, we're sorry for this... um, inconvenience"
                        );
                        alert("Here, try it out now");

                        gobackBtn.style.zIndex = "100";
                        gobackHref.setAttribute("href", "");
                        swingContainer.style.pointerEvents = "all";
                      }, 2000);
                    }, 10000);
                  }, 16000);
                }, 1500);
              }, 13000);
            }, 5530);
          }, 5000);
        }, 2000);
      }, 13000);
    }, 9000);
  }, 6000);
}, 14000);
// Never gonna give you up, never gonna let you down
