import { useQuery } from "@tanstack/react-query"
import UseaxiosPublic from "./UseaxiosPublic"

const usemanue = () => {

    const axiosPublic = UseaxiosPublic()

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })

    return [menu, loading, refetch]

}


export default usemanue