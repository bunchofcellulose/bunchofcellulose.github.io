import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    Spotify: {
      render: component('./src/components/Spotify.astro'),
      attributes: {
        url: { type: String, required: true },
      },
    },
    YouTube: {
      render: component('./src/components/YouTube.astro'),
      attributes: {
        id: { type: String },
        url: { type: String },
      },
    },
    Twitter: {
      render: component('./src/components/Twitter.astro'),
      attributes: {
        url: { type: String },
        id: { type: String },
        username: { type: String },
      },
    },
    BarChart: {
      render: component('./src/components/BarChart.astro'),
      attributes: {
        title: { type: String },
        labels: { type: String, required: true },
        datasets: { type: String, required: true },
        height: { type: String },
      },
    },
    Chart: {
      render: component('./src/components/Chart.astro'),
      attributes: {
        type: { type: String, required: true },
        labels: { type: String, required: true },
        datasets: { type: String, required: true },
        title: { type: String },
        height: { type: String },
        legend: { type: String },
      },
    },
  },
});
