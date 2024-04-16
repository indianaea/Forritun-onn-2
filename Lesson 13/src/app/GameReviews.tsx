import { useState } from "react";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [score, setScore] = useState("");
  const [image, setImage] = useState(null); // State to hold the uploaded image file

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    const newReview = { name, desc, score, image };
    setReviews([...reviews, newReview]); // Add the new review to the reviews array
    setName(""); // Reset the input fields after submitting
    setDesc("");
    setScore("");
    setImage(null); // Reset the image file
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Update the image state to the selected file
  };

  const handleDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index)); // Remove the review at the given index
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px", border: "1px solid #eee" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Description:</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ marginLeft: "10px", border: "1px solid #eee" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Score:</label>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            style={{ marginLeft: "10px", border: "1px solid #eee" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            style={{ marginLeft: "10px", border: "1px solid #eee" }}
          />
        </div>
        <button type="submit" style={{ border: "1px solid #eee", backgroundColor: "#f0f0f0" }}>Submit Review</button>
      </form>
      <div style={{ margin: "20px" }}>
        <h2>Reviews:</h2>
        {reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "10px", border: "1px solid gray", padding: "10px", position: "relative" }}>
            <h3>{review.name}</h3>
            <p>{review.desc}</p>
            <p>Score: {review.score}</p>
            {review.image && <img src={URL.createObjectURL(review.image)} alt="Game" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}
            <button onClick={() => handleDelete(index)} style={{ border: "1px solid red", color: "red", position: "absolute", top: "10px", right: "10px" }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
