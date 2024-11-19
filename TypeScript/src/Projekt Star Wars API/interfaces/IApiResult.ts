import { IFilm } from "./IFilm";
import { IPerson } from "./IPerson";
import { IPlanet } from "./IPlanet";

export interface IApiResult {
    count: number;
    next: string;
    previous: string;
    results: IPlanet[] | IFilm[] | IPerson[];
}
