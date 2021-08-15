// password: 1234 === $2b$10$RnllIVU51e3obDAIny7QhuTNpVNM6o0f5Sj4jjTjtmPCw27Df.Tfq
let users = [
    {
        id: '1',
        username: 'espa-karina',
        password: '$2b$10$RnllIVU51e3obDAIny7QhuTNpVNM6o0f5Sj4jjTjtmPCw27Df.Tfq',
        name: 'karina',
        email: 'karina@gmail.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_BS1xILeuONueloN87f7gLKyvUMytHchkQ&usqp=CAU'
    },
]

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}

export async function findById(id) {
    return users.find((user) => user.id === id);
}

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}