// // src/app/dashboard/page.tsx
// 'use client';
// import React from 'react';
// import { useAppSelector, useAppDispatch } from '@/redux/hooks';
// import { useLogoutUserMutation } from '@/redux/services/authApi';
// import { clearAuth } from '@/redux/slices/authSlice';
// import { useRouter } from 'next/navigation';

// export default function SellerDashboard() {
//   const { user, isAuthenticated } = useAppSelector((state) => state.auth);
//   const [logoutUser] = useLogoutUserMutation();
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   React.useEffect(() => {
//     if (!isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, router]);

//   const handleLogout = async () => {
//     await logoutUser();
//     dispatch(clearAuth());
//     router.push('/login');
//   };

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 border">
//         <div className="flex justify-between items-center border-b pb-4 mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}!</h1>
//             <p className="text-sm text-gray-500">Account Type: <span className="capitalize font-semibold text-orange-600">{user.role}</span></p>
//           </div>
//           <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600">
//             Sign Out
//           </button>
//         </div>

//         {/* Profile Details Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-gray-50 p-4 rounded-lg border">
//             <h3 className="font-semibold text-gray-700 mb-2">Business Profile</h3>
//             <p className="text-sm"><span className="font-medium">Company:</span> {user.companyName || 'Not Verified'}</p>
//             <p className="text-sm mt-1"><span className="font-medium">GSTIN:</span> {user.gstNumber || 'N/A'}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded-lg border">
//             <h3 className="font-semibold text-gray-700 mb-2">Contact Details</h3>
//             <p className="text-sm"><span className="font-medium">Email:</span> {user.email}</p>
//             <p className="text-sm mt-1"><span className="font-medium">Trade Verification:</span> Active</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


const SellerDashboard = () => { 
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 border">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, Seller!</h1>
            <p className="text-sm text-gray-500">Account Type: <span className="capitalize font-semibold text-orange-600">Seller</span></p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );  
}

export default SellerDashboard;