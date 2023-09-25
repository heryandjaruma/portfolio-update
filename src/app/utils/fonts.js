import {IBM_Plex_Mono, Space_Grotesk, EB_Garamond} from "next/font/google";
import localFont from 'next/font/local'

export const IBMMono500 = IBM_Plex_Mono({weight: '600', subsets: ['latin']})
export const Grotesk400 = Space_Grotesk({weight: '400', subsets: ['latin']})
export const EBGaramond400 = EB_Garamond({weight: '400', subsets: ['latin']})
export const Village = localFont({src: './village.ttf'})
export const ToonyLineLine = localFont({src: './toonyline.otf'})
export const ToonyLineFill = localFont({src: './toonylinefill.otf'})
export const Alagard = localFont({src: './alagard.ttf'})
export const Ninety = localFont({src: './nineteeninentythree.otf'})
export const Gliker = localFont({src: './gliker.ttf'})
export const ChicagoBold = localFont({src: './chicago.ttf'})
export const ChicagoLight = localFont({src: './chicago_light.ttf'})