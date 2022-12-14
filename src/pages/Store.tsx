import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../cmp/StoreItem";
import storeItems from "../data/items.json";

//screen sizes (md, xs, lg) & num of col(2,1,3). g=gap in horizontal & vertical direction. For each of our items, I rendered a cmp inside of the col
//...item (#25) is props (# 16-21 below)

export function Store() {
  return (
    <>
      <h2> Apple Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(
          (
            item: JSX.IntrinsicAttributes & {
              id: number;
              quantity: number;
              name: string;
              price: number;
              year: number;
              img: string;
            }
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )
        )}
      </Row>
    </>
  );
}
