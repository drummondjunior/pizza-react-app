import BrasilFlag from './brasil-flag.svg'
import EuaFlag from './eua-flag.svg'
import ItalyFlag from './italy-flag.svg'

const ptBR = {
  order: 0,
  image: BrasilFlag,
  locale: 'pt-BR',
  currency: 'BRL',
  language: 'Português',
}

const enUS = {
  order: 1,
  image: EuaFlag,
  locale: 'en-US',
  currency: 'USD',
  language: 'English (US)',
}

const itIT = {
  order: 2,
  image: ItalyFlag,
  locale: 'it-IT',
  currency: 'ITL',
  language: 'Italiano (EU)',
}

export { ptBR, enUS, itIT }
