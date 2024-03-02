import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: "ReactJs là gì? tại sao sử dụng ?"
    },
    {
        id: 2,
        name: "SPA/MPA là gì ?"
    },
    {
        id: 3,
        name: "Arrow function"
    },
];

function FakeChat() {

    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {

        const handleEvent = (e) => {
            console.log(e.detail);
        };

        window.addEventListener(`lesson-${lessonId}`, handleEvent);

        // cleanup function
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleEvent);
        };

    }, [lessonId]);

    return (
        <div>
            <ul>
                {lessons.map((lesson) => 
                    <li 
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? "red" : "black"
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default FakeChat;