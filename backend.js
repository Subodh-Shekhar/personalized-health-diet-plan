// Initialize AOS
AOS.init();

// Initialize Particles.js
particlesJS("particles-js", {
"particles": {
"number": { "value": 120 },
"color": { "value": "#00f7ff" },
"shape": { "type": "circle" },
"opacity": {
"value": 0.5,
"random": true
},
"size": {
"value": 3,
"random": true
},
"line_linked": {
"enable": true,
"distance": 150,
"color": "#00f7ff",
"opacity": 0.4,
"width": 1
},
"move": {
"enable": true,
"speed": 3,
"direction": "none",
"random": false,
"out_mode": "out"
}
},
"interactivity": {
"events": {
"onhover": { "enable": true, "mode": "repulse" }
}
},
"retina_detect": true
});

// Popup Logic
function openPopup(service) {
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
popupTitle.innerText = service === 'diet' ? "Personalized Diet Plan"
: service === 'fitness' ? "Customized Fitness Plan"
: "AI Health Insights";
popup.style.display = 'flex';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}

// Form Handling
document.getElementById('popup-form').addEventListener('submit', function(e) {
e.preventDefault();
const age = document.getElementById('age').value;
const weight = document.getElementById('weight').value;
const allergies = document.getElementById('allergies').value;
const diseases = document.getElementById('diseases').value;
const goals = document.getElementById('goals').value;

let plan = `🌟 Personalized Plan 🌟\n\n`;
plan += `🧠 Age: ${age} years\n`;
plan += `🏋️ Weight: ${weight} kg\n`;
plan += `🎯 Goals: ${goals}\n\n`;

if (allergies) plan += `⚠️ Allergies: ${allergies}\n`;
if (diseases) plan += `🩺 Pre-existing Conditions: ${diseases}\n`;

plan += `\n👉 Your plan:\n`;

if (parseInt(age) < 30) {
plan += `- Focus on high protein, strength training, and HIIT workouts.\n`;
} else {
plan += `- Focus on balanced nutrition, moderate strength & flexibility exercises.\n`;
}
if (parseInt(weight) > 80) {
plan += `- Caloric deficit diet with 30 min cardio daily.\n`;
} else {
plan += `- Maintenance calories diet with strength & yoga.\n`;
}
plan += `- Supplements: Multivitamin + Omega 3s.\n`;
plan += `- Regular Health Monitoring every 6 months.\n`;

document.getElementById('generated-plan').innerText = plan;
document.getElementById('popup-form').style.display = 'none';

const downloadBtn = document.getElementById('download-btn');
downloadBtn.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(plan);
downloadBtn.style.display = 'inline-block';
});

// ✨ Super Cool Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const trailCount = 10;
let trails = [];

for (let i = 0; i < trailCount; i++) {
const trail = document.createElement('div');
trail.classList.add('trail');
document.body.appendChild(trail);
trails.push(trail);
}

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});

function animateCursor() {
cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
trails.forEach((trail, index) => {
const delay = index * 0.05;
setTimeout(() => {
trail.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}, delay * 1000);
});
requestAnimationFrame(animateCursor);
}
animateCursor();
