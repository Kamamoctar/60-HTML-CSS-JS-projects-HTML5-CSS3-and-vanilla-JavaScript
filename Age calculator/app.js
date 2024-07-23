const buttuonEl = document.getElementById('btn')
const birthdayEl = document.getElementById('birthday')
const resultEl = document.getElementById('result')


// Les fonctions
/**
 * Calculates the age based on the given birthday value.
 *
 * @param {string} birthdayValue - The birthday value in the format 'YYYY-MM-DD'.
 * @return {number|undefined} The calculated age or undefined if the birthday value is empty.
 */
function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ''){
        alert('Please enter a date of birth')
    }else{
        const age = getAge(birthdayValue)
        resultEl.innerText = `Your age is ${age} years old`
    }
}
/**
 * Calculates the age based on the given birthday value.
 *
 * @param {string} birthdayValue - The birthday value in the format 'YYYY-MM-DD'.
 * @return {number} The calculated age.
 */
function getAge(birthdayValue){
    const currentDate = new Date()
    const birthDate = new Date(birthdayValue)

    let age = currentDate.getFullYear() - birthDate.getFullYear()
    
// Calcules the month difference from current date in time
    const monthDiff = currentDate.getMonth() - birthDate.getMonth()
    if(monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())){
        age--
    }
   return age
}

buttuonEl.addEventListener('click', calculateAge)