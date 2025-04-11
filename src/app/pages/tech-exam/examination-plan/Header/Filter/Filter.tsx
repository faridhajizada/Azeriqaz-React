import React, { useRef, useEffect, useState } from "react";
import Form from "./Form/Form";
import Actions from "./Action/Actions";

interface FilterProps {
  showFilter: boolean;
}

const Filter: React.FC<FilterProps> = ({ showFilter }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(showFilter ? scrollHeight : 0);
    }
  }, [showFilter]);

  return (
    <div
      className="filter-accordion mt-3"
      style={{
        height: `${height}px`,
        overflow: "hidden",
        transition: "height 0.3s ease, opacity 0.3s ease",
        opacity: showFilter ? 1 : 0,
      }}
    >
      <div ref={contentRef}>
        <div className="card p-4 shadow-sm">
          <div className="row">
            <div className="col-md-10">
              <Form />
            </div>
            <div className="col-md-2">
              <Actions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;