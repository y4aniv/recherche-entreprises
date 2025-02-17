import { GeoQuery } from "../interfaces/query";
import { Response } from "../interfaces/response";

export async function geo(query: GeoQuery): Promise<Response> {
  const queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");

  const response = await fetch(
    `https://recherche-entreprises.api.gouv.fr/near_point?${queryString}`
  );
  const data = await response.json();
  return data;
}
