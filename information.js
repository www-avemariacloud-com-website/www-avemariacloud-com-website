document.addEventListener('DOMContentLoaded', (event) => {
    // Create the modal structure
    const modalHTML = `
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
                <button id="agreeBtn">I Agree</button>
                <button id="exitBtn">Exit</button>
            </div>
        </div>
    `;

    // Append the modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // CSS for the modal
    const modalCSS = `
        .modal {
            display: block; /* Visible upon loading */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        #agreeBtn, #exitBtn {
            margin: 10px;
            padding: 10px 20px;
            cursor: pointer;
        }

        #agreeBtn:hover, #exitBtn:hover {
            background-color: #ddd;
        }
    `;

    // Append the CSS to the head
    const style = document.createElement('style');
    style.innerHTML = modalCSS;
    document.head.appendChild(style);

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the "I Agree" button
    var agreeBtn = document.getElementById("agreeBtn");

    // Get the "Exit" button
    var exitBtn = document.getElementById("exitBtn");

    // When the user clicks on <span> (x), redirect to the specified URL
    span.onclick = function() {
        window.location.href = "https://www.vatican.va/content/vatican/en.html";
    }

    // When the user clicks "I Agree", close the modal
    agreeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks "Exit", redirect to the specified URL
    exitBtn.onclick = function() {
        window.location.href = "https://www.vatican.va/content/vatican/en.html";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
