const url = 'https://6666fe29a2f8516ff7a5d37c.mockapi.io/api/v1/project52';



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
                if(data.Login === formJson.login && data.Password === formJson.password){
                console.log('Access granted');
                }
            })
        });;
}
// const createNewData = () => {
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({
//             Name: 'test',
//             SecondName: 'SecondTest',
//             Login: 'test',
//             Password: 'test'
//         })
//     }).then((response) => console.log(response.status));
// }

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