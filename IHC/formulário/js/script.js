document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const inputAuthor = document.getElementById("input-author");
    const inputTitle = document.getElementById("input-title");
    const inputIsbn = document.getElementById("input-isbn");
    const btnClear = document.getElementById("btn-clear");
    const errorMessage = document.getElementById("error-message");
    const resultsContainer = document.getElementById("results-container");
    const loadingSpinner = document.getElementById("loading-spinner");
    const resultContent = document.getElementById("result-content");

    btnClear.addEventListener("click", () => {
        inputAuthor.value = "";
        inputTitle.value = "";
        inputIsbn.value = "";
        errorMessage.classList.add("hidden");
        resultsContainer.classList.add("hidden");
        inputAuthor.focus();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const authorInput = inputAuthor.value.trim().toLowerCase();
        const titleInput = inputTitle.value.trim().toLowerCase();
        const isbnInput = inputIsbn.value.trim();

        // validação para campos vazios
        if (!authorInput && !titleInput && !isbnInput) {
            errorMessage.textContent = "Por favor, preencha pelo menos um campo para efetuar a pesquisa.";
            errorMessage.classList.remove("hidden");
            resultsContainer.classList.add("hidden");
            inputAuthor.focus();
            return;
        }

        // validação do ISBN 
        if (isbnInput && /^0+$/.test(isbnInput)) {
            errorMessage.textContent = "O ISBN informado é inválido (sequência de zeros não é permitida).";
            errorMessage.classList.remove("hidden");
            resultsContainer.classList.add("hidden");
            inputIsbn.focus();
            return;
        }

        errorMessage.classList.add("hidden");
        resultsContainer.classList.remove("hidden");
        loadingSpinner.classList.remove("hidden");
        resultContent.innerHTML = "";

        setTimeout(() => {
            loadingSpinner.classList.add("hidden");
            
            const baseDeDados = [
                {
                    titulo: "O Caminho dos Reis",
                    autor: "Brandon Sanderson",
                    isbn: "978-85-4410-388-4"
                },
                {
                    titulo: "Mistborn: O Império Final",
                    autor: "Brandon Sanderson",
                    isbn: "978-85-7657-310-4"
                },
                {
                    titulo: "Mistborn: O Poço da Ascensão",
                    autor: "Brandon Sanderson",
                    isbn: "978-85-7657-347-0"
                },
                {
                    titulo: "Mistborn: O Herói das Eras",
                    autor: "Brandon Sanderson",
                    isbn: "978-85-7657-386-9"
                },
                {
                    titulo: "Ritmo da Guerra",
                    autor: "Brandon Sanderson",
                    isbn: "978-85-4411-042-4"
                },
                {
                    titulo: "Dom Casmurro",
                    autor: "Machado de Assis",
                    isbn: "978-85-359"
                },
                {
                    titulo: "Memórias Póstumas de Brás Cubas",
                    autor: "Machado de Assis",
                    isbn: "978-85-010-9989-1"
                },
                {
                    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
                    autor: "J. R. R. Tolkien",
                    isbn: "978-85-3361-337-9"
                },
                {
                    titulo: "1984",
                    autor: "George Orwell",
                    isbn: "978-85-3591-484-9"
                },
                {
                    titulo: "O Pequeno Príncipe",
                    autor: "Antoine de Saint-Exupéry",
                    isbn: "978-85-950-8153-6"
                }
            ];

            const livrosEncontrados = baseDeDados.filter(livro => {
                const matchAuthor = authorInput === "" || livro.autor.toLowerCase().includes(authorInput);
                const matchTitle = titleInput === "" || livro.titulo.toLowerCase().includes(titleInput);
                const matchIsbn = isbnInput === "" || livro.isbn === isbnInput;

                return matchAuthor && matchTitle && matchIsbn;
            });

            if (livrosEncontrados.length > 0) {
                let listaHtml = `<div style="color: #16a34a; font-weight: 600; margin-bottom: 8px;">🎉 ${livrosEncontrados.length} obra(s) encontrada(s):</div>`;
                listaHtml += `<ul style="list-style-type: none; padding: 0; text-align: left; display: flex; flex-direction: column; gap: 8px;">`;
                
                livrosEncontrados.forEach(livro => {
                    listaHtml += `
                        <li style="background: #f8fafc; padding: 10px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 14px;">
                            <strong>${livro.titulo}</strong><br>
                            <span style="color: #64748b;">Autor: ${livro.autor} | ISBN: ${livro.isbn}</span>
                        </li>
                    `;
                });
                listaHtml += `</ul>`;

                resultContent.innerHTML = listaHtml;
            } else {
                resultContent.innerHTML = `
                    <div style="color: #dc2626; font-weight: 600; margin-bottom: 6px;">⚠️ Nenhum resultado encontrado</div>
                    <p style="font-size: 14px; color: var(--color-muted);">Nenhum livro corresponde à combinação informada na base de dados.</p>
                `;
            }
        }, 800);
    });

    [inputAuthor, inputTitle, inputIsbn].forEach(input => {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                form.requestSubmit();
            }
        });
    });
});