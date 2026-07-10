 const loadButton= document.getElementById('load-btn');
loadButton.addEventListener('click',async function() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
    });
}catch (error){
    console.error(error);
    userList.innerHTML = "Oh something, went wrong.Please check your internet connection!";
}
});


