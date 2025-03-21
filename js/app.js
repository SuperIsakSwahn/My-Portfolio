function toggleSize() {
    let img = document.getElementById("swish_img");
    if (img.style.width === "100%") {
        img.style.width = "10%";
    } else {
        img.style.width = "100%";
    }
}document.addEventListener('DOMContentLoaded', function() {
    // Function to handle download button click
    function handleDownloadButtonClick(filePath, fileName) {
        // Create a link element
        const link = document.createElement('a');
        link.href = filePath; // Path to the file
        link.download = fileName; // Name of the file to be downloaded
        document.body.appendChild(link);
        link.click(); // Trigger the click event
        document.body.removeChild(link); // Clean up
    }

    // Get the download buttons
    const manhuntButton = document.getElementById('downloadManhunt');
    const piglinButton = document.getElementById('downloadPiglinTrades');
    const cakeButton = document.getElementById('downloadCakeRecept');



    // Add event listeners to the buttons
    manhuntButton.addEventListener('click', function() {
        handleDownloadButtonClick('/downloads/ManhuntImproved.jar', 'ManhuntImproved.jar');
    });

    piglinButton.addEventListener('click', function() {
        handleDownloadButtonClick('/downloads/PiglinPearlDrops.jar', 'PiglinPearlDrops.jar');
    });
    cakeButton.addEventListener("click", function () {
        handleDownloadButtonClick('/downloads/Milkfree chocolate cake prescription.txt', 'Milkfree chocolate cake prescription.txt');
    });

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        updateButtonColor();
    }

    function updateButtonColor() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const buttons = document.querySelectorAll('button');
        const anchors = document.querySelectorAll('a')
        anchors.forEach(a => {
            a.style.color = isDarkMode ? "#fff" : "black";
        })
        buttons.forEach(button => {
            button.style.color = isDarkMode ? '#fff' : '';
        })
    }
    const darkModeButton = document.getElementById('darkMode')

    darkModeButton.addEventListener('click',function () {
        toggleDarkMode();
    })
    updateButtonColor();
    toggleDarkMode();
});
