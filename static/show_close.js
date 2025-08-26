function header_show() {
    header.style.display = 'block'
    setTimeout(() => {
        shit.style.transform = 'rotate(180deg) translateX(0%)'
    }, 10);
    
    let linesY_i = 0
    let linesY_interval = setInterval(() => {
        if (linesY_i == lines_y.length - 1) {
            clearInterval(linesY_interval)
        } else {
            linesY_i ++
            lines_y[linesY_i].style.cssText = 'transform: translateY(0%);'

        }
    }, 50);

    let linesX_i = 0
    let linesX_interval = setInterval(() => {
        if (linesX_i == lines_x.length - 1) {
            clearInterval(linesX_interval)
        } else {
            linesX_i ++
            lines_x[linesX_i].style.transform = 'translateX(0%)'
        }
    }, 50);
}

function header_close() {
    shit.style.transform = 'rotate(180deg) translateX(-100%)'
    
    let linesY_i = 0
    let linesY_interval = setInterval(() => {
        if (linesY_i == lines_y.length - 1) {
            clearInterval(linesY_interval)
        } else {
            linesY_i ++
            lines_y[linesY_i].style.transform = 'translateY(150%)'
        }
    }, 50);

    let linesX_i = 0
    let linesX_interval = setInterval(() => {
        if (linesX_i == lines_x.length - 1) {
            clearInterval(linesX_interval)
        } else {
            linesX_i ++
            lines_x[linesX_i].style.transform = 'translateX(200%)'
        }
    }, 50);
    setTimeout(() => {
        header.style.display = 'none'
    }, 1000);

}
function about() {
    swap_nav('О НАС')
    scroll_check()
    let setTimeout_time = 1

    header.classList.remove('active-block')
    about_container.classList.add('active-block')

    can_wheel_container.style.opacity = '0'
    header_title_container.style.opacity = '0'

    header_img.style.transform = 'translateX(200%)'
    about_container.style.display = 'block'
    
    setTimeout(() => {
        header_title_container.style.display = 'none'
        can_wheel_container.style.display = 'none'
    }, 300);

    if (about_container.classList.contains('active-block')) {
        setTimeout_time = 500
    }
    
    setTimeout(() => {
        plant_1.style.cssText = 'bottom: -20%; left: 50px; transform: scaleX(-1) rotate(-30deg);'
        plant_2.style.cssText = 'bottom: -40%; transform: scaleX(-1) rotate(0deg);'

        header_img.style.transform = 'translateX(0%)'
        header_img.src = 'media/woman2.png'
        about_container.style.opacity = 1
        about_container.style.bottom = '20%'

        let sides_i = 0
        let sides_count_interval = setInterval(() => {
            if (sides_i == 30) {
                sides_count.innerText += '+'
                clearInterval(sides_count_interval)
            } else {
                sides_i++
                sides_count.innerHTML = sides_i
            }
        }, 50);

        students_i = 0
        let students_counts_interval = setInterval(() => {
            if (students_i == 50000) {
                students_counts.innerText += '+'
                clearInterval(students_counts_interval)
            } else {
                students_i += 200
                students_counts.innerHTML = students_i
            }
        }, 7);

        employee_i = 100
        let employee_counts_interval = setInterval(() => {
            if (employee_i == 0) {
                clearInterval(employee_counts_interval)
            } else {
                employee_i -= 1
                employees_counts.innerHTML = employee_i + '%'
            }
        }, 25);
    }, setTimeout_time);
}

function about_close() {
    scroll_check()
    about_container.classList.remove('active-block')

    header_img.style.transform = 'translateX(200%)'
    
    about_container.style.opacity = 0
    about_container.style.bottom = '-100%'

    plant_1.style.cssText = 'bottom: -30%; left: -20%; transform: scaleX(-1) rotate(90deg);'
    plant_2.style.cssText = 'bottom: -100%; transform: scaleX(-1) rotate(20deg);'

    setTimeout(() => {
        about_container.style.display = 'none'

    }, 500);

}

function sides() {
    swap_nav('ФАКУЛЬТЕТЫ')
    scroll_check()
    about_container.classList.remove('active-block')
    sides_container.classList.add('active-block')

    sides_container.style.display = 'flex'

    setTimeout(() => {
        let linesY_i = 0
        let linesY_interval = setInterval(() => {
            if (linesY_i == lines_y.length - 1) {
                clearInterval(linesY_interval)
            } else {
                linesY_i ++
                let document_width = document.body.clientWidth
                setTimeout(() => {
                    lines_y[linesY_i].style.cssText = `transform: translateY(0%); margin-right: ${document_width / 8}px; height: 100vh;`
                }, 100);
            }
        }, 50);

        sides_container.style.opacity = '1'
        decor_circles_first.style.cssText = 'top: -40%; left: -20%;'
        setTimeout(() => {
            decor_circles_second.style.cssText = 'bottom: -40%; right: -20%;'
        }, 100);
    }, 500);
}
function sides_close() {
    scroll_check()
    
    sides_container.classList.remove('active-block')
    sides_container.style.opacity = '0'
    decor_circles_first.style.cssText = 'top: -100%; left: -100%;'
    setTimeout(() => {
        decor_circles_second.style.cssText = 'bottom: -100%; right: -100%;'
    }, 100);
    setTimeout(() => {
        sides_container.style.display = 'none'
    }, 500);
}