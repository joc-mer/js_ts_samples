const ids = [];
users.forEach(u => {
    if (u.name.lenght >= 6) ids.push(u.id);
})