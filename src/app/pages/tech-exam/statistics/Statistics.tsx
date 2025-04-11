import PageTitle from "../../../components/PageTitle/PageTitle";
import { Content } from "./../../../../_metronic/layout/components/content/Content";

function Statistics() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <PageTitle
          title="Statistikalar"
          breadcrumb={[
            { label: "Dashboard", path: "/dashboard" },
            {
              label: "Texniki müayinə",
              path: "/dashboard/tech-exam/statistics",
            },
            {
              label: "Statistikalar",
              path: "/dashboard/tech-exam/statistics",
            },
          ]}
        />
      </div>
    </Content>
  );
}

export default Statistics;
