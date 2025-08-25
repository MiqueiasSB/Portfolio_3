export function getProjects() {
  const images = import.meta.glob('../assets/img/projects/*.png', {
    import: 'default',
    eager: true
  })

  const components = import.meta.glob('../sections/Projects/*.vue', {
    import: 'default',
    eager: true
  })

  return [
    {
      title: 'Sorteio de Equipes',
      tools: ['JavaScript','SCSS','HTML'],
      image: images['../assets/img/projects/sorteio.png'],
      demo: 'https://sorteioequipes.miqueiasbraga.com',
      github:'https://github.com/MiqueiasSB/sorteio-de-equipes'
    },
    {
      title: 'Calculadora',
      tools: ['Blade', 'Alpine.js','Bootstrap 5'],
      image: images['../assets/img/projects/calculadora.png'],
      demo: 'https://calculadora.miqueiasbraga.com',
      github:'https://github.com/MiqueiasSB/calculadora'
    },
    {
      title: 'Relógio Analógico',
      tools: ['JavaScript','CSS','HTML' ],
      image: images['../assets/img/projects/relogio.png'],
      demo: 'https://relogio.miqueiasbraga.com',
      github:'https://github.com/MiqueiasSB/relogio'
    }
  ]
}
