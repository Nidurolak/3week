import axios from "axios";
const serverUrl = "http://localhost:3001"

const getGomin = async () => {
    const response = await axios.get("http://localhost:3001/gomin");
    return response.data;
  };
  
  const addGomin = async (newGomin) => {
    await axios.post("http://localhost:3001/gomin", newGomin)
  };

  const deleteGomin = async (id) =>{
    await axios.delete(`http://localhost:3001/gomin/${id}`);
  }

  const updateGomin = async (id, updatedGomin) => {
    await axios.put(`http://localhost:3001/gomin/${id}`);
  };

  export {getGomin, addGomin, deleteGomin, updateGomin}