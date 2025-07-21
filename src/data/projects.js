// src/data/projects.js
import { markRaw } from 'vue'

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
      title: 'Teep Tecnologia',
      description: 'Trabalho de Auxiliar técnico em manutenções e promovido a desenvolvedor Junior',
      tools: ['Eletrônica','Soldagem e Montagem','ESP32','C++','Arduino','Python','Django','Flutter','Firebase' , 'Docker', 'Manutenção','Angular','TypeScript','PostgreSQL','Organização de Estoque'],
      image: images['../assets/img/projects/teep.png'],
      contentComponent: markRaw(components['../sections/Projects/teep.vue'])
    },
    {
      title: 'MNotas',
      description: 'Um sistema de gerênciamento de finanças, para pequenos negócios',
      tools: ['Laravel', 'Livewire', 'Alpine.js','Bootstrap 5', 'Stripe', 'GoogleChats'],
      image: images['../assets/img/projects/MNotas.png'],
      contentComponent: markRaw(components['../sections/Projects/mnotas.vue'])
    },
    {
      title: 'CNC Laser',
      description: 'Maquina de corte e gravação laser feita com fundamentos da Economia Circular',
      tools: ['Mecânica', 'Eletrônica', 'ESP32', 'Arduino','Modelagem 2D','Modelagem 3d' ],
      image: images['../assets/img/projects/cnc.png'],
      contentComponent: markRaw(components['../sections/Projects/cnc.vue'])
    }
  ]
}
