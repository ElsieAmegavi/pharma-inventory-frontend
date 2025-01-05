import Sidebar from '../components/custom/Sidebar';
import Navbar from '../components/custom/Navbar';
import upSign from '../assets/ic-trending-up-24px.png'
import totalSales from '../assets/Total Sales.png'
import totalItems from '../assets/Total Items.png'
import finishedGoods from '../assets/Finished Item.png'
import expiredGoods from '../assets/Expired Items.png'
import StatCard from '@/components/custom/StatCard';
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <StatCard
                title="Total Items"
                value="₵10,293"
                description="1.3% Up from past week"
                imgSrc={totalSales}
                altText="Total Items Icon"
            />
            <StatCard
                title="Total Sales"
                value="₵45,000"
                description="5% Increase this month"
                imgSrc={totalItems}
                altText="Total Sales Icon"
            />
            <StatCard
                title="Finished Items"
                value="₵7,500"
                description="Completed successfully"
                imgSrc={finishedGoods}
                altText="Finished Items Icon"
            />
            <StatCard
                title="Expired Items"
                value="₵1,200"
                description="Needs urgent attention"
                imgSrc={expiredGoods}
                altText="Expired Items Icon"
            />
            </div>
          {/* <div className="grid grid-cols-4 gap-4 mb-6">
            {['Total Items', 'Total Sales', 'Finished Item', 'Expired Items'].map((title, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-xl text-center">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-medium">{title}</h3>
                        <p className="text-2xl font-bold">10293</p>
                    </div>
                    <img src={totalSales} alt="total Sales" className="h-10 w-10 mr-1"/>
                </div>
                
                <div className="flex text-sm text-green-500">
                    <img src={upSign} alt="stock sign" className="h-5 w-5 mr-1"/>
                     <span>1.3% Up from past week</span>
                </div>
              </div>
            ))}
          </div> */}

          {/* Sales Trend */}
          <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h3 className="text-lg font-medium mb-4">Sales Trend</h3>
            {/* Placeholder for Chart */}
            <div className="h-64 bg-gray-200 rounded-md">📊 Chart goes here</div>
          </div>

          {/* Top Selling Product */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-medium mb-4">Top Selling Product</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  {['Product Name', 'Quantity Sold', 'Quantity Left', 'Category', 'TotalAmt'].map((head) => (
                    <th key={head} className="py-2 border-b">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Product 1', sold: 234, left: 65, category: 'Tablet', total: 'GH₵34569.00' },
                  { name: 'Product 2', sold: 773, left: 265, category: 'Capsules', total: 'GH₵124569.00' }
                ].map((product, index) => (
                  <tr key={index}>
                    <td className="py-2">{product.name}</td>
                    <td>{product.sold}</td>
                    <td>{product.left}</td>
                    <td>{product.category}</td>
                    <td>{product.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
