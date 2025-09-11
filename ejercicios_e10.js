const partidos = [
    {
    juego: 1,
    LosToros: 0,
    SanFernando: 4
},
{
    juego: 2,
    LosToros: 8,
    SanFernando: 6
},
{
    juego: 3,
    LosToros: 5,
    SanFernando: 3
},
{
    juego: 4,
    LosToros: 6,
    SanFernando: 7
},
{
    juego: 5,
    LosToros: 2,
    SanFernando: 4
},
{
    juego: 6,
    LosToros: 3,
    SanFernando: 1
},
{
    juego: 7,
    LosToros: 10,
    SanFernando: 5
}];

const numPartidos = partidos.length;

//Resultado del partido
for(let i =0; i< numPartidos; i++){
    let p = partidos.shift();
    console.log(`Resultado del partido ${p.juego}: Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}`);
}



