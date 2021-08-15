// password: n_`SnYR:3MMXR_DT^RX8(EbE<%4AX#=4
let users = [
    {
        id: '1',
        username: 'espa-karina',
        password: 'n_`SnYR:3MMXR_DT^RX8(EbE<%4AX#=4',
        name: 'karina',
        email: 'karina@gmail.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_BS1xILeuONueloN87f7gLKyvUMytHchkQ&usqp=CAU';

    }
]

export async function findAlreadyExist(usernmae) {
    return users.find((user) => user.user.name === username);
}
