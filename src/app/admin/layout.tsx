import { Nav, NavLink } from '@/components/Nav'

export const dynamic = 'force-dynamic' //disable nextjs caching for admin pages

export default function AdminLayout({children} : {children: React.ReactNode}) {
  return ( 
    <>  
        <Nav>
            <NavLink href='/admin'>Dashboard</NavLink>
            <NavLink href='/admin/products'>Products</NavLink>
            <NavLink href='/admin/users'>Customers</NavLink>
            <NavLink href='/admin/orders'>Sales</NavLink>
        </Nav>
        <div className="p-4">{children}</div> 
    </> 
  )
}
