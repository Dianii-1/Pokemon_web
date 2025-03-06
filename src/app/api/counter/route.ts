// este archivo es un RESTFull API que crea un metodo HTTP
// no se puede crear en donde ya haya un page por que no se va a renderizar
// para consultarlo se abre postman o insomnia y la url va a ser localhoost:3000/la ruta creada
// export async function GET(request: Request) {} funcion para crearlo
// documentacion https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        counter:100,
        method:'GET'
    })
}

export async function POST() {
    return NextResponse.json({
        counter:100,
        method:'POST'
    })
}