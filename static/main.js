let main_container = document.querySelector('.main-container')
let header = document.querySelector('.header')
let scroll_pos = 0

let can_wheel_container = document.querySelector('.can-wheel-container')
let header_title_container = document.querySelector('.header-title-container')
let header_img = document.querySelector('.header-img')
let about_container = document.querySelector('.about')
let plant_1 = document.querySelector('.plant-1')
let plant_2 = document.querySelector('.plant-2')
let sides_count = document.querySelector('.sides-counts')
let students_counts = document.querySelector('.students-counts')
let employees_counts = document.querySelector('.employees-counts')
let sides_container = document.querySelector('.sides')
let shit = document.querySelector('.top-left-shit')
let lines_y = $('.dec-line-y')
let lines_x = $('.dec-line-x')
let decor_circles_first = document.querySelector('.decor-circles-first')
let decor_circles_second = document.querySelector('.decor-circles-second')
let nav_links = $('.nav-link')

// let nav = ['about', 'sides', 'work', 'news']
let nav = ['about', 'sides', 'news']

let scroll_check_boolen = true

document.body.addEventListener('wheel', main)
sides_container.addEventListener('mouseover', function() {
    document.body.removeEventListener('wheel', main)
}, sides_container.addEventListener('mouseout', function() {
    document.body.addEventListener('wheel', main)
}))


function main(e) {
    if (e.deltaY > 0 && scroll_check_boolen) {
        scroll_pos += 100
    } else if(e.deltaY < 0 && scroll_pos > 0 && scroll_check_boolen) {
        scroll_pos -= 100
    }
    if (scroll_pos == 0) {
        if (header.classList.contains('active-block')) {
            //pass
        } else {
            scroll_check()
    
            about_close()
    
            header_title_container.style.display = 'block'
            can_wheel_container.style.display = 'flex'
            header.classList.add('active-block')
    
            setTimeout(() => {
                can_wheel_container.style.opacity = '1'
                header_title_container.style.opacity = '1'
            }, 200);
    
            setTimeout(() => {
                header_img.style.transform = 'translateX(0%)'
                header_img.src = 'media/woman.png'
                about_container.style.display = 'none'
    
            }, 500);
            // scroll_pos -= 100
        }
    }

    if (scroll_pos == 400) {
        if (about_container.classList.contains('active-block')) {
            scroll_check()
        } else {
            about()
            header_show()
            sides_close()
        }
        // scroll_pos += 100
    
    }
    if (scroll_pos == 900) {
        if (sides_container.classList.contains('active-block')) {
            scroll_check()
        } else {
            about_close()
            header_close()
            sides()
        }
    }
}

        // if (scroll_pos == 500) {
        //     // pass
        // } else {
        //     scroll_pos += 100
        // }
