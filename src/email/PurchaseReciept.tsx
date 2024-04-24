import { Body, Container, Head, Heading, Html, Preview, Tailwind, Text } from '@react-email/components'
import { OrderInformation } from './components/OrderInformation'

type PurchaseRecieptEmailProps = {
  product: {
    name: string;
    imagePath: string;
    description: string;
  }
  order: {
    id: string;
    createdAt: Date;
    pricePaidInCents: number;
  }
  downloadVerificationId: string
}

PurchaseReceiptEmail.PreviewProps = {
    product: { 
        name: "Product Name", 
        imagePath: "/products/0f45df7f-d132-49cc-be19-799645eceb4b-food download.jfif",
        description: "Some description about the product"
    },
    order: {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        pricePaidInCents: 10000,
    },
    downloadVerificationId: crypto.randomUUID() 

} satisfies PurchaseRecieptEmailProps

export default function PurchaseReceiptEmail({product, order, downloadVerificationId } : PurchaseRecieptEmailProps) {
    return(
        <Html>
            <Preview> Download {product.name} and view reciept</Preview>
            <Tailwind>
                <Head />
                <Body className='font-sans bg-white'>
                    <Container className='max-w-xl'> 
                        <Text className='text-xl mb-1 font-bold'>Purchases Receipt</Text>                       
                        <OrderInformation order={order} product={product} downloadVerificationId={downloadVerificationId} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}