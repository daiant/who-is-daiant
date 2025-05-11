import { WorkItem } from '../app/components/work/work-item/work-item.component';

type WorkDescription = string | { href: string; footer: string };
export type WorkDetail = {
  title: string;
  href: string;
  description: WorkDescription[];
  image: string;
  color: `#${string}`;
};

export const workItems = [
  {
    title: 'Luxcare',
    href: '/luxcare',
    color: '#1A79AC',
    icon: '/pool.svg',
  },
  {
    title: 'Tanit Luxury Yacht',
    href: '/tanit',
    color: '#DD8046',
    icon: '/yacht.svg',
  },
  {
    title: 'Seguros Denia',
    href: '/seguros',
    color: '#0411C9',
    icon: 'health.svg',
  },
] as WorkItem[];

export const WorkData: {
  [key: string]: WorkDetail;
} = {
  luxcare: {
    title: 'Luxcare',
    href: 'https://www.luxcare.es',
    description: [
      'LuxCare se especializa en la venta de spas y jacuzzis para exteriores. Ofrecen una selección de spas de primera calidad, cuidadosamente seleccionados por su calidad, diseño y características innovadoras.',
      { footer: '', href: '/luxcare/luxcare_vector.webp' },
      'Inspirada en la simplicidad del agua, la web ofrece una experiencia de usuario fluida y atractiva, con un diseño limpio y moderno que refleja la esencia de la marca.',
      {
        footer:
          'Con un repositorio amplio de distribuidores con los que contactar',
        href: '/luxcare/luxcare_contact.webp',
      },
      'La sencillez deja, aún así, espacio para la creatividad, como en la página de 404, donde se deja entrever una de las pasiones de los fundadores de LuxCare: la música.',
      {
        footer:
          'Un magnetófono te intenta hacer compañía mientras buscas lo que no existe',
        href: '/luxcare/luxcare_contacto.webp',
      },
    ],
    image: '/luxcare/luxcare.webp',
    color: '#1A79AC',
  },
  tanit: {
    title: 'Tanit Luxury Yacht',
    href: 'https://www.tanitluxuryyacht.com',
    description: [
      'El lujo en alta mar. Tanit Luxury Yacht es una empresa dedicada al alquiler de yates de lujo en Ibiza y Formentera. La web ofrece una experiencia intuitiva y rápida, con un enfoque en conectar a los clientes con la empresa y conocer las características del barco Gran Abe II.',
      { footer: '', href: '/tanit/tanit_galeria.webp' },
      'Aventúrate a conocer el Gran Abe II, un yate de lujo que ofrece una experiencia única en alta mar. Con un diseño elegante y moderno, el Gran Abe II es el lugar perfecto para disfrutar de unas vacaciones inolvidables en las aguas cristalinas de Ibiza y Formentera.',
      { footer: '', href: '/tanit/tanit_contact.webp' },
    ],
    image: '/tanit/tanit_video.mp4',
    color: '#DD8046',
  },
  seguros: {
    title: 'Seguros Denia',
    href: 'https://www.segurosdenia.es',
    description: [
      'Proyecto de digitalización de la empresa Seguros Denia, que ofrece una amplia gama de seguros para particulares y empresas. La web está diseñada para ser intuitiva y fácil de usar, con un enfoque en la experiencia del usuario.',
      { footer: '', href: '/segurosdenia/segurosdenia.webp' },
      'El principal interés de la empresa es ofrecer un servicio personalizado y adaptado a las necesidades de cada cliente, por lo que la web incluye una sección para descubrir el seguro que más se adecúa a cada personas, además de un formulario de contacto.',
      { footer: '', href: '/segurosdenia/segurosdenia_seguros.webp' },
      'La confianza es un aspecto fundamental en el sector de los seguros, por lo que la web incluye una sección de testimonios de clientes satisfechos, así como información sobre la empresa y su equipo.',
      { footer: '', href: '/segurosdenia/segurosdenia_valoraciones.webp' },
    ],
    image: '/segurosdenia/segurosdenia.webp',
    color: '#0411C9',
  },
};
