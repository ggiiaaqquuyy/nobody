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
// THÊM MESSAGE
// ========================================

function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add("message", sender);

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

    addMessage(text, "them");
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

        <div class="candles" id="candles">
            🕯️ 🕯️ 🕯️
        </div>

    `;


    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;
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


    candles.innerText =
        "✨ ✨ ✨";


    await wait(1000);

    await botMessage("Yayyyy 🎉");

    await botMessage("Wish made. ✨");

    await botMessage(
        "Mong điều ước của cậu sẽ thành sự thật nhé."
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
        "À mà...",
        "them"
    );


    await wait(2000);

    addMessage(
        "Còn cái này nữa.",
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
                One last thing...
            </h3>

            <p>
                Happy Birthday! 🎂
            </p>

            <p>
                Mong rằng hôm nay sẽ là
                một ngày thật vui đối với cậu.
            </p>

            <p>
                Và mong rằng khi nhìn lại
                ngày hôm nay, cậu sẽ nhớ rằng
                đã có người rất vui vì được
                ở bên cậu trong ngày đặc biệt này. ❤️
            </p>

            <div class="letter-sign">
                — nobody
            </div>

        </div>

    `;


    chatBox.appendChild(wrapper);

    chatBox.scrollTop =
        chatBox.scrollHeight;


    await wait(3000);


    addMessage(
        "Happy Birthday 🎂❤️",
        "them"
    );
}


// ========================================
// SAU VIDEO → PHẦN ƯỚC
// ========================================

async function birthdayWishFlow() {

    // tránh chạy 2 lần
    if (step !== 6) {
        return;
    }


    step = 7;


    await botMessage(
        "Xong rồi đó. 😌"
    );


    await botMessage(
        "Bây giờ đến phần quan trọng nhất."
    );


    await botMessage(
        "Nhắm mắt lại đi."
    );


    await botMessage(
        "Và ước một điều gì đó thật đẹp nhé. ✨"
    );


    await botMessage(
        "Ước xong chưa?"
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
            "Hôm nay của cậu thế nào?",
            "them"
        );


        await wait(2000);

        addMessage(
            "Có gì vui honggg?",
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
            "À mà...",
            "them"
        );


        await wait(2000);

        addMessage(
            "Hôm nay là ngày mấy nhỉ",
            "them"
        );


        await wait(2000);

        addMessage(
            "Dạo này mình bận quá, không để ý luôn.",
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


        const video =
            addVideo(
                "assets/video/birthday.mp4"
            );


        // thử tự phát
        video.play().catch(() => {});


        // ====================================
        // VIDEO KẾT THÚC
        // ====================================

        video.addEventListener(
            "ended",
            birthdayWishFlow
        );


        // fallback nếu video không kết thúc
        setTimeout(() => {

            if (step === 6) {

                birthdayWishFlow();

            }

        }, 15000);

        return;
    }



    // ====================================
    // STEP 7
    // SAU "ƯỚC XONG CHƯA?"
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
            "💨 Thổi nến đi!",
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