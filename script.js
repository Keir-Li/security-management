// Typing animation function
function typeWriter(textElement, text, delay) {
    const textArray = text.split('');
    let index = 0;

    function typing() {
        if (index < textArray.length) {
            textElement.innerHTML += textArray[index];
            index++;
            setTimeout(typing, delay);
        }
    }

    typing();
}

// Typing animation for introduction text
function startTextAnimation() {
    const typingLines = document.querySelectorAll('.typing-line');
    typingLines.forEach((line, index) => {
        const text = line.innerHTML;
        setTimeout(() => {
            typeWriter(line, text, 50); // Adjust delay between characters as needed
        }, index * 3000); // Delay before typing each line
    });
}

// Start the animation
startTextAnimation();



function openModal(details) {
    const fullDetailsContent = document.querySelector("#fullDetailsModal .modal-content");
    // Populate the modal with details
    fullDetailsContent.innerHTML = details;
    // Display the modal
    document.getElementById("fullDetailsModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("fullDetailsModal").style.display = "none";
}

// Open the modal when the "Learn more about me here" text is clicked
document.querySelector(".learn-more").addEventListener("click", function() {
    const details = `
        <h2>More about K</h2>
        <ul>
            <li>I'm a results-driven Security leader with a proven track record of success in multinational cybersecurity trust organisations.</li>
            <li>✅ Proven track record of elevating performance excellence</li>
            <li>✅ Delivering exceptional results</li>
            <li>✅ Fostering positive relationships</li>
            <li>✅ Adept in implementing cutting-edge solutions</li>
            <li>✅ Contributing to digital resiliency</li>
            <li>✅ Driving operational excellence in Security management</li>
        </ul>
    `;
    openModal(details);
});

// Close the modal when the user clicks on the close button
document.querySelector(".close").addEventListener("click", closeModal);

// Close the modal when the user clicks outside the modal
window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("fullDetailsModal")) {
        closeModal();
    }
});





function showContent(sectionId) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(sectionId + '-btn').classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(sectionId + '-content').classList.add('active');

    // Hide the animated text and finger when a button is clicked
    document.querySelector('.animated-text').classList.add('text-hidden');
    document.querySelector('.finger').classList.add('finger-hidden');
    document.querySelector('.intro-text').classList.add('text-hidden');
    document.querySelector('.intro-header').classList.add('text-hidden');   
    document.querySelector('.intro-subheader').classList.add('text-hidden');   

    // If the 'My Intro' button is clicked, reset the page to its initial state
    if (sectionId === 'intro') {
        document.querySelector('.animated-text').classList.remove('text-hidden');
        document.querySelector('.finger').classList.remove('finger-hidden');
        document.querySelector('.intro-text').classList.remove('text-hidden');
        document.querySelector('.intro-header').classList.remove('text-hidden');   
        document.querySelector('.intro-subheader').classList.remove('text-hidden');   
    }
}

// Get the modal and the close button
const modal = document.getElementById("fullDetailsModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Function to open modal with full details
function openModal(details) {
    const fullDetailsContent = document.getElementById("fullDetailsContent");
    // Populate the modal with full details
    fullDetailsContent.innerHTML = details;
    modal.style.display = "block";
}

// Add event listeners to each minimized card for hover
const minimizedCards = document.querySelectorAll(".minimized-card");
minimizedCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        // Simulate getting full details data (replace with your data)
        const fullDetails = `
            <h2>Security Engineer</h2>
            <h4>Fortune 500 Global Engineering Provider</h4>
            <ul>
                <li>Led and managed the application security program, utilizing tools such as Snyk (SAST), Rapid7 (DAST), and Contrast-Assess (IAST) to ensure comprehensive coverage.</li>
                <li>Provided guidance and mentorship to the application security team, fostering their growth and supporting their day-to-day activities and project work.</li>
                <!-- Add other details -->
            </ul>
        `;
        openModal(fullDetails);
    });
});

// Close the modal when the user moves the mouse out of the card
minimizedCards.forEach((card, index) => {
    card.addEventListener("mouseleave", () => {
        modal.style.display = "none";
    });
});

// Close the modal when the user clicks on the close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
