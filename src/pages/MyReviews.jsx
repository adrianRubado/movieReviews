import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import EditReviewCard from "../components/EditDeleteComments";
import Swal from "sweetalert2";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const [emptyReviews, setEmptyReviews] = useState(false);

  const updateReviews = (movies) => {
    setMyReviews(movies.reverse());
  };

  const noReviews = () => {
    setEmptyReviews(true);
  };

  const getMyReviews = async () => {
    const reviews = axios.create({
      withCredentials: true,
    });
    const resp = await reviews.get(`http://localhost:3000/api/user/reviews`);
    console.log(resp.data);
    setMyReviews(resp.data.reverse());
    if (resp.data.length == 0) {
      setEmptyReviews(true);
    }
  };

  useEffect(() => {
    Swal.close();
    getMyReviews();
  }, []);

  return (
    <>
      <Navbar />
      {emptyReviews && (
        <div
          style={{
            color: "black",
            width: "100vw",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h1>No reviews found</h1>
        </div>
      )}

      {myReviews.length != 0 && (
        <div
          style={{
            color: "black",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          {myReviews.map((r, index) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <EditReviewCard
                    comment={r}
                    update={updateReviews}
                    noReviews={noReviews}
                  />
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MyReviews;
