// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
document.addEventListener("DOMContentLoaded", function (event) {
			console.log("DOM fully loaded and parsed");
			console.log('reading');
			//define process function

			 function process() {

             //store user name in a variable
				    var adj1 = document.f.adj1.value;
				    console.log(adj1);
				    var adj2 = document.f.adj2.value;
				    var adj3 = document.f.adj3.value;
				    var adj4 = document.f.adj4.value;
				    var adj5 = document.f.adj5.value;
				    var noun1 = document.f.noun1.value;
				    var noun2 = document.f.noun2.value;
				    var verb1 = document.f.verb1.value;
				    var verb2 = document.f.verb2.value;
				    var place1 = document.f.place1.value;
				    var place2 = document.f.place2.value;

            //play audio on submit
            function play(){
              var audio = document.getElementById("audio");
              audio.play();
                        }
            //store myMsg element in variable
            var myMsg = document.getElementById('myMsg');
					  myMsg.innerHTML = ('Yall haters <em>' + adj1 + '</em> with that illuminati mess. Paparazzi, catch my <em>' + noun1 + '</em>, and my cocky fresh. I am so <em>' + adj2 + '</em> when I rock my <em>' + adj3 + '</em> dress. I am so possessive so I <em>' + verb1 + '</em> his Roc necklaces. My daddy <em>' + place1 + '</em>, Momma <em>' + place2 + '</em>. You mix that <em>' + adj4 + '</em> with that Creole make a Texas bama. I like my baby heir with baby hair and <em>' + noun2 + '</em>. I <em>' + verb2 + '</em> my negro nose with Jackson Five nostrils. Earned all this money but they never take the <em>' + adj5 + '</em> out me. I got a hot sauce in my bag, swag');

					console.log('still working');
					return false;
				}

        //capture the submit event
        document.f.onsubmit = process;
        document.f.onreset = function(event) {
          document.getElementById('myMsg').classList.add("hidden");
        }
			});
