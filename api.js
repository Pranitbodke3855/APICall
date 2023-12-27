document.addEventListener('DOMContentLoaded', () => {
    const getUsersButton = document.getElementById('getUsersBtn');
    const userGrid = document.getElementById('userGrid');
    const loader = document.getElementById('loader');
  
    getUsersButton.addEventListener('click', async () => {
      try {
        loader.style.display = 'block'; 
  
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
  
        loader.style.display = 'none'; 
  
        if (data && data.data) {
          const users = data.data;
          userGrid.innerHTML = ''; 
          users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
              <img src="${user.avatar}" alt="${user.first_name}">
              <h3>${user.first_name} ${user.last_name}</h3>
              <p>Email: ${user.email}</p>
            `;
            userGrid.appendChild(userCard);
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        loader.style.display = 'none';
      }
    });
  });
  