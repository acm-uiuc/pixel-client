var currentLesson = 1;

fetch('../tutorials/lesson1_python.html')
    .then(response => response.text())
    .then((data) => {
        localStorage.setItem("1", data)
        console.log("Refresh Lesson");
    })

fetch('../tutorials/lesson2_python.html')
    .then(response => response.text())
    .then((data) => {
        localStorage.setItem("2", data)
        console.log("Refresh Lesson");
    })

fetch('../tutorials/lesson3_python.html')
    .then(response => response.text())
    .then((data) => {
        localStorage.setItem("3", data)
        console.log("Refresh Lesson");
    })

function lessonChange(type) {

    localStorage.currentLesson = document.getElementById("info");

    if (type == 1) {
        currentLesson++;
        console.log("Next Lesson");
    }
    else if (type == 0) {
        currentLesson--;
        console.log("Previous Lesson");
    }

    var lessonInfo = localStorage.getItem(currentLesson.toString);
}

// var lessonUpdate = setInterval(function () {
//     localStorage.setItem(currentLesson, document.getElementById("info"));
// }, 60 * 1000);