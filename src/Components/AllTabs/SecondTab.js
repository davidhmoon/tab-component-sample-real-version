import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";

import ThirdTab from "../AllTabs/ThirdTab";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
const SecondTab = () => {
  return (
    <div className="SecondTab">
      <PowerBIEmbed
      cssClassName = { "reportClass" }
            embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
              embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzk2MjI0OGQtODAwZi00NmEzLTk5NTUtZWE3MDM5YWRhNTU1IiwidCI6IjIyOTY1N2RhLTg2YzItNGUwOS05MzRlLTYwYWMyZDA4ZGY2ZCIsImMiOjJ9",
            }} />
    </div>
  );
};
export default SecondTab;