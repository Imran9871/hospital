// src/styles/theme.js

// Centralized colors for ambulance/hospital website
const colors = {
  primary: {
    accent: "#E53935",       // Main red for buttons, active links, emergency highlights
    success: "#43A047",      // Green for success messages
    error: "#D32F2F",        // Error alerts
    info: "#1E88E5",         // Blue for info highlights
  },
  neutral: {
    background: "#FFFFFF",   // Page background - clean white
    card: "#F5F5F5",         // Cards, panels, mobile menus
    text: "#212121",         // Dark text for readability
    secondaryText: "#616161",// Secondary text, muted info
    border: "#E0E0E0",       // Light gray border
  },
  accent: {
    lightRed: "#FFCDD2",     // For subtle red backgrounds
    lightBlue: "#BBDEFB",    // For info highlights on cards
    lightGreen: "#C8E6C9",   // For success panels
    orange: "#FF7043",       // Highlight buttons or urgent links
  },
  utility: {
    hover: "#ff0000",        // Hover color for buttons/links
    shadow: "rgba(0, 0, 0, 0.15)", // Card/element shadows
    overlay: "rgba(0,0,0,0.6)",    // Dark overlay for modals or sidebars
  },
};

export default colors;
