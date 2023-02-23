import axios from "axios";
const serverUrl = "https://week3work.herokuapp.com/gomin"

const getGomin = async () => {
    const response = await axios.get("https://week3work.herokuapp.com/gomin");
    return response.data;
  };
  
  const addGomin = async (newGomin) => {
    await axios.post("https://week3work.herokuapp.com/gomin", newGomin)
  };

  const deleteGomin = async (id) =>{
    await axios.delete(`https://week3work.herokuapp.com/gomin/${id}`);
  }

  const updateGomin = async (id, updatedGomin) => {
    await axios.put(`https://week3work.herokuapp.com/gomin/${id}`);
  };

  export {getGomin, addGomin, deleteGomin, updateGomin}