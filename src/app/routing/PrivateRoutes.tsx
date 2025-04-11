import React from "react";
import { lazy, FC, Suspense, useMemo } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";

const components = {
  Users: {
    component: lazy(() => import("../pages/users/Users")),
    path: "users",
  },

  AccidentCalls: {
    Call: {
      component: lazy(() => import("../pages/accident-calls/Call/Call")),
      path: "call",
    },
    Car: {
      component: lazy(() => import("../pages/accident-calls/Car/Car")),
      path: "car",
    },
    Category: {
      component: lazy(
        () => import("../pages/accident-calls/Category/Category")
      ),
      path: "category",
    },
    Statistics: {
      component: lazy(
        () => import("../pages/accident-calls/Statistics/Statistics")
      ),
      path: "statistics",
    },
  },

  Settings: {
    Role: {
      component: lazy(() => import("../pages/settings/Role/Role")),
      path: "role",
    },
    Permission: {
      component: lazy(() => import("../pages/settings/Permission/Permission")),
      path: "permission",
    },
    Module: {
      component: lazy(() => import("../pages/settings/Module/Module")),
      path: "module",
    },
    ProcessLog: {
      component: lazy(() => import("../pages/settings/ProcessLog/ProcessLog")),
      path: "process-log",
    },
    Logs: {
      component: lazy(() => import("../pages/settings/Logs/Logs")),
      path: "logs",
    },
  },

  TechExam: {
    ExaminationPlan: {
      component: lazy(
        () => import("../pages/tech-exam/examination-plan/ExaminationPlan")
      ),
      path: "examination-plan",
    },
    ShutdownPlan: {
      component: lazy(
        () => import("../pages/tech-exam/shutdown-plan/ShutdownPan")
      ),
      path: "shutdown-plan",
    },
    Device: {
      component: lazy(() => import("../pages/tech-exam/device/Device")),
      path: "device",
    },
    Violation: {
      component: lazy(() => import("../pages/tech-exam/violation/Violation")),
      path: "violation",
    },
    ExaminationYearly: {
      component: lazy(
        () => import("../pages/tech-exam/examination-yearly/ExaminationYearly")
      ),
      path: "examination-yearly",
    },
    Contractor: {
      component: lazy(() => import("../pages/tech-exam/contractor/Contractor")),
      path: "contractor",
    },
    Examination: {
      component: lazy(
        () => import("../pages/tech-exam/examination/Examination")
      ),
      path: "examination",
    },
    TechStatistics: {
      component: lazy(() => import("../pages/tech-exam/statistics/Statistics")),
      path: "statistics",
    },
  },
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = useMemo(() => getCSSVariableValue("--bs-primary"), []);

  TopBarProgress.config({
    barColors: { "0": baseColor },
    barThickness: 1,
    shadowBlur: 5,
  });

  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />

        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="builder" element={<BuilderPageWrapper />} />

        <Route
          path="/dashboard/users"
          element={
            <SuspensedView>
              <components.Users.component />
            </SuspensedView>
          }
        />

        {Object.entries(components.AccidentCalls).map(
          ([name, { component, path }]) => (
            <Route
              key={`accident-calls-${path}`}
              path={`/dashboard/accident-calls/${path}`}
              element={
                <SuspensedView>{React.createElement(component)}</SuspensedView>
              }
            />
          )
        )}

        {Object.entries(components.Settings).map(
          ([name, { component, path }]) => (
            <Route
              key={`settings-${path}`}
              path={`/dashboard/settings/${path}`}
              element={
                <SuspensedView>{React.createElement(component)}</SuspensedView>
              }
            />
          )
        )}

        {Object.entries(components.TechExam).map(
          ([name, { component, path }]) => (
            <Route
              key={`tech-exam-${path}`}
              path={`/dashboard/tech-exam/${path}`}
              element={
                <SuspensedView>{React.createElement(component)}</SuspensedView>
              }
            />
          )
        )}

        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
