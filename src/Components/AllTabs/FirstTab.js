import React, { useState } from "react";

import SecondTab from "../AllTabs/SecondTab";
import ThirdTab from "../AllTabs/ThirdTab";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
const FirstTab = () => {
  return (
    <div className="FirstTab">
       <PowerBIEmbed
            cssClassName = { "reportClass" }
            embedConfig = {{
              type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
              embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTllNmY0MWEtMTIxZC00NDM2LWFjMzAtYzdhYWM5NGE2ZDRkIiwidCI6IjIyOTY1N2RhLTg2YzItNGUwOS05MzRlLTYwYWMyZDA4ZGY2ZCIsImMiOjJ9",
            }} />
    </div>
  );
};
export default FirstTab;