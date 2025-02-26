document.addEventListener("DOMContentLoaded", () => {
    const storyText = document.getElementById("story-text");
    const sceneImage = document.getElementById("scene-image");
    const buttonContainer = document.getElementById("button-container");
    const scoreElement = document.getElementById("score");
    let score = 0;
    let confettiInterval;

    const stories = [
        { 
            text: "You meet Chetna at a coffee shop ☕. She looks at you and says: 'Huh?' 😆 What do you do?", 
            image: "images2/1.jpg",
            options: [
                { text: "Smile & say 'Huh' 😍", next: 1, points: 10 },
                { text: "Say 'Zroor!' 😂", next: 1, points: 5 },
                { text: "Say 'Babhoo' & Run away 🏃‍♂️", next: 1, points: -5 }
            ]
        },
        { 
            text: "She blushes and smiles back. 'Awww! So sweet! 🥰' She asks: 'What’s next?'", 
            image: "images2/2.jpeg",
            options: [
                { text: "Take her for ice cream 🍦", next: 2, points: 15 },
                { text: "Sing her a song 🎤", next: 2, points: 20 }
            ]
        },
        { 
            text: "Chetna admits she missed you when you weren’t talking 🥺. What do you say?", 
            image: "images2/3.jpg",
            options: [
                { text: "I missed you too! ✨", next: 3, points: 20 },
                { text: "Oh, really? 👀", next: 3, points: 5 }
            ]
        },
        { 
            text: "She says life was boring without you! What’s your response?", 
            image: "images2/4.jpg",
            options: [
                { text: "Let’s make every moment exciting again! 🎉", next: 4, points: 10 },
                { text: "I knew you’d miss me and you chose it! 😉", next: 4, points: 15 }
            ]
        },
        { 
            text: "She’s feeling tense about work. What do you do?", 
            image: "images2/5.jpg",
            options: [
                { text: "Crack a joke & make her laugh! 😂", next: 5, points: 10 },
                { text: "Give her a motivational pep talk as you always do 💪", next: 5, points: 15 }
            ]
        },
        { 
            text: "She got her own car! 🚗 What did you tell her?", 
            image: "images2/6.jpg",
            options: [
                { text: "I’m so proud of you! 🎉", next: 6, points: 20 },
                { text: "Great! Now, you’re my personal driver! 😆", next: 6, points: 5 }
            ]
        },
        { 
            text: "She’s craving kebabs & dahi-jalebi. What do you do?", 
            image: "images2/7.jpg",
            options: [
                { text: "Take her out for a feast! 🍽️", next: 7, points: 15 },
                { text: "Order them as a surprise delivery! 📦", next: 7, points: 20 }
            ]
        },
        {
            text: "She just loves it! What next?",
            image: "images2/8.jpg",
            options: [
                { text: "Call her and talk how she enjoyed it! 🍢", next: 8, points: 15 },
                { text: "Send her a cute meme! 🥰", next: 8, points: 5 }
            ]
        },
        {
            text: "It's her Birthday! What's the plan?",
            image: "images2/9.jpg",
            options: [
                { text: "Hang out with her! 🍨", next: 9, points: 10 },
                { text: "Plan a temple visit first ⛩️", next: 9, points: 15 }
            ]
        },
        {
            text: "She loves the Birthday Treat! Now what?",
            image: "images2/10.jpeg",
            options: [
                { text: "Give her a heartfelt compliment 🥰", next: 10, points: 10 },
                { text: "Ask about her day ✨", next: 10, points: 10 }
            ]
        }
    ];

    function startGame() {
        score = 0;
        scoreElement.textContent = `⭐ Score: ${score}`;
        showStory(0);
        playMusic();
        startConfettiEffect();
    }

    function showStory(index) {
        if (index < 0 || index >= stories.length) {
            endGame();
            return;
        }
        const story = stories[index];
        storyText.textContent = story.text;
        sceneImage.src = story.image;

        buttonContainer.innerHTML = "";
        story.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = option.text;
            button.onclick = () => {
                score += option.points;
                scoreElement.textContent = `⭐ Score: ${score}`;
                showStory(option.next);
            };
            buttonContainer.appendChild(button);
        });
    }

    function endGame() {
        buttonContainer.innerHTML = `
            <div class="result-card">
                <h2>Huihuii, You Rock! 🎉</h2>
                <p>Final Score: ⭐ ${score}</p>
                <button onclick="startGame()">Play Again</button>
            </div>
        `;
        storyText.textContent = "";
        hint.textContent = "";
        score.textContent = "";
        sceneImage.src = "images2/11.jpg"
        stopConfettiEffect();
        fireworksEffect(); // Keep fireworks effect running
    }

    function playMusic() {
        let audio = new Audio("music/bgm2.mp3");
        audio.play();
    }

    function startConfettiEffect() {
        if (confettiInterval) {
            clearInterval(confettiInterval);
        }

        confettiInterval = setInterval(() => {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { x: Math.random(), y: Math.random() },
                shapes: ["circle"], 
                colors: ["#FF1493", "#FF69B4", "#FFB6C1", "#FF00FF"]
            });
        }, 1500);
    }

    function stopConfettiEffect() {
        if (confettiInterval) {
            clearInterval(confettiInterval);
        }
    }

    
    function fireworksEffect() {
        const duration = 10 * 1000; // Run for 10 seconds
        const animationEnd = Date.now() + duration;
        
        (function frame() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return;
    
            const particleCount = 100;
            const angle = Math.random() * 360;
            const colors = [
                "#FF1493", "#FF69B4", "#FFB6C1", "#FF00FF", // Pinks 💖
                "#FFD700", "#FFA500", // Golds ✨
            ];
    
            confetti({
                particleCount: particleCount,
                angle: angle,
                spread: 80,
                origin: { x: Math.random(), y: Math.random() * 0.5 },
                colors: colors,
                shapes: ["circle"],
                scalar: 1.2
            });
    
            requestAnimationFrame(frame);
        })();
    }

      

    // Load confetti script
    const confettiScript = document.createElement("script");
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    document.body.appendChild(confettiScript);   
    
    
    window.startGame = startGame;

});
