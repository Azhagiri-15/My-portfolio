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
Profile3.addEventListener('click',() =>{
contact.scrollIntoView({behavior:'smooth',block:'start'})
});
  Profile4.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href ='https://ik.imagekit.io/rqos7vchl/fileToUrl/file-to-url_2EACmU1dta'
    link.download= 'file:///C:/Users/91709/Downloads/Resume%20.pdf';
    console.log(link);
    saveas(Profile4);
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