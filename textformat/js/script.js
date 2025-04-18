// Function to update the output text
function updateOutput() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");
    output.innerHTML = input;
    updateStats(input);
  }
  
  // Event listener for updating output when text is input
  document.getElementById("inputText").addEventListener("input", updateOutput);
  
  // Apply style functions for Bold, Italic, and Underline
  function applyStyle(style) {
    const output = document.getElementById("outputText");
    output.style.fontWeight = style === 'bold' ? 'bold' : '';
    output.style.fontStyle = style === 'italic' ? 'italic' : '';
    output.style.textDecoration = style === 'underline' ? 'underline' : '';
  }
  
  // Function to change font family
  function changeFont(font) {
    document.getElementById("outputText").style.fontFamily = font;
  }
  
  // Function to change text color
  function changeTextColor(color) {
    document.getElementById("outputText").style.color = color;
  }
  
  // Function to change background color
  function changeBgColor(color) {
    document.getElementById("outputText").style.background = color;
  }
  
  // Function to change font size
  function changeFontSize(size) {
    document.getElementById("outputText").style.fontSize = size + 'px';
  }
  
  // Remove all spaces from the text
  function removeSpaces() {
    const input = document.getElementById("inputText");
    input.value = input.value.replace(/\s+/g, '');
    updateOutput();
  }
  
  // Convert case functions for UPPERCASE, lowercase, and Title case
  function convertCase(type) {
    const input = document.getElementById("inputText");
    if (type === 'upper') input.value = input.value.toUpperCase();
    if (type === 'lower') input.value = input.value.toLowerCase();
    if (type === 'capitalize') {
      input.value = input.value
        .toLowerCase()
        .replace(/(^|\s)([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase());
    }
    updateOutput();
  }
  // Reverse the text
  function reverseText() {
    const input = document.getElementById("inputText");
    input.value = input.value.split('').reverse().join('');
    updateOutput();
  }
  
  // Remove duplicate words from the text
  function removeDuplicates() {
    const input = document.getElementById("inputText");
    let words = input.value.trim().split(/\s+/);  // Trim and split text by spaces
    let uniqueWords = [];
  
    // Loop through words and add to uniqueWords if it doesn't already exist
    for (let i = 0; i < words.length; i++) {
      if (!uniqueWords.includes(words[i])) {
        uniqueWords.push(words[i]);
      }
    }
  
    // Join the unique words back into a string and update the input field
    input.value = uniqueWords.join(' ');
    updateOutput();
  }
  
  // Sort Words - Manual Logic
  function sortWords() {
    const input = document.getElementById("inputText");
    let words = input.value.trim().split(/\s+/);  // Trim and split text by spaces
    
    // Sort the words alphabetically
    words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  
    // Join the sorted words back into a string and update the input field
    input.value = words.join(' ');
    updateOutput();
  }

  function updateOutput() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");
    output.innerHTML = input;
    updateStats(input);
  }


  // Clear input text
  function clearInput() {
    document.getElementById("inputText").value = '';
    updateOutput();
  }
  
  // Copy the output text to clipboard
  function copyOutput() {
    const output = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(output);
  }
  
  // Download the output text as a .txt file
  function downloadText() {
    const output = document.getElementById("outputText").innerText;
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "output.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
  }
  
  // Export the output text as an image
  function exportAsImage() {
    html2canvas(document.getElementById("outputText")).then(canvas => {
      const link = document.createElement("a");
      link.download = "output.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }
  
  // Update text statistics (word count, character count, etc.)
  function updateStats(text) {
    const words = text.trim().split(/\s+/).filter(w => w.length);
    const characters = text.length;
    const sentences = text.split(/[.!?]/).filter(s => s.trim().length);
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length);
    const readTime = (words.length / 200).toFixed(2);
  
    document.getElementById("textStats").innerHTML = `
      <strong>Words:</strong> ${words.length}<br>
      <strong>Characters:</strong> ${characters}<br>
      <strong>Sentences:</strong> ${sentences.length}<br>
      <strong>Paragraphs:</strong> ${paragraphs.length}<br>
      <strong>Estimated Reading Time:</strong> ${readTime} min
    `;
  }
  
  // Function to toggle between light and dark themes
  function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-mode");
  
    if (currentTheme) {
      // Switch to Light Theme
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");  // Save light theme in localStorage
    } else {
      // Switch to Dark Theme
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");   // Save dark theme in localStorage
    }
  }
  
  // Load saved theme on page load
  window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
  
  
