//////// preloader ////////
window.onload = stopLoading;
function stopLoading() {
  document.getElementById('preloader').style.display = 'none';
  scrollIndicator();
}

//////// responsive nav //////////
const bar = document.querySelector('.bars span');
const menu = document.querySelector('nav .menu');
const listItems = [...menu.firstElementChild.children];

bar.onclick = (e) => {
  itemHeight = listItems[0].clientHeight;
  itemNumber = listItems.length;
  console.log(menu.clientHeight);
  if(menu.clientHeight === 0) {
    menu.style.height = `${itemHeight * itemNumber}px`;
  } else {
    menu.style.height = `0px`;
  }
} 


///////// tabs //////////// 
const tabs = [...document.querySelectorAll('.tabs div')];
const tabContent = [...document.querySelectorAll('.tab-content')];

tabs.forEach((v) => {
  v.onclick = (e) => {
    // add active class in specific item
    tabs.forEach((value) => {
      value.classList.remove('active-tab');
    })
    v.classList.add('active-tab');
    // show tabs
    const tabText = e.target.innerText;
    tabContent.forEach((val) => {
      if(val.getAttribute('data-tab') == tabText.toLowerCase()) {
        val.style.display = 'block';
      } else {
        val.style.display = 'none';
      }
    })
  }
})

////////// scroll indicator //////////
const scrollBar = document.querySelector('.scroll-indicator');

window.onscroll = scrollIndicator;

function scrollIndicator () {
  const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollHeight / totalHeight) * 100;
  scrollBar.style.width = `${scrolled}%`;
}

//////////// one page animation /////// 
$(function() {
  $('.menu a').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});

///////// redirecting ////////// 
const pricingList = $('#pricing .pricing__options__list');
pricingList.on('click', function() {
  alert('Not active any link for demo page!!!');
})

const downloadBtn = $('.custom-download-btn');
downloadBtn.on('click', function() {
  alert('Not active any link for demo page!!!');
})