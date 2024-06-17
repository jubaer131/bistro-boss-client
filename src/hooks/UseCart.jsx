import { useQuery } from "@tanstack/react-query";
import Useaxioussecure from "./Useaxioussecure";
import UseAuth from "../assets/UseAuth";


const UseCart = () => {
    const axiosSecure = Useaxioussecure()
    const { user } = UseAuth()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default UseCart;