import { TRegionalBloc } from './TRegionalBloc';
import { TCurrency } from './TCurrency';
import { TLanguage } from './TLanguage';

export type TBaseResponse = {
    name: string,
    topLevelDomain: string,
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    subregion: string,
    region: string,
    population: number,
    latlng: [number, number],
    demonym: string,
    area: number,
    timezones: string[],
    nativeName: string,
    numericCode: string,
    flags: {
        svg: string,
        png: string
    },
    currencies: TCurrency[],
    languages: TLanguage[],
    translations: {
        br: string,
        pt: string,
        nl: string,
        hr: string,
        fa: string,
        de: string,
        es: string,
        fr: string,
        ja: string,
        it: string,
        hu: string
    }
    flag: string
    regionalBlocs: TRegionalBloc[],
    independent: boolean
}
