import { columns } from "../components/columns";
import { DataTable } from "../components/data-table";


const x = [
  {
    // ! order details
    "id": "order1",
    "orderStatus": "onhold",
    "orderName": "PUBG Mobile 660 UC (Unknown Cash) - GLOBAL",
    "orderTotalCredit": 5000,
    "oneUnitPrice": 25,
    "quantityOrdered": 200,
    "createdAt": "2024-11-20T10:00:00.000Z",
    "deliveredAt": null,
    "orderNotes": "Leave package at the front door",
    "estimatedDeliveryDate": "2 - 4 hours",
    "orderResponseEmail": "client1@example.com",
    // ! user details
    user: {
      id: "m5gr84i9",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      fullName: "Bessie Cooper",
      userName: "Lamiaker",
      email: "ken99@yahoo.com",
      contactNumber: "+213789977687",
      accountStatus: "active", // active, onhold, suspended, banned
      accountType: "manager", // manager, reseller, admin, testManager, testReseller
      testAccount: false,
      membershipTier: "silver", //  silver, gold, platinum
      currentAccountBalance: 5000, // user current account balance
      totalAccountBalance: 23000, // user total account balance
      totalBalanceSpent: 1500, // total balance spent
      totalQuantityPurchased: 234, // total quantity purchased        
      userIpAddress: "192.168.1.1", // user ip address
      registrationDate: "2025-03-05T12:00:00.000Z",
      lastLoginDate: "2023-12-01T08:30:00.000Z",
      totalOrders: 27, // total orders
      completedOrders: 20, // completed orders
      pendingOrders: 7, // pending orders
      rejectedOrders: 0, // rejected orders
      orderHistory: [
        {
          id: "m5gr84i9",
          orderStatus: "delivered", // More detailed status (processing, delivered, rejected)
          orderName: "Bein sport 3 months membership", // order name
          orderTotalCredit: 1000, // total credit of order
          oneUnitPrice: 5, // one unit price
          quantityOrdered: 200, // quantity ordered
          createdAt: "2025-03-05T12:00:00.000Z", // order created at
          delivredAt: "2025-03-05T12:00:00.000Z", // order delivred at
          orderNote: "Leave package at the front door",
          orderResponse: "Order delivered successfully + response code",
          estimatedDeliveryDate: "from 2 to 4 hours",
          orderResponseEmail: "client@example.com",
        }
      ],
      loginHistory: [
        {
          id: "m5gr84i9",
          loginDate: "2023-12-01T08:30:00.000Z", // login date
          loginIpAddress: "192.168.1.1", // login ip address
          loginLocation: "Tunis, Tunisia", // login location
          loginDevice: "Windows 10", // login device
          loginBrowser: "Chrome", // login browser
          loginOs: "Windows 10", // login os
        },
        {
          id: "m5gr84i9",
          loginDate: "2023-12-01T08:30:00.000Z", // login date
          loginIpAddress: "192.168.1.1", // login ip address
          loginLocation: "Tunis, Tunisia", // login location
          loginDevice: "Windows 10", // login device
          loginBrowser: "Chrome", // login browser
          loginOs: "Windows 10", // login
        }
      ]
    }
  }
]


const tasks = [
  {
    "id": "TASK-8782",
    "orderName": "You can't compress the program without quantifying the open-source SSD pixel!",
    "orderStatus": "onhold",
    "orderTotalCredit": 500,
    "oneUnitPrice": 25,
    "quantityOrdered": 200,
    "createdAt": "2025-11-20T10:00:00.000Z",
    "deliveredAt": null,
    "estimatedDeliveryDate": "2 - 4 hours",
    "user": {
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      "fullName": "Bessie Cooper",
      "userName": "salahy",
      "email": "ken99@yahoo.com",
      "accountType": "manager",
    }
  },
  {
    "id": "TASK-7878",
    "orderName": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    "orderStatus": "completed",
    "orderTotalCredit": 50,
    "oneUnitPrice": 25,
    "quantityOrdered": 200,
    "createdAt": "2023-11-20T10:00:00.000Z",
    "deliveredAt": null,
    "estimatedDeliveryDate": "2 - 4 hours",
    "user": {
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      "fullName": "Bessie Cooper",
      "userName": "lamia",
      "email": "ken99@yahoo.com",
      "accountType": "manager",
    }
  },
  {
    "id": "TASK-7878",
    "orderName": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    "orderStatus": "rejected",
    "orderTotalCredit": 5000,
    "oneUnitPrice": 25,
    "quantityOrdered": 200,
    "createdAt": "2024-11-20T10:00:00.000Z",
    "deliveredAt": null,
    "estimatedDeliveryDate": "2 - 4 hours",
    "user": {
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      "fullName": "Bessie Cooper",
      "userName": "sousou",
      "email": "ken99@yahoo.com",
      "accountType": "manager",
    }
  }
]


export default function TaskPage() {

  return (
    <>
      <div className="md:hidden font-inter">
        <img
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
