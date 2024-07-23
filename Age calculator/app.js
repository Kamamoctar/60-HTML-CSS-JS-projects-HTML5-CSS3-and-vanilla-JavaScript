const buttuonEl = document.getElementById('btn')
const birthdayEl = document.getElementById('birthday')


// Les fonctions
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
    
    const month = currentDate.getMonth() - birthDate.getMonth()
    if(month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age--
    }
   return age
   console.log(age)
}

buttuonEl.addEventListener('click', ()=>{
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ''){
        alert('Please enter a date of birth')
    }else{
        const age = getAge(birthdayValue)
    }
})