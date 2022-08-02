function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
        if (value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Andre', 'Admin');
usuarios.set('Junior', 'Admin');
usuarios.set('Natália', 'User');
usuarios.set('Jorge', 'Admin');

console.log(getAdmins(usuarios));
