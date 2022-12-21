import React from "react";
import { languages, toolsFramework } from "../data";
import Bar from "../components/Bar";

export default function skills() {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-9 lg:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Cloud, Tools & Frameworks</h5>
          <div className="my-2">
            {toolsFramework.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
