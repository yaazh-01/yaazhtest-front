import { Button } from "@mui/material";
import React from "react";
import YButton from "../../Components/Atoms/YButton";
import ProductSlider from "../../Components/Organisms/ProductSlider";
import "./ProductView.css";

const ProductView = () => {
  return (
    <div className="pdtVwWrpr d-flex container">
      <div className="pdtVwSldrWrpr">
        <ProductSlider />
      </div>
      <div className="pdtDtlsWrpr">
        <h3 className="pdtName">Hair Oil product</h3>
        <p className="pdtCtgry">Hair Oil</p>
        <h4>
          ₹123.00 <span>/ 200ml</span>
        </h4>
        <div className="byQtyWrpr mt-4">
          <div className="qtyWrpr">
            <label className="mb-2">
              <small>Quantity</small>
            </label>
            <div className="iptQty">
              <Button>-</Button>
              <input type="number" defaultValue="1" />
              <Button>+</Button>
            </div>
          </div>
          <YButton label="Buy Now" />
          <YButton
            variant="secondary"
            label={
              <>
                <span className="material-icons me-2">shopping_cart</span>Add to
                Cart
              </>
            }
          />
        </div>
        <div className="dscrptn mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut erat
          lectus. Fusce faucibus nulla sed arcu malesuada mattis. Pellentesque
          id urna non odio rutrum feugiat. Cras dictum justo a odio porta
          luctus. Praesent tempor eros eget enim sollicitudin, at maximus libero
          mattis. Curabitur pharetra enim sit amet blandit ornare. Maecenas ut
          iaculis dui, non viverra ipsum. Donec vehicula tortor justo, a
          ullamcorper tortor rutrum non. In vel lectus semper sem malesuada
          fringilla vitae at augue. Suspendisse volutpat purus eu nulla luctus,
          in convallis nibh faucibus. Phasellus consequat scelerisque ligula sed
          condimentum. Quisque eget tempor odio. Duis volutpat tincidunt
          lobortis. Vivamus dapibus at eros volutpat maximus.
          <br />
          <br />
          Etiam tristique imperdiet massa sit amet mollis. Ut in nisl sed est
          commodo volutpat nec cursus metus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Sed tempor
          imperdiet hendrerit. Morbi velit tortor, consectetur eu posuere eu,
          pharetra eget nisl. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque elementum neque eget ipsum euismod sodales
          ac eu magna. Aliquam varius faucibus tortor. Nam ultrices urna arcu,
          at fringilla quam condimentum ut. Fusce id metus ante. Cras vitae
          maximus felis.
          <br />
          <br />
          Suspendisse eu finibus risus. Cras sed hendrerit urna. Aliquam
          facilisis diam quis accumsan cursus. Nullam sagittis blandit sodales.
          Cras a ipsum rhoncus, vestibulum lacus eu, porttitor libero. Etiam
          quis lorem aliquet tortor sodales finibus ut vel lacus. Pellentesque
          semper arcu in ipsum euismod posuere. Morbi ac velit ut dolor auctor
          bibendum nec et ante. Nullam aliquet mattis ornare. Praesent tempus
          felis dui, a bibendum sem sollicitudin sed. Maecenas laoreet sit amet
          ligula ut molestie. Sed viverra volutpat est, vitae fermentum lorem
          eleifend vitae.
        </div>
      </div>
    </div>
  );
};

export default ProductView;
