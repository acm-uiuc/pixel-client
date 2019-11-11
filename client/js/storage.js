var currentLesson = 1;

fetch('../tutorials/lesson1_python.html')
    .then(response => response.text())
    .then((data) => {
        localStorage.setItem("1", data)
    })

fetch('../tutorials/lesson2_python.html')
    .then(response => response.text())
    .then((data) => {
        localStorage.setItem("2", data)
    })

fetch('../tutorials/lesson3_python.html')
    .then(response => response.text())
    .then((data) => {
        localStorage.setItem("3", data)
    })

function lessonChange(type) {
    console.log("Lesson Change");

    localStorage.currentLesson = document.getElementById("info");

    if (type == "next") {
        currentLesson++;
    }
    else if (type == "previous") {
        currentLesson--;
    }

    var lessonInfo = localStorage.getItem(currentLesson.toString);
}

// var lessonUpdate = setInterval(function () {
//     localStorage.setItem(currentLesson, document.getElementById("info"));
// }, 60 * 1000);