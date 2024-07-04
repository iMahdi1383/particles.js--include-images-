// Include images
let img_src = [
  'assets/images/AsreErtebat.svg',
  'assets/images/Avapardaz.svg',
  'assets/images/Avinox.svg',
  'assets/images/Hesabro.svg',
  'assets/images/Kloudify.svg',
  'assets/images/Mobit.svg',
  'assets/images/Paybuy.svg',
  'assets/images/RahkarSanat.svg',
  'assets/images/Zoodex.svg'
];

// Name images included
let image_type = img_src.map(function(cuurentEl, index){ return "image" + index});

// Configure particles-js
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": img_src.length, // No of images
        "density": {
          "enable": false,
          "value_area": 500 // Specify area (Lesser is greater density)
        }
      },
      "color": {
        "value": "#5affd4"
      },
      "shape": {
        "type":  image_type, // Add images to particle-js
        "stroke": {
          "width": 0,
        },
        "polygon": {
          "nb_sides": 4
        }
      },
      "opacity": {
        "value": 1, // Adjust opactiy
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 40, // Adjust the image size
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 1000,
        "color": "#000",
        "opacity": 0.25,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,   // Speed of particle motion
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 1200,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "bubble"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 30,
          "duration": 1,
          "opacity": 1,
          "speed": 1
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
