const messageInput = document.querySelector('#message-input');
const messageStatus = document.querySelector('#message-feedback')

const MAX_CHARS = 50;

// Write your code here
valid = document.getElementsByClassName('valid-feedback');

messageInput.addEventListener('input', function() {
    var len = messageInput.value.length;
    total = Math.abs(MAX_CHARS - len)
    if (len <= MAX_CHARS) {
        messageStatus.innerHTML = total + " characters left."
        messageStatus = valid;
    } else {
        messageStatus.innerHTML = total + " characters too long."
    }
});

/* Trying to figure out invalid class.  */