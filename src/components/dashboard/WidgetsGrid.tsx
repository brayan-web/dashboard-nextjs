'use client'
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { FaCartShopping } from "react-icons/fa6";
export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count);

  return (

      <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget title='contador' label={count}  subtitle='Carrito de compras' href='/dashboard/counter' icon={<FaCartShopping size={50} className="text-blue-500"/>}/>
            {/* <SimpleWidget/> */}
        </div>
   
  )
}


