document.addEventListener('DOMContentLoaded', () => {
    const simButton = document.getElementById('sim');
    const naoButton = document.getElementById('nao');
    const salvarButton = document.querySelector('.salvar');
    const msgPositiva = document.querySelector('.msg_positiva');
    const msgNegativa = document.querySelector('.msg_negativa');


    const savedMessage = localStorage.getItem('message');
    if (savedMessage === 'positiva') {
        msgPositiva.style.display = 'block';
        msgNegativa.style.display = 'none';
        simButton.checked = true;  
    } else if (savedMessage === 'negativa') {
        msgNegativa.style.display = 'block';
        msgPositiva.style.display = 'none';
        naoButton.checked = true;  
    }

    
    salvarButton.addEventListener('click', () => {
        if (simButton.checked) {
            
            localStorage.setItem('message', 'positiva');
            msgPositiva.style.display = 'block';
            msgNegativa.style.display = 'none';
        } else if (naoButton.checked) {
            localStorage.setItem('message', 'negativa');
            msgNegativa.style.display = 'block';
            msgPositiva.style.display = 'none';
        }
    });
});
