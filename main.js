// open close menu logic
let Menu = document.getElementById('Menu');
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click',() => {
    Menu.style.top = '0px';
})

closeMenu.addEventListener('click',() => {
    Menu.style.top = '-100vh';
})

//----------------------------------------------------------------

//Carousel Images
let productImage = document.getElementById('productImage');
let productImageList = document.querySelectorAll('.productImageList');

productImageList.forEach(e => {
    e.addEventListener('click',() => {
        productImage.src = `./images/Product/prductItem${e.id}.png`
    });
});

//----------------------------------------------------------------

// Frequantly asked questions logic

const questionsList = [
    {
        title: "Is Firebee Safe?",
        description: 'Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is <strong style="font-weight: 600;">3000x less powerful</strong> than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. '
    },
    {
        title: 'How Does Firebee work?',
        description: 'Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.</br></br>Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature. </br></br> Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize. </br></br> Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake. </br></br> Firebee signal is 3000 times less powerful than a smartphone and completely safe to use. '
    },
    {
        title: 'Will Firebee Fit on My Head? ',
        description: 'Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.'
    },
    {
        title: 'What If I want the signal to stop? ',
        description: 'Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.'
    },
    {
        title : 'How do you charge Firebee?',
        description: 'Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. '
    }
];

let frequantlyAsked = document.getElementById('frequentlyAsked');

questionsList.forEach((e,idx) => {
    let child = `<div class="w-full ">
                    <div class="flex justify-between items-center mb-[10px] mt-[15px]">
                        <h1 class="text-[22px] font-medium">${e.title}</h1>
                        <span id="${idx}" class="showQuestions text-[22px] cursor-pointer">+</span>
                    </div>
                    <p class="Question text-[16px] font-light leading-[26px]"></p>
                    <div class="w-full border-[1px] border-[#3F3631] border-[solid] mt-[20px]"></div>
                </div>`
    frequantlyAsked.innerHTML += child;
});

let showQuestionsBtn = document.querySelectorAll('.showQuestions');
let Question = document.querySelectorAll('.Question');

showQuestionsBtn.forEach(e => {
    e.addEventListener('click', () =>{
        if(Question[e.id].innerHTML){
            Question[e.id].innerHTML = "";
            e.innerText = "+"
        }
        else{
            Question[e.id].innerHTML = questionsList[e.id].description;
            e.innerText = "-";
        }
    });
})

//----------------------------------------------------------------

// add lazy loading for all images in the page

const images = document.querySelectorAll('img');

images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});
