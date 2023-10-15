// Lista de configurações de idioma disponíveis
const languages = [
  {
    order: 0,
    imageFile: './brasil-flag.svg',
    locale: 'pt-BR',
    currency: 'BRL',
    language: 'Português (BR)',
  },
  {
    order: 1,
    imageFile: './eua-flag.svg',
    locale: 'en-US',
    currency: 'USD',
    language: 'English (US)',
  },
  {
    order: 2,
    imageFile: './italy-flag.svg',
    locale: 'it-IT',
    currency: 'EUR',
    language: 'Italiano (EU)',
  },
  {
    order: 3,
    imageFile: './mexico-flag.svg',
    locale: 'es-MX',
    currency: 'MXD',
    language: 'Espanhol (MX)',
  },
  // ... adicione mais idiomas conforme necessário
]

// Importando bandeiras de forma dinâmica e criando o objeto de idiomas
const languageConfigs = languages.reduce((acc, lang) => {
  // Tentando importar a imagem da bandeira correspondente
  try {
    lang.image = require(`${lang.imageFile}`)
  } catch (e) {
    console.error(`Erro ao carregar a bandeira para o idioma ${lang.locale}:`, e)
    lang.image = null // ou você pode definir uma imagem padrão aqui
  }

  // Adicionando a configuração de idioma ao objeto acumulador
  acc[lang.locale] = lang

  return acc
}, {})

/**
 * Exporta o objeto de configurações de idioma para uso em outros módulos.
 * @type {object}
 */
export default languageConfigs
