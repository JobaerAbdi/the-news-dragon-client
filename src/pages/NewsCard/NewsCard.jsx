import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ms-3 flex-grow-1">
          <h6 className="mb-0">{author?.name}</h6>
          {moment(author?.published_date).format("YYYY-MM-D")}
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details && details?.length < 250 ? (
            <>{details}</>
          ) : (
            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>
            Read More
          </Link></>
          )}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating className="text-warning me-2"
            placeholderRating={rating.number}
            readonly
            emptySymbol={
              <FaStarHalfAlt></FaStarHalfAlt>
            }
            placeholderSymbol={
              <FaStar></FaStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
          />  
          {rating?.number}
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
