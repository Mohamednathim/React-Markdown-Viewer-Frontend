import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

const Markdown = () => {
  const [markdown, setMarkdown] = useState(`# Markdown Previewer
## Markdown Previewer
### Markdown Previewer
#### Markdown Previewer
##### Markdown Previewer
###### Markdown Previewer
This is Markdown Previewer

*This is Markdown Previewer*

This is **Markdown Previewer**
>This is Markdown Previewer
1. Item 1
2. Item 2
- Item 1
- Item 2

[Google](https://www.google.com)

![Image](https://www.shutterstock.com/image-illustration/dr-apj-abdul-kalam-portrait-600nw-2310267175.jpg)

  `);

  const Navigate = useNavigate();

  const exportToMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const link = document.createElement("a");
    link.download = "markdown-export.md";
    link.href = window.URL.createObjectURL(blob);
    link.click();
    link.remove;
  };

  return (
    <div>
      <div className="markhead text-center">
        <h1 id="h1">Markdown Viewer...🖋</h1>
        <button className="logoutBtn" onClick={() => Navigate("/")}>
          Logout
        </button>
      </div>
      <div className="container">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="textarea"
        ></textarea>
        <div className="output">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      <div className="export">
        <button className="exportBtn" onClick={exportToMarkdown}>
          Export as Markdown
        </button>
      </div>
    </div>
  );
};

export default Markdown;
