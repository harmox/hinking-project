
    function effect(e) {
        const quotes = [
            "The journey of a thousand miles begins with a single step.",
            "Take only memories, leave only footprints.",
            "The best view comes after the hardest climb.",
            "Nature is not a place to visit. It is home.",
            "In every walk with nature, one receives far more than he seeks.",
            "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
            "Not all who wander are lost."
        ];
    
        const index = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[index];
        const currentQuote = e.target.innerText;
        let i = 0;
        const maxLength = Math.max(newQuote.length);

        function animate() {
            if (i <= maxLength) {
                e.target.innerText = Array.from({ length: maxLength }).map((_, index) => {
                    if (index < i) {
                        return newQuote[index] || ' ';
                    } else if (index < currentQuote.length) {
                        return currentQuote[index];
                    } else {
                        return ' ';
                    }
                }).join('');
                i++;
                setTimeout(animate, 50);
            }
        }

        animate();
}

export default effect