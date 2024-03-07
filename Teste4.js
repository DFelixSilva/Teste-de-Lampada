// Simulação dos interruptores e lâmpadas
let lampadas = {
    l1: { estado: 'desligada', temperatura: 'fria' },
    l2: { estado: 'desligada', temperatura: 'fria' },
    l3: { estado: 'desligada', temperatura: 'fria' }
  };
  
  function ligarInterruptor(lampada) {
    lampadas[lampada].estado = 'ligada';
    // Aumenta a temperatura da lâmpada para simular o aquecimento
    lampadas[lampada].temperatura = 'quente';
  }
  
  function desligarInterruptor(lampada) {
    lampadas[lampada].estado = 'desligada';
    // Mantém a temperatura da lâmpada para simular o resfriamento lento
  }
  
  function verificarLampadas() {
    for (let lampada in lampadas) {
      console.log(`A lâmpada ${lampada} está ${lampadas[lampada].estado} e ${lampadas[lampada].temperatura}.`);
    }
  }
  
  // Simulação da solução do enigma
  ligarInterruptor('l1');
  // Supõe-se que você espera alguns minutos aqui
  desligarInterruptor('l1');
  ligarInterruptor('l2');
  
  // Vá até a sala das lâmpadas (simulado pela função verificarLampadas)
  verificarLampadas();
  