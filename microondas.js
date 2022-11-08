const opcoes = {
    "Pipoca": { nome: "Pipoca", tempo: 10 },
    "Macarrão": { nome: "Macarrão", tempo: 8 },
    "Carne": { nome: "Carne", tempo: 15 },
    "Feijão": { nome: "Feijão", tempo: 12 },
    "Brigadeiro": { nome: "Brigadeiro", tempo: 8 },
  };
  
  function esquentar(numeroPrato, tempo) {
    const prato = opcoes[numeroPrato];
  
    if (!prato) {
      return console.log('Prato inexistente');
    }
  
    let mensagem;
    const tempoPadrao = prato.tempo;
  
    if (tempo < tempoPadrao) {
      mensagem = 'Tempo insuficiente';
    } else if (tempo > tempoPadrao * 2 && tempo <= tempoPadrao * 3) {
      mensagem = 'A comida queimou';
    } else if (tempo > tempoPadrao * 3) {
      mensagem = 'Kabummm';
    } 
  
    return console.log ("Prato pronto, bom apetitite \n"  + mensagem);
  }

  esquentar ( "Feijão" , 41 )