const searchInput = document.getElementById('search-input');
        const medicamentos = document.querySelectorAll('.medicamento');

        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();

            medicamentos.forEach(medicamento => {
                const nombre = medicamento.getAttribute('data-nombre').toLowerCase();

                if (nombre.includes(searchTerm)) {
                    medicamento.style.display = 'block';
                } else {
                    medicamento.style.display = 'none';
                }
            });
        });
