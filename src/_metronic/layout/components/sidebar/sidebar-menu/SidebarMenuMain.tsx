import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  return (
    <>
      {/* Users */}
      <SidebarMenuItem
        to="/dashboard/users"
        title="İstifadəçilər"
        icon="profile-circle"
        fontIcon="bi-person"
      />
      {/* Users */}

      {/* Accident-calls */}
      <SidebarMenuItemWithSub
        to="#"
        title="Qəza çağırışı"
        fontIcon="bi-exclamation-triangle"
        icon="bi bi-exclamation-triangle fs-2"
      >
        <SidebarMenuItem
          to="/dashboard/accident-calls/call"
          title="Çağırışlar"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/accident-calls/car"
          title="Avtomobillər"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/accident-calls/category"
          title="Kategoriyalar"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/accident-calls/statistics"
          title="Statistikalar"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      {/* Accident-calls */}

      {/* Tənzimləmələr */}
      <SidebarMenuItemWithSub
        to="#"
        title="Tənzimləmələr"
        fontIcon="bi-gear"
        icon="bi bi-gear fs-2"
      >
        <SidebarMenuItem
          to="/dashboard/settings/role"
          title="Rollar"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/settings/permission"
          title="Səlahiyyətlər"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/settings/module"
          title="Modullar"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/settings/process-log"
          title="Əməliyyat tarixçəsi"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/settings/logs"
          title="Loglar"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      {/* Tənzimləmələr */}

      {/* Texniki müayinə */}
      <SidebarMenuItemWithSub
        to="#"
        title="Texniki müayinə"
        fontIcon="bi-gear"
        icon="bi bi-activity fs-2"
      >
        <SidebarMenuItem
          to="/dashboard/tech-exam/examination-plan"
          title="Müayinə Planı"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/tech-exam/shutdown-plan"
          title="Dayandırma Planı"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/tech-exam/device"
          title="Qurğular"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/tech-exam/violation"
          title="Pozuntu"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/tech-exam/examination-yearly"
          title="İllik qrafiklər"
          hasBullet={true}
        />

        <SidebarMenuItem
          to="/dashboard/tech-exam/contractor"
          title="Podratçılar"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/tech-exam/examination-akt"
          title="Müayinə aktları"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/tech-exam/statistics"
          title="Statistikalar"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      {/* Texniki müayinə */}
    </>
  );
};

export { SidebarMenuMain };
