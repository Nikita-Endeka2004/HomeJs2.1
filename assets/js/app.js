
let ICAO = {

    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'Novermber',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'X-Ray',
    y: 'Yankee',
    z: 'Zulu',
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"

}

function IcaoTranslat(){

    let ICAOInput = numberInput.value;

    let newICAO = ICAOInput.toLowerCase();

  let str = newICAO.split('');

  newICAO = ' ';

  for(let i = 0; i < str.length; i++){

    newICAO = newICAO + ICAO[str[i]] + " ";

  }

  indexInput.innerHTML = `${newICAO}`;

}