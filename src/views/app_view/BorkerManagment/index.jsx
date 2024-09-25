import React, { useState } from 'react'
import BrokerList from './components/BrokerList';
import { GrAdd } from 'react-icons/gr';

const BorkerManagment = () => {

  const [currentTab, setcurrentTab] = useState('available_brokers');
 
  return (
    <div>
            {/* <p className="font-semibold text-white text-lg">Borker Managment</p>
            <div className="btn bg-green-500 text-gray-900 font-bold btn-sm"><GrAdd fontSize={12} /> Add Broker</div> */}
        <div role="tablist" className="tabs tabs-bordered w-fit mb-3">
          <a role="tab" key="available_brokers" className="tab tab-active">Avialble Brokers</a>
          <a role="tab" key="Add_new_broker" className="tab">Add New Broker</a>
          {/* <a role="tab" className="tab">Tab 3</a> */}
        </div>

        <BrokerList />
    </div>
  )
}

export default BorkerManagment;