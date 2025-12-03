// Theme toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

  async function loadQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    document.getElementById("quote-text").textContent = data.content;
  } catch (error) {
    document.getElementById("quote-text").textContent = "Error generating quote.";
  }
}

document.getElementById("quote-btn").addEventListener("click", loadQuote);

// Load a quote when the page opens
loadQuote();
})();
