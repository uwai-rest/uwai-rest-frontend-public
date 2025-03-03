import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import pluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: pluginImport,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "import/no-named-as-default": 0,
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages `react` related packages come first.
            ["^react", "^@?\\w"],
            // Internal packages.
            ["^(@|components)(/.*|$)"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.?(css)$"],
          ],
        },
      ],
    },
    // overrides: [
    //   // override "simple-import-sort" config
    //   {
    //     files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    //     rules: {
    //       "simple-import-sort/imports": [
    //         "error",
    //         {
    //           groups: [
    //             // Packages `react` related packages come first.
    //             ["^react", "^@?\\w"],
    //             // Internal packages.
    //             ["^(@|components)(/.*|$)"],
    //             // Side effect imports.
    //             ["^\\u0000"],
    //             // Parent imports. Put `..` last.
    //             ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
    //             // Other relative imports. Put same-folder imports and `.` last.
    //             ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
    //             // Style imports.
    //             ["^.+\\.?(scss)$"],
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // ],
  }
);
