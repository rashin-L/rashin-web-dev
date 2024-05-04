
// navbar collapse
const menu = document.getElementById('menu');
const toggle = () => menu.classList.toggle("hidden");
// ------------------------------------------------------





//------------------------------------ add animation on visible----------------------------------
function detect_visible(query, custom_func) {
    let calculator = function (element, custom_func) {
        // let element = document.querySelector(query);
        let element_top_offset = element.offsetTop;
        let element_bottom_offset = element.offsetHeight + element_top_offset;

        let screen_top_offset = window.scrollY;
        let screen_bottom_offset = screen_top_offset + window.innerHeight;

        if (element_top_offset > screen_top_offset && screen_bottom_offset > element_bottom_offset) {
            custom_func(element)
        }


    }
    calculator(query, custom_func);
    document.addEventListener('scroll', calculator.bind(null, query, custom_func))
}
// =======================================================================
var service = document.querySelectorAll('.service_box');

for (const box of service) {
    detect_visible(box, function (box) {
        // box.style.setProperty('--animate-duration', '2s');
        box.classList.add('animate__jello');
    })

}
// =======================================================================
var project_img = document.querySelectorAll('.project_img');

for (const img of project_img) {

    detect_visible(img, function (img) {

        // box.style.setProperty('--animate-duration', '2s');
        img.classList.add('animate__bounce');

    })

}
// =======================================================================



var skill_box = document.querySelectorAll('.skill_box');
var skill_percent_text = document.querySelectorAll('.skill_percent_text');
var skill_percent_fill = document.querySelectorAll('.skill_percent_fill');

// for (let i = 0; i < skill_box.length; i++) {
//     (function(i) {
//         var element = skill_percent_text[i];
//         var value_element = skill_percent_fill[i];
//         var data_to = Number(value_element.getAttribute("data-to"));
//         var visible_element = skill_box[i];
        
//         const newLocal = 'processed';
//         if (!visible_element.classList.contains(newLocal)) {
//             visible_element.classList.add('processed');
//             detect_visible(visible_element, function(visible_element) {
//                 changeProgress(element, value_element, data_to);
//             });
//         }
//     })(i);
// }

function changeProgress(element, value_element, value) {
    var i = 0;
    var interval = setInterval(function () {
        if (i >= Number(value)) {
            clearInterval(interval);
        }
        value_element.style.width = i + "%";
        element.innerText = i + "%";
        i++;
    }, 10);
}


var skill_box = document.querySelectorAll('.skill_box');

for (let i = 0; i < skill_box.length; i++) {

        var visible_element = skill_box[i];


            detect_visible(visible_element, function(visible_element) {
                visible_element.classList.add("animate__shakeX");
            });


}
// // ==============================================================================

// //------------------------------------ end add animation on visible----------------------------------






