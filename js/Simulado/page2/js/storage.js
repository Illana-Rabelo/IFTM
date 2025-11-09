
/**
 * salva no storage
 * @param {*} key 
 * @param {*} value 
 */
export function saveStorage(key, value){
    localStorage.setItem(key, value);
}

/**
 * recupera um item do storage
 * @param {*} key 
 * @returns 
 */
export function getStorage(key){
    return localStorage.getItem(key);
}