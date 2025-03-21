import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
  });
  const [submitData, setSubmitData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        hobbies: checked ? [...prevData.hobbies, value] : prevData.hobbies.filter((h) => h !== value),
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData([...submitData, data]);
    setData({ name: "", email: "", password: "", gender: "", hobbies: [] });
  };

  return (
    <div className="container mx-auto text-center flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold py-5">Employee Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-md">
        <table className="border border-black">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" name="name" placeholder="Enter your name" value={data.name} onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="email" name="email" placeholder="Enter Email" value={data.email} onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="password" placeholder="Enter password" value={data.password} onChange={handleChange} required />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input type="radio" name="gender" value="Male" checked={data.gender === "Male"} onChange={handleChange} /> Male
                <input type="radio" name="gender" value="Female" checked={data.gender === "Female"} onChange={handleChange} className="ms-2" /> Female
              </td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td>
                <input type="checkbox" name="hobbies" value="Coding" checked={data.hobbies.includes("Coding")} onChange={handleChange} /> Coding
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Badminton"
                  checked={data.hobbies.includes("Badminton")}
                  onChange={handleChange}
                  className="ms-2"
                />{" "}
                Badminton
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Cricket"
                  checked={data.hobbies.includes("Cricket")}
                  onChange={handleChange}
                  className="ms-2"
                />{" "}
                Cricket
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>

      {/* Display Submitted Data */}
      {submitData.length > 0 && (
        <div className="mt-5">
          <h2 className="text-2xl font-medium">Submitted Data</h2>
          <table className="border-collapse border w-full mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Hobbies</th>
              </tr>
            </thead>
            <tbody>
              {submitData.map((data, i) => (
                <tr key={i}>
                  <td className="border p-2">{data.name}</td>
                  <td className="border p-2">{data.email}</td>
                  <td className="border p-2">{data.gender}</td>
                  <td className="border p-2">{data.hobbies.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
