import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../UseAuth";
import Useaxioussecure from "../../../../hooks/Useaxioussecure";


const Paymenthistory = () => {
    const { user } = UseAuth()
    const axiosSecure = Useaxioussecure()

    const { data: payments = [] } = useQuery({

        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }

    })
    return (
        <div>
            <h1 className="text-3xl">Total payments : {payments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="space-x-6">
                            <th>Email</th>
                            <th>Price </th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments.map((payment, index) => <tr key={payment.id}>
                            <th>{index + 1}</th>
                            <th>{payment.email}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transactionid}</td>
                            <td>{payment.data}</td>
                            <td>{payment.status}</td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Paymenthistory;