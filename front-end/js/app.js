
const data = async () => {
    try {
        const response = await axios.get("http://localhost:3000/data")
        console.log(response.page)
        return response;
    } catch (e) {
       console.log(e);
    }
};


console.log(data());

