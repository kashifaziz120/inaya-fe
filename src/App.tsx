import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
const Layout = lazy(() => import("./components/layout"));
const AccomoditiesOverview = lazy(
  () => import("./pages/accomodities-overview")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<AccomoditiesOverview />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
