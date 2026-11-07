import { ResponsiveBar } from '@nivo/bar'
import './LanguageBar.css'

const data = [
  {
    singleBar: 1,
    'HTML/CSS': 24.3,
    R: 23.4,
    'JS/TS': 16.2,
    Docker: 13.5,
    Shell: 12.6,
    Others: 5.41,
    Python: 4.5,
  },
] as const

const keys = [
  'HTML/CSS',
  'R',
  'JS/TS',
  'Docker',
  'Shell',
  'Others',
  'Python',
] as const

export default function LanguageBar() {
  return (
    <div className="language-bar-wrapper">
      <h3 className="chart-title">Used Languages</h3>

      <div className="language-bar">
        <ResponsiveBar
          data={data}
          keys={[...keys]}
          indexBy="singleBar"
          layout="horizontal"
          colors={{ scheme: 'nivo' }}
          padding={0.3}
          margin={{
            top: 50,
            right: 20,
            bottom: 40,
            left: 20,
          }}
          axisLeft={null}
          axisBottom={{
            legend: 'Percentage Language Usage',
            legendOffset: 32,
            legendPosition: 'middle',
            tickSize: 0,
          }}
          // @ts-expect-error Nivo types
          label={(datum: { value: string | number }) => `${datum.value}%`}
          labelSkipWidth={12}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.4]],
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateY: -30,
              itemWidth: 80,
              itemHeight: 20,
              itemsSpacing: 8,
              symbolSize: 12,
              symbolShape: 'circle',
            },
          ]}
          tooltip={(props: { id: string | number; value: string | number; color: string }) => (
            <div
              style={{
                padding: '6px 10px',
                color: '#fff',
                background: props.color,
                borderRadius: '4px',
                fontSize: '13px',
              }}
            >
              {props.id}: {props.value} %
            </div>
          )}
          theme={{
            grid: {
              line: {
                stroke: '#e0e0e0',
              },
            },
            labels: {
              text: {
                fontSize: 12,
              },
            },
          }}
        />
      </div>
    </div>
  )
}