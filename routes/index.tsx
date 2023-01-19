import { Routes, Route } from "react-router-dom";

import { RoutesTypeEnum } from "../../core/constant";
import NotFoundPage from "../../template/pages/errors/404";

import HomePage from "../pages/home";
import ProfilePage from "../pages/admin";

import ProductListPage from "../../market/pages/product";
import ProductItemPage from "../../market/pages/product/item";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={RoutesTypeEnum.Home} element={<HomePage />} />
      <Route path={RoutesTypeEnum.Profile} element={<ProfilePage />} />
      <Route path={RoutesTypeEnum.List} element={<ProductListPage />} />
      <Route
        path={`${RoutesTypeEnum.Item}/:id`}
        element={<ProductItemPage />}
      />
      <Route path={RoutesTypeEnum.NotFoundPage} element={<NotFoundPage />} />
    </Routes>
  );
}
