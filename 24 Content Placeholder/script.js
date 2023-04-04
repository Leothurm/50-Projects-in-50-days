const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nome = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");


setTimeout(getData, 2500)


function getData() {
  header.innerHTML =
    ' <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>';
    title.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    excerpt.innerHTML = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    nome.innerHTML = 'john Doe'
    date.innerHTML = 'Mar 04, 2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
