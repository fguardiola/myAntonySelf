import {
    RANDOM_IMG
} from './constants';



const TILEDATA = {
    home: [
        // Novedades carrousel ??
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/fotoportadawildcares.jpeg?alt=media&token=c1cf832f-1956-4edb-b3da-843839824624',
            description: 'Novedades...',
            title: 'Novedades',
            size: 'half',
            reveal: false,
            revealText: 'Update text to have some meaning'
        },
        //   Proyecto 
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/Eagle.jpg?alt=media&token=b3d67d83-43e4-402d-a98a-9e3fe7083335',
            description: 'Nuestro Proyecto...',
            title: 'Proyecto',
            size: 'half',
            reveal: false,
            revealText: 'Nuestros valores están ligados directamente con el compromiso, responsabilidad y pasión por lo que hacemos. Con la misión de preservar y conservar la fauna salvaje y la naturaleza en general. Además, junto a la integración social generar un impacto positivo que repercuta en el día a día. El centro aspira a convertirse en una gran oportunidad laboral para integrar a personas con distintos grados de diversidad funcional. Si desea saber más acerca de nuestras actividades, eventos o campañas, no dude en contactarnos a través del formulario que encontrará a continuación.'
        },
        // Actividades 
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/Naturaleza%20para%20todos.jpg?alt=media&token=532e9c7d-bcd4-47ad-a5ae-9e146ffee0a8',
            description: 'Nuestras actividades...',
            title: 'Actividades',
            size: 'half',
            reveal: false,
            revealText: 'Actividades. Centro de recuperación de fauna: Visitas y liberaciones. Actividades de Educación ambiental: Talleres, charlas y actividades de educación ambiental.Acercando la naturaleza: Actividades de educación ambiental y naturaleza adaptadas para la gente con diversidad funcional.Ecoturismo: Rutas de observación de fauna y flora,seguimiento de rastros, etc… El objetivo es que el turista aprenda, mediante la observación de los ecosistemas, a apreciar la naturaleza que le rodea y las culturas tradicionales de dicha zona natural.'

        },
        //   Organizacion 
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/DSCN2009.JPG?alt=media&token=0cd7cf64-ca9d-40d6-be27-f4f12e3f0399',
            description: 'Nuestras Equipo...',
            title: 'Nuestro Equipo',
            size: 'half',
            reveal: false,
            revealText: 'Nuestra organización. En nuestra organización contamos personal cualificado y con voluntarios que trabajan sin descanso para alcanzar y superar las metas que tenemos establecidas en referencia a la conservación de la naturaleza y la inclusión social. Nos enfocamos en actividades de educación ambiental, visitas al centro de recuperación de fauna, talleres y actividades de naturaleza para la gente con diversidad funcional.Si desea saber más acerca de nuestras actividades, eventos o campañas, no dude en contactarnos a través del formulario que encontrará a continuación.',
        },
        //  Donaciones 
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/wdcares.jpg?alt=media&token=04ddc566-f273-413d-8dc2-f982462089b4',
            description: 'Tipo de donaciones',
            title: 'Colabora',
            size: 'half',
            reveal: false,
            revealText: ` -	Donaciones:
            Tipo de donaciones
            -	• Donación Mensual (5,10,50 € y otra cantidad)
            -	• Donación Trimestral (10, 30, 60€, y otra cantidad)
            -	• Donación Anual (30, 60, 100€ y otra cantidad)
            -	Socios: 
                Tipos de Socios
            -	• Máster: Es el rango máximo de Socio. Se adquiere con las donaciones mensuales
            -	de 50€ u otra cantidad superior, y las Trimestrales y Anuales de otras cantidades
            -	superiores a 60€ trimestrales y 100€ Anuales.
            -	• Diamond: Se adquiere con las donaciones mensuales de 10€, las trimestrales de
            -	50€ y las anuales de 100€.
            -	• Platinum: Se adquiere con las donaciones mensuales de 5€, trimestrales de 30€
            -	y anuales de 60€.
            -	• Gold: Se adquiere solo con las donaciones trimestrales de 10€ y las anuales de
            -	30€.
            -	• Básico: Se adquiere solo con la donación anual de 25€.
            -	• Socio Joven/Desempleado: Se adquiere con una Donación anual de 15€ y la
            -	justificación de ser menor de 25 años u estar desempleado.

            Beneficios Socios
            -	• Máster: Beneficio del socio básico + Derecho a asistir a todas las liberaciones y
            -	posibilidad de liberar dos aves al año +Una visita gratis al centro + participación
            -	gratuita a un taller a elección de la organización.
            -	• Diamond: Beneficio del socio básico + Derecho a asistir a todas las liberaciones y
            -	posibilidad de liberar a un ave.
            -	• Platinum: Beneficio del socio básico + Derecho a asistir a todas las liberaciones y una visita gratis al centro.
            -	• Gold: Beneficio del socio básico +derecho a asistir a tres liberaciones.
            -	• Básico: Obtención de la revista anual de la fundación e información detallada sobre algunas actividades e individuos.
            -	• Joven/Desempleado: Se obtienen las mismas recompensas que el socio Gold.
            -	Apadrina:  Por X€ (Cantidad variable según la especie, pero con un mínimo de 30€) se proporcionará una carta con su historial clínico, un diploma de apadrinamiento, una ficha de la especie y fotografías, así como diverso material que se le pueda facilitar sobre la especie. En algunos casos, el padrino tiene la posibilidad de liberar al animal. En los casos que el padrino no pueda liberarlos, siempre  podrán asistir a su liberación o  en su defecto a una visita anual al centro.

            -WildSupporters: 1euro/mes -> 12euros/año. Consistiría en donaciones de la gente de 1 euro al mes, renovable o con posibilidad de cancelarlo anualmente. Suponiendo una donación pequeña de voluntad a la entidad, pero de mucho valor para el centro y que permite la participación en el blog.`
        },
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/DSCN2668.JPG?alt=media&token=c1f9409c-a82d-4c2a-a488-f93dcbd600a9',
            description: 'Nuestro Partners...',
            title: 'Partners',
            size: 'half',
            reveal: false,
            revealText: 'Sobre el proyecto. Los valores de la empresa son los de la preservación y conservación de la fauna salvaje y de la naturaleza. Además de incentivar la integración social en ámbitos faunísticos, la integración de la naturaleza y la fauna en la vida cotidiana y su importancia. Juntamente con la creación de una concienciación colectiva y un aumento de la educación sobre el medioambiente y la fauna salvaje. El proyecto se basa en la creación de un centro multifunción e integrador con la naturaleza, en el que una parte importante será como Centro de recuperación de la fauna salvaje y otra como centro de ecoturismo y educación ambiental. Dicho centro será un centro inclusivo con la gente con diversidad funcional, es decir el centro empleará a gente con diversidad funcional para que trabajen en el centro y a su vez se realizaran talleres, cursos, visitas etc… para la que la gente con diversidad funcional pueda sentirse más integrada con la naturaleza y de los beneficios que esta supone.'
        },
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/Pardela2.jpg?alt=media&token=31ae6fc5-08dd-4144-9feb-45a0170ec3dc',
            description: 'Nuestro blog...',
            title: 'Blog',
            size: 'half',
            reveal: false,
            revealText: 'Sobre el proyecto. Los valores de la empresa son los de la preservación y conservación de la fauna salvaje y de la naturaleza. Además de incentivar la integración social en ámbitos faunísticos, la integración de la naturaleza y la fauna en la vida cotidiana y su importancia. Juntamente con la creación de una concienciación colectiva y un aumento de la educación sobre el medioambiente y la fauna salvaje. El proyecto se basa en la creación de un centro multifunción e integrador con la naturaleza, en el que una parte importante será como Centro de recuperación de la fauna salvaje y otra como centro de ecoturismo y educación ambiental. Dicho centro será un centro inclusivo con la gente con diversidad funcional, es decir el centro empleará a gente con diversidad funcional para que trabajen en el centro y a su vez se realizaran talleres, cursos, visitas etc… para la que la gente con diversidad funcional pueda sentirse más integrada con la naturaleza y de los beneficios que esta supone.'
        },
        {
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myprofile-6d8d3.appspot.com/o/34811343_2477352585623525_6835618890295279616_o.jpg?alt=media&token=2cf3f163-27ac-4743-8e7a-d6f3ce478ebf',
            description: 'Contactanos',
            title: 'Contacto',
            size: 'half',
            reveal: false,
            revealText: 'Sobre el proyecto. Los valores de la empresa son los de la preservación y conservación de la fauna salvaje y de la naturaleza. Además de incentivar la integración social en ámbitos faunísticos, la integración de la naturaleza y la fauna en la vida cotidiana y su importancia. Juntamente con la creación de una concienciación colectiva y un aumento de la educación sobre el medioambiente y la fauna salvaje. El proyecto se basa en la creación de un centro multifunción e integrador con la naturaleza, en el que una parte importante será como Centro de recuperación de la fauna salvaje y otra como centro de ecoturismo y educación ambiental. Dicho centro será un centro inclusivo con la gente con diversidad funcional, es decir el centro empleará a gente con diversidad funcional para que trabajen en el centro y a su vez se realizaran talleres, cursos, visitas etc… para la que la gente con diversidad funcional pueda sentirse más integrada con la naturaleza y de los beneficios que esta supone.'
        },

    ],
    collaborate: [

    ]
}

export default TILEDATA;