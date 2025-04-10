import { lazy, FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  const Users = lazy(() => import("../pages/users/Users"));
  const Call = lazy(() => import("../pages/accident-calls/Call/Call"));
  const Car = lazy(() => import("./../pages/accident-calls/Car/Car"));
  const Category = lazy(
    () => import("./../pages/accident-calls/Category/Category")
  );
  const Statistics = lazy(
    () => import("./../pages/accident-calls/Statistics/Statistics")
  );

  
  const Role = lazy(() => import("../pages/settings/Role/Role"));
  const Permission = lazy(
    () => import("../pages/settings/Permission/Permission")
  );
  const Module = lazy(() => import("../pages/settings/Module/Module"));
  const Logs = lazy(() => import("../pages/settings/Logs/Logs"));
  const ProcessLog = lazy(
    () => import("../pages/settings/ProcessLog/ProcessLog")
  );
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="builder" element={<BuilderPageWrapper />} />
        <Route
          path="/dashboard/users"
          element={
            <SuspensedView>
              <Users />
            </SuspensedView>
          }
        />
        {/* Accident-calls */}
        <Route
          path="/dashboard/accident-calls/call"
          element={
            <SuspensedView>
              <Call />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/accident-calls/car"
          element={
            <SuspensedView>
              <Car />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/accident-calls/category"
          element={
            <SuspensedView>
              <Category />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/accident-calls/statistics"
          element={
            <SuspensedView>
              <Statistics />
            </SuspensedView>
          }
        />
        {/* Accident-calls */}

        {/* Settings */}
        <Route
          path="/dashboard/settings/role"
          element={
            <SuspensedView>
              <Role />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/settings/permission"
          element={
            <SuspensedView>
              <Permission />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/settings/module"
          element={
            <SuspensedView>
              <Module />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/settings/logs"
          element={
            <SuspensedView>
              <Logs />
            </SuspensedView>
          }
        />
        <Route
          path="/dashboard/settings/process-log"
          element={
            <SuspensedView>
              <ProcessLog />
            </SuspensedView>
          }
        />

        {/* Settings */}

        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
