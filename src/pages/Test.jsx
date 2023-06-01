// import axios from "axios";
// import Cookies from "js-cookie";

// const Test = () => {
//   const [notes, setnotes] = useState([]);
//   useEffect(() => {
//     const fetchNotes = async () => {
//       const headers = Cookies.get("auth-token");
//       console.log(headers);
//       try {
//         const response = await axios.get("http://localhost:4000/api/notes/", {
//           headers,
//         });
//         setnotes(response.notes);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchNotes();
//   }, []);
//   return <></>;
// };

// export default Test;
