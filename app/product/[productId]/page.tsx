import React from "react";

type DetailProps = {
  productId?: string;
};

const Detail = ({ params }: { params: DetailProps }) => {
  const { productId } = params;
  return <div>Detail</div>;
};

export default Detail;
