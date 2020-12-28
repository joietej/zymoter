import React from "react";
import stripHtml from "string-strip-html";

import {
  StructuredListRow,
  StructuredListCell,
  Tile,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
  Button,
} from "carbon-components-react";
import { Add32, Delete32 } from "@carbon/icons-react";

const ProductItem = ({ product, onAdd = null, onRemove = null }) => {
  const { result } = stripHtml(product.description);

  return (
    <Tile>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <div>
          <img
            height="64"
            width="64"
            className="product__image"
            src={product.media.source}
            alt={product.name}
          />
        </div>
        <div>
          <ExpandableTile>
            <TileAboveTheFoldContent>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <h4>{product.name}</h4>
              </div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ padding: "1rem" }}>
                <p>{result}</p>
              </div>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem",
        }}
      >
        <div>
          <p>{product.price.formatted_with_symbol}</p>
        </div>
        <div>
          {onRemove && (
            <Button
              kind="secondary"
              renderIcon={Delete32}
              iconDescription="Remove from cart"
              hasIconOnly
              size="sm"
              onClick={() => onRemove(product)}
            />
          )}
          {onAdd && (
            <Button
              kind="primary"
              renderIcon={Add32}
              iconDescription="Add to cart"
              hasIconOnly
              size="sm"
              onClick={() => onAdd(product)}
            />
          )}
        </div>
      </div>
    </Tile>
  );
};

export default ProductItem;
