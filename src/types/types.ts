export interface Countries {
    capital: string;
    currencies: string[];
    emoji: string;
    name: string;
    __typename: string;
    languages: CountriesLanguage[];
    continent: {
        name: string;
    }
}

export interface CountriesLanguage {
    code: string;
    name: string;
    __typename: string;
}