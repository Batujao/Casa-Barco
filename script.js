function mostrarCalendario(botao) {
    const calendario = botao.nextElementSibling;
    calendario.style.display = 'block';

    // Se escolher uma data
    calendario.addEventListener('change', function () {
        calendario.style.display = 'none';

        let spanData = calendario.nextElementSibling;

        if (!spanData || !spanData.classList.contains('data-escolhida')) {
            spanData = document.createElement('span');
            spanData.classList.add('data-escolhida');
            calendario.parentNode.appendChild(spanData);
        }

        const dataOriginal = new Date(calendario.value);
        const dataFormatada = dataOriginal.toLocaleDateString('pt-BR');
        spanData.textContent = `Data escolhida: ${dataFormatada}`;
    }, { once: true });

    // Se clicar fora e não escolher nada
    calendario.addEventListener('blur', function () {
        // Só esconde se nenhuma data foi escolhida
        if (!calendario.value) {
            calendario.style.display = 'none';
        }
    }, { once: true });
}
