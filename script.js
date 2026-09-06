function copyEmail() {
  const email = 'hello@benbot.co';
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(showToast).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function fallbackCopy() {
  const email = 'hello@benbot.co';
  const textArea = document.createElement('textarea');
  textArea.value = email;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast();
  } catch (err) {
    console.error('Copy fallback failed', err);
  }
  document.body.removeChild(textArea);
}

function showToast() {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.className = 'show';
    setTimeout(function () {
      toast.className = toast.className.replace('show', '');
    }, 3000);
  }
}
