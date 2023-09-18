document.getElementById('btn').addEventListener('click', function() {
    // step: 1;
    const textAreaValue = document.getElementById('textArea').value;
    // step: 2
    const userContainer = document.getElementById('user-container');
    // step: 3
    const p = document.createElement('p');
    p.innerText = textAreaValue;
    // step: 4
    userContainer.appendChild(p);
})