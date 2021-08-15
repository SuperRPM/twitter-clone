// password: 1234 === n_`SnYR:3MMXR_DT^RX8(EbE<%4AX#=4
let users = [
    {
        id: '1',
        username: 'espa-karina',
        password: '$2b$10$f7wVEiSRKADpmmb5vGez3OvnOrWfP.XTA2ceWGOVAixNto4I0aByi',
        name: 'karina',
        email: 'karina@gmail.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_BS1xILeuONueloN87f7gLKyvUMytHchkQ&usqp=CAU',

    }
]

export async function findAlreadyExist(usernmae) {
    return users.find((user) => user.user.name === username);
}

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}