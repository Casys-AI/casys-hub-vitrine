/**
 * UI Component Categories
 *
 * Categorization of the 40 MCP Apps UI components from lib/std/src/ui/
 * for the Catalog Component Showcase.
 *
 * @module web/data/ui-component-categories
 */

/** Metadata for a UI component */
export interface UIComponentMeta {
  /** Component identifier (e.g., "table-viewer") */
  id: string;
  /** Display name (e.g., "Table Viewer") */
  name: string;
  /** Category key */
  category: keyof typeof UI_COMPONENT_CATEGORIES;
  /** Short description */
  description: string;
  /** MCP Apps resource URI */
  resourceUri: string;
  /** Search tags */
  tags: string[];
}

/** Category definition */
export interface CategoryMeta {
  /** Display label */
  label: string;
  /** Category icon */
  icon: string;
  /** Component IDs in this category */
  components: string[];
  /** Accent color for the category */
  accentColor: string;
}

/**
 * UI Component Categories
 *
 * 40 components organized into 8 thematic categories
 */
export const UI_COMPONENT_CATEGORIES: Record<string, CategoryMeta> = {
  "data-display": {
    label: "Data Display",
    icon: "📊",
    accentColor: "#4ECDC4",
    components: [
      "table-viewer",
      "json-viewer",
      "tree-viewer",
      "schema-viewer",
      "yaml-viewer",
      "xml-viewer",
    ],
  },
  charts: {
    label: "Charts & Graphs",
    icon: "📈",
    accentColor: "#FF6B6B",
    components: [
      "chart-viewer",
      "sparkline",
      "gauge",
      "metrics-panel",
      "stats-panel",
    ],
  },
  code: {
    label: "Code & Diffs",
    icon: "💻",
    accentColor: "#95E1D3",
    components: [
      "diff-viewer",
      "log-viewer",
      "blame-viewer",
      "commit-graph",
      "dependency-graph",
      "markdown-viewer",
    ],
  },
  forms: {
    label: "Forms & Input",
    icon: "📝",
    accentColor: "#FFE66D",
    components: [
      "form-viewer",
      "regex-tester",
      "cron-viewer",
      "color-picker",
    ],
  },
  visualization: {
    label: "Visualization",
    icon: "🗺️",
    accentColor: "#AA96DA",
    components: [
      "map-viewer",
      "timeline-viewer",
      "waterfall-viewer",
      "erd-viewer",
      "plan-viewer",
    ],
  },
  media: {
    label: "Media & Assets",
    icon: "🖼️",
    accentColor: "#FCBAD3",
    components: [
      "image-preview",
      "qr-viewer",
      "palette-viewer",
      "word-cloud",
    ],
  },
  system: {
    label: "System & Status",
    icon: "⚙️",
    accentColor: "#F38181",
    components: [
      "resource-monitor",
      "disk-usage-viewer",
      "port-scanner",
      "status-badge",
      "validation-result",
    ],
  },
  security: {
    label: "Security & Auth",
    icon: "🔐",
    accentColor: "#4ade80",
    components: [
      "jwt-viewer",
      "certificate-viewer",
      "headers-viewer",
      "contrast-checker",
      "env-viewer",
    ],
  },
};

/**
 * Convert component ID to display name
 * @example "table-viewer" -> "Table Viewer"
 */
function idToDisplayName(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Generate description from component ID
 */
function generateDescription(id: string): string {
  const descriptions: Record<string, string> = {
    "table-viewer": "Interactive data table with sorting, filtering, and pagination",
    "json-viewer": "Syntax-highlighted JSON with collapsible nodes",
    "tree-viewer": "Hierarchical tree structure visualization",
    "schema-viewer": "Database and API schema explorer",
    "yaml-viewer": "YAML document viewer with syntax highlighting",
    "xml-viewer": "XML document viewer with element expansion",
    "chart-viewer": "Multi-type charts (bar, line, pie, area)",
    sparkline: "Compact inline charts for trends",
    gauge: "Circular gauge for metrics and KPIs",
    "metrics-panel": "Dashboard metrics with sparklines",
    "stats-panel": "Statistical summary cards",
    "diff-viewer": "Side-by-side and unified diff views",
    "log-viewer": "Real-time log streaming with filters",
    "blame-viewer": "Git blame annotations",
    "commit-graph": "Git commit history graph",
    "dependency-graph": "Package dependency visualization",
    "markdown-viewer": "Rendered markdown with syntax highlighting",
    "form-viewer": "Dynamic form rendering from schema",
    "regex-tester": "Regex pattern testing with highlights",
    "cron-viewer": "Cron expression parser and scheduler",
    "color-picker": "Color selection with format conversion",
    "map-viewer": "Geographic map with markers",
    "timeline-viewer": "Chronological event timeline",
    "waterfall-viewer": "Request waterfall chart",
    "erd-viewer": "Entity relationship diagrams",
    "plan-viewer": "Execution plan visualization",
    "image-preview": "Image gallery with zoom",
    "qr-viewer": "QR code generator and scanner",
    "palette-viewer": "Color palette explorer",
    "word-cloud": "Word frequency visualization",
    "resource-monitor": "System resource metrics",
    "disk-usage-viewer": "Storage usage treemap",
    "port-scanner": "Network port status display",
    "status-badge": "Status indicator badges",
    "validation-result": "Validation error display",
    "jwt-viewer": "JWT token decoder and validator",
    "certificate-viewer": "SSL certificate inspector",
    "headers-viewer": "HTTP headers display",
    "contrast-checker": "Color contrast accessibility",
    "env-viewer": "Environment variables display",
  };
  return descriptions[id] || `Interactive ${idToDisplayName(id).toLowerCase()}`;
}

/**
 * Generate search tags from component ID and category
 */
function generateTags(id: string, category: string): string[] {
  const baseTags = id.split("-");
  const categoryTags: Record<string, string[]> = {
    "data-display": ["data", "view", "display", "table", "json", "xml"],
    charts: ["chart", "graph", "metrics", "visualization", "stats"],
    code: ["code", "diff", "git", "log", "markdown"],
    forms: ["form", "input", "editor", "regex", "cron"],
    visualization: ["map", "timeline", "diagram", "plan", "erd"],
    media: ["image", "media", "qr", "color", "palette"],
    system: ["system", "monitor", "status", "resource", "disk"],
    security: ["security", "jwt", "certificate", "auth", "headers"],
  };
  return [...new Set([...baseTags, ...(categoryTags[category] || [])])];
}

/**
 * Memoized component metadata - built once at module load
 * Fixes F4: Performance issue with repeated buildComponentMeta() calls
 */
let _componentMetaCache: UIComponentMeta[] | null = null;

/**
 * Build full component metadata from categories (memoized)
 */
export function buildComponentMeta(): UIComponentMeta[] {
  if (_componentMetaCache) return _componentMetaCache;

  const components: UIComponentMeta[] = [];

  for (const [categoryKey, category] of Object.entries(UI_COMPONENT_CATEGORIES)) {
    for (const componentId of category.components) {
      components.push({
        id: componentId,
        name: idToDisplayName(componentId),
        category: categoryKey as keyof typeof UI_COMPONENT_CATEGORIES,
        description: generateDescription(componentId),
        resourceUri: `ui://mcp-std/${componentId}`,
        tags: generateTags(componentId, categoryKey),
      });
    }
  }

  _componentMetaCache = components;
  return components;
}

/**
 * Get component by ID (uses memoized cache)
 */
export function getComponentById(id: string): UIComponentMeta | undefined {
  return buildComponentMeta().find((c) => c.id === id);
}

/**
 * Get components by category (uses memoized cache)
 */
export function getComponentsByCategory(category: string): UIComponentMeta[] {
  return buildComponentMeta().filter((c) => c.category === category);
}

/**
 * Search components by query (uses memoized cache)
 */
export function searchComponents(query: string): UIComponentMeta[] {
  const q = query.toLowerCase();
  return buildComponentMeta().filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some((t) => t.includes(q))
  );
}

/**
 * Featured components for hero section
 */
export const FEATURED_COMPONENTS = [
  "table-viewer",
  "chart-viewer",
  "diff-viewer",
  "json-viewer",
  "map-viewer",
  "log-viewer",
];

/**
 * Bento grid sizes for UI components
 * Defines how each component should be displayed in a bento layout
 */
export type BentoSize = "small" | "medium" | "large" | "tall" | "wide";

export interface BentoSizeConfig {
  cols: number;  // grid columns to span
  rows: number;  // grid rows to span
  minHeight: number; // minimum height in pixels
}

export const BENTO_SIZE_CONFIGS: Record<BentoSize, BentoSizeConfig> = {
  small: { cols: 1, rows: 1, minHeight: 200 },
  medium: { cols: 1, rows: 1, minHeight: 280 },
  large: { cols: 2, rows: 1, minHeight: 320 },
  tall: { cols: 1, rows: 2, minHeight: 400 },
  wide: { cols: 2, rows: 1, minHeight: 240 },
};

/**
 * Component size mappings based on their visual requirements
 */
export const COMPONENT_BENTO_SIZES: Record<string, BentoSize> = {
  // Large - need horizontal space for columns/comparisons
  "table-viewer": "large",
  "diff-viewer": "large",
  "log-viewer": "large",
  "headers-viewer": "large",
  "metrics-panel": "large",
  "waterfall-viewer": "large",

  // Tall - vertical content (trees, lists)
  "json-viewer": "tall",
  "tree-viewer": "tall",
  "yaml-viewer": "tall",
  "xml-viewer": "tall",
  "dependency-graph": "tall",
  "timeline-viewer": "tall",

  // Wide - horizontal but not tall
  "stats-panel": "wide",
  "chart-viewer": "wide",
  "env-viewer": "wide",

  // Small - compact components
  "sparkline": "small",
  "gauge": "small",
  "status-badge": "small",
  "qr-viewer": "small",
  "color-picker": "small",

  // Medium - default balanced size
  "schema-viewer": "medium",
  "blame-viewer": "medium",
  "commit-graph": "medium",
  "markdown-viewer": "medium",
  "form-viewer": "medium",
  "regex-tester": "medium",
  "cron-viewer": "medium",
  "map-viewer": "medium",
  "erd-viewer": "medium",
  "plan-viewer": "medium",
  "image-preview": "medium",
  "palette-viewer": "medium",
  "word-cloud": "medium",
  "resource-monitor": "medium",
  "disk-usage-viewer": "medium",
  "port-scanner": "medium",
  "validation-result": "medium",
  "jwt-viewer": "medium",
  "certificate-viewer": "medium",
  "contrast-checker": "medium",
};

/**
 * Get bento size for a component
 */
export function getComponentBentoSize(componentId: string): BentoSize {
  return COMPONENT_BENTO_SIZES[componentId] || "medium";
}

/**
 * Get bento size config for a component
 */
export function getComponentBentoConfig(componentId: string): BentoSizeConfig {
  const size = getComponentBentoSize(componentId);
  return BENTO_SIZE_CONFIGS[size];
}

/**
 * Total count of UI components
 */
export const UI_COMPONENT_COUNT = Object.values(UI_COMPONENT_CATEGORIES).reduce(
  (sum, cat) => sum + cat.components.length,
  0
);
