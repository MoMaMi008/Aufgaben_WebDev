import { IBook } from "../interfaces/IBook";

export type TBasicBook = Omit<IBook, "publishingYear" | "shortDescription">;
