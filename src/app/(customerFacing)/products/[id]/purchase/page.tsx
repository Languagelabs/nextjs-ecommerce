import db from "@/db/db"
import { notFound } from "next/navigation"

export default async function ProductsPage({ 
    params: { id } 
}: { 
    params:  { id: string }
}){
    const product = await db.product.findUnique({ where: { id } })
    if(!product) return notFound()

    return <h1>Product billing page</h1>
}