# Shared

Types:

- <code><a href="./src/resources/shared.ts">BrowserContext</a></code>
- <code><a href="./src/resources/shared.ts">Error</a></code>
- <code><a href="./src/resources/shared.ts">EventContext</a></code>
- <code><a href="./src/resources/shared.ts">EventEnvelope</a></code>
- <code><a href="./src/resources/shared.ts">MetricCountRatio</a></code>
- <code><a href="./src/resources/shared.ts">OtlpAnyValue</a></code>
- <code><a href="./src/resources/shared.ts">OtlpAttribute</a></code>
- <code><a href="./src/resources/shared.ts">OtlpAttributeValue</a></code>
- <code><a href="./src/resources/shared.ts">OtlpContextAttribute</a></code>
- <code><a href="./src/resources/shared.ts">OtlpLogRecord</a></code>
- <code><a href="./src/resources/shared.ts">OtlpResource</a></code>
- <code><a href="./src/resources/shared.ts">OtlpScope</a></code>
- <code><a href="./src/resources/shared.ts">PlaybackScore</a></code>
- <code><a href="./src/resources/shared.ts">PlayedRange</a></code>
- <code><a href="./src/resources/shared.ts">ProgressReached</a></code>
- <code><a href="./src/resources/shared.ts">RenditionPlayingTime</a></code>
- <code><a href="./src/resources/shared.ts">StartupOutcomes</a></code>
- <code><a href="./src/resources/shared.ts">StoredOtlpContext</a></code>
- <code><a href="./src/resources/shared.ts">ViewMetrics</a></code>
- <code><a href="./src/resources/shared.ts">WatchTimeDistribution</a></code>

# Health

Types:

- <code><a href="./src/resources/health.ts">Health</a></code>

Methods:

- <code title="get /healthz">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> Health</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">AnalyticsEvent</a></code>
- <code><a href="./src/resources/events.ts">EventPage</a></code>
- <code><a href="./src/resources/events.ts">NativeCreated</a></code>
- <code><a href="./src/resources/events.ts">NativeDuplicate</a></code>
- <code><a href="./src/resources/events.ts">PlaybackError</a></code>
- <code><a href="./src/resources/events.ts">PlaybackStateChanged</a></code>
- <code><a href="./src/resources/events.ts">RenditionChanged</a></code>
- <code><a href="./src/resources/events.ts">SeekCompleted</a></code>
- <code><a href="./src/resources/events.ts">StoredEvent</a></code>
- <code><a href="./src/resources/events.ts">ViewEnded</a></code>
- <code><a href="./src/resources/events.ts">ViewSnapshot</a></code>
- <code><a href="./src/resources/events.ts">ViewStarted</a></code>
- <code><a href="./src/resources/events.ts">EventIngestResponse</a></code>

Methods:

- <code title="get /v1/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> StoredEventsEventsPage</code>
- <code title="post /v1/events">client.events.<a href="./src/resources/events.ts">ingest</a>({ ...params }) -> EventIngestResponse</code>

# Summary

Types:

- <code><a href="./src/resources/summary.ts">Metrics</a></code>
- <code><a href="./src/resources/summary.ts">MetricsBreakdownPage</a></code>
- <code><a href="./src/resources/summary.ts">MetricsResponse</a></code>

Methods:

- <code title="get /v1/summary">client.summary.<a href="./src/resources/summary.ts">retrieve</a>({ ...params }) -> MetricsResponse</code>

# Videos

Types:

- <code><a href="./src/resources/videos.ts">VideoMetrics</a></code>
- <code><a href="./src/resources/videos.ts">VideoPage</a></code>

Methods:

- <code title="get /v1/videos">client.videos.<a href="./src/resources/videos.ts">list</a>({ ...params }) -> VideoMetricsVideosPage</code>

# Timeseries

Types:

- <code><a href="./src/resources/timeseries.ts">EngagementTimeseries</a></code>
- <code><a href="./src/resources/timeseries.ts">EngagementTimeseriesBucket</a></code>
- <code><a href="./src/resources/timeseries.ts">QualityTimeseries</a></code>
- <code><a href="./src/resources/timeseries.ts">QualityTimeseriesBucket</a></code>
- <code><a href="./src/resources/timeseries.ts">TimeBucket</a></code>
- <code><a href="./src/resources/timeseries.ts">Timeseries</a></code>
- <code><a href="./src/resources/timeseries.ts">TimeseriesResponse</a></code>

Methods:

- <code title="get /v1/timeseries">client.timeseries.<a href="./src/resources/timeseries.ts">retrieve</a>({ ...params }) -> TimeseriesResponse</code>

# Quality

Types:

- <code><a href="./src/resources/quality.ts">Quality</a></code>
- <code><a href="./src/resources/quality.ts">QualityBreakdownPage</a></code>
- <code><a href="./src/resources/quality.ts">QualityResponse</a></code>

Methods:

- <code title="get /v1/quality">client.quality.<a href="./src/resources/quality.ts">retrieve</a>({ ...params }) -> QualityResponse</code>

# Engagement

Types:

- <code><a href="./src/resources/engagement.ts">Engagement</a></code>
- <code><a href="./src/resources/engagement.ts">EngagementBreakdownPage</a></code>
- <code><a href="./src/resources/engagement.ts">EngagementResponse</a></code>

Methods:

- <code title="get /v1/engagement">client.engagement.<a href="./src/resources/engagement.ts">retrieve</a>({ ...params }) -> EngagementResponse</code>

# Project

Types:

- <code><a href="./src/resources/project/project.ts">CreateProjectKeyRequest</a></code>
- <code><a href="./src/resources/project/project.ts">CreatedProjectKey</a></code>
- <code><a href="./src/resources/project/project.ts">DeletedProject</a></code>
- <code><a href="./src/resources/project/project.ts">Project</a></code>
- <code><a href="./src/resources/project/project.ts">ProjectKey</a></code>
- <code><a href="./src/resources/project/project.ts">ProjectKeys</a></code>
- <code><a href="./src/resources/project/project.ts">ProjectUpdate</a></code>
- <code><a href="./src/resources/project/project.ts">RotatedProjectKey</a></code>

Methods:

- <code title="patch /v1/project">client.project.<a href="./src/resources/project/project.ts">update</a>({ ...params }) -> Project</code>
- <code title="delete /v1/project">client.project.<a href="./src/resources/project/project.ts">delete</a>() -> DeletedProject</code>

## Keys

Methods:

- <code title="post /v1/project/keys">client.project.keys.<a href="./src/resources/project/keys.ts">create</a>({ ...params }) -> CreatedProjectKey</code>
- <code title="get /v1/project/keys">client.project.keys.<a href="./src/resources/project/keys.ts">list</a>() -> ProjectKeys</code>
- <code title="post /v1/project/keys/{key_id}/rotate">client.project.keys.<a href="./src/resources/project/keys.ts">rotate</a>(keyID) -> RotatedProjectKey</code>

# Admin

Types:

- <code><a href="./src/resources/admin/admin.ts">CreateProjectRequest</a></code>
- <code><a href="./src/resources/admin/admin.ts">CreatedProject</a></code>

Methods:

- <code title="post /v1/projects">client.admin.<a href="./src/resources/admin/admin.ts">createProject</a>({ ...params }) -> CreatedProject</code>

## Keys

Methods:

- <code title="get /v1/projects/{project_id}/keys">client.admin.keys.<a href="./src/resources/admin/keys.ts">list</a>(projectID) -> ProjectKeys</code>
- <code title="post /v1/projects/{project_id}/keys/{key_id}/rotate">client.admin.keys.<a href="./src/resources/admin/keys.ts">rotate</a>(keyID, { ...params }) -> RotatedProjectKey</code>

# Views

Types:

- <code><a href="./src/resources/views.ts">View</a></code>
- <code><a href="./src/resources/views.ts">ViewDetail</a></code>
- <code><a href="./src/resources/views.ts">ViewPage</a></code>

Methods:

- <code title="get /v1/views/{view_id}">client.views.<a href="./src/resources/views.ts">retrieve</a>(viewID, { ...params }) -> ViewDetail</code>
- <code title="get /v1/views">client.views.<a href="./src/resources/views.ts">list</a>({ ...params }) -> ViewsViewsPage</code>

# Errors

Types:

- <code><a href="./src/resources/errors.ts">ErrorGroup</a></code>
- <code><a href="./src/resources/errors.ts">ErrorPage</a></code>

Methods:

- <code title="get /v1/errors">client.errors.<a href="./src/resources/errors.ts">list</a>({ ...params }) -> ErrorGroupsErrorsPage</code>

# Dimensions

Types:

- <code><a href="./src/resources/dimensions.ts">DimensionValues</a></code>

Methods:

- <code title="get /v1/dimensions/{dimension}">client.dimensions.<a href="./src/resources/dimensions.ts">listValues</a>(dimension, { ...params }) -> DimensionValuesValuesDimensionValuesPage</code>

# Exports

Types:

- <code><a href="./src/resources/exports.ts">Export</a></code>
- <code><a href="./src/resources/exports.ts">ExportColumns</a></code>
- <code><a href="./src/resources/exports.ts">ExportQuery</a></code>
- <code><a href="./src/resources/exports.ts">ExportRequest</a></code>
- <code><a href="./src/resources/exports.ts">ExportDownloadResponse</a></code>

Methods:

- <code title="post /v1/exports">client.exports.<a href="./src/resources/exports.ts">create</a>({ ...params }) -> Export</code>
- <code title="get /v1/exports/{token}">client.exports.<a href="./src/resources/exports.ts">download</a>(token) -> string</code>
- <code title="get /v1/exports">client.exports.<a href="./src/resources/exports.ts">listColumns</a>({ ...params }) -> ExportColumns</code>

# Retention

Types:

- <code><a href="./src/resources/retention.ts">RetentionBucket</a></code>
- <code><a href="./src/resources/retention.ts">RetentionReport</a></code>

Methods:

- <code title="get /v1/retention">client.retention.<a href="./src/resources/retention.ts">retrieve</a>({ ...params }) -> RetentionReport</code>

# Renditions

Types:

- <code><a href="./src/resources/renditions.ts">RenditionMetric</a></code>
- <code><a href="./src/resources/renditions.ts">RenditionReport</a></code>

Methods:

- <code title="get /v1/renditions">client.renditions.<a href="./src/resources/renditions.ts">retrieve</a>({ ...params }) -> RenditionReport</code>
