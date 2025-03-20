function App() {
  return (
    <div>
      <div className="container mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold py-5">Employee Form</h1>
        <table className="border border-black">
          <tr>
            <td>Name</td>
            <td>
              <input type="text" name="name" placeholder="Enter your name" />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" name="email" placeholder="Enter Email" />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" name="password" placeholder="Enter password" />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input type="radio" /> Male
              <input type="radio" className="ms-2" /> Female
            </td>
          </tr>
          <tr>
            <td>Hobby</td>
            <td>
              <input type="checkbox" /> Coding
              <input type="checkbox" className="ms-2" /> Badminton
              <input type="checkbox" className="ms-2" /> Cricket
            </td>
          </tr>
        </table>

        <h2 className="text-2xl font-medium">Data</h2>
        <table>
          <tr className="gap-3 flex">
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobby</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
