import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./utils/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_Zus5bBKomhL1@ep-tiny-art-ahh88op9-pooler.c-3.us-east-1.aws.neon.tech/Content%20Morpher?sslmode=require&channel_binding=require',
    }
  
});