import { useEffect, useState } from "react";

function Demo() {

    const [countdown, setCountdown] = useState(180);
    const [countdown2, setCountdown2] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => {
            // setCountdown(countdown - 1);
            // console.log('Countdown:', countdown);
            setCountdown(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(timerId);

    }, []);

    useEffect(() => {
        const timerId2 = setTimeout(() => {
            setCountdown2(countdown2 - 1);
        }, 1000);

        return () => clearTimeout(timerId2);

    }, [countdown2]);

    // Cách để bên ngoài như này dẫn đến trường hợp khi re-render lại sẽ lại
    // gọi hàm này. Dẫn đến sẽ có nhiều setInterval chạy song song với nhau
    // setInterval(() => {
    //     setCountdown(countdown - 1);
    // }, 1000);

    return (
        <div>
            <h1>{countdown}</h1>
            <h1>{countdown2}</h1>
        </div>
    );
}

export default Demo;