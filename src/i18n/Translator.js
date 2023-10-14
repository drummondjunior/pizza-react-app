import { useTranslation } from 'react-i18next'
// Importa o hook de tradução

/**
 * Componente que traduz um texto com base no caminho (path).
 * @param {object} props - As propriedades do componente.
 * @param {string} props.path - O caminho para a chave de tradução.
 * @returns {string} - O texto traduzido.
 */
const Translator = ({ path }) => {
  const { t } = useTranslation()
  // Obtém a função de tradução (t) do hook

  // Retorna o texto traduzido com base no caminho (path)
  return t(path)
}

export default Translator
