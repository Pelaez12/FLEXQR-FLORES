# FLEXQR · Flores & Boutique

Demo floral personalizada para parejas, amistades y familia. La aplicación activa contiene únicamente la boutique, sin referencias a Rosatel Style ni páginas de Pollería & Brasas.

## Abrir en localhost

```powershell
npm install
npm run build
npm start
```

Abre http://localhost:8088/flexqr-flores. El servidor escucha únicamente en 127.0.0.1 y sirve el build de la boutique. Si el puerto está ocupado, falla sin abrir otro puerto.

Para trabajar con recarga automática: `npm run dev`. Usa el mismo puerto; ejecuta un solo servidor a la vez.

## Experiencia

- Tema crema y rosa, fotografías florales propias y modo oscuro ciruela.
- Ramos SiempreTú, QuéSuerteTenerte y MiLugarFavorito.
- Selección según vínculo, ocasión, presupuesto, búsqueda y favoritos.
- Nombre de la persona, dedicatoria, sugerencias por vínculo, cinta y chocolates.
- En la sección de mensajes, flechas para recorrer las tres combinaciones y una tarjeta editable. El ramo elegido conserva ese mensaje al abrir su personalización.
- Bolsa que conserva los regalos personalizados en este navegador. Dedicatorias diferentes se mantienen como regalos distintos.
- Solicitud de delivery o recojo con validación de fecha y celular peruano. WhatsApp abre un borrador; la persona debe enviarlo. Disponibilidad, envío, horario y total requieren confirmación de la boutique.

## Datos de la demo

Los precios, las composiciones y las fotos son referenciales. Las imágenes fueron generadas para esta demo y optimizadas a WebP. No se cobra ni se confirma un pedido desde la web.

Desarrollado por **FLEXCORE**; producto **FLEXQR**. El pie de página y el contacto para solicitar una página web, **992272521**, son fijos por instrucción del usuario. Los productos y su distribución son propiedad de FLEXCORE y no pueden distribuirse sin permiso. Para editar el catálogo, precios y mensajes, usa `src/data/flowers.ts`.

Esta carpeta contiene únicamente la boutique floral. La demo original vive en la carpeta hermana FLEXQR. El servidor requiere dist y sirve únicamente el build floral.

## Verificación

`npm run build` ejecuta TypeScript y crea el build de Vite.
