function checkAnswer(answer) {
    if(answer === 'Iya') {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    } else {
        alert('Jawaban salah, silakan coba lagi!');
    }
}

function showSurprise() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('surprise').style.display = 'block';
}
