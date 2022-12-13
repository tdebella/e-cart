// import React from "react";
// import { currency } from "../../utilities/number";
// import { Link } from "react-router-dom";
// import { PRODUCT_DETAIL_PATH } from "../../data/items.json";
// import { IMG } from "imgs/iph13pro.png";

// type WishlistCardProps = {
//   name: string,
//   price: number,
//   img: string,
//   slug: any,
// };

// const WishlistCard = ({ name, price, img, slug }) => {
//   return (
//     <div className="col-6 col-md-4">
//       <div className="card mb-7">
//         {/* img */}
//         <div className="card-img">
//           {/* action */}
//           <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
//             <i className="fe fe-x" />
//           </button>
//           {/* badge */}
//           <span className="badge badge-dark card-badge card-badge-left text-uppercase">
//             Sale
//           </span>
//           {/* button */}
//           <button
//             className="btn btn-xs btn-block btn-dark card-btn"
//             data-toggle="modal"
//             data-target="#modalProduct"
//           >
//             <i className="fe fe-eye mr-2 mb-1" /> Quick View
//           </button>
//           {/* img */}
//           <img className="card-img-top" src={IMG} alt="..." />
//         </div>
//         {/* body */}
//         <div className="card-body font-weight-bold text-center">
//           <Link
//             className="text-body"
//             to={generatePath(PRODUCT_DETAIL_PATH, { slug })}
//           >
//             {name}
//           </Link>{" "}
//           <br />
//           <span className="font-size-xs text-grey-350 text-decoration-line-through">
//             {currency(price)}
//           </span>
//           <span className="text-primary">{currency(price)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistCard;
