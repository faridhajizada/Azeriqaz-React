import React from "react";
import { TablesWidget13 } from "./../../../_metronic/partials/widgets/tables/TablesWidget13";
import { Content } from "./../../../_metronic/layout/components/content";

function Users() {
  const title = "İstifadəçilər";
  const route = "Dashboard / Istifadəçilər";
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "İstifadəçi" },
    { key: "number", label: "Nömrə" },
    { key: "region", label: "Region" },
    { key: "rayon", label: "Rayon" },
    { key: "role", label: "Rol" },
    { key: "date", label: "Qoşulma tarixi" },
    { key: "actions", label: "Əməliyyatlar" },
  ];

  const data = [
    {
      id: 1,
      name: "Zərifə Hüseynova",
      email: "zerife.huseynova@socar.az",
      title: "ZH",
      number: "+994501234567",
      region: "Sumqayıt",
      rayon: "Sumqayıt",
      badgeClass: "bg-light-primary text-primary",
      role: "Qəza Dispetçer",
      date: "01.01.2021",
      time: "10:00",
      actions: {
        edit: true,
        delete: true,
      },
    },
    {
      id: 2,
      name: "Yaşar Məmmədov",
      email: "yashar.memmedov@socar.az",
      title: "YM",
      number: "+994501234567",
      region: "Gəncə RQİİ",
      rayon: "Goranboy",
      badgeClass: "bg-light-primary text-primary",
      role: "Qəza İşçi",
      date: "01.01.2021",
      time: "10:00",
      actions: {
        edit: true,
        delete: true,
      },
    },
    {
      id: 3,
      name: "Aysel Hüseynova",
      email: "aysel.huseynova@socar.az",
      title:"AH",
      number: "+994501234567",
      region: "Sumqayıt",
      rayon: "Sumqayıt",
      badgeClass: "bg-light-primary text-primary",
      role: "Qəza Dispetçer",
      date: "01.01.2021",
      time: "10:00",
      actions: {
        edit: true,
        delete: true,
      },
    },
  ];
  return (
    <>
      <Content>
        <TablesWidget13
          className="mb-5 mb-xl-8"
          columns={columns}
          data={data}
          title={title}
          route={route}
        />
      </Content>
    </>
  );
}

export default Users;
