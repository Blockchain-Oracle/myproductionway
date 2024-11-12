// import { SignIn, SignOut } from "./AuthComponent";
// export default function TopMenu() {
//   const session = getServerAuthSession();
//   console.log(
//     JSON.parse(JSON.stringify(session, null, 2)),
//     "/............................................",
//   );
//   const LoginLogOutBtn = () => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access

//     if (!JSON.parse(JSON.stringify(session, null, 2))) {
//       console.log(JSON.stringify(session, null, 2));
//       return <SignIn />;
//     } else {
//       // console.log(".sasa");
//       console.log(
//         Object.keys(JSON.parse(JSON.stringify(session, null, 2)) as {}),
//       );
//     }

//     // return (
//     //   <div className="flex items-center space-x-2">
//     //     <p className="hidden text-white hover:block">
//     //       {session.data.user.email}
//     //     </p>
//     //     <SignOut />
//     //   </div>
//     // );
//   };
//   {
//     return (
//       <div className="flex flex-col justify-between space-y-2 bg-slate-600">
//         <div>
//           <div className="flex flex-row space-x-2">
//             <div>
//               <a href="/home" className="text-white">
//                 Home
//               </a>
//             </div>
//             <div>
//               <a href="/about" className="text-white">
//                 About
//               </a>
//             </div>
//             <div>
//               <a href="/contact" className="text-white">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="flex flex-row space-x-2">
//             <div className="">
//               <LoginLogOutBtn />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
