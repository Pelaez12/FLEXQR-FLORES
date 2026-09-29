export type Occasion = 'Todas' | 'Amor' | 'Amistad' | 'Aniversario' | 'Cumpleaños' | 'Gracias';
export type Recipient = 'Alguien especial' | 'Mi pareja' | 'Mi amiga o amigo' | 'Mi familia';
export interface FlowerProduct {
  id: string; name: string; phrase: string; description: string; details: string;
  image: string; price: number; color: string; occasions: Occasion[]; recipients: Recipient[]; label: string;
}
export const FLOWERS: FlowerProduct[] = [
  { id: 'siempre-tu', name: 'SiempreTú', phrase: 'Entre todas las personas, te volvería a elegir.',
    description: 'Rosas rojas, un lazo color vino y ese “te quiero” que merece un lugar especial.',
    details: 'Ramo de rosas rojas con eucalipto, envoltura crema y cinta de satén. Incluye tarjeta con tu dedicatoria.',
    image: '/images/siempre-tu.webp', price: 149, color: 'Rojo profundo', occasions: ['Amor', 'Aniversario'], recipients: ['Mi pareja'], label: 'Para decir te quiero' },
  { id: 'que-suerte', name: 'QuéSuerteTenerte', phrase: 'Hay personas que hacen más bonito todo.',
    description: 'Rosas rosadas y durazno para esa persona que te alegra los días. Con o sin una ocasión.',
    details: 'Ramo de rosas rosadas y durazno con flores blancas de acompañamiento, papel rosa y cinta de satén. Incluye tarjeta.',
    image: '/images/que-suerte.webp', price: 129, color: 'Rosa y durazno', occasions: ['Amor', 'Amistad', 'Cumpleaños', 'Gracias'], recipients: ['Mi pareja', 'Mi amiga o amigo', 'Mi familia'], label: 'Para alegrarle el día' },
  { id: 'mi-lugar', name: 'MiLugarFavorito', phrase: 'Contigo, siempre me siento en casa.',
    description: 'Rosas blancas en una caja rosa. Un detalle sereno para agradecer compañía, cariño y complicidad.',
    details: 'Arreglo de rosas blancas y eucalipto en caja floral rosa con lazo de satén. Incluye tarjeta personalizada.',
    image: '/images/mi-lugar.webp', price: 179, color: 'Blanco y rosa', occasions: ['Amor', 'Amistad', 'Aniversario', 'Cumpleaños', 'Gracias'], recipients: ['Mi pareja', 'Mi amiga o amigo', 'Mi familia'], label: 'Para celebrar lo nuestro' },
];
export const OCCASIONS: Occasion[] = ['Todas', 'Amor', 'Amistad', 'Aniversario', 'Cumpleaños', 'Gracias'];
export const RECIPIENTS: Recipient[] = ['Alguien especial', 'Mi pareja', 'Mi amiga o amigo', 'Mi familia'];
export const DEDICATIONS: Record<Recipient, string[]> = {
  'Alguien especial': ['Hoy me acordé de ti y quise que lo supieras.', 'Un pequeño detalle para alguien que significa mucho.'],
  'Mi pareja': ['Mi lugar favorito siempre será a tu lado.', 'Qué suerte coincidir contigo. Te volvería a elegir.'],
  'Mi amiga o amigo': ['Qué suerte tener una amistad como la nuestra.', 'Gracias por estar, por escuchar y por ser tú.'],
  'Mi familia': ['Gracias por hacerme sentir en casa, siempre.', 'Un detalle para devolverte un poquito de todo tu cariño.'],
};
export const BOUTIQUE = { name: 'Flores & Boutique', whatsapp: '51992272521', phone: '992 272 521' };
