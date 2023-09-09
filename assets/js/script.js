const data = [
    {
        id:1,
        name:"Vijay",
        job:"Web Developer",
        img:"https://randomuser.me/api/portraits/men/9.jpg",
        text:"I have been using your product for a few months now, and I'm absolutely amazed at the results. It has completely transformed my daily routine and made my life so much easier. The quality and reliability of your product are unmatched, and I can't imagine going back to my old ways. Thank you for creating such an innovative solution!",
    },
    {
        id:2,
        name:"Kiruba",
        job:"FullStack Developer",
        img:"https://randomuser.me/api/portraits/men/8.jpg",
        text:"I was skeptical at first, but after trying your service, I am a believer. The level of professionalism and attention to detail is outstanding. Your team went above and beyond to ensure that my needs were met, and I couldn't be happier with the outcome. I highly recommend your company to anyone seeking top-notch service and exceptional results.",
    },
    {
        id:3,
        name:"Antony Berkmans",
        job:"Ui&Ux Developer",
        img:"https://randomuser.me/api/portraits/men/7.jpg",
        text:"Your customer support is simply outstanding. I had a few questions and concerns about your product, and the support team was quick to respond and provide thorough explanations. They guided me through every step of the process and made sure I felt comfortable and confident. It's rare to find such dedicated and knowledgeable customer service these days. Kudos to your team!",
    },
    {
        id:4,
        name:"Ashwin",
        job:"Marketing Manager",
        img:"https://randomuser.me/api/portraits/men/6.jpg",
        text:"I can't thank you enough for the positive impact your product has had on my business. It has helped streamline our operations, save us time and money, and ultimately improve our bottom line. The features and functionality are exactly what we needed, and the user-friendly interface made the transition seamless. It's truly a game-changer in our industry.",
    },
];

const img = document.querySelector("#pic");
const btnNxt = document.querySelector("#btn-right");
const btnPre = document.querySelector("#btn-left");
const name = document.querySelector("#name");
const role = document.querySelector("#role");
const text = document.querySelector("#text");


let index = 0;
//function On window load
window.addEventListener("DOMContentLoaded", ()=>{
    const testimonial = data[0];
    loadTestimonial(testimonial);
   
});
// to perform based arrow click
function loadTestimonial(data){
    img.src = data.img;
    name.textContent = data.name;
    role.textContent = data.job;
    text.innerHTML = data.text ;
}

btnNxt.addEventListener("click", () =>{
    index++;
    if(index > data.length - 1){
        index = 0;
    }
    loadTestimonial(data[index]);
});
btnPre.addEventListener("click", () =>{
    index--;
    if(index < 0 ){
        index = data.length - 1;
    }
    loadTestimonial(data[index]);
});

//auto load
function autoLoad(){
    index++;
    if(index > data.length - 1){
        index = 0;
    }
    if(index < 0 ){
        index = data.length - 1;
    }
    loadTestimonial(data[index]);
}
setInterval(autoLoad,4000);