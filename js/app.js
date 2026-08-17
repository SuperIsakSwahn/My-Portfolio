function toggleSize() {
    let img = document.getElementById("swish_img");
    if (img.style.width === "100%") {
        img.style.width = "10%";
    } else {
        img.style.width = "100%";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle download button click via a background link element
    function handleDownloadButtonClick(fileUrl) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Get the download buttons
    const manhuntButton = document.getElementById('downloadManhunt');
    const piglinButton = document.getElementById('downloadPiglinTrades');
    const cakeButton = document.getElementById('downloadCakeRecept');

    // Add event listeners with your Dropbox direct-download links
    manhuntButton.addEventListener('click', function() {
        handleDownloadButtonClick('https://www.dropbox.com/scl/fi/blnjhxyzk1c6q0b8onhuz/ManhuntImproved-2.0.jar?rlkey=8x9l5vnx37e2zjkqlhxnbu1ox&e=1&dl=1');
    });

    piglinButton.addEventListener('click', function() {
        handleDownloadButtonClick('https://www.dropbox.com/scl/fi/kfjj4hehn245jvzhlya3h/PiglinPearlDrops-1.0-SNAPSHOT.jar?rlkey=yardol3v82qwsy6cnlm5oz6up&dl=1');
    });

    cakeButton.addEventListener("click", function () {
        handleDownloadButtonClick('https://www.dropbox.com/scl/fi/4cid4aiw4ctui9n2klpl6/Milkfree-chocolate-cake-prescription.txt?rlkey=tw5in7y92sitoflfnasdgp9c8&dl=1');
    });

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        updateButtonColor();
    }

    function updateButtonColor() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const buttons = document.querySelectorAll('button');
        const anchors = document.querySelectorAll('a');
        anchors.forEach(a => {
            a.style.color = isDarkMode ? "#fff" : "black";
        });
        buttons.forEach(button => {
            button.style.color = isDarkMode ? '#fff' : '';
        });
    }

    const darkModeButton = document.getElementById('darkMode');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', function () {
            toggleDarkMode();
        });
    }

    updateButtonColor();
});
