import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../cmp/StoreItem";
import storeItems from "../data/items.json";
import { motion } from "framer-motion";

//screen sizes (md, xs, lg) & num of col(2,1,3). g=gap in horizontal & vertical direction. For each of our items, I rendered a cmp inside of the col
//...item (#25) is props (# 16-21 below)

export function Store() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, color: "royalblue" }}
        transition={{ duration: 2 }}
      >
        {" "}
        Apple Store
      </motion.h2>
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
