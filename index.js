let place = 10
let busy = 7

let name = prompt('Как вас зовут?').toLowerCase().trim()
if(name[0] === 'a') {
    let age = +prompt('Сколько вам лет?').trim()
        if(age >=20 && age <=40){
            let money = +prompt('Сколько у вас денег?').trim()
                if(money >=100) {
                    let people = +prompt('Сколько вас человек?').trim()
                        if(people <= (place-busy)) {
                            alert('Добро пожаловать')
                        } else if(isNaN(people)) {
                            alert('Пожалуйста, введите цифрами!')
                        }
                        else{
                            alert('Извините, мест нет')
                        }
                } else if(isNaN(money)){
                    alert('Пожалуйста, введите сумму цифрами!')
                }
                 else{
                    alert('У вас недостаточно средств')
                }
        } else if(isNaN(age)){
            alert('Пожалуйста, введите свой возваст цифрами!')
        }
        else{
            alert('Ваш возраст не соответствует категории!')
        }
} else{
    alert('Вашего имени нет в списке!')
}