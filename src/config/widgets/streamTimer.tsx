const streamTimer = {
  name: "Stream Timer",
  route: "/streamtimer",
  alias: "st",
  params: {
    hours: {
      type: "number",
      label: "Hours",
      shorthand: "h",
      value: 1,
    },
    minutes: {
      type: "number",
      label: "Minutes",
      shorthand: "m",
      value: 5,
    },
    seconds: {
      type: "number",
      label: "Seconds",
      shorthand: "s",
      value: 30,
    },
    background: {
      type: "string",
      label: "Background color",
      shorthand: "bg",
      value: "#000000",
    },
    color: {
      type: "string",
      label: "Text color",
      shorthand: "col",
      value: "#ffffff"
    },
    width: {
      type: "number",
      label: "Container width",
      shorthand: "w",
      value: "200",
    },
    fontFamily: {
      type: "string",
      label: "Font family",
      shorthand: "ff",
      value: "Arial",
    },
    fontSize: {
      type: "number",
      label: "Font size",
      shorthand: "fz",
      value: 24
    },
    fontWeight: {
      type: "string",
      label: "Font weight",
      shorthand: "fw",
      value: "bold",
    },
    fontStyle: {
      type: "string",
      label: "Font style",
      shorthand: "fs",
      value: "normal",
    },
    letterSpacing: {
      type: "string",
      label: "Letter spacing",
      shorthand: "ls",
      value: "auto",
    },
    paddingTop: {
      type: "number",
      label: "Top padding",
      shorthand: "pt",
      value: 5,
    },
    paddingBottom: {
      type: "number",
      label: "Bottom padding",
      shorthand: "pb",
      value: 5,
    },
    paddingLeft: {
      type: "number",
      label: "Left padding",
      shorthand: "pl",
      value: 5,
    },
    paddingRight: {
      type: "number",
      label: "Right padding",
      shorthand: "pr",
      value: 5,
    },
    customCSS: {
      type: "string",
      label: "Custom stylesheet URL",
      shorthand: "cs",
      value: "http://example.org",
    },
  },
};

export default streamTimer;
