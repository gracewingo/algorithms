const rainbow = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie placerat finibus. Etiam laoreet vel diam et pretium. Nunc ex leo, vulputate a turpis sit amet, congue tincidunt nulla. Nulla facilisi. Cras augue massa, ultricies nec tortor eu, placerat commodo massa. Vestibulum eget rutrum lectus, eu scelerisque sapien. Maecenas pharetra nulla ut nisl cursus tristique. Aliquam metus elit, rutrum eget mattis non, rutrum sit amet sapien. Sed vulputate, nunc sit amet dictum varius, odio felis molestie ligula, in tristique sapien libero eget augue. Vestibulum tortor enim, feugiat in elementum vel, vestibulum sit amet nibh. Sed sit amet enim eu lacus laoreet ornare.';
const txt = 'abbbacc'
let counts = {}

function getMaxCharacter(txt){
    //let tokens  = txt.split(/\W+/)  <- use this if you are splitting words 
    let tokens = txt.split('');
    console.log(tokens)
    for (let i = 0; i < tokens.length; i++){
        let word = tokens[i];
            if (!counts[word] || counts[word] === undefined){
                counts[word] = 1
            } else {
                counts[word]++
            }    
    }

    const values = Object.keys(counts);
    
    const sorted = values.sort((a,b) => counts[b] - counts[a]);

    const findMaxNum = (arr,obj) => { obj[arr[0]] };

    const max = findMaxNum(sorted, counts);

    const maxOccuringChar = sorted.filter(prop => counts[prop] === max);
    
    console.log(maxOccuringChar)
}

getMaxCharacter(txt);
