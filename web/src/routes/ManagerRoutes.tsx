import { Routes as RouterRoutes, Route } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="refund/:id" element={<Refund />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
}




// import { Routes, Route } from "react-router";
// import { AppLayout } from "../components/AppLayout";
// import { Dashboard } from "../pages/Dashboard";
// import { NotFound } from "../pages/NotFound";
// import { Refund } from "../pages/Refund";

// export function Routes() {
//     return (
//         <Routes>
//             <Route path="/" element={<AppLayout />}>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/refund/:id" element={<Refund />} />
//             </Route>

//             <Route path="*" element={<NotFound />} />
//         </Routes>
//     )
// }
