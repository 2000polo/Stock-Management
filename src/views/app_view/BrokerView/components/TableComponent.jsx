import React from 'react'

const TableComponent = () => {

    const tableRow = (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
    const stockData = [
        {
            stock: 'Reliance Industries Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
            change_percentage: 0.46,
            change: 53,
            technical_rating: 'Buy',
            sector: 'Energy Minerals'
        },
        {
            stock: 'Tata Consultancy Services Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
            change_percentage: 0.35,
            change: 28,
            technical_rating: 'Hold',
            sector: 'Technology Services'
        },
        {
            stock: 'HDFC Bank Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
            change_percentage: -0.12,
            change: -15,
            technical_rating: 'Sell',
            sector: 'Finance'
        },
        {
            stock: 'Infosys Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/5@94.webp',
            change_percentage: 0.22,
            change: 19,
            technical_rating: 'Buy',
            sector: 'Technology Services'
        },
        {
            stock: 'ICICI Bank Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/6@94.webp',
            change_percentage: 0.29,
            change: 23,
            technical_rating: 'Hold',
            sector: 'Finance'
        },
        {
            stock: 'Bharti Airtel Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/7@94.webp',
            change_percentage: -0.45,
            change: -32,
            technical_rating: 'Sell',
            sector: 'Telecommunications'
        },
        {
            stock: 'Wipro Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/8@94.webp',
            change_percentage: 0.15,
            change: 11,
            technical_rating: 'Buy',
            sector: 'Technology Services'
        },
        {
            stock: 'Maruti Suzuki India Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/9@94.webp',
            change_percentage: 0.38,
            change: 41,
            technical_rating: 'Buy',
            sector: 'Consumer Durables'
        },
        {
            stock: 'State Bank of India',
            img: 'https://img.daisyui.com/images/profile/demo/10@94.webp',
            change_percentage: -0.27,
            change: -21,
            technical_rating: 'Sell',
            sector: 'Finance'
        },
        {
            stock: 'Larsen & Toubro Ltd.',
            img: 'https://img.daisyui.com/images/profile/demo/11@94.webp',
            change_percentage: 0.33,
            change: 37,
            technical_rating: 'Hold',
            sector: 'Industrial Services'
        }
    ];        

  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th> */}
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                    </div>
                </div>
                </td>
                <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>Red</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 3 */}
            <tr>
                {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th> */}
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                    </div>
                </div>
                </td>
                <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </td>
                <td>Crimson</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 4 */}
            <tr>
                {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th> */}
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                    </div>
                </div>
                </td>
                <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>Indigo</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            </tbody>
            {/* foot */}
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default TableComponent