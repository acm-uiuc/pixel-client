var currentLesson = 1;
const FIRST_LESSON = 1;
const LAST_LESSON = 4;

for (let i = 0; i < LAST_LESSON; i++) {
    fetch('./tutorials/startercode' + i.toString() + '_python.txt')
        .then(function (resp) {
            resp.text().then(function (text) {
                localStorage.setItem(i.toString(), text);
            })
        });
}

function lessonChange(type) {
    var increment = 0;
    localStorage.setItem(currentLesson.toString(), myCodeMirror.getValue());

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
    myCodeMirror.setValue(localStorage.getItem(lesson));
}

function lessonUpdate(lesson) {
    fetch('./tutorials/lesson' + lesson.toString() + '_python.html')
        .then(function (resp) {
            resp.text().then(function (text) {
                document.getElementById("lesson").innerHTML = text;
            })
        });
}
