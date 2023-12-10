import bandas from './bandas.js'

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
