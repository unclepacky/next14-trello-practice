import React from "react";

export default function ProductsSlugPage({
  params,
}: {
  params: { slug: string[] };
}) {
  return <div>ProductsSlugPage {params.slug}</div>;
}
