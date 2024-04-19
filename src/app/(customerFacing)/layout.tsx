import { Nav, NavLink } from '@/components/Nav'

export const dynamic = 'force-dynamic' //disable nextjs caching for admin pages

export default function Layout({children} : {children: React.ReactNode}) {
  return ( 
    <>  
        <Nav>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/products'>Products</NavLink>
            <NavLink href='/orders'>My Orders</NavLink> 
        </Nav>
        <div className="p-4">{children}</div> 
    </> 
  )
}
