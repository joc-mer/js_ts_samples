const ids = users.map(u.name).filter(u => u.name.lenght)
for (user in users) {
    if (user.id) users.push(user);
}