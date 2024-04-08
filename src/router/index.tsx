import { useEffect, ComponentType } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import screenUrl from "../contants/screenUrls";
import HomePage from "../pages/HomePage/HomePage";


interface PageWrapperProps {
  title: string;
  component: ComponentType;
  isHeader: boolean;
  isFooter: boolean;
}

const publicRouters = [
  {
    path: screenUrl.HOME,
    component: HomePage,
    title: "Home Page",
    isHeader: false,
    isFooter: false,
  },
 
];

function WrapperComponent({
  title,
  component: Component,
  // isHeader,
  // isFooter,
}: PageWrapperProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Pass all props to the Component
  return (
    <div>
      {/* {isHeader && <Header />} */}
      <Component />
      {/* {isFooter && <Footer />} */}
    </div>
  );
}

function NotFound() {
  return <div>Not Found 404</div>;
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        {publicRouters.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={(
              <WrapperComponent
                title={route.title}
                component={route.component}
                isHeader={route.isHeader}
                isFooter={route.isFooter}
              />
            )}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export { AppRouter };
