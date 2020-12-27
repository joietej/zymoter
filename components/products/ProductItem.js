import React from "react";
import stripHtml from "string-strip-html";

import {
  StructuredListRow,
  StructuredListCell,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from "carbon-components-react";

const ProductItem = ({ product }) => {
  const { result } = stripHtml(product.description);
  return (
    <StructuredListRow>
      <StructuredListCell>
        <ExpandableTile>
          <TileAboveTheFoldContent>
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding:"1rem"
              }}
            >
              <img
                height="64"
                width="64"
                className="product__image"
                src={product.media.source}
                alt={product.name}
              />
              <div>
                <h4>{product.name}</h4>
                <p>{product.price.formatted_with_symbol}</p>
              </div>
            </div>
          </TileAboveTheFoldContent>
          <TileBelowTheFoldContent>
            <div style={{padding:"1rem"}}>
              <p >{result}</p>
            </div>
          </TileBelowTheFoldContent>
        </ExpandableTile>
      </StructuredListCell>
    </StructuredListRow>
  );
};

export default ProductItem;
