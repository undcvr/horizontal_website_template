function scroll_check() {
    scroll_check_boolen = false
    
    setTimeout(() => {
        scroll_check_boolen = true

    }, 1000);
}
function swap_nav(name) {
    for (let i = 0; i < nav_links.length; i++) {
        if (nav_links[i].classList[1] == 'active') {
            nav_links[i].classList.remove('active')
        }
        if (nav_links[i].innerText == name) {
            nav_links[i].classList.add('active')
        }
    }
}
