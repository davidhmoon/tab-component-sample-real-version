import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <PowerBIEmbed
      cssClassName = { "reportClass" }
            embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
              embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiODlhMjM4NjAtYzE2ZS00ZGQ2LWFkODctNDQ0MTFiOGFjZmFkIiwidCI6IjIyOTY1N2RhLTg2YzItNGUwOS05MzRlLTYwYWMyZDA4ZGY2ZCIsImMiOjJ9",
            }} />
    </div>
  );
};
export default ThirdTab;