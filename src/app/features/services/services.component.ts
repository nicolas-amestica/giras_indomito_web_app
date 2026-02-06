import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  destinations = [
    {
      name: 'San Carlos de Bariloche, Argentina',
      image: '/assets/images/content/services/foto_web_1.jpg',
      description: 'La ciudad de Bariloche ofrece una experiencia única de turismo aventura en la majestuosa Patagonia Argentina. Con sus impresionantes lagos de aguas cristalinas y montañas nevadas que roban el aliento, este destino se ha convertido en el favorito para las giras de estudio.',
      activities: [
        'Rafting y kayaking en aguas turquesas',
        'Parapente con vistas panorámicas',
        'Senderismo por bosques patagónicos',
        'Esquí y snowboard en temporada invernal',
        'Visitas a fábricas de chocolate artesanal',
        'Circuito Chico y miradores naturales'
      ]
    },
    {
      name: 'Pucón, Chile',
      image: '/assets/images/content/foto-web-paisajes.jpg',
      description: 'Ubicado en el corazón del sur de Chile, Pucón es sinónimo de aventura y naturaleza en estado puro. Con el imponente volcán Villarrica como telón de fondo, esta ciudad lacustre ofrece experiencias únicas que combinan adrenalina con la belleza natural del lugar.',
      activities: [
        'Rafting en ríos de aguas bravas',
        'Kayak en lagos cristalinos',
        'Trekking al volcán Villarrica',
        'Escalada deportiva y rappel',
        'Canopy entre bosques nativos',
        'Termas naturales volcánicas'
      ]
    },
    {
      name: 'Foz de Iguazú y Camboriú, Brasil',
      image: '/assets/images/content/services/foto_web_4.jpg',
      description: 'Brasil ofrece una combinación perfecta entre las maravillas naturales de las Cataratas del Iguazú y las paradisíacas playas de Camboriú. Una experiencia que mezcla naturaleza espectacular con playas de arena blanca y una vibrante vida costera.',
      activities: [
        'Visita a las Cataratas del Iguazú',
        'Parapente sobre el océano',
        'Buceo y snorkeling',
        'Surf en playas atlánticas',
        'Ciclismo de montaña',
        'Vida nocturna y gastronomía'
      ]
    }
  ];
}
