export const url = 'https://6666fe29a2f8516ff7a5d37c.mockapi.io/api/v1/project52';



export const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            data.forEach((data) => {
                if(data.login === formJson.login && data.password === formJson.password){
                console.log('Access granted');
                }
            })
        });
}



export const registrate = (registrationData) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(registrationData)
    }).then((response) => console.log(response.status));
}

export function validateFirstName(firstName) {
    if (!firstName) {
            return 'Поле обязательно к заполнению';
    } else if (!/^([A-Za-z\-\']{3,15})|([А-Яа-я\-\']{3,15})$/i.test(firstName)) {
            return 'Неверный формат имени';
    }
}

export function validateLastName(lastName) {
    if (!lastName) {
            return 'Поле обязательно к заполнению';
    } else if (!/^([A-Za-z\-\']{2,15})|([А-Яа-я\-\']{2,15})$/i.test(lastName)) {
            return 'Неверный формат фамилии';
    }
}   

export function validatePassword(password) {
    if (!password) {
            return 'Поле обязательно к заполнению';
    } else if (!/^[A-Za-z]{6,}$/i.test(password)) {
            return 'Пароль должен содержать не менее 6 латинских символов';
    }
}

export async function validateLogin(login) {
    if (!login) {
            return 'Поле обязательно к заполнению';
    } else if (!/^[a-z0-9_-]{3,16}$/i.test(login)) {
            return 'Логин должен быть не менее 3 и не более 16 сиволов';
    } else {
            let response = await  fetch(url);
            let array = await response.json();
            let logins = await array.map((obj) => obj.login)
            if (logins.includes(login)){
                    return 'Такой логин уже существует'
            }
            
    }
}
// const deleteData = (id) => {
//     fetch(`${url}/${id}`, {
//         method: 'DELETE'
//     }).then((data) => console.log(data.status));
// }

// const updateBase = (id, form) => {
//     fetch(`${url}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(form)
//     })
// }

//     const test = {
//         login: 'test',
//         password: 'test'
//     }

// const getDate = () => {
//     fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//         data.forEach((data) => {
//             if(data.Login === test.login && data.Password === test.password){
//             console.log('Access granted');
//             }
//         })
//     });
// }

// getDate();
// createNewData();
// deleteData(1);