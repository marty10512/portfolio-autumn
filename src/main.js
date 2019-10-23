import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax";
import "./scripts/diagram";
import "./scripts/works-slider";
import "./scripts/comments-slider";