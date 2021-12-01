export type Letter = string
export type CodeWord = string

export interface Alphabet {
    [key: Letter]: CodeWord
}

export interface Letters {
    uppercase: Letter[]
	lowercase: Letter[]
}

export interface CodeWords {
    uppercase: Letter[]
	lowercase: Letter[]
	capitalized: Letter[]
}

export enum ConversionMode {
	LOWERCASE,
	UPPERCASE,
	CAPITALIZED,
}
