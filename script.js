const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendButton = document.getElementById("send-btn");

let step = 0;


// ========================================
// THỜI GIAN
// ========================================

function wait(delay = 2000) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}


// ========================================
// AUDIO
// ========================================

function addAudio(src) {

    const wrapper = document.createElement("div");

    wrapper.classList.add(
        "message",
        "them",
        "music-message"
    );

    const audio = document.createElement("audio");

    audio.src = src;
    audio.controls = true;
    audio.playsInline = true;
    audio.classList.add("chat-audio");

    wrapper.appendChild(audio);

    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;

    return audio;
}


// ========================================
// VIDEO
// ========================================

function addVideo(src) {

    const wrapper = document.createElement("div");

    wrapper.classList.add(
        "message",
        "them",
        "video-message"
    );

    const video = document.createElement("video");

    video.src = src;
    video.controls = true;
    video.playsInline = true;
    video.classList.add("chat-video");

    wrapper.appendChild(video);

    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;

    return video;
}


// ========================================
// THÊM MESSAGE
// ========================================

function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add(
        "message",
        sender
    );

    message.innerText = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ========================================
// NOBODY GỬI MESSAGE
// MỖI MESSAGE CÁCH NHAU 2 GIÂY
// ========================================

async function botMessage(text) {

    await wait(2000);

    addMessage(
        text,
        "them"
    );
}


// ========================================
// TYPING
// ========================================

async function typing(delay = 1000) {

    const typing = document.createElement("div");

    typing.classList.add(
        "message",
        "them",
        "typing"
    );

    typing.innerText = "typing...";

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    await wait(delay);

    typing.remove();
}


// ========================================
// BÁNH
// ========================================

function addCake() {

    const wrapper = document.createElement("div");

    wrapper.classList.add(
        "message",
        "them",
        "cake-message"
    );

    wrapper.innerHTML = `

        <div class="cake">
            🎂
        </div>

        <div class="candle-row" id="candles">
            <span class="candle">🕯️</span>
            <span class="candle">🕯️</span>
            <span class="candle">🕯️</span>
            <span class="candle">🕯️</span>
            <span class="candle">🕯️</span>
        </div>

    `;

    chatBox.appendChild(wrapper);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

// ========================================
// THỔI NẾN
// ========================================

async function blowCandles() {

    const candles =
        document.getElementById("candles");

    if (!candles) {
        return;
    }

    candles.classList.add("candles-out");

    await wait(1000);

    await botMessage(
        "yayyyy 🎉"
    );

    await botMessage(
        "wish made ✨"
    );

    await botMessage(
        "mong là điều ước của cậu sẽ thành sự thật nhé ❤️"
    );

    await wait(2500);

    showLetter();
}


// ========================================
// THƯ
// ========================================

async function showLetter() {

    await typing(1000);


    addMessage(
        "à ",
        "them"
    );


    await wait(2000);


    addMessage(
        "còn cái này nữa",
        "them"
    );


    await wait(2200);


    const wrapper =
        document.createElement("div");


    wrapper.classList.add(
        "message",
        "them",
        "letter-message"
    );


    wrapper.innerHTML = `

        <div class="letter">

            <div class="letter-icon">
                💌
            </div>

            <h3>
                Một điều cuối...
            </h3>

            <p>
                Nếu cậu đã đọc đến đây thì...
            </p>

            <p>
                chắc là món quà này cũng đến được với cậu rồi nhỉ.
            </p>

            <p>
                Mình chẳng biết phải nói những điều này thế nào cho thật hay, nên chỉ muốn cậu biết rằng mình thật sự rất vui vì vẫn ở đây, trong một ngày, đặc biệt hơn mọi ngày, của cậu.
            </p>

            <p>
                Cảm ơn cậu vì đã luôn là chính mình, vì những điều cậu làm, những điều cậu yêu, và vì đã khiến mình có thêm một lý do để mỉm cười mỗi ngày.
            </p>

            <p>
                Mình chúc cậu tuổi mới thật bình yên, và trên hành trình phía trước, mong cậu vẫn sẽ luôn được làm những điều mình yêu thích.
            </p>

            <p>
                Và nếu có lúc nào cậu quên mất rằng mình đáng được yêu thương đến thế nào... thì hãy nhớ rằng có một người vẫn luôn chờ cậu về sau cánh cửa ngoài kia. ❤️
            </p>

            <div class="letter-sign">
                _nobody
            </div>

        </div>

    `;


    chatBox.appendChild(wrapper);

    chatBox.scrollTop =
        chatBox.scrollHeight;


    await wait(3000);


    addMessage(
        "chúc mừng sinh nhật nhenn 🎂❤️",
        "them"
    );
}


// ========================================
// SAU AUDIO → PHẦN ƯỚC
// ========================================

async function birthdayWishFlow() {

    // tránh chạy 2 lần
    if (step !== 6) {
        return;
    }


    step = 7;


    await botMessage(
        "yayyyy"
    );


    await botMessage(
        "bây giờ đến phần quan trọng nhất"
    );


    await botMessage(
        "nhắm mắt lại"
    );


    await botMessage(
        "và ước một điều gì đó thật đẹp đi"
    );
}


// ========================================
// FLOW CHÍNH
// ========================================

async function handleAnswer(text) {


    // ====================================
    // STEP 0
    // SAU HELLO
    // ====================================

    if (step === 0) {

        step = 1;


        await typing(1000);


        addMessage(
            "hôm nay của cậu thế nào?",
            "them"
        );


        await wait(2000);


        addMessage(
            "có gì vui honggg?",
            "them"
        );


        return;
    }



    // ====================================
    // STEP 1
    // HỎI NGÀY
    // ====================================

    if (step === 1) {

        step = 2;


        await typing(1000);


        addMessage(
            "à mà...",
            "them"
        );


        await wait(2000);


        addMessage(
            "hôm nay là ngày mấy nhỉ",
            "them"
        );


        await wait(2000);


        addMessage(
            "dạo này mình bận quá, không để ý luôn",
            "them"
        );


        return;
    }



    // ====================================
    // STEP 2
    // PHÁT HIỆN SINH NHẬT
    // ====================================

    if (step === 2) {

        step = 3;


        await typing(1000);


        addMessage(
            "Ê khoan...",
            "them"
        );


        await wait(2000);


        addMessage(
            "Hôm nay 16/9 là sinh nhật của cậu mà??? 😭",
            "them"
        );


        await wait(2000);


        addMessage(
            "Huhu mình quên mất luôn á 😭😭",
            "them"
        );


        return;
    }



    // ====================================
    // STEP 3
    // QUÊN SINH NHẬT → QUÀ
    // ====================================

    if (step === 3) {

        step = 4;


        await typing(1000);


        addMessage(
            "...",
            "them"
        );


        await wait(2000);


        addMessage(
            "thôi chết rồi",
            "them"
        );


        await wait(2000);


        addMessage(
            "tệ ghê đã quên còn để cậu nhắc nữa",
            "them"
        );


        await wait(2000);


        addMessage(
            "òmm",
            "them"
        );


        await wait(2000);


        addMessage(
            "khoan",
            "them"
        );


        await wait(2000);


        addMessage(
            "à mà hình như mình vẫn còn kịp làm gì đó á",
            "them"
        );


        await wait(2000);


        addMessage(
            "không nói đâu :)))",
            "them"
        );


        await wait(2000);


        addMessage(
            "đợi xíu ",
            "them"
        );


        // ====================================
        // ĐỢI LÂU TRƯỚC KHI TẶNG
        // ====================================

        await wait(3500);


        addMessage(
            "🎁",
            "them"
        );


        // ====================================
        // VIDEO / QUÀ
        // ====================================

        await wait(2500);


        addVideo(
            "assets/video/birthday.mp4"
        );


        await wait(2000);


        addMessage(
            "đây là secret... bạn chỉ có được nó khi liên lạc với chủ của mình, nhớ là phải đúng địa chỉ đó nha",
            "them"
        );


        await wait(2000);


        addMessage(
            "nhưng mà...",
            "them"
        );


        await wait(2000);


        addMessage(
            "một món thì hơi ít khomm",
            "them"
        );


        await wait(2000);


        addMessage(
            "đợi mình tí nha",
            "them"
        );


        // ====================================
        // CHUYỂN SANG BÁNH
        // ====================================

        await wait(3000);


        addMessage(
            "bây giờ mới đúng không khí hơn rồi nè",
            "them"
        );


        await wait(2000);


        addMessage(
            "mà sinh nhật thì...",
            "them"
        );


        await wait(2000);


        addMessage(
            "không thể thiếu cái này được 🎂",
            "them"
        );


        await wait(2500);


        addCake();


        await wait(2000);


        addMessage(
            "có bánh rồi nè",
            "them"
        );


        await wait(2000);


        addMessage(
            "giờ thì...",
            "them"
        );


        await wait(2000);


        addMessage(
            "mình cùng hát chúc mừng sinh nhật nhaaa",
            "them"
        );


        // ====================================
        // CHỜ NGƯỜI ẤY TRẢ LỜI
        // ====================================

        step = 5;


        return;
    }



    // ====================================
    // STEP 5
    // BẮT ĐẦU HÁT
    // ====================================

    if (step === 5) {

        step = 6;


        await typing(1000);


        addMessage(
            "okayyy bắt đầu nheee 🎵",
            "them"
        );


        await wait(2000);


        // ====================================
        // PHÁT AUDIO
        // ====================================

        const audio = addAudio(
            "song.mp3"
        );


        // thử tự phát
        audio.play().catch(() => {});


        // ====================================
        // AUDIO KẾT THÚC
        // ====================================

        audio.addEventListener(
            "ended",
            birthdayWishFlow
        );


        return;
    }



    // ====================================
    // STEP 7
    // SAU PHẦN ƯỚC
    // ====================================

    if (step === 7) {

        step = 8;


        await typing(1000);


        addMessage(
            "Rồi thì...",
            "them"
        );


        await wait(2000);


        addMessage(
            "3...",
            "them"
        );


        await wait(2000);


        addMessage(
            "2...",
            "them"
        );


        await wait(2000);


        addMessage(
            "1...",
            "them"
        );


        await wait(2000);


        addMessage(
            "thổi nến thoai",
            "them"
        );


        await wait(1500);


        blowCandles();


        return;
    }

}


// ========================================
// GỬI MESSAGE
// ========================================

function sendMessage() {

    const text =
        input.value.trim();


    if (text === "") {
        return;
    }


    addMessage(
        text,
        "me"
    );


    input.value = "";


    handleAnswer(text);
}


// ========================================
// BUTTON
// ========================================

sendButton.addEventListener(
    "click",
    sendMessage
);


// ========================================
// ENTER
// ========================================

input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


// ========================================
// HELLO
// ========================================

setTimeout(() => {

    addMessage(
        "Hi, nobody here",
        "them"
    );


    setTimeout(() => {

        addMessage(
            "always with you ♡",
            "them"
        );

    }, 2000);

}, 800);