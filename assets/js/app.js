


    let ICAOInput = "KLBG";

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
    z: 'Zulu'

}

let newICAO = ICAOInput.toLowerCase();

  let str = newICAO.split('');

  console.log(str);

  console.log(ICAO[newICAO]);


