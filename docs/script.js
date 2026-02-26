// Reveal Script
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
	const windowHeight = window.innerHeight;
	reveals.forEach((el) => {
		if (el.getBoundingClientRect().top < windowHeight - 100) {
			el.classList.add('active');
		}
	});
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Copy Script
document.querySelectorAll('.copy-btn').forEach((btn) => {
	btn.addEventListener('click', () => {
		const code = btn.parentElement.querySelector('code').innerText;
		navigator.clipboard.writeText(code);
		btn.textContent = 'Copied!';
		setTimeout(() => (btn.textContent = 'Copy'), 1500);
	});
});

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
	constructor() {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.size = Math.random() * 2 + 1;
		this.speedX = (Math.random() - 0.5) * 0.5;
		this.speedY = (Math.random() - 0.5) * 0.5;
	}

	update() {
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.x > canvas.width) this.x = 0;
		if (this.x < 0) this.x = canvas.width;
		if (this.y > canvas.height) this.y = 0;
		if (this.y < 0) this.y = canvas.height;
	}

	draw() {
		ctx.fillStyle = 'rgba(99,102,241,0.4)';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}

function initParticles() {
	particles = [];
	for (let i = 0; i < 80; i++) {
		particles.push(new Particle());
	}
}

function animateParticles() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	particles.forEach((p) => {
		p.update();
		p.draw();
	});
	requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	initParticles();
});

initParticles();
animateParticles();
