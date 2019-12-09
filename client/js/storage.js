var currentLesson = 1;
const FIRST_LESSON = 1;
const LAST_LESSON = 4;

for (let i = 0; i < LAST_LESSON; i++) {
    fetch('./tutorials/startercode' + + i.toString() + '_python.html')
        .then(function (resp) {
            resp.text().then(function (text) {
                localStorage.setItem(i.toString(), text);
            })
        });
}

function lessonChange(type) {

    localStorage.currentLesson = myCodeMirror.getValue;

    if (type == 1 && currentLesson < LAST_LESSON) {
        currentLesson++;
    }
    else if (type == 0 && currentLesson > FIRST_LESSON) {
        currentLesson--;
    }

    lessonUpdate(currentLesson);
    codeUpdate(currentLesson);
}

function codeUpdate(lesson) {
    myCodeMirror.setValue(localStorage.lesson);
}

function lessonUpdate(lesson) {
    // localStorage.currentLesson = document.getElementById("info");
    // var lessonInfo = localStorage.getItem(currentLesson.toString());
    // document.getElementById("info").innerHTML = lessonInfo;

    fetch('./tutorials/lesson' + lesson.toString() + '_python.html')
        .then(function (resp) {
            resp.text().then(function (text) {
                document.getElementById("info").innerHTML = text;
            })
        });

    // console.log("Next Lesson: " + currentLesson);
    // console.log("Current Lesson Data After: " + localStorage.currentLesson.toString());

}

// var lessonUpdate = setInterval(function () {
//     localStorage.setItem(currentLesson, document.getElementById("info"));
// }, 60 * 1000);