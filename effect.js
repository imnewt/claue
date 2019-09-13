// FOR HEADER 1
window.onscroll = function() {headerGone()};
function headerGone() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header-gone").classList.add('d-none');
  } else {
    document.getElementById("header-gone").classList.remove('d-none');
  }
}

// FOR HEADER CAROUSEL
$('.header-owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
})

// FOR SEARCH ICON
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

// FOR BAR MENU
let bar = document.getElementById('bar');
let barMenu = document.getElementById('bar-menu');
let closeBar = document.getElementById('bar-close');
let barBodyGray = document.getElementById('bar-body-gray');
bar.addEventListener('click', checkBarMenu);
closeBar.addEventListener('click', checkBarMenu);
function checkBarMenu() {
  	let check = barMenu.getAttribute('class');
  	if(check.includes('d-none') || check.includes('bar-not-d-none')) {
      	barMenu.classList.remove('bar-not-d-none');
        barMenu.classList.remove('d-none');
        closeBar.classList.remove('d-none');
        barBodyGray.classList.remove('d-none');
  	}
  	else {
    	barMenu.classList.add('bar-not-d-none');
        closeBar.classList.add('d-none');
        barBodyGray.classList.add('d-none');
  	}
}

// FOR BAR HEADER
let barHeader1 = document.getElementById('bar-header-1');
let barHeader2 = document.getElementById('bar-header-2');
let barHeader3 = document.getElementById('bar-header-3');
let menu = document.getElementById('menu');
let accountMenu = document.getElementById('account-menu');
let settingMenu = document.getElementById('setting-menu');
barHeader1.addEventListener('click', checkDisplay1);
barHeader2.addEventListener('click', checkDisplay2);
barHeader3.addEventListener('click', checkDisplay3);
function checkDisplay1() {
	barHeader1.classList.add('change-color');
	barHeader2.classList.remove('change-color');
	barHeader3.classList.remove('change-color');
	menu.classList.remove('d-none');
	accountMenu.classList.add('d-none');
	settingMenu.classList.add('d-none');
}
function checkDisplay2() {
	barHeader2.classList.add('change-color');
	barHeader1.classList.remove('change-color');
	barHeader3.classList.remove('change-color');
	menu.classList.add('d-none');
	accountMenu.classList.remove('d-none');
	settingMenu.classList.add('d-none');
	langMenu.classList.add('d-none');
	currMenu.classList.add('d-none');
}
function checkDisplay3() {
	barHeader3.classList.add('change-color');
	barHeader1.classList.remove('change-color');
	barHeader2.classList.remove('change-color');
	menu.classList.add('d-none');
	accountMenu.classList.add('d-none');
	settingMenu.classList.remove('d-none');
}

// FOR LANG MENU
let langBtn = document.getElementById('lang-btn')
let langMenu = document.getElementById('lang-menu')
langBtn.addEventListener('click', displayLangMenu);
function displayLangMenu() {
	let check = langMenu.getAttribute('class');
	if (check.includes('d-none')) {
		langMenu.classList.remove('d-none');
		currMenu.classList.add('d-none');
	}
	else {
		langMenu.classList.add('d-none');
	}
}

// FOR CURRENCY MENU
let currBtn = document.getElementById('currency-btn')
let currMenu = document.getElementById('currency-menu')
currBtn.addEventListener('click', displayCurrMenu);
function displayCurrMenu() {
	let check = currMenu.getAttribute('class');
	if (check.includes('d-none')) {
		currMenu.classList.remove('d-none');
		langMenu.classList.add('d-none');
	}
	else {
		currMenu.classList.add('d-none');
	}
}

// FOR CHANGING ICON
let homeIcon = document.getElementById('home-icon');
let homePlusIcon = document.getElementById('home-plus-icon');
let homeMinusIcon = document.getElementById('home-minus-icon');
homeIcon.addEventListener('click', checkHomeIcon);
function checkHomeIcon() {
  	let check = homePlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	homePlusIcon.classList.remove('d-none');
        homeMinusIcon.classList.add('d-none');
  	}
  	else {
  		homePlusIcon.classList.add('d-none');
        homeMinusIcon.classList.remove('d-none');
  	}
}
let shopIcon = document.getElementById('shop-icon');
let shopPlusIcon = document.getElementById('shop-plus-icon');
let shopMinusIcon = document.getElementById('shop-minus-icon');
shopIcon.addEventListener('click', checkShopIcon);
function checkShopIcon() {
  	let check = shopPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	shopPlusIcon.classList.remove('d-none');
        shopMinusIcon.classList.add('d-none');
  	}
  	else {
  		shopPlusIcon.classList.add('d-none');
        shopMinusIcon.classList.remove('d-none');
  	}
}
let cateIcon = document.getElementById('cate-icon');
let catePlusIcon = document.getElementById('cate-plus-icon');
let cateMinusIcon = document.getElementById('cate-minus-icon');
cateIcon.addEventListener('click', checkCateIcon);
function checkCateIcon() {
  	let check = catePlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	catePlusIcon.classList.remove('d-none');
        cateMinusIcon.classList.add('d-none');
  	}
  	else {
  		catePlusIcon.classList.add('d-none');
        cateMinusIcon.classList.remove('d-none');
  	}
}
let collIcon = document.getElementById('coll-icon');
let collPlusIcon = document.getElementById('coll-plus-icon');
let collMinusIcon = document.getElementById('coll-minus-icon');
collIcon.addEventListener('click', checkCollIcon);
function checkCollIcon() {
  	let check = collPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	collPlusIcon.classList.remove('d-none');
        collMinusIcon.classList.add('d-none');
  	}
  	else {
  		collPlusIcon.classList.add('d-none');
        collMinusIcon.classList.remove('d-none');
  	}
}
let prodIcon = document.getElementById('prod-icon');
let prodPlusIcon = document.getElementById('prod-plus-icon');
let prodMinusIcon = document.getElementById('prod-minus-icon');
prodIcon.addEventListener('click', checkProdIcon);
function checkProdIcon() {
  	let check = prodPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	prodPlusIcon.classList.remove('d-none');
        prodMinusIcon.classList.add('d-none');
  	}
  	else {
  		prodPlusIcon.classList.add('d-none');
        prodMinusIcon.classList.remove('d-none');
  	}
}
let prodfIcon = document.getElementById('prodf-icon');
let prodfPlusIcon = document.getElementById('prodf-plus-icon');
let prodfMinusIcon = document.getElementById('prodf-minus-icon');
prodfIcon.addEventListener('click', checkProdfIcon);
function checkProdfIcon() {
  	let check = prodfPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	prodfPlusIcon.classList.remove('d-none');
        prodfMinusIcon.classList.add('d-none');
  	}
  	else {
  		prodfPlusIcon.classList.add('d-none');
        prodfMinusIcon.classList.remove('d-none');
  	}
}
let prodlIcon = document.getElementById('prodl-icon');
let prodlPlusIcon = document.getElementById('prodl-plus-icon');
let prodlMinusIcon = document.getElementById('prodl-minus-icon');
prodlIcon.addEventListener('click', checkProdlIcon);
function checkProdlIcon() {
  	let check = prodlPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	prodlPlusIcon.classList.remove('d-none');
        prodlMinusIcon.classList.add('d-none');
  	}
  	else {
  		prodlPlusIcon.classList.add('d-none');
        prodlMinusIcon.classList.remove('d-none');
  	}
}
let pageIcon = document.getElementById('page-icon');
let pagePlusIcon = document.getElementById('page-plus-icon');
let pageMinusIcon = document.getElementById('page-minus-icon');
pageIcon.addEventListener('click', checkPageIcon);
function checkPageIcon() {
  	let check = pagePlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	pagePlusIcon.classList.remove('d-none');
        pageMinusIcon.classList.add('d-none');
  	}
  	else {
  		pagePlusIcon.classList.add('d-none');
        pageMinusIcon.classList.remove('d-none');
  	}
}
let blogIcon = document.getElementById('blog-icon');
let blogPlusIcon = document.getElementById('blog-plus-icon');
let blogMinusIcon = document.getElementById('blog-minus-icon');
blogIcon.addEventListener('click', checkBlogIcon);
function checkBlogIcon() {
  	let check = blogPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	blogPlusIcon.classList.remove('d-none');
        blogMinusIcon.classList.add('d-none');
  	}
  	else {
  		blogPlusIcon.classList.add('d-none');
        blogMinusIcon.classList.remove('d-none');
  	}
}
let portIcon = document.getElementById('port-icon');
let portPlusIcon = document.getElementById('port-plus-icon');
let portMinusIcon = document.getElementById('port-minus-icon');
portIcon.addEventListener('click', checkPortIcon);
function checkPortIcon() {
  	let check = portPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	portPlusIcon.classList.remove('d-none');
        portMinusIcon.classList.add('d-none');
  	}
  	else {
  		portPlusIcon.classList.add('d-none');
        portMinusIcon.classList.remove('d-none');
  	}
}
let storeIcon = document.getElementById('store-icon');
let storePlusIcon = document.getElementById('store-plus-icon');
let storeMinusIcon = document.getElementById('store-minus-icon');
storeIcon.addEventListener('click', checkStoreIcon);
function checkStoreIcon() {
  	let check = storePlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	storePlusIcon.classList.remove('d-none');
        storeMinusIcon.classList.add('d-none');
  	}
  	else {
  		storePlusIcon.classList.add('d-none');
        storeMinusIcon.classList.remove('d-none');
  	}
}
let brandIcon = document.getElementById('brand-icon');
let brandPlusIcon = document.getElementById('brand-plus-icon');
let brandMinusIcon = document.getElementById('brand-minus-icon');
brandIcon.addEventListener('click', checkBrandIcon);
function checkBrandIcon() {
  	let check = brandPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	brandPlusIcon.classList.remove('d-none');
        brandMinusIcon.classList.add('d-none');
  	}
  	else {
  		brandPlusIcon.classList.add('d-none');
        brandMinusIcon.classList.remove('d-none');
  	}
}
let elemIcon = document.getElementById('elem-icon');
let elemPlusIcon = document.getElementById('elem-plus-icon');
let elemMinusIcon = document.getElementById('elem-minus-icon');
elemIcon.addEventListener('click', checkElemIcon);
function checkElemIcon() {
  	let check = elemPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	elemPlusIcon.classList.remove('d-none');
        elemMinusIcon.classList.add('d-none');
  	}
  	else {
  		elemPlusIcon.classList.add('d-none');
        elemMinusIcon.classList.remove('d-none');
  	}
}
let elemhIcon = document.getElementById('elemh-icon');
let elemhPlusIcon = document.getElementById('elemh-plus-icon');
let elemhMinusIcon = document.getElementById('elemh-minus-icon');
elemhIcon.addEventListener('click', checkElemhIcon);
function checkElemhIcon() {
  	let check = elemhPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	elemhPlusIcon.classList.remove('d-none');
        elemhMinusIcon.classList.add('d-none');
  	}
  	else {
  		elemhPlusIcon.classList.add('d-none');
        elemhMinusIcon.classList.remove('d-none');
  	}
}
let elemfIcon = document.getElementById('elemf-icon');
let elemfPlusIcon = document.getElementById('elemf-plus-icon');
let elemfMinusIcon = document.getElementById('elemf-minus-icon');
elemfIcon.addEventListener('click', checkElemfIcon);
function checkElemfIcon() {
  	let check = elemfPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	elemfPlusIcon.classList.remove('d-none');
        elemfMinusIcon.classList.add('d-none');
  	}
  	else {
  		elemfPlusIcon.classList.add('d-none');
        elemfMinusIcon.classList.remove('d-none');
  	}
}
let acceIcon = document.getElementById('acce-icon');
let accePlusIcon = document.getElementById('acce-plus-icon');
let acceMinusIcon = document.getElementById('acce-minus-icon');
acceIcon.addEventListener('click', checkAcceIcon);
function checkAcceIcon() {
  	let check = accePlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	accePlusIcon.classList.remove('d-none');
        acceMinusIcon.classList.add('d-none');
  	}
  	else {
  		accePlusIcon.classList.add('d-none');
        acceMinusIcon.classList.remove('d-none');
  	}
}
let pantIcon = document.getElementById('pant-icon');
let pantPlusIcon = document.getElementById('pant-plus-icon');
let pantMinusIcon = document.getElementById('pant-minus-icon');
pantIcon.addEventListener('click', checkPantIcon);
function checkPantIcon() {
  	let check = pantPlusIcon.getAttribute('class');
  	if(check.includes('d-none')) {
      	pantPlusIcon.classList.remove('d-none');
        pantMinusIcon.classList.add('d-none');
  	}
  	else {
  		pantPlusIcon.classList.add('d-none');
        pantMinusIcon.classList.remove('d-none');
  	}
}

// FOR CART MENU
let cart = document.getElementById('cart');
let cartMenu = document.getElementById('cart-menu');
let closeCart = document.getElementById('cart-close');
let body = document.getElementsByTagName('body');
let cartBodyGray = document.getElementById('cart-body-gray');
cart.addEventListener('click', checkCartMenu);
closeCart.addEventListener('click', checkCartMenu);
function checkCartMenu() {
  	let check = cartMenu.getAttribute('class');
  	if(check.includes('d-none') || check.includes('cart-not-d-none')) {
      	cartMenu.classList.remove('cart-not-d-none');
        cartMenu.classList.remove('d-none');
        cartBodyGray.classList.remove('d-none');
  	}
  	else {
    	cartMenu.classList.add('cart-not-d-none');
    	cartBodyGray.classList.add('d-none');
  	}
}

// FOR TRENDING PRODUCTS
$('.tp-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
    responsive:{
        0:{
            items:2
        },
        992:{
            items:4
        }
    }
});

// FOR HOT PRODUCTS
let navItem1 = document.getElementById('p-nav-item-1');
let navItem2 = document.getElementById('p-nav-item-2');
let navItem3 = document.getElementById('p-nav-item-3');

let linkItem1 = document.getElementById('p-nav-link-1');
let linkItem2 = document.getElementById('p-nav-link-2');
let linkItem3 = document.getElementById('p-nav-link-3');

let bsBlock = document.getElementById('bs-block');
let naBlock = document.getElementById('na-block');
let osBlock = document.getElementById('os-block');

navItem1.addEventListener('click', checkBestSeller);
navItem2.addEventListener('click', checkNewArrivals);
navItem3.addEventListener('click', checkOnSale);
function checkBestSeller() {
  	let check = navItem1.getAttribute('class');
  	let checkLink = linkItem1.getAttribute('class');
  	if(!check.includes('p-border-color')) {
      	navItem1.classList.add('p-border-color');
        navItem2.classList.remove('p-border-color');
        navItem3.classList.remove('p-border-color');
        linkItem1.classList.add('p-link-color');
        linkItem2.classList.remove('p-link-color');
        linkItem3.classList.remove('p-link-color');
        bsBlock.classList.remove('d-none');
        naBlock.classList.add('d-none');
        osBlock.classList.add('d-none');
  	}
}
function checkNewArrivals() {
  	let check = navItem2.getAttribute('class');
  	let checkLink = linkItem2.getAttribute('class');
  	if(!check.includes('p-border-color')) {
      	navItem2.classList.add('p-border-color');
        navItem1.classList.remove('p-border-color');
        navItem3.classList.remove('p-border-color');
        linkItem2.classList.add('p-link-color');
        linkItem1.classList.remove('p-link-color');
        linkItem3.classList.remove('p-link-color');
        naBlock.classList.remove('d-none');
        bsBlock.classList.add('d-none');
        osBlock.classList.add('d-none');
  	}
}
function checkOnSale() {
  	let check = navItem3.getAttribute('class');
  	let checkLink = linkItem3.getAttribute('class');
  	if(!check.includes('p-border-color')) {
      	navItem3.classList.add('p-border-color');
        navItem1.classList.remove('p-border-color');
        navItem2.classList.remove('p-border-color');
        linkItem3.classList.add('p-link-color');
        linkItem1.classList.remove('p-link-color');
        linkItem2.classList.remove('p-link-color');
        osBlock.classList.remove('d-none');
        bsBlock.classList.add('d-none');
        naBlock.classList.add('d-none');
  	}
}

// FOR NEWS
$('.n-owl-carousel').owlCarousel({
    loop:false,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
        	items:2
        },
        992:{
        	items:3
        }
    }
});

// FOR INSTAGRAM
$('.ins-owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
    responsive:{
        0:{
            items:4
        },
        992:{
        	items:6
        }
    }
});