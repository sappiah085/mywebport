import React from "react";
import image from "../../../images/man.png";
import "./testcard.scss";
export default function TestCard(props) {
  return (
    <div className={props.dark ? "test_card dark" : "test_card"}>
      <div className="label">
        <img src={image} alt="man" />
        <div className="names">
          <div>Nathan Nana Offei</div>
          <div className="job">Fullstack Developer</div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et eum
        perferendis ratione consectetur, culpa illum beatae pariatur veritatis.
        Ut magnam consequatur id corporis molestias rerum, dolor accusantium hic
        repellendus facere eos cumque magni, consequuntur odio aperiam voluptate
        repudiandae laudantium ullam. Minima magnam tenetur quibusdam.
      </p>
    </div>
  );
}
