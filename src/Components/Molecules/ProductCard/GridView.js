import React from "react";
import { useNavigate } from "react-router-dom";
import currencyFormat from "../../../Utils";
import YButton from "../../Atoms/YButton";
import "./ProductCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GridView = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {props.data.map((data, index) => (
        <>
          {index < props.limit && (
            <div className="gridCard" key={index}>
              <div className="imgCntnr">
                <LazyLoadImage
                  alt={data.name}
                  height={"100%"}
                  src={data.image[0]}
                  width={"100%"}
                  effect="blur"
                  // placeholderSrc="/assets/svg/imgload.svg"
                />
              </div>
              <div className="dtlCntnr text-center">
                <h3 className="mb-1">{data.name}</h3>
                <p className="mb-3">{currencyFormat(data.price)}</p>
                <p className="dscrptn">{data.description}</p>
                <YButton
                  label="View Details"
                  variant="outline"
                  onClick={() => navigate(`/product/${data.id}`)}
                />
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default GridView;
