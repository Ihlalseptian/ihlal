  function changeLanguage(language) {
                    var element = document.getElementById("url");
                    element.value = language;
                    element.innerHTML = language;
                }

                function showDropdown() {
                    document.getElementById("myDropdown").classList.toggle("show");
                }

                // Close the dropdown if the user clicks outside of it
                window.onclick = function(event) {
                    if (!event.target.matches('.dropbtn')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                            var openDropdown = dropdowns[i];
                            if (openDropdown.classList.contains('show')) {
                                openDropdown.classList.remove('show');
                            }
                        }
                    }
                }

const texts = ["Presiden", "Apps Development"]
let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
	if (characterIndex < texts[textIndex].length){
		textElements.innerHTML += texts[textIndex].charAt(characterIndex);
		characterIndex++;
		setTimeout(typeWriter,speed)
	}
	else{
		setTimeout(eraseText,1000)
	}
	}

function eraseText(){
		if(textElements.innerHTML.length > 0 ){
			textElements.innerHTML = textElements.innerHTML.slice(0,-1)
			setTimeout(eraseText,50)
		}
		else{
			textIndex = (textIndex + 1) % texts.length;
			characterIndex = 0;
			setTimeout(typeWriter,500)
		}
}
window.onload= typeWriter