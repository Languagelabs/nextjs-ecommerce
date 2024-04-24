
import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind, Text } from '@react-email/components'
import { OrderInformation } from './components/OrderInformation'
import React from 'react'

type OrderHistoryEmailProps = {
  orders: {
    id: string
    pricePaidInCents: number
    createdAt: Date
    downloadVerificationId: string
    product: {
        name: string
        imagePath: string
        description: string
    } 
  }[] 
}

OrderHistoryEmail.PreviewProps = {
    orders: [
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 20000, 
            product: { 
                name: "Product Name 2", 
                imagePath: "/products/0f45df7f-d132-49cc-be19-799645eceb4b-food download.jfif",
                description: "Some other description about the product"
            },
            downloadVerificationId: crypto.randomUUID() 
        }, 
    ], 

} satisfies OrderHistoryEmailProps

export default function OrderHistoryEmail({orders, } : OrderHistoryEmailProps) {
    return(
        <Html>
            <Preview> Order History & Downloads </Preview>
            <Tailwind>
                <Head />
                <Body className='font-sans bg-white'>
                    <Container className='max-w-xl'> 
                        <Text className='text-xl mb-1 font-bold'>Order History</Text> 
                        {orders.map((order, index) => (
                         <React.Fragment key={order.id}>
                          <OrderInformation 
                            key={order.id}
                            order={order} 
                            product={order.product} 
                            downloadVerificationId={order.downloadVerificationId} />
                         {index < orders.length - 1 && <Hr />} 
                         </React.Fragment>
                        )) }                      
                         </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}