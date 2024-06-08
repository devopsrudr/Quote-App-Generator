// Define the API endpoint
const api = 'https://api.quotable.io/random'; // Example API endpoint

// Function to fetch quote and update HTML elements
function getQuote() {
  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const quoteElement = document.getElementById('quote');
      const authorElement = document.getElementById('author');

      quoteElement.textContent = data.content;
      authorElement.textContent = `— ${data.author}`;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Add event listener to the fetch quote button
document.getElementById('btn').addEventListener('click', getQuote);

// Function to toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }
}

// Add event listener to the theme toggle button
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);

// Function to copy the quote to clipboard
function copyQuote() {
  const quoteText = document.getElementById('quote').textContent;
  const authorText = document.getElementById('author').textContent;
  const textToCopy = `${quoteText} ${authorText}`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Quote copied to clipboard!');
  }, err => {
    console.error('Could not copy text: ', err);
  });
}

// Add event listener to the copy quote button
document.getElementById('copyQuoteButton').addEventListener('click', copyQuote);

// Function to share the quote on Twitter
function shareOnTwitter() {
  const quoteText = document.getElementById('quote').textContent;
  const authorText = document.getElementById('author').textContent;
  const tweetText = `${quoteText} ${authorText}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  window.open(tweetUrl, '_blank');
}

// Add event listener to the share on Twitter button
document.getElementById('shareTwitterButton').addEventListener('click', shareOnTwitter);

// Initial call to get a quote
getQuote();


