function showClue(item) {
    document.getElementById(item + "-popup").style.display = "block";
}

function closePopup(item) {
    document.getElementById(item + "-popup").style.display = "none";
}

function openPopup(id) {
    document.getElementById(`${id}-overlay`).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(`${id}-overlay`).style.display = 'none';
}

function checkDoor() {
    openPopup('door');
}

function openPhoneBook() {
    document.getElementById("confirmation-overlay").style.display = "flex";
}

function confirmOpenPhoneBook() {
    document.getElementById("confirmation-overlay").style.display = "none";
    document.getElementById("phone-book-overlay").style.display = "flex";
}

function closeConfirmation() {
    document.getElementById("confirmation-overlay").style.display = "none";
}

function closePhoneBook() {
    document.getElementById("phone-book-overlay").style.display = "none";
}


function openTelephone() {
    document.getElementById("telephone-overlay").style.display = "flex";
}

function closeTelephone() {
    document.getElementById("telephone-overlay").style.display = "none";
}

function enlargePhoto(element) {
    const photoSrc = element.getAttribute("data-photo");
    const img = document.getElementById("enlarged-photo");
    img.src = photoSrc;
    document.getElementById("photo-overlay").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photo-overlay").style.display = "none";
    document.getElementById("enlarged-photo").src = ""; 
}

function openComputerScreen() {
    document.getElementById('computer-screen-overlay').style.display = 'flex';
}

function checkComputerPassword() {
    const password = document.getElementById('computerPassword').value.trim().toLowerCase();
    const desktop = document.getElementById('computerDesktop');
    const clue = document.getElementById('computerClue'); // Optional: if still in HTML
    const loginSection = document.getElementById('login-section');

    if (password === '0705') {
        desktop.style.display = 'block';
        loginSection.style.display = 'none';  // Hide login
        clue && (clue.style.display = 'none'); // hide the old clue if still present
    } else {
        alert('Access Denied. Try again.');
        desktop.style.display = 'none';
    }
}

let isDragging = false, offsetX = 0, offsetY = 0;
let currentDragWindow = null;

// Make all title bars draggable
document.querySelectorAll('.app-window .title-bar').forEach(titleBar => {
    const appWindow = titleBar.closest('.app-window');

    titleBar.addEventListener('mousedown', function (e) {
        isDragging = true;
        currentDragWindow = appWindow;
        offsetX = e.clientX - appWindow.offsetLeft;
        offsetY = e.clientY - appWindow.offsetTop;
        appWindow.style.zIndex = 1000; // Bring to front
    });
});

// Stop dragging
document.addEventListener("mouseup", () => {
    isDragging = false;
    currentDragWindow = null;
});

// Move window
document.addEventListener("mousemove", (e) => {
    if (isDragging && currentDragWindow) {
        currentDragWindow.style.left = `${e.clientX - offsetX}px`;
        currentDragWindow.style.top = `${e.clientY - offsetY}px`;
    }
});

// Open specific app by ID (like 'notepad', 'email', 'browser')
function openApp(appName) {
    // Hide all app windows first
    document.querySelectorAll('.app-window').forEach(win => {
        win.style.display = 'none';
    });

    const appWindow = document.getElementById(`${appName}-window`);
    if (appWindow) {
        appWindow.style.display = 'block';
        appWindow.style.zIndex = 1000;
        // Optional: center it
        appWindow.style.left = '150px';
        appWindow.style.top = '100px';
    }
}

function closeApp() {
    document.querySelectorAll('.app-window').forEach(win => {
        win.style.display = 'none';
    });
}


function checkCode() {
    const input = document.getElementById("codeInput").value.trim();
    const msg = document.getElementById("codeMessage");

    if (input === "421") {
        msg.textContent = "🎉 Door unlocked! You escaped!";
        msg.style.color = "lime";
    } else {
        msg.textContent = "❌ Incorrect code.";
        msg.style.color = "red";
    }
}

let hasKey = false;

function checkSafeCode() {
    const enteredCode = document.getElementById('safePasscode').value.trim();
    const message = document.getElementById('safe-message');
    const key = document.getElementById('key');

    if (enteredCode === '1666') {
        message.style.color = 'green';
        message.textContent = '✅ Correct passcode! The safe unlocks.';
        key.style.display = 'block';
        hasKey = true;
    } else {
        message.style.color = 'red';
        message.textContent = '❌ Incorrect passcode. Try again!';
    }
}


// Drawer interaction
function openDrawer() {
    const drawerContent = document.getElementById('drawer-content');

    if (hasKey) {
        drawerContent.innerHTML = `
      <p>🗄️ You use the key to open the drawer. Something is inside!</p>
      <p>You find a torn note... it reads: </p>
      <p>"Password: <strong> 0705"</p>
      <button onclick="closeDrawer()">Close</button>
    `;
    } else {
        drawerContent.innerHTML = `
      <p>🗄️ The drawer is locked. Maybe you need a key...</p>
      <button onclick="closeDrawer()">Close</button>
    `;
    }

    document.getElementById('drawer-overlay').style.display = 'flex';
}

function closeDrawer() {
    document.getElementById('drawer-overlay').style.display = 'none';
}




