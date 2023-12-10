const bandas = [
    {
        id: 1,
        banda: 'Foo Fighters',
        albuns: 11,
        grammys: 15,
        inicio: '1994',
        fim: '',
        ativa: true,
        origem: 'EUA'
    },

    {
        id: 2,
        banda: 'The Beatles',
        albuns: 13,
        grammys: 7,
        inicio: '1960',
        fim: '1970',
        ativa: false,
        origem: 'Inglaterra'
    },
    {
        id: 3,
        banda: 'The Killers',
        albuns: 7,
        grammys: 0,
        inicio: '2001',
        fim: '',
        ativa: true,
        origem: 'EUA'
    },
    {
        id: 4,
        banda: 'Red Hot Chili Peppers',
        albuns: 13,
        grammys: 3,
        inicio: '1983',
        fim: '',
        ativa: true,
        origem: 'EUA'
    },
    {
        id: 5,
        banda: 'The Rolling Stones',
        albuns: 26,
        grammys: 3,
        inicio: '1962',
        fim: '',
        ativa: true,
        origem: 'Inglaterra'
    },
    {
        id: 6,
        banda: 'Aerosmith',
        albuns: 15,
        grammys: 4,
        inicio: '1970',
        fim: '',
        ativa: true,
        origem: 'EUA'
    },
    {
        id: 7,
        banda: 'Kiss',
        albuns: 24,
        grammys: 0,
        inicio: '1973',
        fim: '2023',
        ativa: false,
        origem: 'EUA'
    },
    {
        id: 8,
        banda: 'Oasis',
        albuns: 7,
        grammys: 0,
        inicio: '1991',
        fim: '2009',
        ativa: false,
        origem: 'Inglaterra'
    },
    {
        id: 9,
        banda: 'Queen',
        albuns: 15,
        grammys: 0,
        inicio: '1970',
        fim: '',
        ativa: true,
        origem: 'Inglaterra'
    },
    {
        id: 10,
        banda: 'Led Zeppelin',
        albuns: 9,
        grammys: 1,
        inicio: '1968',
        fim: '1980',
        ativa: false,
        origem: 'Inglaterra'
    }
]


//FILTER
// Filtra bandas ativas
const filterBands = bandas.filter( (bandas)=> {
    return bandas.ativa == true
})

console.log(filterBands)

// Filtra bandas aposentadas
const bandasAposentadas = bandas.filter((bandas) => {
    return bandas.ativa == false
    })
    
    console.log(bandasAposentadas)

//Filtra bandas que ganharam Grammys

let grammy = bandas.filter((bandas) => {
    return bandas.grammys >= '1'
    })

console.log(grammy)

// MAP
//Idade bandas ativas 
const anosAtiva = filterBands.map (aux => ({banda: aux.banda, ativa: 2023 - aux.inicio}))

for (const idade of anosAtiva) {
console.log(`A ${idade.banda} está ativa há ${idade.ativa} anos`)
}

//Tempo de atividade Bandas aposentadas
const anosAtivos = bandasAposentadas.map(aux => ({banda: aux.banda, ativa: aux.fim - aux.inicio}))

for (const anos of anosAtivos) {
console.log(`A banda ${anos.banda} ficou ativa por ${anos.ativa} anos`)
}


//REDUCE
// Soma os Grammys
const somaGrammys = bandas.reduce((accumulator, object) => {
	return accumulator + object.grammys;
  }, 0);
  
  console.log(`Juntas, estas bandas conquistaram ${somaGrammys} Grammy Awards`);

  // Soma os álbuns

const somaAlbuns = bandas.reduce((accumulator, object) => {
	return accumulator + object.albuns;
}, 0);

	console.log(`Juntas, estas bandas lançaram ${somaAlbuns} albuns`)
