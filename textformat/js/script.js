function updateOutput() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");
    output.innerHTML = input;
    updateStats(input);
  }
  
  document.getElementById("inputText").addEventListener("input", updateOutput);
  
  function applyStyle(style) {
    const output = document.getElementById("outputText");
    output.style.fontWeight = style === 'bold' ? 'bold' : '';
    output.style.fontStyle = style === 'italic' ? 'italic' : '';
    output.style.textDecoration = style === 'underline' ? 'underline' : '';
  }
  
  function changeFont(font) {
    document.getElementById("outputText").style.fontFamily = font;
  }
  
  function changeTextColor(color) {
    document.getElementById("outputText").style.color = color;
  }
  
  function changeBgColor(color) {
    document.getElementById("outputText").style.background = color;
  }
  
  function changeFontSize(size) {
    document.getElementById("outputText").style.fontSize = size + 'px';
  }
  
  function removeSpaces() {
    const input = document.getElementById("inputText");
    input.value = input.value.replace(/\s+/g, '');
    updateOutput();
  }
  
  function convertCase(type) {
    const input = document.getElementById("inputText");
    if (type === 'upper') input.value = input.value.toUpperCase();
    if (type === 'lower') input.value = input.value.toLowerCase();
    if (type === 'capitalize') {
      input.value = input.value.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    }
    updateOutput();
  }
  
  function reverseText() {
    const input = document.getElementById("inputText");
    input.value = input.value.split('').reverse().join('');
    updateOutput();
  }
  
  function removeDuplicates() {
    const input = document.getElementById("inputText");
    const words = [...new Set(input.value.split(/\s+/))];
    input.value = words.join(' ');
    updateOutput();
  }
  
  function sortWords() {
    const input = document.getElementById("inputText");
    const words = input.value.split(/\s+/).sort();
    input.value = words.join(' ');
    updateOutput();
  }
  
  function clearInput() {
    document.getElementById("inputText").value = '';
    updateOutput();
  }
  
  function copyOutput() {
    const output = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(output);
  }
  
  function downloadText() {
    const output = document.getElementById("outputText").innerText;
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "output.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
  }
  
  function exportAsImage() {
    html2canvas(document.getElementById("outputText")).then(canvas => {
      const link = document.createElement("a");
      link.download = "output.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }
  
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
  
  document.getElementById("fileInput").addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function() {
      document.getElementById("inputText").value = reader.result;
      updateOutput();
    };
    reader.readAsText(this.files[0]);
  });
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  