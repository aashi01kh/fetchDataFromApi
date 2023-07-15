import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Fetch.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h4>User List</h4>
      <br></br>
      <div id="cover">
  <form method="get" action="">
    <div class="tb">
      <div class="td">

      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    
      </div>
      <div class="td" id="s-cover">
        <button type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>

      <div className="user-list">
        {filteredUsers.map((user) => (

          <div key={user.id} className="user-card">
            <div className="id-circle">{user.id}</div>
            <div className='imgBox'>
            <img src={user.avatar} alt={user.first_name} />
            </div>
            <div className='content'>
            <p>First Name: {user.first_name}</p></div>
          </div>
  
        ))}
      </div>
    </div>
  );
}

export default App;


// <div class = container>
// <div class = card>
//   <div class = image>
//     <img href = "#" src =               https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg>
//   </div>
//   <div class = content>
//     <h3>This is content</h3>
//     <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
//   </div>
// </div>    
// </div>