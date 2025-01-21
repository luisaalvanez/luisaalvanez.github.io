window.addEventListener('load', pageLoad);

function pageLoad() {

    let menu_icons = document.querySelectorAll('nav li img');
    let menu_anchor = document.querySelectorAll('nav li a');
    let menu_toggle = document.querySelector('#sidebar .toggle-sidebar img');

    menu_icons.forEach((icons) => {
        icons.addEventListener('mouseover', iconSelected);
        icons.addEventListener('mouseout', iconNotSelected);
    })

    menu_anchor.forEach((anchor) => {
        anchor.addEventListener('focus', iconSelectedTab);
        anchor.addEventListener('blur', iconNotSelectedTab);
        anchor.addEventListener('click', menuClick)
    })

    menu_toggle.addEventListener("click", menuToggleClick)

    var typed = new Typed('.type-animation h2', {
        strings: ['QA Engineer', 'Driven by passion', 'Continuous learner', 'Creative', 'Team player', 'Problem solver'],
        typeSpeed: 50,
        loop: true
    });

    for (let i = 1; i <= 8; i++) {
        let meteor = document.createElement('span');
        meteor.classList.add("meteor");
        document.querySelector('body .meteor-animation').append(meteor);
    }

}

function iconSelected(event) {
    let img_id = event.target.getAttribute('id').replace('_icon', '');
    event.target.setAttribute('src', "assets\\icons\\menu\\dark\\" + img_id + "_over.svg");
    document.querySelector('#sidebar span[id*="' + img_id + '"]').style.opacity = '1';
    document.querySelector('#sidebar span[id*="' + img_id + '"]').style.left = '30px';

}

function iconNotSelected(event) {
    let img_id = event.target.getAttribute('id').replace('_icon', '');
    document.querySelector('#sidebar span[id*="' + img_id + '"]').style.opacity = '0';
    document.querySelector('#sidebar span[id*="' + img_id + '"]').style.left = '25px';
    if (!document.querySelector('#sidebar a[href*="' + img_id + '"]').classList.contains('active')) {
        document.querySelector('#sidebar img[id*="' + img_id + '"]').setAttribute('src', "assets\\icons\\menu\\dark\\" + img_id + ".svg");
    }
}

function iconSelectedTab(event) {

    let anchor_href = event.target.getAttribute('href').replace('#', '');
    document.querySelector('#sidebar span[id*="' + anchor_href + '"]').style.opacity = '1';
    document.querySelector('#sidebar span[id*="' + anchor_href + '"]').style.left = '30px';
    document.querySelector('#sidebar img[id*="' + anchor_href + '"]').setAttribute('src', "assets\\icons\\menu\\dark\\" + anchor_href + "_over.svg");
}

function iconNotSelectedTab(event) {
    let anchor_href = event.target.getAttribute('href').replace('#', '');
    document.querySelector('#sidebar span[id*="' + anchor_href + '"]').style.opacity = '0';
    document.querySelector('#sidebar span[id*="' + anchor_href + '"]').style.left = '25px';
    if (!event.target.classList.contains('active')) {
        document.querySelector('#sidebar img[id*="' + anchor_href + '"]').setAttribute('src', "assets\\icons\\menu\\dark\\" + anchor_href + ".svg");
    }
}

function menuClick(event) {
    let element_id;
    let anchor_active_href = document.querySelector('#sidebar li a.active').getAttribute('href').replace('#', '');
    if (event.target.tagName == "A") {
        element_id = event.target.getAttribute('href').replace('#', '');
    } else if (event.target.tagName == "IMG") {
        element_id = event.target.getAttribute('id').replace('_icon', '');
    } else {
        element_id = event.target.parentNode.getAttribute('href').replace('#', '');
    }

    if (element_id == "home") {
        document.querySelector('#background-gradient').classList.remove('background-section')
        document.querySelector('#background-gradient').classList.add('background-home')

    } else {
        document.querySelector('#background-gradient').classList.remove('background-home')
        document.querySelector('#background-gradient').classList.add('background-section')

    }

    document.querySelector('#sidebar li a.active').classList.remove("active");
    document.querySelector('#responsive-sidebar li a.active').classList.remove("active");
    document.querySelector('#sidebar img[id*="' + anchor_active_href + '"]').setAttribute('src', "assets\\icons\\menu\\dark\\" + anchor_active_href + ".svg");
    document.querySelector('main > section.active').classList.remove("active");

    document.querySelector('#sidebar a[href*="' + element_id + '"]').classList.add("active");
    document.querySelector('#responsive-sidebar a[href*="' + element_id + '"]').classList.add("active");
    document.querySelector('#sidebar img[id*="' + element_id + '"]').setAttribute('src', "assets\\icons\\menu\\dark\\" + element_id + "_over.svg");
    document.querySelector('main > section#' + element_id).classList.add("active");


}

function menuToggleClick(event) {
    document.querySelector('#sidebar').classList.toggle("open");
}





