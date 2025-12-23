-- CreateTable
CREATE TABLE "MonthlyMetric" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "siteKey" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "monthLabel" TEXT NOT NULL,
    "sessions" INTEGER NOT NULL DEFAULT 0,
    "users" INTEGER NOT NULL DEFAULT 0,
    "pageviews" INTEGER NOT NULL DEFAULT 0,
    "conversions" INTEGER NOT NULL DEFAULT 0,
    "bounceRate" REAL NOT NULL DEFAULT 0,
    "avgDuration" REAL NOT NULL DEFAULT 0,
    "error" TEXT,
    "snapshotId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MonthlyMetric_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "Snapshot" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "MonthlyMetric_siteKey_idx" ON "MonthlyMetric"("siteKey");

-- CreateIndex
CREATE INDEX "MonthlyMetric_snapshotId_idx" ON "MonthlyMetric"("snapshotId");

-- CreateIndex
CREATE INDEX "MonthlyMetric_year_month_idx" ON "MonthlyMetric"("year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyMetric_snapshotId_siteKey_year_month_key" ON "MonthlyMetric"("snapshotId", "siteKey", "year", "month");
