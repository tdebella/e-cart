import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../cmp/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  //screen sizes (md, xs, lg) & num of col(2,1,3)
  // g=gap in horizontal direction
  return (
    <>
      <h2> Apple Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(
          (
            item: JSX.IntrinsicAttributes & {
              id: number; // g=gap in horizontal direction
              // g=gap in horizontal direction
              quantity: number;
              name: string;
              price: number;
              year: number;
              // g=gap in horizontal direction
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
