const Profile1 = document.getElementById('Profile1');
const Profile2 = document.getElementById('Profile2');
const Profile3 = document.getElementById('Profile3');
const Profile4 = document.getElementById('Profile4');
const about = document.getElementById('about');
const project = document.getElementById('project');
const contact = document.getElementById('contact');
Profile1.addEventListener('click',() =>{
  about.scrollIntoView({behavior:'smooth',block:'start'})
});
Profile2.addEventListener('click',() =>{
project.scrollIntoView({behavior:'smooth',block:'start'})
});
Profile3.addEventListener('click',() =>{
contact.scrollIntoView({behavior:'smooth',block:'start'})
});
// Show button after scrolling
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
  Profile4.addEventListener('click',async () => {
    const response = await fetch('https://ik.imagekit.io/rqos7vchl/fileToUrl/file-to-url_2EACmU1dta');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href =url;
    link.download= 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
});
  Profile1.addEventListener('mouseover', () => {
    Profile1.classList.add('hover-color');
  });
  Profile1.addEventListener('mouseout', () => {
    Profile1.classList.remove('hover-color');
  });
    Profile2.addEventListener('mouseover', () => {
    Profile2.classList.add('hover-color');
  });
  Profile2.addEventListener('mouseout', () => {
    Profile2.classList.remove('hover-color');
  });
    Profile3.addEventListener('mouseover', () => {
    Profile3.classList.add('hover-color');
  });
  Profile3.addEventListener('mouseout', () => {
    Profile3.classList.remove('hover-color');
  });
  const openCV=document.getElementById('openCV');
   openCV.addEventListener('mouseover', () => {
    openCV.classList.add('hover-color');
  });
  openCV.addEventListener('mouseout', () => {
    openCV.classList.remove('hover-color');
  });
