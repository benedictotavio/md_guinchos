import tatuape from '../galeria_regioes/tatuape.jpg'
import osasco from '../galeria_regioes/osasco.jpg'
import carapicuiba from '../galeria_regioes/carapicuiba.jpg'
import barueri from '../galeria_regioes/barueri.jpg'
import freguesia from '../galeria_regioes/freguesia-do-o.jpg'
import itaim from '../galeria_regioes/itaim-bibi.jpeg'
import santo_amaro from '../galeria_regioes/santo-amaro.jpg'
import vila_olimpia from '../galeria_regioes/vila-olimpia.jpg'
import guarulhos from '../galeria_regioes/guarulhos.jpg'
import santana from '../galeria_regioes/santana.jpg'
import itapevi from '../galeria_regioes/itapevi.jpeg'
import vila_mariana from '../galeria_regioes/vila-mariana.jpg'
import penha from '../galeria_regioes/penha.jpg'
import mooca from '../galeria_regioes/mooca.jpeg'
import lapa from '../galeria_regioes/lapa.jpg'
import interlagos from '../galeria_regioes/interlagos.jpg'
import jabaquara from '../galeria_regioes/jabaquara.jpg'
import pirituba from '../galeria_regioes/pirituba.jpg'
import vila_medeiros from '../galeria_regioes/vila-medeiros.jpg'
import itaquera from '../galeria_regioes/itaquera.jpg'
import vila_maria from '../galeria_regioes/vila-maria.jpg'
import santana_parnaiba from '../galeria_regioes/santana-parnaiba.jpg'
import vila_prudente from '../galeria_regioes/vila-prudente.jpg'
import sao_matheus from '../galeria_regioes/sao-matheus.jpg'



const menu = [
  {
    id: 1,
    title: 'Tatuapé',
    category: 'Zona Leste',
    img: tatuape,
    desc: `Tatuapé é um distrito na Zona Sudeste de São Paulo (Zona Leste de São Paulo) no Munícipio de São Paulo`,
  },
  {
    id: 2,
    title: 'Osasco',
    category: 'Zona Oeste',
    img: osasco,
    desc: `Osasco é um município brasileiro localizado na Região Metropolitana de São Paulo, no estado de São Paulo, proximo a Zona Oeste de São Paulo`,
  },
  {
    id: 3,
    title: 'Carapicuiba',
    category: 'Zona Oeste',
    img: carapicuiba,
    desc: `Carapicuíba é um município da Região Metropolitana de São Paulo, entre as cidades de Osasco e Barueri, no estado de São Paulo`,
  },
  {
    id: 4,
    title: 'Barueri',
    category: 'Zona Oeste',
    img: barueri,
    desc: `Barueri é um município da Região Metropolitana de São Paulo, é a terceira mais populosa na Microregião de Osasco`,
  },
  {
    id: 5,
    title: 'Freguesia do Ó',
    category: 'Zona Norte',
    img:
      freguesia,
    desc: `Freguesia do Ó é um distrito localizado na zona noroeste do município de São Paulo, mais popularmente citado na Zona Norte da Grande São Paulo`,
  },
  {
    id: 6,
    title: 'Itaim Bibi',
    category: 'Zona Sul',
    img:
      itaim,
    desc: `O Itaim Bibi é um bairro nobre situado na Zona Oeste da cidade de São Paulo, situado na entre as Zonas Sul e Oeste da cidade`,
  },
  {
    id: 7,
    title: 'Santo Amaro',
    category: 'Zona Sul',
    img:
      santo_amaro,
    desc: `Santo Amaro é um distrito situado na zona centro-sul do município de São Paulo e é administrado pela subprefeitura de Santo Amaro.`,
  },
  {
    id: 8,
    title: 'Vila Olimpia',
    category: 'Zona Sul',
    img:
      vila_olimpia,
    desc: `A dinâmica e sofisticada Vila Olímpia é conhecida por seus edifícios corporativos e arranha-céus de luxo, e uma área comercial movimentada.`,
  },
  {
    id: 9,
    title: 'Guarulhos',
    category: 'Zona Norte',
    img:
      guarulhos,
    desc: `Guarulhos é um município da Região Metropolitana de São Paulo, no estado de São Paulo, no Brasil. É a segunda cidade mais populosa do estado, a 13ª mais populosa do Brasil.`,
  },
  {
    id: 10,
    title: 'Santana',
    category: 'Zona Norte',
    img:
      santana,
    desc: `Santana é um bairro comercial e residencial em rápida ascensão que conta com shoppings badalados e restaurantes tradicionais e refinados.`,
  },
  {
    id: 11,
    title: 'Itapevi',
    category: 'Zona Oeste',
    img:
      itapevi,
    desc: `Itapevi é um município da Microrregião de Osasco, situado na Região Metropolitana de São Paulo, no estado de São Paulo.`,
  },
  {
    id: 12,
    title: 'Vila Mariana',
    category: 'Zona Sul',
    img:
      vila_mariana,
    desc: `Localizada no Centro-Sul, é um dos bairros queridinhos de São Paulo que oferece uma ótima infraestrutura, com fácil acesso aos quatro cantos da cidade.`,
  },
  {
    id: 13,
    title: 'Penha',
    category: 'Zona Leste',
    img:
      penha,
    desc: `Considerado o segundo bairro mais antigo da cidade, é um distrito na Zona Leste de São Paulo, conhecido pelos vários templos de diversas religiões, sobretudo católicos.`,
  },
  {
    id: 14,
    title: 'Mooca',
    category: 'Zona Leste',
    img:
      mooca,
    desc: `A Mooca é um dos bairros mais tradicionais e antigos de São Paulo. A região tem características peculiares que nenhum outro distrito da cidade possui, como a herança italiana.`,
  },
  {
    id: 15,
    title: 'Lapa',
    category: 'Zona Oeste',
    img:
      lapa,
    desc: `Lapa é um bairro situado na zona oeste do município de São Paulo pertencente ao distrito da Lapa. Também é conhecido como "Centro da Lapa", pois possui fortes características comerciais.`,
  },
  {
    id: 16,
    title: 'Interlagos',
    category: 'Zona Sul',
    img:
      interlagos,
    desc: `Interlagos é um bairro localizado na zona Sul de São Paulo,sua principal atração é o Autódromo de Interlagos, que desde 1940 movimenta a região`,
  },
  {
    id: 17,
    title: 'Jabaquara',
    category: 'Zona Sul',
    img:
      jabaquara,
    desc: `Jabaquara é um distrito do município de São Paulo, no Brasil, fundado em 1964. Localiza-se na zona centro-sul. Conta com duas estações de Metrô (Jabaquara e Conceição).`,
  },
  {
    id: 18,
    title: 'Vila Pirituba',
    category: 'Zona Norte',
    img:
      pirituba,
    desc: `Pirituba é um distrito situado na Zona Noroeste(Zona Norte) do município de São Paulo, no Brasil.`,
  },
  {
    id: 19,
    title: 'Vila Medeiros',
    category: 'Zona Norte',
    img:
      vila_medeiros,
    desc: `Vila Medeiros é um distrito situado na Zona Norte do município de São Paulo, e localizado entre a Vila Maria, Vila Guilherme, Tucuruvi, Jaçanã, Itapegica e Ponte Grande.`,
  },
  {
    id: 20,
    title: 'Itaquera',
    category: 'Zona Leste',
    img:
      itaquera,
    desc: `Com investimentos sociais dos governos estadual e municipal nos últimos anos, e a construção da Arena Corinthians, próxima da Estação Corinthians-Itaquera do metrô.`,
  },
  {
    id: 21,
    title: 'Vila Maria',
    category: 'Zona Norte',
    img:
      vila_maria,
    desc: `O bairro Vila Maria fica localizado em São Paulo, próximo aos bairros Parque Novo Mundo, Vila Guilherme e Belém.`,
  },
  {
    id: 22,
    title: 'Santana de Parnaiba',
    category: 'Zona Oeste',
    img:
      santana_parnaiba,
    desc: `Santana de Parnaíba é uma cidade de Estado do São Paulo, é o destino perfeito para os amantes de história.`,
  },
  {
    id: 23,
    title: 'Vila Prudente',
    category: 'Zona Leste',
    img:
     vila_prudente,
    desc: `Vila Prudente é um bairro pertencente ao distrito homônimo, no município de São Paulo. Atualmente ocupa uma área de 2,5 Km².`,
  },
  {
    id: 24,
    title: 'São Matheus',
    category: 'Zona Leste',
    img:
      sao_matheus,
    desc: `São Mateus é um distrito localizado na zona leste do município brasileiro de São Paulo, a aproximadamente 20 km da região central do município.`,
  }
]
export default menu