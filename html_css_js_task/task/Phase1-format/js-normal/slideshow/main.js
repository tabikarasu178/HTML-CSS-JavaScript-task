const data = [
    { img: './img/slide1.png', text: '春へ' },
    { img: './img/slide2.png', text: '夏へ' },
    { img: './img/slide3.png', text: '秋へ' },
    { img: './img/slide4.png', text: '冬へ' },
];

let imgNum = 0;
const imgSection = document.getElementById('viewImg');
imgSection.setAttribute('src', data[imgNum].img);

const pushBtn = document.getElementById('pushBtn');
pushBtn.textContent = data[imgNum].text;

pushBtn.addEventListener('click', function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }
    pushBtn.textContent = data[imgNum].text;
    imgSection.setAttribute('src', data[imgNum].img);
});

