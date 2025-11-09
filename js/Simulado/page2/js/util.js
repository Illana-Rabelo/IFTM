/**
 * @param {*} text 
 * @param {*} index 
 * @param {*} last 
 * @returns 
 */
export function getWordAt(text, index, last){
    if (!text) return ""; 
    let words = text.split(' ');
    
    if(last) {
        // garante que há pelo menos uma palavra
        return words[words.length - 1] || "";
    }
    
    // senão, retorna a palavra no índice especificado (ex: 0 para a primeira)
    if (index >= 0 && index < words.length) {
        return words[index];
    }
    
    return ""; // retorna string vazia se o índice for inválido
}

/**
 * @param {*} text 
 * @param {*} character 
 * @returns 
 */
export function getWordsStartsWith(text, character){
    if (!text) return ""; // retorna vazio se o texto for nulo
    
    // divide o texto e armazena em um novo array
    const filteredWords = text.split(' ').filter(word => {
        // verifica se a palavra começa com o caractere 
        return word.startsWith(character.toUpperCase()) || word.startsWith(character.toLowerCase());
    });

    return filteredWords.join(' ');
}

/**
 * conta as palavras em uma frase.
 * @param {*} text 
 * @returns 
 */
export function countWords(text){
    if (!text || text.trim() === "") return 0;
    return text.trim().split(/\s+/).length;
}