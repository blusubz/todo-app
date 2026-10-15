import appetizerImg from './assets/appetizer-pic-asset.jpg';
import aperitivoCebollaImg from './assets/aperitivoCebolla-pic-asset.jpg';
import aperitivosQuesitosEspinacaImg from './assets/aperitivoQueso-pic-asset.jpg';
import drinkImg from './assets/drink-pic-asset.jpg';
import miloImg from './assets/milo-pic-asset.jpg';
import colaImg from './assets/cola-pic-asset.jpg';
import pastaImg from './assets/pasta-pic-asset.jpg';
import carneImg from './assets/carne-pic-asset.jpg';
import shrimpImg from './assets/shrimp-pic-asset.jpg';
import postreImg from './assets/postre-pic-asset.jpg';

const aperitivosData = [
    {
        name: 'Tartaletas de Queso',
        description: 'Una masa de hojaldre dorada y crujiente rellena con una mezcla tibia y fundida de quesos derretidos. Es rica, sabrosa y tiene el tamaño perfecto para un bocado',
        price: ' $9',
        src: appetizerImg,
        alt: 'Foto de aperitivos de quesitos relleno de queso'
    },
    {
        name: 'Aros de Cebolla',
        description: 'Aros de cebolla apanados fritos',
        price: ' $9',
        src: aperitivoCebollaImg,
        alt: 'Foto de aperitivos de cebolla'
    },
    {
        name: 'Tartaletas de Espinaca y Crema',
        description: 'Una mini masa de hojaldre crujiente rellena con una mezcla cremosa de espinaca picada, ajo y queso derretido (frecuentemente ricotta, queso crema o mozzarella)',
        price: ' $9',
        src: aperitivosQuesitosEspinacaImg,
        alt: 'Foto de aperitivo de quesitos relleno de espinaca'
    }
];

const platosData = [
    {
        name: 'Pasta',
        description: 'Un plato caliente de pastas con queso y carne y cilantro',
        price: ' $22',
        src: pastaImg,
        alt: 'Foto de un plato de pastas'
    },
    {
        name: 'Carne Molida',
        description: 'Un plato caliento de Carne Molida con arroz, un huevo frito encima, y platanos maduros',
        price: ' $25',
        src: carneImg,
        alt: 'Foto de un plato de carne molida con arroz, un huevo frito encima, y platanos maduros'
    },
    {
        name: 'Camarones',
        description: 'Cazuela de camarones con limon y ajo',
        price: ' $20',
        src: shrimpImg,
        alt: 'Foto de un plato de camarones con salsa'
    }
];

const bebidasData = [
    {
        name: 'Martini',
        description: 'Ginebra The Botanist o Vodka Grey Goose, Vermut Seco Dolin, piel de limón exprimida o aceituna Castelvetrano',
        price: ' $17',
        src: drinkImg,
        alt: 'Foto de un martini'
    },
    {
        name: 'Milo',
        description: 'Leche de chocolate milo, frio o caliente',
        price: ' $14',
        src: miloImg,
        alt: 'Foto de un baso de leche de chocolate frio'
    },
    {
        name: 'Coka-Cola',
        description: 'Coka cola',
        price: ' $11',
        src: colaImg,
        alt: 'Foto de coka cola en vidrio y al lado un baso lleno de coka cola y hielo'
    }
];

const postreData = [
    {
        name: 'Sueño Supremo de Chocolate',
        description: 'Rico y aterciopelado chocolate mezclado a la perfección, desbordante de un decadente sirope de chocolate, una montaña de crema batida fresca y el toque crujiente de una galleta de chocolate. Espolvoreado con cacao en polvo de primera calidad.',
        price: ' $15',
        src: postreImg,
        alt: 'Un indulgente batido de chocolate en una taza de frasco masón, cubierto con crema batida, una barra de galleta de chocolate y sirope de chocolate que gotea, frente a un fondo negro con cacao en polvo cayendo'
    }
];

export {aperitivosData, platosData, bebidasData, postreData};