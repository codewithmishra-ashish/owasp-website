AOS.init({ once: true, offset: 100 });
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);
let votes = { Phishing: 0, CTF: 0, SecureCoding: 0 };
document.getElementById("pollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const option = document.querySelector(
    'input[name="pollOption"]:checked'
  )?.value;
  if (!option) {
    document.getElementById("pollResult").textContent =
      "Please select an option!";
    document.getElementById("pollResult").style.color = "#ff0000";
    return;
  }
  if (option === "Phishing") votes.Phishing++;
  else if (option === "CTF") votes.CTF++;
  else if (option === "Secure Coding") votes.SecureCoding++;
  const totalVotes = votes.Phishing + votes.CTF + votes.SecureCoding;
  document.getElementById(
    "pollResult"
  ).textContent = `Thank you for voting! Total votes: ${totalVotes}`;
  document.getElementById("pollResult").style.color = "#00ff00";
  this.reset();
});
[1, 2, 3, 4].forEach((id) => {
  document
    .getElementById(`eventForm${id}`)
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById(`eventName${id}`).value;
      const email = document.getElementById(`eventEmail${id}`).value;
      document.getElementById(
        `eventMessage${id}`
      ).textContent = `Thank you, ${name}! Registration for Event ${id} confirmed. Check ${email} for details.`;
      document.getElementById(`eventMessage${id}`).style.color = "#00ff00";
      this.reset();
    });
});
let currentStep = 1;
function nextStep(step) {
  document.getElementById(`step${step}`).style.display = "none";
  document.getElementById(`step${step + 1}`).style.display = "block";
  currentStep++;
  document.getElementById("progressBar").style.width = `${currentStep * 33}%`;
  document.getElementById("progressBar").textContent = `Step ${currentStep}/3`;
  if (currentStep === 3) {
    document.getElementById("confirmName").textContent =
      document.getElementById("name").value;
    document.getElementById("confirmEmail").textContent =
      document.getElementById("email").value;
  }
}
function prevStep(step) {
  document.getElementById(`step${step}`).style.display = "none";
  document.getElementById(`step${step - 1}`).style.display = "block";
  currentStep--;
  document.getElementById("progressBar").style.width = `${currentStep * 33}%`;
  document.getElementById("progressBar").textContent = `Step ${currentStep}/3`;
}
document
  .getElementById("membershipForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById(
      "formMessage"
    ).textContent = `Thank you, ${name}! Your sponsorship application has been received. Check ${email} for next steps.`;
    document.getElementById("formMessage").style.color = "#00ff00";
    this.reset();
    currentStep = 1;
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("progressBar").style.width = "33%";
    document.getElementById("progressBar").textContent = "Step 1/3";
  });
document
  .getElementById("volunteerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("volunteerName").value;
    const email = document.getElementById("volunteerEmail").value;
    const role = document.getElementById("volunteerRole").value;
    document.getElementById(
      "volunteerMessage"
    ).textContent = `Thank you, ${name}! Your application for ${role} role has been received. Check ${email} for updates.`;
    document.getElementById("volunteerMessage").style.color = "#00ff00";
    this.reset();
  });
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("feedbackName").value;
    const message = document.getElementById("feedbackMessage").value;
    document.getElementById(
      "feedbackMessage"
    ).textContent = `Thank you, ${name}! Your feedback "${message}" has been recorded.`;
    document.getElementById("feedbackMessage").style.color = "#00ff00";
    this.reset();
  });
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
