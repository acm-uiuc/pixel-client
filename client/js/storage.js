var currentLesson = 1;
const FIRST_LESSON = 1;
const LAST_LESSON = 4;

function lessonChange(type) {
    lessonUpdate(type);
    // codeUpdate();
}

function codeUpdate() {

}

function lessonUpdate(type) {

    console.log("Current Lesson: " + currentLesson);
    console.log("Current Lesson Data Before: " + localStorage.currentLesson);

    if (type == 1 && currentLesson < LAST_LESSON) {
        currentLesson++;
    }
    else if (type == 0 && currentLesson > FIRST_LESSON) {
        currentLesson--;
    }

    fetch('./tutorials/lesson' + currentLesson.toString() + '_python.html')
        .then(function (resp) {
            resp.text().then(function(text) {
                document.getElementById("info").innerHTML = text;
            })
        });
}