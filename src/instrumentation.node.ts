import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { Resource } from '@opentelemetry/resources'
import { NodeSDK } from '@opentelemetry/sdk-node'
import {
  AlwaysOnSampler,
  SimpleSpanProcessor,
  TraceIdRatioBasedSampler
} from '@opentelemetry/sdk-trace-node'
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'

const exporter = new OTLPTraceExporter()
const customSpanProcessor = new SimpleSpanProcessor(exporter)

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: 'next-app'
  }),
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-fs': {
        enabled: false
      },
      '@opentelemetry/instrumentation-net': {
        enabled: false
      },
      '@opentelemetry/instrumentation-dns': {
        enabled: false
      },
      '@opentelemetry/instrumentation-http': {
        enabled: true
      }
    })
  ],
  sampler:
    process.env.NODE_ENV === 'development'
      ? new AlwaysOnSampler()
      : new TraceIdRatioBasedSampler(0.1),
  spanProcessors: [customSpanProcessor]
})
sdk.start()
