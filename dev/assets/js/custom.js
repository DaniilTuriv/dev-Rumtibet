let button = {
    content: '2025-10-09',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2025-10-09');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

new AirDatepicker('#calendar', {
    buttons: [button, 'clear'], // Custom button, and pre-installed 'clear' button
    position: "top center"
})

new AirDatepicker('#mobile-calendar', {
    buttons: [button, 'clear'], // Custom button, and pre-installed 'clear' button
    position: "top center"
})

if (document.querySelector('select')) {
    NiceSelect.bind(document.getElementById("location-select"), {
        searchable: true,
        placeholder: 'Локация для тура',
        searchtext: 'zoek',
        selectedtext: 'geselecteerd'
    });
    NiceSelect.bind(document.getElementById("member-select"), {
        searchable: false,
        placeholder: 'Участники',
        searchtext: 'zoek',
        selectedtext: 'geselecteerd'
    });
    NiceSelect.bind(document.getElementById("modal-location-select"), {
        searchable: true,
        placeholder: 'Локация для тура',
        searchtext: 'zoek',
        selectedtext: 'geselecteerd'
    });
    NiceSelect.bind(document.getElementById("modal-member-select"), {
        searchable: false,
        placeholder: 'Участники',
        searchtext: 'zoek',
        selectedtext: 'geselecteerd'
    });
}

const forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

const hamburgers = document.querySelectorAll(".hamburger");
const burgerMenu = document.querySelector('.header__mobile-container');
const body = document.querySelector('body');

if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
            burgerMenu.classList.toggle("show");
            body.classList.toggle("overflow-hidden");
        }, false);
    });
}

const inputTel = document.querySelectorAll('[type=tel]')

inputTel.forEach(item => {
    const inputId = item.id

    IMask(
        document.getElementById(inputId),
        {
            mask: '+{38}(000)000-00-00'
        }
    )
})

const swiperPopular = new Swiper('.swiper-popular', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    autoplay: {
        delay: 5000
    },

    pagination: {
        el: '.swiper-popular-pagination',
        clickable: 'true',
    },

    navigation: {
        nextEl: '.swiper-popular-button-next',
        prevEl: '.swiper-popular-button-prev',
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

function initBlog() {
	const breakpoint = window.matchMedia("(min-width:768px)");

	let swiperBlog;

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			if (swiperBlog !== undefined) {
                swiperBlog.destroy(true, true);
            }
			return;
		} else if (breakpoint.matches === false) {
			return enableSwiper();
		}
	};

	const enableSwiper = function () {
		swiperBlog = new Swiper(".swiper-blog", {
			slidesPerView: 1,
			speed: 1000,
			loop: true,
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-blog-button-next',
				prevEl: '.swiper-blog-button-prev',
			},
            pagination: {
                el: '.swiper-blog-pagination',
                clickable: 'true',
            },
		});
	};
	breakpoint.addEventListener("change", breakpointChecker);
	breakpointChecker();
}

initBlog();

function initGallery() {
	const breakpoint = window.matchMedia("(min-width:768px)");

	let swiperGallery;

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			if (swiperGallery !== undefined) swiperGallery.destroy(true, true);
			return;
		} else if (breakpoint.matches === false) {
			return enableSwiper();
		}
	};

	const enableSwiper = function () {
		swiperGallery = new Swiper(".swiper-gallery", {
			slidesPerView: 1,
			speed: 1000,
			loop: true,
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-gallery-button-next',
				prevEl: '.swiper-gallery-button-prev',
			},
            pagination: {
                el: '.swiper-gallery-pagination',
                clickable: 'true',
            },
		});
	};
	breakpoint.addEventListener("change", breakpointChecker);
	breakpointChecker();
}

initGallery()