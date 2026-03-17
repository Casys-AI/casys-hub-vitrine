/**
 * Mock data for UI component previews in the catalog
 *
 * Each component type has sample data that will be injected
 * when viewing in preview mode.
 *
 * @module web/data/ui-mock-data
 */

export const UI_MOCK_DATA: Record<string, unknown> = {
  "status-badge": {
    title: "Validation Results",
    items: [
      { status: "valid", label: "Schema", message: "All fields valid" },
      { status: "warning", label: "Deprecation", message: "Using legacy API" },
      { status: "invalid", label: "Auth", message: "Token expired" },
    ],
  },

  "table-viewer": {
    columns: ["name", "status", "cpu", "memory", "restarts"],
    rows: [
      ["nginx-pod-1", "Running", "10m", "64Mi", 0],
      ["redis-master", "Running", "50m", "128Mi", 1],
      ["api-server-2", "Pending", "—", "—", 0],
      ["worker-3", "Running", "100m", "256Mi", 2],
      ["postgres-db", "Running", "200m", "512Mi", 0],
    ],
    totalCount: 5,
  },

  "diff-viewer": {
    filename: "config.yaml",
    language: "yaml",
    additions: 4,
    deletions: 2,
    unified: `@@ -1,5 +1,7 @@
 server:
-  port: 8080
-  host: localhost
+  port: 3000
+  host: 0.0.0.0
+  timeout: 30s
 database:
-  url: postgres://localhost/db
+  url: postgres://prod-db/app
+  pool_size: 10`,
  },

  "log-viewer": {
    logs: [
      { level: "info", timestamp: "2024-01-15T10:23:45Z", message: "Server started on port 3000" },
      { level: "debug", timestamp: "2024-01-15T10:23:46Z", message: "Loading configuration..." },
      { level: "info", timestamp: "2024-01-15T10:23:47Z", message: "Connected to database" },
      { level: "warn", timestamp: "2024-01-15T10:24:01Z", message: "Slow query detected (2.3s)" },
      { level: "error", timestamp: "2024-01-15T10:24:15Z", message: "Connection timeout to redis" },
      { level: "info", timestamp: "2024-01-15T10:24:20Z", message: "Retrying connection..." },
    ],
    title: "Application Logs",
  },

  "json-viewer": {
    user: {
      id: "usr_123",
      name: "John Doe",
      email: "john@example.com",
      roles: ["admin", "developer"],
      settings: {
        theme: "dark",
        notifications: true,
      },
    },
  },

  "schema-viewer": {
    table: "users",
    columns: [
      { name: "id", type: "SERIAL", nullable: false, isPrimaryKey: true },
      { name: "name", type: "VARCHAR(255)", nullable: false },
      { name: "email", type: "VARCHAR(255)", nullable: false, isUnique: true },
      { name: "age", type: "INTEGER", nullable: true },
      { name: "created_at", type: "TIMESTAMP", nullable: false, default: "NOW()" },
    ],
  },

  "chart-viewer": {
    type: "line",
    title: "CPU Usage Over Time",
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
    datasets: [
      { label: "CPU %", data: [23, 45, 78, 92, 65, 34], color: "#60a5fa" },
      { label: "Memory %", data: [45, 52, 61, 58, 55, 48], color: "#4ade80" },
    ],
  },

  "metrics-panel": {
    title: "System Metrics",
    metrics: [
      { id: "req", label: "Requests/s", value: 1247, unit: "req/s", type: "stat", history: [1100, 1150, 1200, 1180, 1247] },
      { id: "lat", label: "Latency", value: 45, unit: "ms", type: "gauge", min: 0, max: 200, thresholds: { warning: 100, critical: 150 } },
      { id: "err", label: "Error Rate", value: 0.02, unit: "%", type: "stat" },
      { id: "cpu", label: "CPU", value: 67, unit: "%", type: "sparkline", history: [45, 52, 61, 58, 67] },
    ],
    columns: 2,
  },

  "tree-viewer": {
    id: "src",
    label: "src",
    type: "folder",
    children: [
      {
        id: "components",
        label: "components",
        type: "folder",
        children: [
          { id: "button", label: "Button.tsx", type: "file", meta: { size: "2.4KB" } },
          { id: "card", label: "Card.tsx", type: "file", meta: { size: "1.8KB" } },
        ],
      },
      { id: "index", label: "index.ts", type: "file", meta: { size: "0.5KB" } },
      { id: "styles", label: "styles.css", type: "file", meta: { size: "3.2KB" } },
    ],
  },

  "timeline-viewer": {
    title: "Deployment Pipeline",
    events: [
      { timestamp: "2024-01-15T09:00:00Z", type: "success", title: "Deployment started", description: "Pipeline triggered by push to main" },
      { timestamp: "2024-01-15T09:02:00Z", type: "success", title: "Building image", description: "Docker image built successfully" },
      { timestamp: "2024-01-15T09:05:00Z", type: "success", title: "Running tests", description: "All 156 tests passed" },
      { timestamp: "2024-01-15T09:08:00Z", type: "info", title: "Deploying to staging", description: "Rolling update in progress" },
      { timestamp: "2024-01-15T09:10:00Z", type: "warning", title: "Production deploy", description: "Awaiting approval" },
    ],
  },

  "gauge": {
    value: 73,
    min: 0,
    max: 100,
    label: "Memory Usage",
    unit: "%",
    thresholds: { warning: 70, critical: 90 },
  },

  "sparkline": {
    values: [12, 19, 15, 25, 22, 30, 28, 35, 32, 40, 38, 45],
    label: "Requests/min",
    type: "line",
    color: "#60a5fa",
    showMinMax: true,
    showCurrent: true,
  },

  "markdown-viewer": {
    content: `# Hello World

This is a **markdown** preview with:

- Bullet points
- *Italic text*
- \`inline code\`

\`\`\`javascript
const hello = "world";
\`\`\`
`,
  },

  "yaml-viewer": {
    content: `apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: web
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80`,
  },

  "env-viewer": {
    env: {
      NODE_ENV: "production",
      DATABASE_URL: "postgres://user:pass@localhost:5432/db",
      API_KEY: "sk-1234567890abcdef",
      LOG_LEVEL: "info",
      PORT: "3000",
      AWS_REGION: "us-east-1",
      AWS_SECRET_KEY: "secret-key-here",
    },
    sensitiveKeys: ["DATABASE_URL", "API_KEY", "AWS_SECRET_KEY"],
    groupByPrefix: true,
  },

  "headers-viewer": {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ***",
      "X-Request-ID": "req-abc123",
      "Cache-Control": "no-cache",
    },
  },

  "jwt-viewer": {
    valid: true,
    header: { alg: "HS256", typ: "JWT" },
    payload: {
      sub: "1234567890",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      iat: 1516239022,
      exp: 1893456000,
    },
    signature: "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    isExpired: false,
    expiresAt: "2030-01-01T00:00:00Z",
    issuedAt: "2018-01-18T01:30:22Z",
  },

  "qr-viewer": {
    data: "https://casys.ai",
    size: 200,
  },

  "color-picker": {
    hex: "#4ECDC4",
    rgb: { r: 78, g: 205, b: 196 },
    hsl: { h: 174, s: 56, l: 55 },
    palette: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
  },

  "form-viewer": {
    title: "User Registration",
    submitLabel: "Register",
    schema: {
      type: "object",
      required: ["email", "password"],
      properties: {
        name: { type: "string", title: "Full Name", minLength: 2 },
        email: { type: "string", title: "Email", format: "email" },
        password: { type: "string", title: "Password", minLength: 8 },
        age: { type: "integer", title: "Age", minimum: 18 },
        newsletter: { type: "boolean", title: "Subscribe to newsletter", default: false },
      },
    },
    values: { name: "John Doe", email: "john@example.com" },
  },

  "palette-viewer": {
    type: "analogous",
    baseColor: "#4ECDC4",
    colors: [
      { hex: "#FF6B6B", name: "Coral", rgb: { r: 255, g: 107, b: 107 } },
      { hex: "#4ECDC4", name: "Turquoise", rgb: { r: 78, g: 205, b: 196 } },
      { hex: "#45B7D1", name: "Sky Blue", rgb: { r: 69, g: 183, b: 209 } },
      { hex: "#96CEB4", name: "Sage", rgb: { r: 150, g: 206, b: 180 } },
      { hex: "#FFEAA7", name: "Cream", rgb: { r: 255, g: 234, b: 167 } },
      { hex: "#DDA0DD", name: "Plum", rgb: { r: 221, g: 160, b: 221 } },
    ],
  },

  "regex-tester": {
    pattern: "^([a-z]+)@([a-z]+)\\.([a-z]{2,})$",
    flags: "gi",
    testString: "test@example.com\ninvalid-email\nuser@domain.org\nadmin@company.io",
  },

  "cron-viewer": {
    expression: "0 9 * * 1-5",
    timezone: "UTC",
    showCalendar: true,
    showNextRuns: 5,
  },

  "validation-result": {
    valid: false,
    errors: [
      { path: "/email", message: "must match format \"email\"", keyword: "format", expected: "email", actual: "invalid-email" },
      { path: "/age", message: "must be >= 18", keyword: "minimum", expected: 18, actual: 15 },
      { path: "/name", message: "must NOT have fewer than 2 characters", keyword: "minLength", expected: 2, actual: 1 },
    ],
    schema: "UserSchema",
  },

  "port-scanner": {
    host: "192.168.1.1",
    ports: [
      { port: 22, state: "open", service: "ssh", latency: 1.2 },
      { port: 80, state: "open", service: "http", latency: 0.8 },
      { port: 443, state: "open", service: "https", latency: 1.5 },
      { port: 3306, state: "closed", service: "mysql" },
      { port: 5432, state: "filtered", service: "postgresql" },
    ],
    openCount: 3,
    closedCount: 1,
    scanTime: 2.4,
  },

  "resource-monitor": {
    title: "Container Resources",
    resources: [
      {
        name: "api-server",
        cpu: { percent: 45, cores: 2 },
        memory: { used: 512000000, limit: 1073741824, percent: 47.7 },
        network: { rxBytes: 1024000, txBytes: 512000, rxRate: 1024, txRate: 512 },
      },
      {
        name: "worker-1",
        cpu: { percent: 78, cores: 4 },
        memory: { used: 2147483648, limit: 4294967296, percent: 50 },
        network: { rxBytes: 2048000, txBytes: 1024000 },
      },
      {
        name: "redis",
        cpu: { percent: 12, cores: 1 },
        memory: { used: 134217728, limit: 268435456, percent: 50 },
      },
    ],
  },

  "stats-panel": {
    title: "Response Time Distribution",
    data: [45, 52, 48, 61, 55, 58, 42, 67, 53, 49, 71, 63, 57, 44, 59, 68, 51, 46, 72, 55, 48, 62, 54, 47, 66, 58, 43, 69, 52, 56],
    bins: 10,
    showBoxPlot: true,
    showHistogram: true,
    showCurve: true,
  },

  "map-viewer": {
    title: "Paris Landmarks",
    center: { lat: 48.8566, lng: 2.3522 },
    zoom: 12,
    points: [
      { lat: 48.8584, lng: 2.2945, label: "Eiffel Tower", color: "#ef4444" },
      { lat: 48.8606, lng: 2.3376, label: "Louvre Museum", color: "#3b82f6" },
      { lat: 48.8530, lng: 2.3499, label: "Notre-Dame", color: "#10b981" },
    ],
    lines: [
      { from: { lat: 48.8584, lng: 2.2945 }, to: { lat: 48.8606, lng: 2.3376 } },
    ],
  },

  "word-cloud": {
    title: "Technology Keywords",
    words: [
      { word: "kubernetes", count: 100 },
      { word: "docker", count: 80 },
      { word: "api", count: 70 },
      { word: "database", count: 60 },
      { word: "cloud", count: 50 },
      { word: "serverless", count: 40 },
      { word: "microservices", count: 35 },
      { word: "devops", count: 30 },
    ],
    colorScheme: "blue",
  },

  "image-preview": {
    valid: true,
    mimeType: "image/png",
    width: 400,
    height: 300,
    size: 24576,
    dataUri: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IiM4ODgiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj40MDAgw5cgMzAwPC90ZXh0Pjwvc3ZnPg==",
  },

  "dependency-graph": {
    name: "my-app",
    version: "1.0.0",
    dependencies: [
      { name: "express", version: "^4.18.0", depth: 1 },
      { name: "lodash", version: "^4.17.21", depth: 1 },
      { name: "axios", version: "^1.6.0", depth: 1 },
      { name: "body-parser", version: "^1.20.0", depth: 2, parent: "express" },
      { name: "debug", version: "^4.3.0", depth: 2, parent: "express" },
    ],
    devDependencies: [
      { name: "typescript", version: "^5.3.0", depth: 1 },
      { name: "vitest", version: "^1.0.0", depth: 1 },
    ],
    totalCount: 7,
  },

  "commit-graph": {
    commits: [
      { hash: "a1b2c3def456", shortHash: "a1b2c3d", message: "feat: add user authentication", refs: ["HEAD", "main"], graphChars: "* ", parents: ["e4f5g6h"], author: "Alice", timestamp: 1705312800 },
      { hash: "e4f5g6h789ab", shortHash: "e4f5g6h", message: "fix: resolve login redirect bug", refs: [], graphChars: "* ", parents: ["i7j8k9l"], author: "Bob", timestamp: 1705226400 },
      { hash: "i7j8k9lcdef0", shortHash: "i7j8k9l", message: "chore: update dependencies", refs: ["origin/main"], graphChars: "* ", parents: ["m1n2o3p"], author: "Alice", timestamp: 1705140000 },
      { hash: "m1n2o3pqrst4", shortHash: "m1n2o3p", message: "feat: initial commit", refs: [], graphChars: "* ", parents: [], author: "Alice", timestamp: 1705053600 },
    ],
    branches: ["main", "origin/main"],
    totalCommits: 4,
  },

  "certificate-viewer": {
    host: "example.com",
    port: 443,
    valid: true,
    certificate: {
      subject: { CN: "*.example.com", O: "Example Inc", C: "US" },
      issuer: { CN: "R3", O: "Let's Encrypt", C: "US" },
      validFrom: "2024-01-01T00:00:00Z",
      validTo: "2024-04-01T00:00:00Z",
      daysRemaining: 45,
      serialNumber: "03:AB:CD:EF:12:34:56:78",
      signatureAlgorithm: "SHA256withRSA",
      sans: ["*.example.com", "example.com"],
    },
    chain: [
      { subject: "R3", issuer: "ISRG Root X1" },
      { subject: "ISRG Root X1", issuer: "DST Root CA X3" },
    ],
    status: "valid",
  },

  "disk-usage-viewer": {
    path: "/home/user",
    totalSize: 53687091200,
    root: {
      name: "user",
      size: 53687091200,
      type: "directory",
      children: [
        {
          name: "Documents",
          size: 12884901888,
          type: "directory",
          children: [
            { name: "reports.pdf", size: 5242880, type: "file" },
            { name: "data.xlsx", size: 2097152, type: "file" },
          ],
        },
        {
          name: "Applications",
          size: 9556623360,
          type: "directory",
          children: [
            { name: "vscode", size: 524288000, type: "directory" },
            { name: "chrome", size: 314572800, type: "directory" },
          ],
        },
        { name: "Downloads", size: 8053063680, type: "directory" },
        { name: ".cache", size: 4294967296, type: "directory" },
      ],
    },
  },

  "contrast-checker": {
    foreground: "#FFFFFF",
    background: "#4ECDC4",
    contrastRatio: 3.02,
    wcag: {
      aa: { normal: false, large: true },
      aaa: { normal: false, large: false },
    },
    rating: "AA Large",
    isLargeText: false,
    fontSize: 16,
    fontWeight: "normal",
    suggestions: [
      { color: "#006B64", contrastRatio: 4.52, rating: "AA" },
      { color: "#004D48", contrastRatio: 7.15, rating: "AAA" },
    ],
  },

  "xml-viewer": {
    content: `<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>Clean Code</title>
    <author>Robert Martin</author>
  </book>
</catalog>`,
  },

  "plan-viewer": {
    query: "SELECT u.name, COUNT(p.id) FROM users u JOIN posts p ON p.user_id = u.id GROUP BY u.id",
    analyzed: true,
    plan: [{
      "Plan": {
        "Node Type": "HashAggregate",
        "Group Key": ["u.id"],
        "Startup Cost": 45.5,
        "Total Cost": 67.8,
        "Plan Rows": 100,
        "Plan Width": 40,
        "Actual Startup Time": 0.245,
        "Actual Total Time": 0.892,
        "Actual Rows": 42,
        "Actual Loops": 1,
        "Plans": [{
          "Node Type": "Hash Join",
          "Join Type": "Inner",
          "Hash Cond": "(p.user_id = u.id)",
          "Startup Cost": 12.5,
          "Total Cost": 45.5,
          "Plan Rows": 500,
          "Plans": [
            { "Node Type": "Seq Scan", "Relation Name": "posts", "Alias": "p", "Startup Cost": 0, "Total Cost": 25.0, "Plan Rows": 500 },
            { "Node Type": "Hash", "Plans": [{ "Node Type": "Seq Scan", "Relation Name": "users", "Alias": "u", "Startup Cost": 0, "Total Cost": 12.5, "Plan Rows": 100 }] },
          ],
        }],
      },
      "Planning Time": 0.125,
      "Execution Time": 0.934,
    }],
  },

  "blame-viewer": {
    file: "src/utils/hello.ts",
    lines: [
      { lineNumber: 1, commitHash: "a1b2c3d", author: "Alice Smith", authorEmail: "alice@example.com", timestamp: 1704844800, content: "export function hello() {", summary: "feat: add hello function" },
      { lineNumber: 2, commitHash: "e4f5g6h", author: "Bob Jones", authorEmail: "bob@example.com", timestamp: 1705017600, content: '  return "Hello, World!";', summary: "fix: update greeting message" },
      { lineNumber: 3, commitHash: "a1b2c3d", author: "Alice Smith", authorEmail: "alice@example.com", timestamp: 1704844800, content: "}", summary: "feat: add hello function" },
    ],
    totalLines: 3,
  },

  "waterfall-viewer": {
    title: "Page Load Waterfall",
    requests: [
      { url: "https://example.com/", method: "GET", status: 200, totalTime: 245, phases: { dns: 23, connect: 45, tls: 67, ttfb: 89, download: 21 } },
      { url: "https://example.com/styles.css", method: "GET", status: 200, totalTime: 45, phases: { dns: 0, connect: 0, tls: 0, ttfb: 12, download: 33 } },
      { url: "https://example.com/app.js", method: "GET", status: 200, totalTime: 180, phases: { dns: 0, connect: 0, tls: 0, ttfb: 45, download: 135 } },
      { url: "https://api.example.com/data", method: "GET", status: 200, totalTime: 320, phases: { dns: 15, connect: 25, tls: 40, ttfb: 180, download: 60 } },
    ],
  },

  "erd-viewer": {
    schema: "public",
    tables: [
      {
        name: "users",
        columns: [
          { name: "id", type: "SERIAL", nullable: false, default: null, isPrimaryKey: true },
          { name: "name", type: "VARCHAR(255)", nullable: false, default: null, isPrimaryKey: false },
          { name: "email", type: "VARCHAR(255)", nullable: false, default: null, isPrimaryKey: false },
        ],
      },
      {
        name: "posts",
        columns: [
          { name: "id", type: "SERIAL", nullable: false, default: null, isPrimaryKey: true },
          { name: "user_id", type: "INTEGER", nullable: false, default: null, isPrimaryKey: false },
          { name: "title", type: "VARCHAR(255)", nullable: false, default: null, isPrimaryKey: false },
          { name: "content", type: "TEXT", nullable: true, default: null, isPrimaryKey: false },
        ],
      },
      {
        name: "comments",
        columns: [
          { name: "id", type: "SERIAL", nullable: false, default: null, isPrimaryKey: true },
          { name: "post_id", type: "INTEGER", nullable: false, default: null, isPrimaryKey: false },
          { name: "user_id", type: "INTEGER", nullable: false, default: null, isPrimaryKey: false },
          { name: "text", type: "TEXT", nullable: false, default: null, isPrimaryKey: false },
        ],
      },
    ],
    relationships: [
      { name: "fk_posts_user", fromTable: "posts", fromColumn: "user_id", toTable: "users", toColumn: "id" },
      { name: "fk_comments_post", fromTable: "comments", fromColumn: "post_id", toTable: "posts", toColumn: "id" },
      { name: "fk_comments_user", fromTable: "comments", fromColumn: "user_id", toTable: "users", toColumn: "id" },
    ],
    tableCount: 3,
    relationshipCount: 3,
  },

  // Default fallback
  "default": {
    message: "Preview data",
    status: "ok",
  },
};

/**
 * Get mock data for a component
 */
export function getMockData(componentName: string): unknown {
  // Extract component name from URI like "ui://mcp-std/table-viewer"
  const name = componentName.replace("ui://mcp-std/", "").replace("ui://", "");
  return UI_MOCK_DATA[name] || UI_MOCK_DATA["default"];
}

/**
 * Generate script tag to inject mock data into component
 * This script must run BEFORE the component's main.js
 */
export function generateMockScript(componentName: string): string {
  const data = getMockData(componentName);
  return `
<script>
// Mock MCP App for catalog preview - must run before component loads
(function() {
  const mockData = ${JSON.stringify(data)};
  const mockResult = { content: [{ type: "text", text: JSON.stringify(mockData) }] };

  // Store callback to trigger later
  let ontoolresultCallback = null;

  // Create mock App class that mimics @modelcontextprotocol/ext-apps
  class MockApp {
    constructor() {
      this._ontoolresult = null;
    }

    connect() {
      // Simulate successful connection, then send mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          // Trigger ontoolresult after connect resolves
          setTimeout(() => {
            if (this._ontoolresult) {
              this._ontoolresult(mockResult);
            }
          }, 50);
        }, 10);
      });
    }

    set ontoolresult(callback) {
      this._ontoolresult = callback;
      // If already connected, trigger immediately
      if (callback) {
        setTimeout(() => callback(mockResult), 100);
      }
    }

    get ontoolresult() {
      return this._ontoolresult;
    }

    updateModelContext() {
      // No-op in preview mode
    }
  }

  // Override module loading for @modelcontextprotocol/ext-apps
  window.__MOCK_MCP_APP__ = MockApp;

  // Try to intercept dynamic imports
  const originalImport = window.importShim || window.import;
  if (typeof originalImport === 'function') {
    // This may not work due to module isolation, but worth trying
  }
})();
</script>
`;
}

/**
 * Generate a complete mock HTML wrapper that renders with data
 * This is a fallback approach that creates a standalone preview
 */
export function generateStandalonePreview(componentName: string): string {
  const name = componentName.replace("ui://mcp-std/", "").replace("ui://", "");
  const data = getMockData(componentName);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} Preview</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a1a;
      color: #e0e0e0;
      padding: 12px;
      font-size: 13px;
    }
    .preview-container { max-width: 100%; }
    pre {
      background: #2a2a2a;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 11px;
      line-height: 1.4;
    }
    code { font-family: 'Fira Code', monospace; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 6px;
      margin: 4px;
    }
    .badge.valid { background: rgba(74, 222, 128, 0.15); color: #4ade80; }
    .badge.invalid { background: rgba(248, 113, 113, 0.15); color: #f87171; }
    .badge.warning { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }
    .table { width: 100%; border-collapse: collapse; font-size: 12px; }
    .table th, .table td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #333;
    }
    .table th { color: #888; font-weight: 500; }
  </style>
</head>
<body>
  <div class="preview-container" id="app">
    ${renderPreviewContent(name, data)}
  </div>
</body>
</html>`;
}

function renderPreviewContent(name: string, data: unknown): string {
  const d = data as Record<string, unknown>;

  // Status badge
  if (name === "status-badge" && d.items) {
    const items = d.items as Array<{ status: string; label?: string; message?: string }>;
    return items.map(item => {
      const icon = item.status === "valid" ? "✓" : item.status === "invalid" ? "✗" : "!";
      return `<div class="badge ${item.status}">
        <span>${icon}</span>
        <span>${item.label || ""}</span>
        <small>${item.message || ""}</small>
      </div>`;
    }).join("");
  }

  // Table viewer
  if (name === "table-viewer" && d.columns && d.rows) {
    const columns = d.columns as string[];
    const rows = d.rows as Record<string, unknown>[];
    const headers = columns.map(c => `<th>${c}</th>`).join("");
    const body = rows.map(row => {
      const cells = columns.map(c => `<td>${row[c] ?? ""}</td>`).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    return `<table class="table"><thead><tr>${headers}</tr></thead><tbody>${body}</tbody></table>`;
  }

  // Log viewer
  if (name === "log-viewer" && d.lines) {
    const lines = d.lines as Array<{ level: string; timestamp: string; message: string }>;
    const levelColors: Record<string, string> = {
      info: "#60a5fa",
      debug: "#a1a1aa",
      warn: "#fbbf24",
      error: "#f87171",
    };
    return `<div class="log-container">${lines.map(l => {
      const color = levelColors[l.level] || "#e0e0e0";
      const time = l.timestamp.split("T")[1]?.replace("Z", "") || l.timestamp;
      return `<div class="log-line">
        <span style="color:#666">${time}</span>
        <span style="color:${color};font-weight:500">[${l.level.toUpperCase()}]</span>
        <span>${l.message}</span>
      </div>`;
    }).join("")}</div>
    <style>.log-line{display:flex;gap:8px;padding:2px 0;font-family:monospace;font-size:11px}</style>`;
  }

  // Diff viewer
  if (name === "diff-viewer" && d.oldContent && d.newContent) {
    const oldLines = String(d.oldContent).split("\n");
    const newLines = String(d.newContent).split("\n");
    return `<div class="diff-view">
      <div class="diff-header">${d.filename || "file"}</div>
      <div class="diff-content">
        ${oldLines.map(l => `<div class="diff-line diff-del">- ${escapeHtml(l)}</div>`).join("")}
        ${newLines.map(l => `<div class="diff-line diff-add">+ ${escapeHtml(l)}</div>`).join("")}
      </div>
    </div>
    <style>
      .diff-view{border:1px solid #333;border-radius:6px;overflow:hidden}
      .diff-header{background:#2a2a2a;padding:8px;font-size:12px;color:#888}
      .diff-content{font-family:monospace;font-size:11px}
      .diff-line{padding:2px 8px}
      .diff-del{background:rgba(248,113,113,0.1);color:#fca5a5}
      .diff-add{background:rgba(74,222,128,0.1);color:#86efac}
    </style>`;
  }

  // JSON viewer
  if (name === "json-viewer") {
    return `<pre><code>${syntaxHighlight(JSON.stringify(data, null, 2))}</code></pre>`;
  }

  // Timeline viewer
  if (name === "timeline-viewer" && d.events) {
    const events = d.events as Array<{ time: string; title: string; status: string }>;
    const statusColors: Record<string, string> = {
      success: "#4ade80",
      running: "#60a5fa",
      pending: "#a1a1aa",
      error: "#f87171",
    };
    return `<div class="timeline">${events.map(e => {
      const color = statusColors[e.status] || "#888";
      const icon = e.status === "success" ? "✓" : e.status === "running" ? "●" : e.status === "error" ? "✗" : "○";
      return `<div class="timeline-item">
        <span class="timeline-dot" style="background:${color}">${icon}</span>
        <span class="timeline-time">${e.time}</span>
        <span>${e.title}</span>
      </div>`;
    }).join("")}</div>
    <style>
      .timeline{display:flex;flex-direction:column;gap:8px}
      .timeline-item{display:flex;align-items:center;gap:10px;font-size:12px}
      .timeline-dot{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#1a1a1a}
      .timeline-time{color:#888;font-family:monospace;font-size:11px}
    </style>`;
  }

  // Metrics panel
  if ((name === "metrics-panel" || name === "stats-panel") && (d.metrics || d.stats)) {
    const items = (d.metrics || d.stats) as Array<{ label: string; value: string | number; change?: number }>;
    return `<div class="metrics-grid">${items.map(m => {
      const changeColor = m.change ? (m.change > 0 ? "#4ade80" : "#f87171") : "";
      const changeText = m.change ? `${m.change > 0 ? "+" : ""}${m.change}%` : "";
      return `<div class="metric-card">
        <div class="metric-label">${m.label}</div>
        <div class="metric-value">${m.value}</div>
        ${changeText ? `<div class="metric-change" style="color:${changeColor}">${changeText}</div>` : ""}
      </div>`;
    }).join("")}</div>
    <style>
      .metrics-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
      .metric-card{background:#2a2a2a;padding:12px;border-radius:8px}
      .metric-label{color:#888;font-size:11px;margin-bottom:4px}
      .metric-value{font-size:18px;font-weight:600}
      .metric-change{font-size:11px;margin-top:2px}
    </style>`;
  }

  // Tree viewer
  if (name === "tree-viewer" && d.name) {
    return `<div class="tree">${renderTree(data as TreeNode)}</div>
    <style>
      .tree{font-family:monospace;font-size:12px}
      .tree-item{padding:2px 0;display:flex;align-items:center;gap:6px}
      .tree-folder{color:#60a5fa}
      .tree-file{color:#e0e0e0}
      .tree-children{padding-left:16px;border-left:1px solid #333;margin-left:8px}
    </style>`;
  }

  // Gauge
  if (name === "gauge" && typeof d.value === "number") {
    const pct = ((d.value as number) / (d.max as number || 100)) * 100;
    const color = pct >= (d.thresholds as { critical?: number })?.critical! ? "#f87171" :
      pct >= (d.thresholds as { warning?: number })?.warning! ? "#fbbf24" : "#4ade80";
    return `<div class="gauge-container">
      <div class="gauge-bar" style="width:${pct}%;background:${color}"></div>
      <div class="gauge-label">${d.label}: ${d.value}${d.unit || ""}</div>
    </div>
    <style>
      .gauge-container{background:#2a2a2a;border-radius:8px;overflow:hidden;position:relative;height:32px}
      .gauge-bar{height:100%;transition:width 0.3s}
      .gauge-label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500}
    </style>`;
  }

  // Validation result
  if (name === "validation-result") {
    const errors = d.errors as Array<{ path: string; message: string }> || [];
    const warnings = d.warnings as Array<{ path: string; message: string }> || [];
    return `<div class="validation">
      ${errors.length ? `<div class="val-section">
        <div class="val-header" style="color:#f87171">✗ ${errors.length} Errors</div>
        ${errors.map(e => `<div class="val-item"><code>${e.path}</code>: ${e.message}</div>`).join("")}
      </div>` : ""}
      ${warnings.length ? `<div class="val-section">
        <div class="val-header" style="color:#fbbf24">! ${warnings.length} Warnings</div>
        ${warnings.map(w => `<div class="val-item"><code>${w.path}</code>: ${w.message}</div>`).join("")}
      </div>` : ""}
      ${!errors.length && !warnings.length ? `<div class="val-header" style="color:#4ade80">✓ Valid</div>` : ""}
    </div>
    <style>
      .validation{display:flex;flex-direction:column;gap:12px}
      .val-header{font-weight:600;font-size:13px;margin-bottom:6px}
      .val-item{font-size:12px;padding:4px 0;color:#ccc}
      .val-item code{background:#333;padding:2px 4px;border-radius:3px;color:#fbbf24}
    </style>`;
  }

  // Resource monitor
  if (name === "resource-monitor" && d.cpu) {
    const cpu = d.cpu as { usage: number; cores: number };
    const mem = d.memory as { used: number; total: number; unit: string };
    const disk = d.disk as { used: number; total: number; unit: string };
    return `<div class="resources">
      <div class="res-item">
        <div class="res-label">CPU</div>
        <div class="res-bar"><div style="width:${cpu.usage}%;background:#60a5fa"></div></div>
        <div class="res-value">${cpu.usage}%</div>
      </div>
      <div class="res-item">
        <div class="res-label">Memory</div>
        <div class="res-bar"><div style="width:${(mem.used/mem.total)*100}%;background:#a78bfa"></div></div>
        <div class="res-value">${mem.used}/${mem.total} ${mem.unit}</div>
      </div>
      <div class="res-item">
        <div class="res-label">Disk</div>
        <div class="res-bar"><div style="width:${(disk.used/disk.total)*100}%;background:#4ade80"></div></div>
        <div class="res-value">${disk.used}/${disk.total} ${disk.unit}</div>
      </div>
    </div>
    <style>
      .resources{display:flex;flex-direction:column;gap:10px}
      .res-item{display:flex;align-items:center;gap:10px}
      .res-label{width:60px;font-size:11px;color:#888}
      .res-bar{flex:1;height:8px;background:#333;border-radius:4px;overflow:hidden}
      .res-bar>div{height:100%;border-radius:4px}
      .res-value{width:80px;text-align:right;font-size:11px;font-family:monospace}
    </style>`;
  }

  // Plan viewer
  if (name === "plan-viewer" && d.steps) {
    const steps = d.steps as Array<{ id: number; name: string; status: string }>;
    const icons: Record<string, string> = { done: "✓", running: "●", pending: "○" };
    const colors: Record<string, string> = { done: "#4ade80", running: "#60a5fa", pending: "#666" };
    return `<div class="plan">
      ${d.title ? `<div class="plan-title">${d.title}</div>` : ""}
      ${steps.map(s => `<div class="plan-step">
        <span style="color:${colors[s.status]}">${icons[s.status] || "○"}</span>
        <span style="color:${s.status === "pending" ? "#666" : "#e0e0e0"}">${s.name}</span>
      </div>`).join("")}
    </div>
    <style>
      .plan-title{font-weight:600;margin-bottom:10px}
      .plan-step{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:12px}
    </style>`;
  }

  // Fallback: show JSON with syntax highlighting
  return `<pre><code>${syntaxHighlight(JSON.stringify(data, null, 2))}</code></pre>`;
}

// Helper types
interface TreeNode {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
}

// Helper to render tree structure
function renderTree(node: TreeNode, depth = 0): string {
  const icon = node.type === "folder" ? "📁" : "📄";
  const cls = node.type === "folder" ? "tree-folder" : "tree-file";
  let html = `<div class="tree-item"><span>${icon}</span><span class="${cls}">${node.name}</span></div>`;
  if (node.children?.length) {
    html += `<div class="tree-children">${node.children.map(c => renderTree(c, depth + 1)).join("")}</div>`;
  }
  return html;
}

// Helper to escape HTML
function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Helper for JSON syntax highlighting
function syntaxHighlight(json: string): string {
  return json
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"([^"]+)":/g, '<span style="color:#60a5fa">"$1"</span>:')
    .replace(/: "([^"]*)"/g, ': <span style="color:#4ade80">"$1"</span>')
    .replace(/: (\d+)/g, ': <span style="color:#fbbf24">$1</span>')
    .replace(/: (true|false|null)/g, ': <span style="color:#a78bfa">$1</span>');
}
