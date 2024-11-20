import { IBook } from "../interfaces/IBook";

export type TBookDescription = Pick<IBook, "name" | "shortDescription">;
