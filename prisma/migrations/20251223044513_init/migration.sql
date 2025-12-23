-- CreateTable
CREATE TABLE "Snapshot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dateRange" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "SiteData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "siteKey" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "sessions" INTEGER NOT NULL DEFAULT 0,
    "users" INTEGER NOT NULL DEFAULT 0,
    "pageviews" INTEGER NOT NULL DEFAULT 0,
    "conversions" INTEGER NOT NULL DEFAULT 0,
    "bounceRate" REAL NOT NULL DEFAULT 0,
    "avgDuration" REAL NOT NULL DEFAULT 0,
    "error" TEXT,
    "snapshotId" TEXT NOT NULL,
    CONSTRAINT "SiteData_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "Snapshot" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DailyMetric" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "siteKey" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "sessions" INTEGER NOT NULL DEFAULT 0,
    "users" INTEGER NOT NULL DEFAULT 0,
    "pageviews" INTEGER NOT NULL DEFAULT 0,
    "conversions" INTEGER NOT NULL DEFAULT 0,
    "bounceRate" REAL NOT NULL DEFAULT 0,
    "avgDuration" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TrafficSource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "siteKey" TEXT NOT NULL,
    "dateRange" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "sessions" INTEGER NOT NULL DEFAULT 0,
    "users" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "SiteData_siteKey_idx" ON "SiteData"("siteKey");

-- CreateIndex
CREATE INDEX "SiteData_snapshotId_idx" ON "SiteData"("snapshotId");

-- CreateIndex
CREATE INDEX "DailyMetric_siteKey_idx" ON "DailyMetric"("siteKey");

-- CreateIndex
CREATE INDEX "DailyMetric_date_idx" ON "DailyMetric"("date");

-- CreateIndex
CREATE UNIQUE INDEX "DailyMetric_siteKey_date_key" ON "DailyMetric"("siteKey", "date");

-- CreateIndex
CREATE INDEX "TrafficSource_siteKey_dateRange_idx" ON "TrafficSource"("siteKey", "dateRange");
