function submitComment() {
  const textarea = document.getElementById('from');
  const feedback = document.getElementById('feedback');

  if (textarea.value.trim() === '') {
    feedback.style.display = 'block';
  } else {
    // Process the comment (e.g., send it to the server)
    // ...
    // Clear the textarea and hide the feedback message
    textarea.value = '';
    feedback.style.display = 'none';
  }
}